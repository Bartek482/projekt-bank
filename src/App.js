import React from "react";
import { useState } from "react";
import CreditForm from "./js/credit";

function App() {
    const [myBool, setMyBool] = useState(true);

    function toggleBool() {
        setMyBool(!myBool)
    }

    return (
        myBool ? <Cta toggleBool={toggleBool} /> : <Credit />
    );
}

function Cta(props){
    return (
        <section>
            <div className="container">
                <div className="cta">
                    <div className="cta-text">
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <ul className="cta-features">
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur.</li>
                        </ul>
                        <button className="button-register" onClick={props.toggleBool}>Weź pożyczkę</button>
                    </div>
                    <div className="cta-logo">
                        <img className="logo2" src={require("./images/Logo2.png")} alt='logo2'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Credit(props){
    return (
        <CreditForm />
    )
}

export default App;