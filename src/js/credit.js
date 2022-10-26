import React, { useState } from "react";
import jsPDF from "jspdf";

function CreditForm() {
    const [credit, setCredit] = useState(null);
    const [installment, setInstallment] = useState(null);
    const [client, setClient] = useState(null);
    const [email, setEmail] = useState(null);
    const [street, setStreet] = useState(null);
    const [postal, setPostal] = useState(null);
    const [city, setCity] = useState(null);

    const handleInputChange = (e) => {
        const {id, value} = e.target;
        if (id === 'credit') {
            setCredit(value);
        }
        if (id === 'installment') {
            setInstallment(value);
        }
        if (id === 'client') {
            setClient(value);
        }
        if (id === 'email') {
            setEmail(value);
        }
        if (id === 'street') {
            setStreet(value);
        }
        if (id === 'postal') {
            setPostal(value);
        }
        if (id === 'city') {
            setCity(value);
        }
    }


    const submit = () => {
        let doc = new jsPDF('p', 'pt');

        doc.text(20, 20, 'Kwota pozyczki:')
        doc.text(140, 20, credit)
        doc.text(20, 40, 'Liczba rat:')
        doc.text(140, 40, installment)
        doc.text(20, 60, 'Imie i nazwisko:')
        doc.text(140, 60, client)
        doc.text(20, 80, 'Adres e-mail:')
        doc.text(140, 80, email)
        doc.text(20, 100, 'Adres:')
        doc.text(140, 100, street)
        doc.text(140, 120, postal)
        doc.text(140, 140, city)

        doc.save('umowa.pdf')

    }

    return (
            <div className="form">
                <h2 className="register-form__title">Weź pożyczkę</h2>
                <div className="register-form__labels">
                    <p>Kwota pożyczki</p>
                    <p>Liczba rat</p>
                    <p>Imię i nazwisko</p>
                    <p>E-mail</p>
                    <p>Adres</p>
                    <p>Kod pocztowy</p>
                    <p>Miejscowosć</p>
                </div>
                <div className="register-form">
                    <form className="register-form_inputs">
                        <input className="inputs" type="number"  value={credit} onChange = {(e) => handleInputChange(e)} id="credit" min="1000" max="20000" step='100' placeholder="1 - 20 tys." required />
                        <input className="inputs" type="number"  value={installment} onChange = {(e) => handleInputChange(e)} id="installment" min="6" max="48" step='6' placeholder="6 - 48 rat" required />
                        <input className="inputs" type="text" value={client} onChange = {(e) => handleInputChange(e)} id="client" placeholder="Imię i nazwisko" required />
                        <input className="inputs" type="email" value={email} onChange = {(e) => handleInputChange(e)} id="email" placeholder="E-mail" required />
                        <input className="inputs" type="text" value={street} onChange = {(e) => handleInputChange(e)} id="street" placeholder="Ulica i nr mieszkania" required />
                        <input className="inputs" type="text" value={postal} onChange = {(e) => handleInputChange(e)} id="postal" placeholder="Kod pocztowy" required />
                        <input className="inputs" type="text" value={city} onChange = {(e) => handleInputChange(e)} id="city" placeholder="Miejscowość" required />
                        <button onClick={() => submit()} type='submit' className="button-register">Wyślij wniosek</button>
                    </form>
                </div>
            </div>
    );
}

export default CreditForm;