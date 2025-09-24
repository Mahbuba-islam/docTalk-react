import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const data = useLoaderData()
    const [isAvailable, setIsAvailable] = useState('')
    console.log(data)
    const {id} = useParams()
    console.log(id)
    const idNumber = parseInt(id)
   const doctorDetails = data.find(doctor => doctor.id === idNumber)
    // console.log(doctorDetails)
    const {name,img,qualification,reg_no,availability,consultation_fee,working_at} = doctorDetails


    // availablibity
    useEffect(()=> {
     const today = new Date()
     const dayNumber = today.getDay()
     console.log(dayNumber)
    const weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    const todayName = weekDays[dayNumber]
    console.log(availability.map(a => a.day))
    const av = availability.map(a => a.day)
    console.log(todayName)
    console.log(av.includes(todayName))
    if(av.includes(todayName)){
      setIsAvailable('Doctor is Available Today')
    }
    else{
      setIsAvailable('Doctor is not available Today')
    }
    },[])
     
    
    return (
        <div className="container mx-auto max-w-5xl">
            <div className="card md:card-side bg-base-100 shadow-sm rounded-2xl">
  <figure className="w-[335px] p-4">
    <img className="w-full rounded-4xl p-2 "
      src={img}
      alt="Album" />
  </figure>
  <div class="card-body space-y-2">
   <h2 className="card-title">
    {name}
</h2>
    <h6 className="text-left">{qualification}</h6>
     <h1 className="">Working at</h1>
     <h4 className="font-bold text-lg">{working_at}</h4>
    <hr className="border border-dashed border-gray-400"/>
     <h2 className="flex items-center gap-2 font-semibold text-gray-600"> <div className="w-5 h-5 rounded-full border border-gray-400 flex justify-center items-center text-gray-600 text-xs">R</div> Reg-No: {reg_no}</h2>
    <hr className="border border-dashed border-gray-400"/>

   <div className="flex gap-4">
        {/* <div class="badge bg-[#fffdc6] text-[#FFA000] font-bold border border-[#eaea1b] px-3 md:py-4 py-6 text-xs">Availability {availability}</div> */}
   </div>
   <div>
    <p className="font-semibold text-gray-600">Consultation Fee: <span className="text-blue-600 font-semibold">${consultation_fee}</span> per consultation</p>
   </div>
  </div>
</div>

  {/* book appointment */}
  <div className="card max-w-5xl bg-base-100 card-sm shadow-sm my-12 rounded-2xl space-y-4">
  <div className="card-body text-center">
    <h2 className="font-bold text-lg">Book An Appointment</h2>
    <hr className="border border-dashed border-gray-400"/>
    <div className="flex justify-between items-center my-2">
    <p className="text-left font-bold text-lg">Availability</p>
    <button className="bg-[#cfefda] text-[#09982F] font-semibold rounded-full py-2 px-4">{isAvailable}</button>
    </div>
    
     <hr className="border border-dashed border-gray-400"/>
    <div className="justify-end card-actions mx-auto mt-2">
      <button className="btn btn-primary">Book Appointment Now</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Details;