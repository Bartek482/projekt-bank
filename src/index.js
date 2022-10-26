import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './scss/reset.scss';
import './scss/main.scss';
import Header from "./js/header";
import Layout from "./js/layout";
import RegisterLayout from "./js/register-layout";
import CreditLayout from "./js/credit-layout";

export default function Bank() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Header />} />
                </Route>

                <Route path="/register" element={<RegisterLayout />}>
                    <Route index element={<Header />} />
                </Route>
                <Route path="/credit" element={<CreditLayout />} >
                    <Route index element={<Header />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Bank />);
