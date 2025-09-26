import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
    const handleRedirectHome = () => {
     navigate('/')
    }
    return (
       <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4 space-y-2">
  <img
    src="https://cdn-icons-png.flaticon.com/512/3875/3875142.png"
    alt="No doctor found"
    className="w-24 h-24 mb-4 opacity-70"
  />
  <h2 className="text-4xl font-bold text-gray-700">No doctor found</h2>
  <p className="text-sm text-gray-500 mb-6">
    We couldn’t find any matching doctors. Try adjusting your filters or view all available doctors.
  </p>
  <button onClick={handleRedirectHome} className="btn btn-primary btn-sm">
    View all doctors
  </button>
</div>
    );
};

export default NotFound;