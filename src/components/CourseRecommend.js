import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


function CourseRecommend() {
  const [CourseRecommend, setCourseRecommend] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/recommandcourse").then(res => res.json()).then(
        (result) => {
          setCourseRecommend(result);
        } 
      )
  }, [])
  return (
    <div>
      <Container>
      <Row>
      {CourseRecommend.map(CourseRecommend => (
         <Col xs ={12} sm={4} key={CourseRecommend.CourseID}>
          <Card style={{ width: '100%', marginBottom: '10%' }}>
              <Card.Img variant="top" src={CourseRecommend.Image} />
              <Card.Body>
                <Card.Title>รหัสคอร์ส {CourseRecommend.CourseID}</Card.Title>
                <Card.Text>
                  {CourseRecommend.Course_name}
                <Card.Text>
                  ราคา {CourseRecommend.Course_price} บาท
                </Card.Text>
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


export default CourseRecommend;