import { Link } from "react-router-dom";

const Doctor = ({doctor}) => {
    const {name,img,qualification,experience,reg_no,status,id} = doctor
    return (
        <div>
           
        <div class="card bg-base-100 shadow-sm flex rounded-4xl py-6 items-center mx-4">
  <figure className="shadow rounded-4xl">
     <img className=" object-contain rounded-2xl w-[270px] h-[180px]" src={img} alt="" />
  </figure>
  <div class="card-body">
    <div className="flex gap-4">
        <div class="badge bg-[#E6F4EA] text-[#129d37] border border-[#c8f3d5] px-3 md:py-4 py-6 text-xs">{status}</div>
    <div class="badge bg-[#E7F0FC] text-[#1563d7] px-4 font-bold border border-[#c4d6ed]  md:py-4 py-6 text-xs">{experience}+ years experience</div>
      
    </div>
      
    <h2 class="card-title">
    {name}
</h2>
    <p className="text-left">{qualification}</p>
    <hr className="border border-dashed border-gray-400"/>
     <p className="flex items-center gap-2 font-semibold text-gray-600"> <div className="w-5 h-5 rounded-full border border-gray-400 flex justify-center items-center text-gray-600 text-xs">R</div> Reg-No: {reg_no}</p>
    <Link to={`/details/${id}`}><button className="btn border-2 border-blue-500 px-20 rounded-full mt-3">View Details</button></Link>
  </div>
</div>
         
        </div>
    );
};

export default Doctor;