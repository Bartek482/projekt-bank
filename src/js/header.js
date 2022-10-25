export function Header() {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <img className="logo" src={require("../images/Logo.png")} alt="" />
                    <div className="client-menu">
                        <a className="button-register" href="#">Otwórz konto</a>
                        <a className="button-login" href="#">Zaloguj się</a>
                    </div>
                </div>

                <ul className="menu">
                    <li className="button">Klienci indywidualni</li>
                    <li className="button">Bankowość prywatna</li>
                    <li className="button">Małe i średnie firmy</li>
                    <li className="button">Przedsiębiorstwa</li>
                    <li className="button">Weź pożyczkę</li>
                </ul>
            </div>
        </header>
    );
}