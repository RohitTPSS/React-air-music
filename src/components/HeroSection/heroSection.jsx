import React from 'react'
import { Banner, LineSvg } from '../../assets/assets'
import '../HeroSection/heroSection.css'

function HeroSection() {
    return (
        <section id='heroSection'>
            <div className='content'>
                <div className='heroLeft'>
                    <h1 className='secTitle'>
                        <span>Airmusic</span>
                        <span className='linesvg'>awesome
                            {LineSvg}
                        </span>
                        <span>sounds</span>
                    </h1>
                    <p className='secSubTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className='btnGradient'>Order Now</button>
                </div>
                <div className='heroRight'>
                    <img src={Banner} alt="banner" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
