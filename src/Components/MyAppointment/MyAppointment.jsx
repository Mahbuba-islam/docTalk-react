
const MyAppointment = ({appointment}) => {
    const {name,qualification,consultation_fee} = appointment
    return (
        <div>
              <div className="card bg-base-100 card-xs shadow-sm rounded-2xl p-2 mx-2">
  <div className="card-body text-left">
   <h1 className="text-lg font-bold">{name}</h1>
    <div className="flex justify-between items-center">
    <p className="text-left text-gray-500">{qualification}</p>
    <button className="bg-[#cfefda] text-[#09982F] font-semibold rounded-full py-1 px-4">Appointment fee ${consultation_fee}</button>
    </div>
    
     <hr className="border border-dashed border-gray-400 mt-2"/>
    <div className="justify-end card-actions mx-auto mt-2">
      <button className="btn border-2 border-red-700 rounded-full lg:px-30 my-2 md:px-20 px-10">cancel Appointment </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyAppointment;