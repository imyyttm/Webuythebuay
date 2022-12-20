import React from "react";
import styled from "styled-components";
import axios, { Axios } from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/cartRedux";
import { Link } from "react-router-dom"
import Header from "../Header"
import "./Cart.css"

//import request from "request";
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductCart = styled.div`
color:black`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const Container = styled.div`
  background-color: white;
`;
const Wrapper = styled.div`
  position: relative;
  padding: 10px 0px;
  background-color: white;
  width: 70vw;
  height: 10vh;
  margin: auto;
  margin-top:20px;
`;

const Title = styled.div`
    position:absolute;
    height: 50px;
    width:200px;
    text-align: center;
    font-size:30px;
    background : #800606;
    font-weight:bold;
    border-radius:15px;
`;
const BackCourse = styled.button`
    position:absolute;
    width: 150px;
    height: 50px;
    background-color:#cd0d0d ;
    font-size:20px;
    margin-left:85%;
    font-weight:lighter;
    border-radius:15px;
    border: white;
    `;

const Checkout = styled.button`
    position:absolute;
    width: 150px;
    height: 50px;
    font-size:30px;
    background:#800606;
    right: 10px;
    font-weight: lighter;
    color:white;
    margin-top:10px;
    border: white;
    border-radius: 10px;

`;

const Cart = () => {
  //const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  //console.log(cart);
  function ToPayment(cart) {
    //var jsoncart = JSON.stringify({cart})
    //const request = require('request')
    //console.log(cart)
    /*request.post('http://localhost:5000/Checkout',jsoncart,function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(body);
      }
  });*/
  axios.post('http://localhost:5000/Checkout',cart)
  };
  return (
    <>
    <Header/>
    <div >
      <img style={{width:'500px', marginTop:'30px',marginBottom:'30px',marginLeft: '500px'}} src="https://i.ibb.co/vP1dNKh/308711052-643704037474887-3470553486386520573-n.jpg" alt="carttitlebox"/>
    </div>
    <Container className="Cartbigbox">
      <Wrapper className="cartbox">
        <Title style={{color:'white'}}>ตะกร้าของฉัน</Title>
        <BackCourse>
            <Link style={{textDecoration: 'none',color:'white'}} to="/course">ซื้อคอร์สเพิ่ม</Link>
        </BackCourse>
      </Wrapper>
      <Wrapper className="paymentbox">
        <div className="totalsold">
          สรุปยอดชำระ {cart.total} บาท
        </div>
        <Checkout onClick={()=>ToPayment(cart.product)}>
          <Link style={{textDecoration: 'none',color:'white'}} to="/Payment">ชำระเงิน</Link>
        </Checkout>
      </Wrapper>
      
      <Wrapper>
      {cart.quantity > 0 &&
        cart.product.map((product) => (
          <Product className="buybox">
            {product.Image != null && <Image src={product.Image} />}
            <ProductDetail>
              <Details>
                <ProductCart>
                  <b>Course ID:</b> {product.CourseID}
                  <p></p>
                  <b>Course Name:</b> {product.Course_name}
                  <p></p>
                  <b>Course Detail</b> {product.Course_detail}
                </ProductCart>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductPrice> {product.Course_price} บาท</ProductPrice>
            </PriceDetail>
          </Product> 
        ))}
        </Wrapper>
        
    </Container>
        
    </>
  );
};

export default Cart;
