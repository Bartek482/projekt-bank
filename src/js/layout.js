import { Outlet } from "react-router-dom";
import App from "../App";
import Footer from "./footer";

const Layout = () => {
    return (
        <>
            <Outlet />
            <App />
            <Footer/>
        </>
    );
}

export default Layout;