import React from "react";
import "./FAQ.css";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import Header_logout_stu from "../Header_logout_stu";

export default function App() {
  return (
    <div>
    <Header_logout_stu/>
    <MDBContainer className="mt-5" style={{maxWidth: '1250px', fontWeight: 20}}>
      <MDBAccordion alwaysOpen initialActive={1}>
        <div className="hheader">
            <h1>คำถามที่พบบ่อย</h1>
        </div>
        <MDBAccordionItem collapseId={1} headerTitle="สนใจสมัครเรียน ต้องทำอย่างไร">
          กด"เข้าสู่ระบบ" เพื่อสมัครสมาชิกได้เลยค่ะ/ครับ
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="ซื้อคอร์สอย่างไร">
           1. กด"เข้าสู่ระบบ" 2. กดเลือกคอร์สที่ต้องการใน "คอร์สเรียน" 3. จากนั้นกดเพิ่มลงในตะกร้า 4. กดที่รูปตะกร้าขวาบนเพื่อตรวจสอบ 5. ทำการชำระเงิน
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="วิธีเช็กวันหมดอายุคอร์สเรียน ดูอย่างไร">
          สารถตรวจสอบได้ในรายละเอียดคอร์สใน "คอร์สเรียนของฉัน" ได้เลยค่ะครับ
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>
    </div>
  );
}