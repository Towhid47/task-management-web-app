import React from 'react';
import { Button } from 'react-bootstrap';
import logo from '../../assets/logo/task (1).png';
import ToDo from '../../assets/image/ToDo.jpg';
import './FirstPage.css';
import { Link } from 'react-router-dom';

const FirstPage = () => {
    return (
        <div>
              <div className='text-center'>
                   <img src={logo} alt="" /> <span className='logo-text fs-1'>Task <span className='daily'>Daily24</span></span>
              </div>
              <hr /><br />

              <div className='mt-5 container d-lg-flex'>
                    <div className='heading-text'>
                        <h1 className='greetings'>Welcome to <br /><span className='logo-text'>Task <span className='daily'>Daily24</span></span></h1>
                        <h2 className='mt-5'>Make your plans for the biggest achievement</h2>
                        <h5 className='mb-4'>Register today and get free forever plan and unlimited user.</h5>
                        <Link to='/login' className='text-decoration-none'><Button className='btn btn-light  fw-bold fs-5 p-3'>Login</Button></Link> &nbsp; &nbsp;
                       <Link to='/register' className='text-decoration-none'><Button className='btn btn-light  fw-bold fs-5 p-3 d-inline'>Register</Button></Link> 
                    </div>

                    <div className='w-50 d-lg-block d-none'>
                        <img src={ToDo} className="w-100" alt="" />
                    </div>
              </div>
        </div>
    );
};

export default FirstPage;