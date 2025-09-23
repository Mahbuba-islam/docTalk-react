import { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";


const Doctors = () => {

    const [doctors, setDoctors] = useState([])

    useEffect(()=> {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setDoctors(data))
    },[])

    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
                {
                    doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;