import "./PageContact.css";
import { FacebookShareButton} from "react-share";
import { FacebookIcon  } from "react-share";
import Header from "../Header"
import React from "react";


function PageContact(){
    return(
      <>
      <Header/>
        <div className="Con">
          <img src="https://i.ibb.co/M9pGDPx/IMG-0203.jpg" alt="IMG-0203"  height="200" width="500" />
          <h1>ติดต่อเรา</h1>
        </div>
        <div className="ContactBox-grid">
          <div className="Location">
            <h1 className="mother">Cell center</h1>
            <h3>08:00-20:00</h3>
            <h3>02x-xxx-xxx-x</h3>
            <h1 className="mother">ที่อยู่</h1>
            <h3>บริษัทเรารักบ๊วย ที่อยู่ xx ถนน xx</h3>
            <h3>ตำบล xx อำเภอ xx จังหวัดเชียงใหม่ 57000</h3>
            <h1 className="mother">ติดตามเราได้ที่</h1>
            <h3>Facebook</h3>
            <div className="App">
              <FacebookShareButton >
                  <FacebookIcon  size={30} round /> <a href="https://www.facebook.com/profile.php?id=100086645810002"> WeBuyTheBuay </a>
                </FacebookShareButton>
            </div>
          </div>
          <div className="ContactWe">
            <img src="https://i.ibb.co/18N8W7m/image.png" alt="image" height="500" width="500"/>
          </div>
        </div>
      </> 
    );
}
export default PageContact;