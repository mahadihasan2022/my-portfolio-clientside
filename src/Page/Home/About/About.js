import React from 'react';
import aboutSvg from '../../../image/svg/about.svg';

const About = () => {
    return (
        <div className="mt-5 mb-5">
            <h2 className="text-center pb-2 border-bottom border-info border-5 text-info">About</h2>
            <div className="text-center">
                <img
                    data-aos="flip-up"
                    data-aos-duration="2500"
                    className="w-50"
                    src={aboutSvg} alt="" />
            </div>
            <div className="row">
                <div
                    className="col-md-6">
                    <p data-aos="fade-up" data-aos-duration="1500" className="border-global-style p-2 mt-2" style={{ textAlign: 'justify', height: '95%' }}>
                        <span className="text-info fw-bold fs-4">Myself: </span>
                        Hey, I am Mahadi Hasan Mim. I am a Professional Web Developer. I can do HTML, CSS, JS React & others programming languages and also WordPress & Shopify developer. I have learned web development since 2020. Now, I can do all kinds of web development work. I always want to learn something new and benefit people through it.
                    </p>
                </div>
                <div
                    className="col-md-6">
                    <p data-aos="fade-up" data-aos-duration="2000" className="border-global-style p-2 mt-2" style={{ textAlign: 'justify', height: '95%' }}>
                        <span className="text-info fw-bold fs-4">Diligent Project Management: </span>
                        Offering a proven record of success leading all phases of diverse React Projects,WordPress Projects, Shopify Projects, Theme customizing, Add Product, Solutions Designs, Enterprise Deployments, Cross Platform Migrations, Annual Maintenance Support etc etc… I like to learn new things and I like to do something new all the time. I am happy when people benefit from my work.
                    </p>
                </div>
                <div
                    className="col-md-6">
                    <p data-aos="fade-up" data-aos-duration="3000" className="border-global-style p-2 mt-2" style={{ textAlign: 'justify', height: '95%'}}>
                        <span className="text-info fw-bold fs-4">Business Strategist: </span>
                        Plan and Manage high value projects aligning business goals with technology solutions to drive process improvements, competitive advantage and bottom-line gains. Apply change of Strategy when necessary to produce high-quality deliverables which meets timeline and budgetary targets.
                    </p>
                </div>
                <div
                    className="col-md-6">
                    <p data-aos="fade-up" data-aos-duration="3000" className="border-global-style p-2 mt-2" style={{ textAlign: 'justify', height: '95%' }}>
                        <span className="text-info fw-bold fs-4">Excellent Communicator: </span>
                        Leverage Technical, Business and Financial acumen to communicate effectively with client executives and their respective teams. Conducting Productive Corporate Trainings as MCT, to create opportunity of future business continuation and keep customers aligned with industries best practice.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;