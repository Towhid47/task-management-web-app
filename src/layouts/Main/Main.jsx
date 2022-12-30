import React from 'react';
import { Outlet } from 'react-router-dom';
import NavLogo_UserProfile from '../../components/NavLogo_UserProfile/NavLogo_UserProfile';

const Main = () => {
    return (
        <div>
             <NavLogo_UserProfile></NavLogo_UserProfile>
             <hr/><br />
             <Outlet></Outlet>  
        </div>
    );
};

export default Main;