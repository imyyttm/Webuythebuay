import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header"
import { useSelector} from "react-redux";
import { addProduct } from "../Redux/cartRedux"
import { useDispatch } from "react-redux"
import styled from 'styled-components';
import { height, padding } from '@mui/system';
const Button = styled.button`
display:flex;
position:absolute;
height:30px;
width: 70px;
border-radius: 20px;
background: #800608;
border:white;
`


function selfProduct(cart,CourseID){
  //console.log(CourseID)
  //console.log(cart.product)
    for (let i=0;i<cart.product.length;i++){
      //console.log(cart.product[i].CourseID) 
        if(cart.product[i].CourseID==CourseID){
            return true
        }
    }
    return false
  }

function Course() {
  const dispatch = useDispatch();
  const cart = useSelector(state=>state.cart);
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/course").then(res => res.json()).then(
        (result) => {
          setCourse(result);
        } 
      )
  }, [])
  function handleClisk(course){
    //console.log(course.CourseID)
    //console.log(cart)
    if (!selfProduct(cart,course.CourseID))
    {
      dispatch(
        addProduct({course})
        )
      }
      
  }
  return (
    <div>
      <Header/>
      <Container className='courseouttitle'>
      <h1>Course</h1>
      <Row>
      {course.map(course => (
         <Col xs ={12} sm={4} key={course.CourseID}>
          <Card style={{ width: '100%' ,marginBottom:'10%',paddingBottom:'20px'}}>
              <Card.Img variant="top" src={course.Image} />
              <Card.Body>
                <Card.Title >รหัสคอร์ส {course.CourseID}</Card.Title>
                <Card.Text>
                  {course.Course_name}
                <Card.Text>
                  ราคา {course.Course_price} บาท
                </Card.Text>
                </Card.Text> 
                <Button  onClick={()=>handleClisk(course)}>
                  <Link style={{textDecoration: 'none',color:'white'}} to ='/Cart'>ซื้อคอร์ส</Link>
                </Button>
              </Card.Body>
            </Card>
            <div>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
              </div>
         </Col>
      ))}
      
      </Row>
    </Container>
    </div>
  );
}


export default Course;
