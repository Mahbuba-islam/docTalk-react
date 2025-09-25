import { useLoaderData} from "react-router-dom";
import MyAppointment from "../MyAppointment/MyAppointment";
import { getAppointment } from "../utility/utility";
import { useEffect, useState } from "react";

const MyBookings = () => {

const [appoinments,setAppointments] = useState([])

const data = useLoaderData()

useEffect(()=> {
  const appointmentId = getAppointment()
  const appointmentIdNumber = appointmentId.map(id => parseInt(id))
  const appointmentDetails = data.filter(doctor => appointmentIdNumber.includes(doctor.id))
  setAppointments(appointmentDetails)
},[])

    return (
        <div>
             <h2 className="font-bold text-4xl text-center my-12">My Appointments</h2>
            <div  className="container mx-auto max-w-5xl space-y-4 mb-20">
                {
                    appoinments.map(appointment => <MyAppointment key={appointment.id} appointment={appointment}></MyAppointment> )
                }
            </div>
       </div>
    );
};

export default MyBookings;