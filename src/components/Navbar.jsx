import { Link } from "react-router-dom";
import { MdToys } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a><Link to="/">Home</Link></a></li>
                        {
                            user ? <li><a><Link to="/addToys">Add a toy</Link></a></li>:''
                        }
                        {
                            user ? <li><a><Link to="/myToys">My Toys</Link></a></li> :''
                       }
                        <li><a><Link to="/allToys">All Toys</Link></a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                    
                                <Link to="/blog">Blog</Link>
                            </a>
                        </li>
                        {
                            user && <img className='w-10 rounded-full' title={user.displayName} src={user.photoURL} alt="" />
                        }
                        {
                            user ?
                                <li><a><Link onClick={handleLogOut}>Logout</Link></a></li> : <li><a><Link to="/login">Login</Link></a></li>
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><MdToys className="text-4xl text-red-600"></MdToys> The Children Toys</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a><Link to="/">Home</Link></a></li>
                    {
                        user ? <li><a><Link to="/addToys">Add a toy</Link></a></li> : ''
                    }
                    {
                        user ? <li><a><Link to="/myToys">My Toys</Link></a></li> : ''
                    }
                    <li><a><Link to="/allToys">All Toys</Link></a></li>
                    <li tabIndex={0}>
                        <a>
                            <Link to="/blog">Blog</Link>
                        </a>
                    </li>
                    {
                        user && <img className='w-10 rounded-full' title={user.displayName} src={user.photoURL} alt="" />
                    }
                    {
                        user ?
                            <li><a><Link onClick={handleLogOut} >Logout</Link></a></li> : <li><a><Link to="/login">Login</Link></a></li>
                   }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;