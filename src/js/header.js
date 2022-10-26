import { Link } from "react-router-dom";
function Header() {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <Link to="/"><img className="logo" src={require("../images/Logo.png")} alt="logo" /></Link>
                    <div className="client-menu">
                        <Link to="/register"><button className="button-register">Otwórz konto</button></Link>
                        <a className="button-login" href="#">Zaloguj się</a>
                    </div>
                </div>

                <ul className="menu">
                    <li className="button">Klienci indywidualni</li>
                    <li className="button">Bankowość prywatna</li>
                    <li className="button">Małe i średnie firmy</li>
                    <li className="button">Przedsiębiorstwa</li>
                    <Link to="/credit"><li className="button">Weź pożyczkę</li></Link>
                </ul>
            </div>
        </header>
    );
}

export default Header;