import "./EditUser.css"
import { Link } from "react-router-dom"
import React from 'react'
import Header from "../Header"
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import {
  MDBContainer,
  MDBRow,
  MDBCol
}
from 'mdb-react-ui-kit';

function EditUser() {
  return (
    <div>
    <Header/>
    
    <div className="userprofile">
        <img src="https://i.ibb.co/6mv6SnT/301484544-1093508848030046-6373595710833162287-n.png" alt="301484544-1093508848030046-6373595710833162287-n" height="100" width="200" />
        <hr style={{background: "#800606",height: "1px",border: "none" }}/>
        <p>Profile</p>
    </div>
    <MDBContainer  fluid className="InsertBox">
      <header className="Cbox">
        <MDBRow className='headerbox'>
          <MDBCol >
            <MDBCol className="insert">
              <MDBCol className='insert-grid'>
                <MDBRow >
                  <MDBRow >
                    <p >Name</p>
                  </MDBRow>
                  <MDBRow  >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="given-name"
                            required
                            fullWidth
                            id="firstName"
                            label="FirstName"
                            autoFocus/>
                        </Grid>
                    </Grid>
                  </MDBRow>
                </MDBRow>

                <MDBRow >
                  <MDBRow >
                    <p >Lastname</p>
                  </MDBRow>
                  <MDBRow  >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="given-name"
                            required
                            fullWidth
                            id="LastName"
                            label="LastName"
                            autoFocus/>
                        </Grid>
                    </Grid>
                  </MDBRow>
                </MDBRow>

                <MDBRow >
                  <MDBRow >
                    <p >Email</p>
                  </MDBRow>
                  <MDBRow  >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="given-name"
                            required
                            fullWidth
                            id="Email"
                            label="Email"
                            autoFocus/>
                        </Grid>
                    </Grid>
                  </MDBRow>
                </MDBRow>

                <MDBRow >
                  <MDBRow >
                    <p >Password</p>
                  </MDBRow>
                  <MDBRow  >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="given-name"
                            required
                            fullWidth
                            id="Password"
                            label="Password"
                            autoFocus/>
                        </Grid>
                    </Grid>
                  </MDBRow>
                </MDBRow>

                <MDBRow >
                  <MDBRow >
                    <p >Telphone</p>
                  </MDBRow>
                  <MDBRow  >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="given-name"
                            required
                            fullWidth
                            id="Telphone"
                            label="Telphone"
                            autoFocus/>
                        </Grid>
                    </Grid>
                  </MDBRow>
                </MDBRow>
              </MDBCol>
              <div className='Asavebox'>
                  <Link style={{textDecoration: 'none'}} to="/Member">                     
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

export default EditUser;