import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Coffees = () => {
    const data = useLoaderData()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 shadow-md mb-10 rounded-xl">
            {data.map(coffee => (
                <Card key={coffee.id} coffee={coffee} />
            ))}
        </div>
    );
};

export default Coffees;
