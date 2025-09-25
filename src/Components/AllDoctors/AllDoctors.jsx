import { Link, useLoaderData } from "react-router-dom";
import Doctor from "../Doctor/Doctor";


const AllDoctors = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="container mx-auto text-center" >
             <div className="max-w-6xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto gap-8">
                {
                    data.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>
             <Link to='/'><button className="btn btn-primary my-12 rounded-full px-12">See Less</button> </Link> 
        </div>
    );
};

export default AllDoctors;