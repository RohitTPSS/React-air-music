import React from 'react'
import { Banner } from '../../assets/assets'
import '../Specification/specification.css'

function Specification() {
    return (
        <section id='specification'>
            <div className='inside'>
                <h1 className='secTitle'>Greatest Specifications</h1>
                <p className='secSubTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <div className='specImage'>
                    <img src={Banner} alt="specImage" />
                </div>
            </div>
        </section>
    )
}

export default Specification
