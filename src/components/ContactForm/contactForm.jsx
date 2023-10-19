import React from 'react'
import '../ContactForm/contactForm.css'

function ContactForm() {
    return (
        <section id="ContactForm">
            <div className='inside'>
                <div className="main-wrapper">
                    <div className="content">
                        <h2 className='secTitle'>Contact Us</h2>
                        <p className='secSubTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <form className="form-wrapper">
                        <div className="form-card">
                            <input
                                className="form-input"
                                type="text"
                                name="full_name"
                                required="required"
                                placeholder="Full Name"
                            />
                        </div>

                        <div className="form-card">
                            <input
                                className="form-input"
                                type="email"
                                name="email"
                                required="required"
                                placeholder="Email"
                            />
                        </div>

                        <div className="form-card">
                            <input
                                className="form-input"
                                type="number"
                                name="phone_number"
                                required="required"
                                placeholder="Phone number"
                            />
                        </div>

                        <div className="form-card">
                            <textarea
                                className="form-textarea"
                                maxlength="420"
                                rows="3"
                                name="phone_number"
                                required="required"
                                placeholder="Address"
                            ></textarea>

                        </div>

                        <div className="btn-wrap">
                            <button className='btnGradient'> Submit </button>
                        </div>

                    </form>
                </div>
            </div>
        </section>

    )
}

export default ContactForm
