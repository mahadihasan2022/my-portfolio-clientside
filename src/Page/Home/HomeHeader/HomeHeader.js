import React from 'react';
import Typewriter from 'typewriter-effect';
import homeHeaderSvg from '../../../image/svg/home-header.svg';
import resumePdf from '../../../image/pdf/resume.pdf.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Available from '../../Shear/Available/Available';
import './HomeHeader.css';
   
const HomeHeader = () => {
    return (

        <div className="row d-flex align-items-center mt-5 mb-5">
            <div
                className="col-md-6 text-center text-md-start">
                <h1 data-aos="fade-up" className='homeHeader' data-aos-duration="1000" style={{fontFamily: "'Concert One', cursive"}}>
                    Assalamu Alaikum,<span className='home'>I'm</span><br />
                    <span className='text-white'>
                        Mahadi Hasan Mim
                    </span>
                </h1>

                <h1 data-aos="fade-up" data-aos-duration="2000" style={{ fontWeight: 700, color: '#0dcaf0', fontFamily: " 'Poppins', cursive"}}>
                    <Typewriter
                        options={{
                            strings: ['Frontend Developer...', 'Backend Developer...','Shopify Developer...', 'WordPress Developer...', 'Google Merchant Center', 'WordPress & Shopify Theme Customize'  ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <div data-aos="fade-up" data-aos-duration="2500">
                <Available />
                </div>
                <a data-aos="fade-up" data-aos-duration="3000" className="btn fw-bold btn-info" href={resumePdf} download>
                    <FontAwesomeIcon icon={faDownload} /> Download Resume
                </a>
            </div>
            <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
                className="col-md-6">
                <img src={homeHeaderSvg} alt="" />
            </div>
        </div>
    );
};

export default HomeHeader;