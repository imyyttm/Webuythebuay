import "./PageMember.css"
import { Link } from "react-router-dom"
import React from 'react'
import Header from "../Header"
import {
  MDBContainer,
  MDBRow,
  MDBCol
}
from 'mdb-react-ui-kit';

function Member() {
  return (
    <div>
    <Header/>
    <div className="userprofile">
        <img src="https://i.ibb.co/6mv6SnT/301484544-1093508848030046-6373595710833162287-n.png" alt="301484544-1093508848030046-6373595710833162287-n" height="100" width="200"/>
        <hr style={{background: "#800606",height: "2px",border: "none",}}/>
        <p>Profile</p>
    </div>
    <MDBContainer fluid className="AInsertBox">
      <header className="Bbox">
        <MDBRow className='headerbox'>
          <MDBCol >
            <MDBCol className="insert">
              <MDBCol className='insert-grid'>
                <MDBRow >
                  <MDBRow >
                    <p >Name</p>
                  </MDBRow>
                  <MDBRow  >
                    <div className="text-aboutuser">
                        <p>Somjai</p>
                    </div>
                  </MDBRow>
                </MDBRow>

                <MDBRow >
                  <MDBRow >
                    <p >Lastname</p>
                  </MDBRow>
                  <MDBRow  >
                    <div className="text-aboutuser">
                        <p>Jaidee</p>
                    </div>
                  </MDBRow>
                </MDBRow>

                <MDBRow >
                  <MDBRow >
                    <p >Email</p>
                  </MDBRow>
                  <MDBRow  >
                    <div className="text-aboutuser">
                        <p>Somjai@gmail.com</p>
                    </div>
                  </MDBRow>
                </MDBRow>

                <MDBRow >
                  <MDBRow >
                    <p >Password</p>
                  </MDBRow>
                  <MDBRow  >
                    <div className="text-aboutuser">
                        <p>********************</p>
                    </div>
                  </MDBRow>
                </MDBRow>

                <MDBRow >
                  <MDBRow >
                    <p >Telphone</p>
                  </MDBRow>
                  <MDBRow  >
                    <div className="text-aboutuser">
                        <p>0817567890</p>
                    </div>
                  </MDBRow>
                </MDBRow>
              </MDBCol>
              <div className='savebox'>
                  <Link style={{textDecoration: 'none'}} to="/EditUser">                     
                      <h4>Edit</h4>
                  </Link>
              </div>
            </MDBCol>
          </MDBCol>
        </MDBRow>
      </header>
    </MDBContainer>
    </div>
  );
}

export default Member;