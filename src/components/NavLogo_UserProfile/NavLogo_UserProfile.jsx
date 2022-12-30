import React, { useContext } from 'react';
import logo from '../../assets/logo/task (1).png';
import AuthContext from "../../Context/AuthContext/AuthProvider.js";


const NavLogo_UserProfile = () => {
    
    

    return (
        <div>
               <div className='text-center'>
                   <img src={logo} alt="" /> <span className='logo-text fs-1'>Task <span className='daily'>Daily24</span></span>
              </div>
              <div>

              </div>
        </div>
    );
};

export default NavLogo_UserProfile;  