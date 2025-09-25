import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div>
            <nav>
                <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink>Home</NavLink></li>
       <li><NavLink>My-Bookings</NavLink></li>
       <li><NavLink>Blogs</NavLink></li>
       <li><NavLink>Contact us</NavLink></li>
      </ul>
    </div>

    <a className="btn btn-ghost md:text-xl text-sm font-bold"> <img className="w-6 md:w-8" src={logo} alt="" />DocBridge</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to='/'>Home</NavLink></li>
       <li><NavLink to='mybookings'>My-Bookings</NavLink></li>
       <li><NavLink to='blogs'>Blogs</NavLink></li>
       <li><NavLink to='contact'>Contact us</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink className='bg-[#176AE5] text-white md:font-bold font-semibold rounded-full md:px-12 px-4 py-2 text-xs md:text-sm'>Emergency</NavLink>
  </div>
</div>
            </nav>
        </div>
    );
};

export default Header;