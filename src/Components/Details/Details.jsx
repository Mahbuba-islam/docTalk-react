import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const data = useLoaderData()
    console.log(data)
    const {id} = useParams()

    console.log(id)
    const idNumber = parseInt(id)
   
    const doctorDetails = data.find(doctor => doctor.id === idNumber)
    console.log(doctorDetails)
    const {name,img,qualification,reg_no,availability,consultation_fee,working_at} = doctorDetails
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={img}
      alt="Album" />
  </figure>
  <div class="card-body">
   
      
    <h2 class="card-title">
    {name}
</h2>
    <p className="text-left">{qualification}</p>
    <div>
     <p>Working at</p>
     <p>{working_at}</p>
    </div>
   
    <hr className="border border-dashed border-gray-400"/>
     <p className="flex items-center gap-2 font-semibold text-gray-600"> <div className="w-5 h-5 rounded-full border border-gray-400 flex justify-center items-center text-gray-600 text-xs">R</div> Reg-No: {reg_no}</p>
    <hr className="border border-dashed border-gray-400"/>

   <div className="flex gap-4">
        <div class="badge bg-[#E6F4EA] text-[#129d37] border border-[#c8f3d5] px-3 md:py-4 py-6 text-xs">Availability {availability}</div>
   </div>
   <div>
    <p>Consultation Fee: <span>$ {consultation_fee}</span>per consultation</p>
   </div>
  </div>
</div>
        </div>
    );
};

export default Details;