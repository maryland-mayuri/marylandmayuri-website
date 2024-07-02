import React, {useState} from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from '../../assets/logo.png'
import menuIcon from '../../assets/menu-icon.png'


const Navbar = () => {
   const [openNav, setOpenNav] = useState(false);
   const [openDropdown, setOpenDropdown] = useState(''); 

   const toggleNav = () => {
        setOpenNav(!openNav);
        setOpenDropdown('');
   };

   const handleDropdown = (dropdownName) => {
        setOpenDropdown(openDropdown === dropdownName ? '' : dropdownName);
    };

    const navList = () => {
        return (
            <>
            <div className="nav-item"
            onMouseEnter={() => handleDropdown('about')}
            onMouseLeave={() => handleDropdown('')}
            onClick={() => handleDropdown('about')}>
                <div className="nav-link">
                    About
                </div>
                {openDropdown === 'about' && (
                    <div className="dropdown">
                        <HashLink smooth to="/#about-us">About Us</HashLink>
                        <HashLink smooth to="/#board">Board</HashLink>
                        <HashLink smooth to="/#philanthropy">Philantrophy</HashLink>
                    </div>
                )}
            </div>
            <div className="nav-item"
            onMouseEnter={() => handleDropdown('mayuri')}
            onMouseLeave={() => handleDropdown('')}
            onClick={() => handleDropdown('mayuri')}>
                <div className="nav-link">
                    Mayuri 2024
                </div>
                {openDropdown === 'mayuri' && (
                    <div className="dropdown">
                        <HashLink smooth to="/competition/#competition">Competition</HashLink>
                        <HashLink smooth to="/competition/#media">Media</HashLink>
                    </div>
                )}
            </div>
            <div className="nav-item">
                <NavLink to="/sponsorship" className="nav-link">Sponsorship</NavLink>
            </div>
            </>
        );
    };


  return (
    <div className="navbar-container">
        <nav className={`navbar ${openNav ? 'open' : ''}`}>
            <div className="navbar-logo">
                <img src={logo} alt="Logo"/>
            </div>

            <button className='hamburger' onClick={toggleNav}>
                <img src={menuIcon} alt="Menu"/>
            </button>

            <div className={`nav-links ${openNav ? 'open' : ''}`}>
                {navList()}
            </div>
        </nav>
    </div>
    )
}


export default Navbar