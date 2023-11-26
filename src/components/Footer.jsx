<<<<<<< HEAD
import logo from '../assets/logo-white.svg'

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
=======
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
>>>>>>> 46b668e417d3992850781c4e928e945dc3a7ab78
