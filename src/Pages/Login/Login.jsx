import React from "react";
import { Button, Form } from "react-bootstrap";
import logo from '../../assets/logo/task (1).png';
import Google from '../../assets/logo/google.png';
import './Login.css';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
            <div className="text-center">
            <img src={logo} alt="" />{" "}
            <span className="logo-text fs-1">
                Task <span className="daily">Daily24</span>
            </span>
            </div>

            <div className="form-margin container p-5 rounded-3">
                <h1 className="text-center">Log In</h1>
                
                {/* ///////////////Login Form ////////////////////////*/}
                 <div className="mt-5">
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="fs-3">Email address</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label className="fs-3">Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" required/>
                        </Form.Group>
                    
                       <div className="text-center mt-5">
                          <Button type="submit" className="w-50 p-3 fs-5">
                              Sign In
                            </Button>
                       </div>

                       <div className="text-center mt-3">
                            <Button className="btn btn-light w-50">
                               <img src={Google} alt="" /> &nbsp; <span className="fs-5 d-none d-lg-inline">Sign in with Google</span>
                            </Button>
                       </div>

                       <div className="mt-5">
                            <p className="fs-5"> Are you new here ? <Link to='/register' className="fw-bold text-decoration-none text-info">Create a new account</Link></p>
                       </div>
                      </Form>
                 </div>
            </div>
   </div>
  );
};

export default Login;
