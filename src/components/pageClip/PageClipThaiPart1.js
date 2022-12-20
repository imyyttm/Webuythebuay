import "./PageClipThaiPart1.css";
import { Link } from "react-router-dom"
import Header from "../Header"

const NextClip = (
    <button>Next</button>
)
const Video = () => {
    return (
      <><>
      <Header/>
        <h1 className="NameClip">TCAS ภาษาไทย PART 1</h1>
        <div className="Clip">
        <iframe  
        width="700" 
        height="500" 
        src="https://www.youtube.com/embed/00ia-7G-7ec" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe></div></>
        <h3 className="CheckStu">ความคืบหน้าทางการเรียน</h3>
        <div class="chart">
            <div class="bar"></div>
            <span id="value1">0%</span>
        </div>
        <h2 className="infoClip">รายละเอียด</h2>
        <div className="detail">
            <h3 className="ExpClip">หมดเขต 23 สิงหา 2565</h3>
            <h3 className="TutorClip">ครูผู้สอน</h3>
        </div>
        <div className="Buttonnext">
            <Link style={{textDecoration: 'none'}} to="/ClipNext">
                <h4>Next</h4>
            </Link>
        </div></>
      );
};

export default Video;
