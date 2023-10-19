import React from 'react'
import { Logo } from '../../assets/assets'
import { Link } from 'react-router-dom'
import '../Header/header.css'

function Header() {
    return (
        <section id="Header">
            <div className='nav'>
                <div className='navLogo'>
                    <Link to="#"><img src={Logo} alt="logo" /></Link>
                </div>
                <ul className='navMenus'>
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Specifications</Link></li>
                    <li><Link to="#">Features</Link></li>
                    <li><Link to="#">FAQ</Link></li>
                    <li><Link to="#">Contact Us</Link></li>
                </ul>
                <button className='btnGradient'>Order Now</button>
            </div>
        </section>
    )
}

export default Header