import React from 'react';
import logo from '../../../../assets/logo.png'
const Header = () => {
    return (
        <div className='text-center'>
            <div className='flex justify-center pb-3 pt-5'>
                <img src={logo} alt="" />
            </div>

            <p>Journalism Without Fear or Favour</p>

        </div>
    );
};

export default Header;