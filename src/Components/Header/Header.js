import React from 'react';
import './Header.css';
import Logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className='Header'>
            <img src={Logo} alt="logo" />
            <nav>
                <ul>
                    <li><a href="shop">Shop Order</a></li>
                    <li><a href="review">Review Manage</a></li>
                    <li><a href="inventory">Inventory</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;