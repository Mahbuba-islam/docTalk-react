import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook-logo-2019.png'
import youtube from '../../assets/youtube-2-logo-png-transparent.png'
import insta from '../../assets/instagram-icon-white-on-black-circle.png'
import linkdln from '../../assets/linkedin-icon-logo-png-transparent.png'


const Footer = () => {
    return (
        <div className=" space-y-8 bg-white py-12">
            <div className="flex flex-col justify-center items-center">
             <a className="btn btn-ghost md:text-xl text-sm font-bold mx-auto"> <img className="w-6 md:w-8" src={logo} alt="" />DocBridge</a>
               <div className="navbar-center  lg:flex">
    <ul className="menu menu-horizontal text-xs">
      <li><NavLink to='/'>Home</NavLink></li>
       <li><NavLink to='mybookings'>My-Bookings</NavLink></li>
       <li><NavLink to='blogs'>Blogs</NavLink></li>
       <li><NavLink to='contact'>Contact us</NavLink></li>
    </ul>
    
  </div>
  <hr className="w-1/2 mt-4"/>
  {/* contact */}
 
  <div className=" flex items-center gap-4 mt-8">
   <Link to='https://www.facebook.com/mahbuba.islam.167372'><img className="md:w-12 w-8" src={facebook} alt="" /></Link>
   <Link to='https://www.linkedin.com/in/mahbuba-akter-020157211/'><img className="md:w-12 w-8" src={linkdln} alt="" /></Link>
   <Link to='https://www.instagram.com/'><img className="md:w-18 w-12" src={insta} alt="" /></Link>
    <Link to='https://www.youtube.com/@MahbubaIslam-NY'><img className="md:w-12 w-8" src={youtube} alt="" /></Link>
  </div>
            </div>
           
        </div>
    );
};

export default Footer;