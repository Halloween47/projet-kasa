import { Link } from 'react-router-dom'
import logo from "../assets/logo-white.svg";

 
function Footer() {
    return (
        <div className="footer">

            <img src={logo} alt="logo" />
            <div className="copyright">
                <p>© 2020 Kasa. All rights reserved</p>
            </div>

        </div>
    )
}

export default Footer