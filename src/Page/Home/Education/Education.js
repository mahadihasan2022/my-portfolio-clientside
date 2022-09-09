import React from 'react';
import educationSvg from '../../../image/svg/education.svg'

const Education = () => {
    return (
        <div className="mt-5 mb-5">
            <h2 className="text-center pb-2 border-bottom border-info border-5 text-info">Education</h2>
            <div className="row d-flex flex-md-row-reverse">
                <div className="col-md-6 d-flex text-center">
                    <img
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000"
                        className="w-100"
                        src={educationSvg} alt="" />
                </div>

                <div className="col-md-6">
                    <div
                        className="p-2 mt-2 text-center text-md-start">
                        <h3 data-aos="fade-up" data-aos-duration="1000" className="text-info">Education</h3>
                        <h5 data-aos="fade-up" data-aos-duration="1500"><i>Jul 2022 - Current</i></h5>
                        <h6>Bachelor of Science: software Engineer</h6>
                        <p data-aos="fade-up" data-aos-duration="2000"><small>Daffodil International University, Dhanmondi, Dhaka 1207</small></p>

                        <h5 data-aos="fade-up" data-aos-duration="2500" className="mt-3"><i>Passed by 2018</i></h5>
                        <h6 data-aos="fade-up" data-aos-duration="3000">Science Education</h6>
                        <p data-aos="fade-up" data-aos-duration="1000"><small>milestone College, Uttara, Dhaka 1230</small></p>

                        <h3 data-aos="fade-up" data-aos-duration="1000" className="text-info mt-5">Languages</h3>
                        <h5 data-aos="fade-up" data-aos-duration="1500">Bengali - <small><i>Native</i></small></h5>
                        <h5 data-aos="fade-up" data-aos-duration="2000">English - <small><i>(reading, writing, speaking)</i></small></h5>

                        <h3 data-aos="fade-up" data-aos-duration="2500" className="text-info mt-5">Hobby</h3>
                        <h6 data-aos="fade-up" data-aos-duration="3000">My hobbies are programming coding, fishing, doing social work and gardening. </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;