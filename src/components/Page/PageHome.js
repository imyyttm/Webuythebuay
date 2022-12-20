import Header from "../Header"
import "./PageHome.css"
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit'
  import { FiCheckCircle } from "react-icons/fi";
  import CourseRecommend from "../CourseRecommend";
  import Link from '@mui/material/Link';
  function Home(){ 
    const cr = CourseRecommend();
    
  return(
      <div>
          <Header/>
          <MDBCarousel showIndicators showControls fade className="picpagehome">
              <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src="https://i.ibb.co/RgjjWB5/Home1.png" alt="Home1">
              </MDBCarouselItem>
              <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src="https://i.ibb.co/VHvptsr/Home2.png" alt="Home2">
              </MDBCarouselItem>
              <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
                src="https://i.ibb.co/mzjJwDp/Home3.png" alt="Home3">
              </MDBCarouselItem>
          </MDBCarousel>
          <h1 className="underpichomepage">ทำไมต้อง WE buy THE BUAY</h1>
          <div className="reason-grid">
            <div className="reasonTitle">
              <FiCheckCircle color="#800608"/>
              <h4>สะดวกสบาย</h4>
              <h6>น้องๆสามารถเลือกเรียนได้ทุกที่ ทุกเวลา โดยไม่มีข้อจำกัด</h6>
            </div>
            <div className="reasonTitle">
              <FiCheckCircle color="#800608"/>
              <h4>คุ้มค่า</h4>
              <h6>คอร์สที่คู่ควรในราคาเบาๆที่สามารถเรียนนอกห้องเรียนได้ง่ายๆ</h6>
            </div>
            <div className="reasonTitle">
              <FiCheckCircle color="#800608"/>
              <h4>เนื้อหาคุณภาพสูง</h4>
              <h6>เจาะลึก เข้าใจง่าย สอนโดยผู้สอนมากความสามารถที่คัดสรรค์มาเพื่อน้องๆคนสำคัญ</h6>
            </div>
            <div className="reasonTitle">
              <FiCheckCircle color="#800608"/>
              <h4>เริ่มเรียนได้ทันที!</h4>
              <h6>เมื่อกระบวนการชำระเงินเสร็จสิ้นก็สามารถเริ่มเรียนได้ทันที</h6>
            </div>
          </div>
          <h1 className="RecommendCourse">คอร์สเรียนแนะนำ #TCAS66</h1>
          <CourseRecommend/>
          <Link style={{textDecoration: 'none'}} href="/course">
            <div className="homepagecoursebttm" >
              <h4 >ดูรายละเอียดคอร์สทั้งหมด</h4>
            </div>
          </Link>
      </div>
  );          

}
export default Home;