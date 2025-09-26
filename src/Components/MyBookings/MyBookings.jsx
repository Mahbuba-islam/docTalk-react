import { useLoaderData, useNavigate} from "react-router-dom";
import MyAppointment from "../MyAppointment/MyAppointment";
import { deleteAppointmentFromLS, getAppointment } from "../utility/utility";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const MyBookings = () => {

const [appoinments,setAppointments] = useState([])
const data = useLoaderData()
const navigate = useNavigate()

useEffect(()=> {
  const appointmentId = getAppointment()
  const appointmentIdNumber = appointmentId.map(id => parseInt(id))
  const appointmentDetails = data.filter(doctor => appointmentIdNumber.includes(doctor.id))
  setAppointments(appointmentDetails)
},[])
 

// cancel appointment
     const handleCancelAppointment = (id) => {
        console.log(id)
   const left = appoinments.filter(appointment => appointment.id!== id)
    setAppointments(left)
     toast.error('Appointment canceled successfully!')
     deleteAppointmentFromLS(id)
    }

    //  navigate appointment page
    const handleNavigateAppointment = () => {
     navigate('/')
    }


    const getPath = (x, y, width, height) => (
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
);

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const renderCustomAxisTick = ({ x, y, payload }) => {
  return (
    <text x={x} y={y + 10} textAnchor="middle" fill="#666" fontSize={12}>
      {payload.value}
    </text>
  );
};




    return (
        <div className="flex flex-col justify-center items-center">
            <BarChart width={600} height={300} data={appoinments}>
  <XAxis dataKey="name" tick={renderCustomAxisTick} />
  <YAxis />
  <Bar dataKey="consultation_fee" fill="#3366d8" shape={<TriangleBar />} />
</BarChart>

             <h2 className="font-bold text-5xl text-center my-12">
                {
                    appoinments.length? 'My Appointments' : 'You have not booked any appointment yet'
                }
                </h2>
                <div className="flex justify-center">
                      {
                    !appoinments.length && <button onClick={handleNavigateAppointment} className="btn btn-primary flex">Book An Appointment </button>
                }
                </div>
              
            <div  className="container mx-auto max-w-5xl space-y-4 mb-20">
                {
                    appoinments.map(appointment => <MyAppointment key={appointment.id} appointment={appointment} handleCancelAppointment={handleCancelAppointment}></MyAppointment>
                         
            )
                }
            </div>
       </div>
    );
};

export default MyBookings;