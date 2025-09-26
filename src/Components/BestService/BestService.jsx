
import { BsStars } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { FaPeopleGroup, FaPeopleRoof } from "react-icons/fa6";
import CountUp from 'react-countup';
const BestService = () => {

    return (
        <div className="my-12 space-x-8">
            <div className="stats shadow ">
  <div className="stat">
    <div><CgNotes className="w-8 h-8 text-blue-600" /></div>
    
    <div className="stat-value text-black"><CountUp end={199} />+</div>
    <div className="stat-desc">Total Doctors</div>
  </div>
 
  <div className="stat">
    <div><BsStars className="w-8 h-8 text-yellow-600" /></div>
    <div className="stat-value text-black"><CountUp end={367} />+</div>
    <div className="stat-desc">Total Reviews</div>
  </div>
  <div className="stat">
    <div><FaPeopleGroup className="w-8 h-8 text-green-600" /></div>
    <div className="stat-value text-black"><CountUp end={2000} />+</div>
    <div className="stat-desc">Patients</div>
  </div>
  <div className="stat">
    <div><FaPeopleRoof className="w-8 h-8 text-amber-600" /></div>
    <div className="stat-value text-black"><CountUp end={300} />+</div>
    <div className="stat-desc">Total Stuffs</div>
  </div>


</div>
        </div>
    );
};

export default BestService;