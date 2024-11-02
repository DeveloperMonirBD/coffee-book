import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = (
        <>
            <li className="hover:text-orange-400">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-orange-400">
                <NavLink to="/coffees">Coffees</NavLink>
            </li>
            <li className="hover:text-orange-400">
                <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
        </>
    );

    return (
        <div className="sticky top-0 bg-white bg-opacity-50 backdrop-blur-md shadow-sm">
            <div className="navbar max-w-7xl mx-auto px-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-md dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow text-gray-600 text-base font-semibold gap-2">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="text-xl font-semibold">
                        Coffee_Book
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-gray-600 gap-8 text-base font-semibold">{links}</ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
