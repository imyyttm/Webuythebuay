import './Tutor_pagehome.css'
import { Link } from "react-router-dom"
import TutorHeader from './Tutor_header';
function TutorPagehome() {
    return(
        <>
        <TutorHeader/>
            <div className='pagehome'>
                <h4>My Course</h4>
            </div>
            <div className='course-grid'>
                <div className='coursebox'>
                    <Link to="/CourseDetail">
                        <img src="https://i.ibb.co/4V9V0K4/301550473-474737644612170-4174948739386318329-n.jpg" alt="bio"/>
                        <h4>ชีววิทยา ม.4-6</h4>
                    </Link>
                </div>
                <div className='coursebox'>
                    <Link to="/CourseDetail">
                        <img src="https://i.ibb.co/48XCM76/307388911-607320857853129-4361005744807808908-n.jpg" alt="math"/>                        
                        <h4>คณิตศาสตร์ ม.4-6</h4>
                    </Link>
                </div>
                <div className='coursebox'>
                    <Link to="/CourseDetail">
                        <img src="https://i.ibb.co/vkh4P9M/305803820-819692422554947-2443687835921466120-n.jpg" alt="Eng"/>
                        <h4>ภาษาอังกฤษ ม.4-6</h4>
                    </Link> 
                </div>
            </div>
        </>
    )
}

export default TutorPagehome;