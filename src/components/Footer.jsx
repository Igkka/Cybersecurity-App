function Footer() {
    return (
        <footer>

            <div className="footer-content">

                <h3>
                    PulseGuard
                </h3>

                <p>
                    Modern cybersecurity platform designed to keep your
                    digital life protected.
                </p>

                <small>
                    © {new Date().getFullYear()} PulseGuard.
                    All Rights Reserved.
                </small>

            </div>

        </footer>
    );
}

export default Footer;