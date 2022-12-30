import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import logo from '../../assets/logo/task (1).png';
import Google from '../../assets/logo/google.png';
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    const {signIn, googleSignIn} = useContext(AuthContext);

    const navigate = useNavigate();

    ///////Handle Log in via Email & Password 

   const handleLogIn = (e) =>{
      e.preventDefault();

      const Email = e.target.email.value;
      const Password = e.target.password.value;

      //// call the signIn function for sending two parameters (Email,Password) into signIn() function that declared in AuthProvider.js .... signIn() function used to send email & password to the Firebase Authentication and perform Log in Operation
      signIn(Email,Password)
      .then(result=>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Log In Successful',
          showConfirmButton: false,
          timer: 1500
        });
        e.target.reset();
        navigate('/home');
      })
      .catch(error => error);
   }


  //  ///// Handle Google Sign In
   const provider = new GoogleAuthProvider();

   const handleGoogleSignIn = () =>{

       googleSignIn(provider)
       .then(result=>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Google Sign in Successful',
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/home');
      })
      .catch(error=>error.message);
   }


  return (
    <div>
            <div className="form-margin container p-5 rounded-3">
                <h1 className="text-center">Log In</h1>
                
                {/* ///////////////Login Form ////////////////////////*/}
                 <div className="mt-5">
                      <Form onSubmit={handleLogIn}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="fs-3">Email address</Form.Label>
                          <Form.Control type="email" name="email" placeholder="Enter email" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label className="fs-3">Password</Form.Label>
                          <Form.Control type="password" name="password" placeholder="Password" required/>
                        </Form.Group>
                    
                       <div className="text-center mt-5">
                          <Button type="submit" className="w-50 p-3 fs-5">
                              Sign In
                            </Button>
                       </div>

                       <div className="text-center mt-3">
                            <Button className="btn btn-light w-50" onClick={handleGoogleSignIn}>
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
