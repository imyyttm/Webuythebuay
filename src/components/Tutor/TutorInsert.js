import "./TutorInsert.css"
import { Link } from "react-router-dom"
import React from 'react';
import { useState, useEffect} from 'react';
import Tutor_header from "./Tutor_header";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
  MDBFile
}
from 'mdb-react-ui-kit';

function tutorInsert() {
  return (
    <div>
    <Tutor_header/>
    <MDBContainer fluid className="InsertBox">
      <header className="Abox">
        <MDBRow className='headerbox'>
          <MDBCol >
            <h1> Insert Course</h1>
            <MDBCol className="insert">
              <MDBCol className='insert-grid'>

                <MDBRow >
                  <MDBRow >
                    <h4 >CourseID</h4>
                  </MDBRow>
                  <MDBRow  >
                    <MDBInput id='form1' type='Integer'/>
                  </MDBRow>
                </MDBRow>

                <MDBRow >
                  <MDBRow>
                    <h4 >Course_name</h4>
                  </MDBRow>
                  <MDBRow >
                    <MDBInput id='form2' type='text'/>
                  </MDBRow>
                </MDBRow>

                <MDBRow>
                  <MDBRow>
                    <h4 >Course Detail</h4>
                  </MDBRow>
                  <MDBRow >
                    <MDBTextArea id='textAreaExample' rows={3} />
                  </MDBRow>
                </MDBRow>

                <MDBRow>
                  <MDBRow>
                    <h4 >Course VDO</h4>
                  </MDBRow>
                  <MDBRow>
                    <MDBInput id='form3' type='text'/>
                  </MDBRow>
                </MDBRow>

                <MDBRow>
                  <MDBRow>
                    <h4 >Course Price</h4>
                  </MDBRow>
                  <MDBRow>
                    <MDBInput id='form4' type='number'/>
                  </MDBRow>
                </MDBRow>

                <MDBRow>
                  <MDBRow>
                    <h4 >Tutor Name</h4>
                  </MDBRow>
                  <MDBRow>
                    <MDBInput id='form5' type='text'/>
                  </MDBRow>
                </MDBRow>

                <MDBRow>
                  <MDBRow>
                    <h4 >TutorID</h4>
                  </MDBRow>
                  <MDBRow>
                    <MDBInput id='form6' type='number'/>
                  </MDBRow>
                </MDBRow>

                <MDBRow >
                  <MDBRow>
                    <h4 >Upload course picture</h4>
                  </MDBRow>
                  <MDBRow >
                    <MDBFile size='lg' id='customFile' />
                  </MDBRow>
                </MDBRow>

              </MDBCol>
              <div className='savebox'>
                  <Link style={{textDecoration: 'none'}} to="/Tutorhome">                     
                      <h4>Save</h4>
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

export default tutorInsert;