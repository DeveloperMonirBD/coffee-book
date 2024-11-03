/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
    return (
        <div role="tablist" className="tabs tabs-lifted">
            {categories.map(category => (
                <NavLink key={category.category} to={`/category/${category.category}`} role="tab" className={({ isActive }) => `tab text-base pb-6 md:pb-10 md:text-2xl font-thin ${isActive ? 'tab-active' : ''}`}>
                    {category.category}
                </NavLink>
            ))}
        </div>
    );
};

export default Categories;