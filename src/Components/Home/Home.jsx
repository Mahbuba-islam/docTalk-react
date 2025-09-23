import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div>
        <Header></Header>
        <Banner></Banner>
        <Outlet/>
        <Footer></Footer>
        </div>
    );
};

export default Home;