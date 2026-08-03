function Navbar() {
    return (
        <header>
            <nav className="navbar">

                <div className="logo">
                    PulseGuard
                </div>

                <ul className="nav-links">
                    <li>
                        <a href="#home">Home</a>
                    </li>

                    <li>
                        <a href="#pricing">Pricing</a>
                    </li>

                    <li>
                        <a href="#documents">Documents</a>
                    </li>
                </ul>

                <div className="buttons">

                    <button className="login">
                        Login
                    </button>

                    <button className="register">
                        Register
                    </button>

                </div>

            </nav>
        </header>
    );
}

export default Navbar;