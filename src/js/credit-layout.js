import { Outlet } from "react-router-dom";
import CreditForm from "./credit";
import Footer from "./footer";

const CreditLayout = () => {
    return (
        <>
            <Outlet />
            <CreditForm />
            <Footer />
        </>
    );
}

export default CreditLayout;