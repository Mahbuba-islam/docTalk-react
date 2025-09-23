
const Doctor = ({doctor}) => {
    const {name,img,qualification,experience,reg_no,status} = doctor
    return (
        <div className="container mx-auto">
        <div class="card bg-base-100 shadow-sm w-sm ">
  <figure className="bg-base-200 shadow">
     <img className="w-full h-[300px] object-contain" src={img} alt="" />
  </figure>
  <div class="card-body">
    <div className="flex gap-4">
        <div class="badge bg-[#E6F4EA] text-[#129d37] border border-[#c8f3d5] px-3 py-2">{status}</div>
    <div class="badge bg-[#E7F0FC] text-[#176AE5] px-4 py-3 font-bold border border-[#c4d6ed]">{experience}+ years experience</div>
      
    </div>
      
    <h2 class="card-title">
    {name}
</h2>
    <p>{qualification}</p>
    <hr className="border border-dashed border-gray-400"/>
     <p className="flex items-center gap-2 font-semibold text-gray-600"> <div className="w-5 h-5 rounded-full border border-gray-400 flex justify-center items-center text-gray-600 text-xs">R</div> Reg-No: {reg_no}</p>
    <button className="btn btn-primary">View Details</button>
  </div>
</div>
         
        </div>
    );
};

export default Doctor;