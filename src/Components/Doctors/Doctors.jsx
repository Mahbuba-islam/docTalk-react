import { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";
import { Link } from "react-router-dom";
import BestService from "../BestService/BestService";
import { ClipLoader } from "react-spinners";

const Doctors = () => {
  
    const [doctors, setDoctors] = useState([])
   const [loading,setLoading] = useState(true)
    useEffect(()=> {
    fetch('data.json')
    .then(res => res.json())
    .then(data => {
        setTimeout(()=> {
        setDoctors(data)
        },2000)
     setLoading(false)
    })
    },[])
  
    const slicedDoctors = doctors.slice(0,6)
    console.log(slicedDoctors)
    
  return (
        <div className="container mx-auto text-center">
             <div className="text-center my-6">
      {loading && 
        <ClipLoader color="#36d7b7" size={50} />
    }
        </div> 
       <div className="md:max-w-6xl max-w-4xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto gap-8">
                {
                    slicedDoctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>
      <Link to='/allDoctors'><button className="btn btn-primary my-12 px-12 rounded-full">See More</button> </Link> 
          <BestService></BestService>
      
   
        
        
        </div>
    );
};

export default Doctors;