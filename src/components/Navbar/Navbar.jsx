import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from '../../assets/logo.png'
import menuIcon from '../../assets/menu-icon.png'
import arrowIcon from '../../assets/arrow-icon.png'



const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState({});
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleNav = () => {
        setOpenNav(!openNav);
        setOpenDropdowns({});
    };

    const handleDropdown = (dropdownName) => {
        if (isMobile) {
            setOpenDropdowns(prev => ({
                ...prev,
                [dropdownName]: !prev[dropdownName]
            }));
        }
    };

    const navList = () => {
        return (
            <>
                <div className={`nav-item ${openDropdowns['about'] ? 'open' : ''}`}
                    onMouseEnter={() => !isMobile && setOpenDropdowns(prev => ({ ...prev, about: true }))}
                    onMouseLeave={() => !isMobile && setOpenDropdowns(prev => ({ ...prev, about: false }))}
                    onClick={() => handleDropdown('about')}>
                    <div className="nav-link">
                        About <img src={arrowIcon} alt="Dropdown" className="dropdown-arrow" />
                    </div>
                    <div className={`dropdown ${openDropdowns['about'] ? 'open' : ''}`}>
                        <HashLink smooth to="/#about-us">About Us</HashLink>
                        <HashLink smooth to="/#board">Board</HashLink>
                        <HashLink smooth to="/#philanthropy">Philanthropy</HashLink>
                    </div>
                </div>
                <div className={`nav-item ${openDropdowns['mayuri'] ? 'open' : ''}`}
                    onMouseEnter={() => !isMobile && setOpenDropdowns(prev => ({ ...prev, mayuri: true }))}
                    onMouseLeave={() => !isMobile && setOpenDropdowns(prev => ({ ...prev, mayuri: false }))}
                    onClick={() => handleDropdown('mayuri')}>
                    <div className="nav-link">
                        Mayuri 2024 <img src={arrowIcon} alt="Dropdown" className="dropdown-arrow" />
                    </div>
                    <div className={`dropdown ${openDropdowns['mayuri'] ? 'open' : ''}`}>
                        <HashLink smooth to="/competition/#competition">Competition</HashLink>
                        <HashLink smooth to="/competition/#media">Media</HashLink>
                    </div>
                </div>
                <div className="nav-item">
                    <div className="nav-link">
                        <NavLink to="/sponsorship">Sponsorship</NavLink>
                    </div>
                </div>
            </>
        );
    };


    return (
        <div className="navbar-container">
            <nav className={`navbar ${openNav ? 'open' : ''}`}>
                <div className="navbar-logo">
                    <img src={logo} alt="Logo" />
                </div>

                <button className='hamburger' onClick={toggleNav}>
                    <img src={menuIcon} alt="Menu" />
                </button>

                <div className={`nav-links ${openNav ? 'open' : ''}`}>
                    {navList()}
                </div>
            </nav>
        </div>
    )
}


export default Navbar