import "./Course_detail.css"
import React from 'react';
import { MDBRow, MDBCol,MDBInput,MDBTextArea,MDBFile } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom"
import Tutor_header from './Tutor_header'

function course_detail() {
    return (
        <div>
            <Tutor_header/>
        <MDBRow className="coursedetailtitle">
            <h1>Course Detail</h1>
            <MDBCol className="largeBox">
                <MDBRow className="picture">
                    <h4>Course picture</h4>
                    <MDBFile className="newpic" size='lg' id='customFile' />
                    <div className='coursesavebox'>
                        <Link to="/Tutorhome">                     
                        <h4>Save</h4>
                        </Link>
                    </div>
                </MDBRow>
                <MDBRow className="Inbox">
                    <MDBRow>
                        <h4>Course name</h4>
                        <MDBInput id='form2' type='text'/>
                    </MDBRow>
                    <MDBCol md='6'>
                        <h4>CourseID</h4>
                        <MDBInput id='form1' type='Integer'/>
                    </MDBCol>
                    <MDBCol md='6'>
                        <h4>Course Detail</h4>
                        <MDBTextArea id='textAreaExample' rows={3} />
                    </MDBCol>
                    <MDBCol md='6'>
                        <h4>Course VDO</h4>
                        <MDBInput id='form3' type='text'/>
                    </MDBCol>
                    <MDBCol md='6'>
                        <h4>Course Price</h4>
                        <MDBInput id='form4' type='number'/>
                    </MDBCol>
                    <MDBCol md='6'>
                        <h4>Tutor Name</h4>
                        <MDBInput id='form5' type='text'/>
                    </MDBCol>
                    <MDBCol md='6'>
                        <h4>TutorID</h4>
                        <MDBInput id='form6' type='number'/>
                    </MDBCol>
                </MDBRow>
            </MDBCol>
        </MDBRow>
        </div>
    );
}  
export default course_detail;