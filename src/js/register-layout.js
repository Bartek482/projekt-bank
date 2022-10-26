import { Outlet } from "react-router-dom";
import RegisterForm from "./register";
import Footer from "./footer";

const RegisterLayout = () => {
    return (
        <>
            <Outlet />
            <RegisterForm />
            <Footer />
        </>
    );
}

export default RegisterLayout;