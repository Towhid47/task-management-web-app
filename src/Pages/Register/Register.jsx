import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import logo from "../../assets/logo/task (1).png";
import Google from "../../assets/logo/google.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const { Registration, userProfile, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();

  ///// Register via Email and Password

  const handleSignUp = (event) => {
    event.preventDefault();

    const Name = event.target.name.value;
    const Email = event.target.email.value;
    const Password = event.target.password.value;
    const ProfilePictureLink = event.target.profilePictureLink.value;

    ///// Calling Register function which was declared in AuthProvider.js file....
    Registration(Email, Password)
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration Done",
          showConfirmButton: false,
          timer: 1500,
        });
        handleUserProfile(Name, ProfilePictureLink);
        event.target.reset();
        navigate("/login");
      })
      .catch((error) => error.message);

    ////// Update User Profile (accessing User Name & PhotoURL)
    const handleUserProfile = (Name, ProfilePictureLink) => {
      const profile = {
        displayName: Name,
        photoURL: ProfilePictureLink,
      };
      userProfile(profile)
        .then(() => {})
        .catch((error) => error.message);
    };
  };

  //  ///// Handle Google Sign In
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    googleSignIn(provider)
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Google Sign in Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/home");
      })
      .catch((error) => error.message);
  };

  return (
    <div>
      <div className="text-center">
        <img src={logo} alt="" />{" "}
        <span className="logo-text fs-1">
          Task <span className="daily">Daily24</span>
        </span>
      </div>

      <div className="form-margin container p-5 rounded-3">
        <h1 className="text-center">Sign up</h1>

        {/* ///////////////Registration Form ////////////////////////*/}
        <div className="mt-5">
          <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fs-3">Enter Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fs-3">Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fs-3">
                Profile Picture URL (optional)
              </Form.Label>
              <Form.Control
                type="text"
                name="profilePictureLink"
                placeholder="image URL Link"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fs-3">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>

            <div className="text-center mt-5">
              <Button type="submit" className="w-50 p-3 fs-5">
                Sign up
              </Button>
            </div>

            <div className="text-center mt-3">
              <Button
                className="btn btn-light w-50"
                onClick={handleGoogleSignIn}
              >
                <img src={Google} alt="" /> &nbsp;{" "}
                <span className="fs-5 d-none d-lg-inline">
                  Sign up with Google
                </span>
              </Button>
            </div>

            <div className="mt-5">
              <p className="fs-5">
                {" "}
                Already have an account ?{" "}
                <Link
                  to="/login"
                  className="fw-bold text-decoration-none text-info"
                >
                  Log in
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
