import React, { useState } from "react";
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";
import Header from "./header";

function RegisterForm() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id, value} = e.target;
        if (id === 'firstName') {
            setFirstName(value);
        }
        if (id === 'lastName') {
            setLastName(value);
        }
        if (id === 'email') {
            setEmail(value);
        }
        if (id === 'password') {
            setPassword(value);
        }
        if (id === 'confirmPassword') {
            setConfirmPassword(value);
        }
    }

    const submitHandler = () => {
        let obj = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }
        if (password === confirmPassword) {
            const newPostKey = push(child(ref(database), 'posts')).key;
            const updates = {};
            updates['/' + newPostKey] = obj
            return update(ref(database), updates)
        } else {
            alert('Hasła się nie zgadzają');
        }

    }

    return (
        <>
            <Header />
            <div className="form">
                <h2 className="register-form__title">Załóż konto</h2>
                <div className="register-form__labels">
                    <p>Imię</p>
                    <p>Nazwisko</p>
                    <p>E-mail</p>
                    <p>Hasło</p>
                    <p>Potwierdź Hasło</p>
                </div>
                <div className="register-form">
                    <form className="register-form_inputs">
                        <input className="inputs" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="Imię" required />
                        <input className="inputs" type="text" value={lastName} onChange = {(e) => handleInputChange(e)} id="lastName" placeholder="Nazwisko" required />
                        <input className="inputs" type="email" value={email} onChange = {(e) => handleInputChange(e)} id="email" placeholder="E-mail" required />
                        <input className="inputs" type="password" value={password} onChange = {(e) => handleInputChange(e)} id="password" placeholder="Hasło" required />
                        <input className="inputs" type="password" value={confirmPassword} onChange = {(e) => handleInputChange(e)} id="confirmPassword" placeholder="Potwierdź Hasło" required />
                        <button onClick={() => submitHandler()} type='submit' className="button-register">Wyślij</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default RegisterForm;