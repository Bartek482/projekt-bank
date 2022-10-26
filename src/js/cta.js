import React from "react";
import { Link } from "react-router-dom";


function Cta() {
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
                        <Link to="/credit"><button className="button-register">Weź pożyczkę</button></Link>
                    </div>
                    <div className="cta-logo">
                        <img className="logo2" src={require("../images/Logo2.png")} alt='logo2'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta;