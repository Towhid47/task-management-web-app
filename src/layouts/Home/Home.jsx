import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/logo/task (1).png';
import Navigation from '../../components/Navigation Bar/Navigation';

const Home = () => {
    return (
        <div>
               <div className='text-center'>
                   <img src={logo} alt="" /> <span className='logo-text fs-1'>Task <span className='daily'>Daily24</span></span>
              </div>
              <hr /> <br />
              <Navigation></Navigation>
              <Outlet></Outlet>  
        </div>
    );
};

export default Home;