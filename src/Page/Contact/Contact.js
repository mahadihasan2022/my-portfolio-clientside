import React from 'react';
import contactSvg from '../../image/svg/contact.svg';
import ContactForm from './ContactForm';
import phoneSvg from '../../image/svg/phone.svg';
import emailSvg from '../../image/svg/email.svg';
import locationSvg from '../../image/svg/location.svg';

const Contact = () => {
    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center pb-2 mt-5 border-bottom border-info border-5 text-info">Contact Me</h2>
            <div className="row mt-5 mb-5">
                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000"
                    className="col-md-6 d-flex">
                    <img className="w-100" src={contactSvg} alt="" />
                </div>
                <div
                    className="col-md-6">
                    <ContactForm />
                </div>
            </div>
            <div className="row text-center">
                <div
                    className="col-md-4">
                    <div className="border-global-style p-2 m-2 mt-4">
                        <img data-aos="zoom-in-up" data-aos-duration="1000" className="w-100" src={phoneSvg} alt="" />
                        <h3 data-aos="fade-up" data-aos-duration="2000" className="text-info mt-3">Mobile Number</h3>
                        <p data-aos="fade-up" data-aos-duration="3000">+880 1409 117 333</p>
                    </div>
                </div>
                <div
                    className="col-md-4">
                    <div className="border-global-style p-2 m-2 mt-4">
                        <img data-aos="zoom-in-up" data-aos-duration="1000" className="w-100" src={emailSvg} alt="" />
                        <h3 data-aos="fade-up" data-aos-duration="2000" className="text-info mt-3">Email Address</h3>
                        <p data-aos="fade-up" data-aos-duration="3000">mahadihasanmim1999@gmail.com</p>
                    </div>
                </div>
                <div
                    className="col-md-4">
                    <div className="border-global-style p-2 m-2 mt-4">
                        <img data-aos="zoom-in-up" data-aos-duration="1000" className="w-100" src={locationSvg} alt="" />
                        <h3 data-aos="fade-up" data-aos-duration="2000" className="text-info mt-3">Location</h3>
                        <p data-aos="fade-up" data-aos-duration="3000">10A, Dhanmondi, Dhaka-1207</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;