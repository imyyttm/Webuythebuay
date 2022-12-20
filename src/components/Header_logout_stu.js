import { Link } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi";
import "./Header_logout_stu.css";
function Header_logout_stu() {
    return(
        <div className="header">
            <div className='container'>
                <div className="header-buay">
                    <div className='logobuay'>
                        <Link to="/PageHomeout"><img src="/images/Logobuay.jpg" height="80" alt="not found"/></Link>
                    </div>
                    <ul className="menu">
                        <li className="menu-link">
                            <Link to="/Courseout"><span>คอร์สเรียน</span></Link>                    
                        </li>
                        <li className="menu-link">
                            <Link to="/FAQout"><span>คำถามที่พบบ่อย</span></Link>
                        </li>
                        <li className="menu-link">
                            <Link to="/PageContactout"><span>ติดต่อเรา</span></Link>                        
                        </li>
                        <li className="menu-link">
                            <Link to="/Login"><span>เข้าสู่ระบบ</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Header_logout_stu;