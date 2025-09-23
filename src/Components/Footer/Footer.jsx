import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'


const Footer = () => {
    return (
        <div>
            <a className="btn btn-ghost md:text-xl text-sm font-bold"> <img className="w-6 md:w-8" src={logo} alt="" />DocBridge</a>
               <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to='/'>Home</NavLink></li>
       <li><NavLink to='mybookings'>My-Bookings</NavLink></li>
       <li><NavLink to='blogs'>Blogs</NavLink></li>
       <li><NavLink to='contact'>Contact us</NavLink></li>
    </ul>
  </div>
  <hr />
  {/* contact */}
  <div>
   <Link to='https://www.facebook.com/mahbuba.islam.167372'>facebook</Link>
   <Link to='https://www.linkedin.com/in/mahbuba-akter-020157211/'>linkdln</Link>
  </div>
        </div>
    );
};

export default Footer;