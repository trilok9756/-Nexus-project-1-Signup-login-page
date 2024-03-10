import React, { useState, useContext } from 'react'
import { NavLink } from "react-router-dom"
import { Link } from 'react-scroll';
import "../styles/style.css"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { BooleanFlag } from '../App';
function Header({ children }) {
    const [Navbar, setNavbar] = useState(false)

    const { setPage } = useContext(BooleanFlag)

    const closeNavbar = () => {
        setNavbar(false);
    };


    return (
        <>
            <div className="header">
                <div className="company-name">
                    <h2 className="company-name1">South Indian</h2>
                    <h3 className="company-name2">Restaurant</h3>
                </div>


                <div className="menu">
                    <div className={Navbar ? "menu-items mobile-nav" : "menu-items"}>
                        <IoClose className='close-bar' onClick={() => { setNavbar(false) }} />
                        <Link className="menu-item" onClick={closeNavbar} to='home' spy={true} smooth={true} offset={-120} duration={500}>
                            Home
                        </Link>
                        <Link className="menu-item" onClick={closeNavbar} to='service' spy={true} smooth={true} offset={-100} duration={500}>
                            Service
                        </Link>
                        <Link className="menu-item" onClick={closeNavbar} to='menu' spy={true} smooth={true} offset={-65} duration={500}>
                            Menu
                        </Link>
                        <Link className="menu-item" onClick={closeNavbar} to='reservation' spy={true} smooth={true} offset={-90}>
                            Reservation
                        </Link>
                        <Link className="menu-item" onClick={closeNavbar} to='about' spy={true} smooth={true} offset={-100}>
                            About Us
                        </Link>
                    </div>

                </div>
                <div className="head-btn">
                    <button className='head-btn1' onClick={() => setPage(true)} ><NavLink to={"/Signup"} className='link1'>Login</NavLink></button>
                    <button className='head-btn2' onClick={() => setPage(false)}><NavLink to={"/Signup"} className='link2'>Signup</NavLink></button>
                    <RxHamburgerMenu className='head-btn3' onClick={() => { setNavbar(true) }} />
                </div>
            </div>
            <main>{children}</main>
        </>
    )
}

export default Header