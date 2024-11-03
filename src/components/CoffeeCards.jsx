import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';
import { useEffect, useState } from 'react';

const CoffeeCards = () => {
    const navigate = useNavigate()

    const [coffees, setCoffees] = useState([])
    const data = useLoaderData();
    const { category } = useParams();
    
    useEffect(() => {
        if (category) {
            const filteredByCategory = [...data].filter(coffee => coffee.category === category);

            setCoffees(filteredByCategory);
        } else {
            setCoffees(data.slice(0, 6))
        }
    }, [category, data])


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 shadow-md mb-10 rounded-xl">
                {coffees.map(coffee => (
                    <Card key={coffee.id} coffee={coffee} />
                ))}
            </div>

            <div className="flex gap-6">
                {/* <button className="btn btn-warning" onClick={() => setCoffees(data)}>
                    See More...
                </button> */}

                <button className="btn btn-warning" onClick={() => navigate('/coffees')}>
                    View All
                </button>
            </div>
        </>
    );
};

export default CoffeeCards;


