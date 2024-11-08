import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getAllFavorites } from "../utils";
import Card from "../components/Card";

const Dashboard = () => {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        const favorites = getAllFavorites()
        setCoffees(favorites)
    }, [])

    return (
        <>
            <Heading title="Welcome to DashBoard" subtitle="Manage coffees that you have previously added as favourite. You can view or remove them from here." />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 shadow-md mb-10 rounded-xl">
                {coffees.map(coffee => (
                    <Card key={coffee.id} coffee={coffee} />
                ))}
            </div>
        </>
    );
};

export default Dashboard;
