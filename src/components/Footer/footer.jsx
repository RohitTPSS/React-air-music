import React from 'react'
import { FooterCenter, FooterLeft, FooterRight } from '../../assets/assets'
import '../Footer/footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <section id="Footer">
            <div className='bottom'>
                <div className='bottomLeft'>
                    <img src={FooterLeft} alt="footerLeft" />
                </div>
                <div className='bottomCenter'>
                    <img src={FooterCenter} alt="footerCenter" />
                    <div class="copyright">
                        <p>© Copyrights airmusic 2019</p>
                        <div class="social">
                            <Link to="#" class="socialIcons"><i class="fa-brands fa-twitter"></i></Link>
                            <Link to="#" class="socialIcons"><i class="fa-brands fa-facebook-f"></i></Link>
                            <Link to="#" class="socialIcons"><i class="fa-brands fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                </div>
                <div className='bottomRight'>
                    <img src={FooterRight} alt="footerRight" />
                </div>
            </div>
        </section>
    )
}

export default Footer