import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect} from 'react';
import Header from "./Header"
import { Link } from "react-router-dom"

function Mycourse() {
  const [mycourses, setMycourse] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/mycourse").then(res => res.json()).then(
        (result) => {
          setMycourse(result);
        } 
      )
  }, [])
  return (
      <div>
      <Header/>
      <Container className='courseouttitle'>
      <h1>My Course</h1>
      <Row>
      {mycourses.map(mycourses => (
         <Col xs ={12} sm={4} key={mycourses.Student_buyID}>
          <Link style={{textDecoration: 'none', color: 'black'}} to="/Clipback">
          <Card style={{ width: '100%' ,marginBottom:'10%'}}>   
              <Card.Img variant="top" src={mycourses.Image} />
              <Card.Body>
                <Card.Title >รหัสคอร์ส {mycourses.Course_buyID}</Card.Title>
                <Card.Text>
                {mycourses.Buy_detail}
                </Card.Text> 
              </Card.Body>
            </Card></Link>
         </Col>
         
      ))}
      </Row> 
      </Container> 
    </div>
  );
}


export default Mycourse;
