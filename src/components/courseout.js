import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Header_logout_stu from "./Header_logout_stu"
import "./courseout.css"

function Course() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/course").then(res => res.json()).then(
        (result) => {
          setCourse(result);
        } 
      )
  }, [])
  return (
    <div>
      <Header_logout_stu/>  
      <Container className='courseouttitle'>
      <h1>Course</h1>
      <Row>
      {course.map(course => (
         <Col xs ={12} sm={4} key={course.CourseID}>
          <Card style={{ width: '100%' ,marginBottom:'10%'}}>
              <Card.Img variant="top" src={course.Image} />
              <Card.Body>
                <Card.Title>รหัสคอร์ส {course.CourseID}</Card.Title>
                <Card.Text>
                  {course.Course_name}
                </Card.Text>
              </Card.Body>
            </Card>
         </Col>
      ))}
      
      </Row>
    </Container>
    </div>
  );
}


export default Course;
