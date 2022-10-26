import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './scss/reset.scss';
import './scss/main.scss';
import Layout from "./js/layout";
import Header from "./js/header";
import RegisterForm from "./js/register";

export default function Bank() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Header />} />
                    <Route path="/register" element={<RegisterForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Bank />);
