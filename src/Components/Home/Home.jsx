import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Doctors from "../Doctors/Doctors";


const Home = () => {
    return (
        <div>
        <Header></Header>
        <Banner></Banner>
        <Doctors></Doctors>
        <Outlet/>
        <Footer></Footer>
        </div>
    );
};

export default Home;

