import { Link } from "react-router-dom"
import "./ClipNext.css";
import Header from "../Header"

const BackClip = (
    <button>Back</button>
)
const Clip = () => {
    return (
      <><>
      <Header/>
        <h1 className="NameClip">TCAS ภาษาไทย PART 2</h1>
        <iframe className="Clip" 
        width="700" 
        height="500" 
        src="https://www.youtube.com/embed/SQoH0y-y8FY" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe></>
        <h5 className="CheckStu">ความคืบหน้าทางการเรียน</h5>
        <div class="chart">
            <div class="bar01"></div>
            <span id="value1">10%</span>
        </div>
        <h2 className="infoClip">รายละเอียด</h2>
        <div className="detail">
        <h3 className="ExpClip">หมดเขต 23 สิงหา 2565</h3>
        <h3 className="TutorClip">ครูผู้สอน</h3></div>
        <div className="Buttonnext">
            <Link style={{textDecoration: 'none'}} to="/Clipback">
                <h4>Back</h4>
            </Link>
        </div></>
      );
};

export default Clip;