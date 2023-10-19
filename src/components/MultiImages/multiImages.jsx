import React from 'react'
import { MultiimageFive, MultiimagesFour, MultiimagesOne, MultiimagesThree, MultiimagesTwo } from '../../assets/assets'
import '../MultiImages/multiImages.css'
import { Link } from 'react-router-dom'

function MultiImages() {
    return (
        <section id="MultiImages">
            <div className='inside'>
                <div className='multiLeft'>
                    <Link to="#"><img src={MultiimagesOne} alt="multiImagesOne" /></Link>
                </div>
                <div className='multiRight'>
                    <Link to="#"><img src={MultiimagesTwo} alt="multiImagesTwo" /></Link>
                    <Link to="#"><img src={MultiimagesThree} alt="multiImagesThree" /></Link>
                    <Link to="#"><img src={MultiimagesFour} alt="multiImagesFour" /></Link>
                    <Link to="#"><img src={MultiimageFive} alt="multiImagesFour" /></Link>
                </div>
            </div>
        </section>
    )
}

export default MultiImages
