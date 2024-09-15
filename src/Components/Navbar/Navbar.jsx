import './Navbar.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {

    const [menu, setMenu] = useState("shopAll");

    return (
        <div className="navbar">
            <div className="logo-title">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="title">SmartCart</h1>
            </div>

          <ul>
                <li onClick={() => { setMenu("shopAll") }}> <a href="/">Shop All</a> {menu === "shopAll" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("shopmen") }}> <a href="/men">Shop Men</a> {menu === "shopmen" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("shopWomen") }}> <a href="/women">Shop Women</a> {menu === "shopWomen" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("shopKids") }}> <a href="/kid">Shop Kids</a> {menu === "shopKids" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("contact") }}> <a href="/contact">Contact</a> {menu === "contact" ? <hr /> : <></>} </li>
              
            </ul>

            <div className="actions">
                <a href="/login"><button className="sign-in-button">Sign In</button></a>
                <a href="/cart"><img src={cart_icon} alt="cart_icon" className="a" /></a>
                <div className="nav-cart-count">0</div>
            </div> 
        </div>
    );
    // jkhnj,nm
}

export default Navbar;