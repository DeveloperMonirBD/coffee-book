/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const Card = ({ coffee }) => {
    const { id, name, image, category, origin, type, rating, popularity } = coffee || {};

    return (
        <div className="flex relative">
            <Link to={`/coffee/${id}`} className="transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden">
                <figure className="w-full h-56 overflow-hidden">
                    <img className="min-h-full object-cover" src={image} alt={category} />
                </figure>
                <div className="p-4">
                    <h1 className="text-xl">Name: {name}</h1>
                    <p>Category: {category}</p>
                    <p>Type: {type}</p>
                    <p>Origin: {origin}</p>
                    <p>Rating: {rating}</p>
                    <p>Popular: {popularity}</p>
                </div>
            </Link>
        </div>
    );
};

export default Card;
