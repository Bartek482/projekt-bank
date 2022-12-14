import { Outlet } from "react-router-dom";
import Cta from "./cta";
import Footer from "./footer";

const Layout = () => {
    return (
        <>
            <Outlet />
            <Cta />
            <Footer/>
        </>
    );
}

export default Layout;