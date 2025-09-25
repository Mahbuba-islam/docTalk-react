import { Link } from "react-router-dom";
import facebook from '../../assets/facebook-logo-2019.png'
import youtube from '../../assets/youtube-2-logo-png-transparent.png'
import insta from '../../assets/instagram-icon-white-on-black-circle.png'
import linkdln from '../../assets/linkedin-icon-logo-png-transparent.png'


const Contact = () => {
    return (
        <div className="max-w-xl mx-auto my-20 ">
    <div className="card bg-base-100 shadow-md border border-base-300">
      <div className="card-body">
        <h2 className="card-title text-indigo-600 text-xl">
          📞 Contact Doctalk Support
        </h2>
        <p><strong>Email:</strong> support@doctalk.com</p>
        <p><strong>Phone:</strong> +1 (800) 555-DOCT</p>
        <p><strong>Hours:</strong> Mon–Fri, 9 AM to 6 PM</p>
           <div className=" flex items-center gap-4 mt-2">
   <Link to='https://www.facebook.com/mahbuba.islam.167372'><img className="w-8" src={facebook} alt="" /></Link>
   <Link to='https://www.linkedin.com/in/mahbuba-akter-020157211/'><img className=" w-8" src={linkdln} alt="" /></Link>
   <Link to='https://www.instagram.com/'><img className="w-12" src={insta} alt="" /></Link>
    <Link to='https://www.youtube.com/@MahbubaIslam-NY'><img className=" w-8" src={youtube} alt="" /></Link>
  </div>
      </div>
    
    </div>
   
  </div>

    );
};

export default Contact;