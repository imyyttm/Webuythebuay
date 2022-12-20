import { Link } from "react-router-dom"
import { FiUser,FiFolderPlus,FiMessageCircle,FiLogOut} from "react-icons/fi";
import "./Tutor_header.css";
function TutorHeader() {
    return(
        <div className="headertutor">
            <div className='containertutor'>
                <div className="header-buay">
                    <div className='logobuay'>
                        <Link to="/Tutorhome"><img src="/images/Logobuay.jpg" height="80" alt="not found"/></Link>
                    </div>
                    <ul className="menu">
                        <li className="menu-link">
                            <Link to="/Insertcourse"><FiFolderPlus/></Link>                
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
export default TutorHeader;