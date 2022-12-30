import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/logo/task (1).png';
import Navigation from '../../components/Navigation Bar/Navigation';
import NavLogo_UserProfile from '../../components/NavLogo_UserProfile/NavLogo_UserProfile';

const Home = () => {
    return (
        <div>
              <NavLogo_UserProfile></NavLogo_UserProfile>
              <hr /> <br />
              <Navigation></Navigation>
              <Outlet></Outlet>  
        </div>
    );
};

export default Home;