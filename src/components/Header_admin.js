import { Link } from "react-router-dom"
import "./Header_admin.css";
import { FiLogOut } from "react-icons/fi";
function Header_admin() {
    return(
        <div className="header">
            <div className='container'>
                <div className="header-buay">
                    <div className='logobuay'>
                        <Link to="/PageHome"><img src="/images/Logobuay.jpg" height="80" alt="not found"/></Link>
                    </div>
                    <ul className="menu">
                        <li className="menu-link">
                            <Link to="/Checkslip"><span>ตรวจสอบสลิป</span></Link>                    
                        </li>
                        <li className="menu-link">
                            <Link to="/"><FiLogOut/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Header_admin;