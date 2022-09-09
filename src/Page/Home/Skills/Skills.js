import React from 'react';
import skillsSvg from '../../../image/svg/skills.svg';
import './Skills.css'

const Skills = () => {
    const onMouseOverHandler = () => {
        const skillMouseOverOut = document.getElementsByClassName('skill-mouseOver');
        for (let i = 0; i < skillMouseOverOut.length; i++) {
            const element = skillMouseOverOut[i];
            element.style.background = '#0dcaf0';
            element.style.animationName = 'mouseOverDiv';
            element.style.animationDuration = '5s';
        }
    }
    const alsoSkills = ['API', 'Github', 'React Redux', 'React Form', 'Axios', 'Animate.css', 'AOS', 'SASS', 'Styled-components', 'Font Awesome']
    return (
        <div
            id="main-skills-div"
            onMouseOver={onMouseOverHandler}
        >
            <h2 className="text-center pb-2 mt-5 border-bottom border-info border-5 text-info">Skills</h2>
            <div className="row">
                <div className="col-md-6 d-flex">
                    <img
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        className="w-100"
                        src={skillsSvg} alt="" />
                </div>
                <div
                    className="col-md-6"
                >
                    <div data-aos="fade-up" data-aos-duration="500" className="row mt-2">
                        <b>HTML <span className="text-info">95%</span></b>
                        <div className='w-100 bg-secondary rounded-pill p-1'>
                            <div style={{ width: '95%', height: '3px', margin: '1px' }} className="skill-mouseOver rounded-pill ps-1 fw-bold text-dark">
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" className="row mt-2">
                        <b>CSS <span className="text-info">90%</span></b>
                        <div className='w-100 bg-secondary rounded-pill p-1'>
                            <div style={{ width: '90%', height: '3px', margin: '1px' }} className="skill-mouseOver rounded-pill ps-1 fw-bold text-dark">
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="row mt-2">
                        <b>Bootstrap <span className="text-info">95%</span></b>
                        <div className='w-100 bg-secondary rounded-pill p-1'>
                            <div style={{ width: '95%', height: '3px', margin: '1px' }} className="skill-mouseOver rounded-pill ps-1 fw-bold text-dark">
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="row mt-2">
                        <b>JavaScript <span className="text-info">85%</span></b>
                        <div className='w-100 bg-secondary rounded-pill p-1'>
                            <div style={{ width: '85%', height: '3px', margin: '1px' }} className="skill-mouseOver rounded-pill ps-1 fw-bold text-dark">
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" className="row mt-2">
                        <b>React Js <span className="text-info">95%</span></b>
                        <div className='w-100 bg-secondary rounded-pill p-1'>
                            <div style={{ width: '95%', height: '3px', margin: '1px' }} className="skill-mouseOver rounded-pill ps-1 fw-bold text-dark">
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2500" className="row mt-2">
                        <b>React Router v5 + v6 <span className="text-info">90%</span></b>
                        <div className='w-100 bg-secondary rounded-pill p-1'>
                            <div style={{ width: '90%', height: '3px', margin: '1px' }} className="skill-mouseOver rounded-pill ps-1 fw-bold text-dark">
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000" className="row mt-2">
                        <b>Node Js <span className="text-info">70%</span></b>
                        <div className='w-100 bg-secondary rounded-pill p-1'>
                            <div style={{ width: '70%', height: '3px', margin: '1px' }} className="skill-mouseOver rounded-pill ps-1 fw-bold text-dark">
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="1500" className="row mt-2">
                        <b>Express js <span className="text-info">75%</span></b>
                        <div className='w-100 bg-secondary rounded-pill p-1'>
                            <div style={{ width: '75%', height: '3px', margin: '1px' }} className="skill-mouseOver rounded-pill ps-1 fw-bold text-dark">
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="2000" className="row mt-2">
                        <b>Mongodb <span className="text-info">80%</span></b>
                        <div className='w-100 bg-secondary rounded-pill p-1'>
                            <div style={{ width: '80%', height: '3px', margin: '1px' }} className="skill-mouseOver rounded-pill ps-1 fw-bold text-dark">
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="2000" className="row mt-2">
                        <b>Firebase <span className="text-info">85%</span></b>
                        <div className='w-100 bg-secondary rounded-pill p-1'>
                            <div style={{ width: '85%', height: '3px', margin: '1px' }} className="skill-mouseOver rounded-pill ps-1 fw-bold text-dark">
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="2500" className="row mt-2">
                        <b>Heroku <span className="text-info">90%</span></b>
                        <div className='w-100 bg-secondary rounded-pill p-1'>
                            <div style={{ width: '90%', height: '3px', margin: '1px' }} className="skill-mouseOver rounded-pill ps-1 fw-bold text-dark">
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="2500" className="row mt-2">
                        <b>Material Ui <span className="text-info">80%</span></b>
                        <div className='w-100 bg-secondary rounded-pill p-1'>
                            <div style={{ width: '80%', height: '3px', margin: '1px' }} className="skill-mouseOver rounded-pill ps-1 fw-bold text-dark">
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="2500" className="row mt-2">
                        <b>Daisy Ui <span className="text-info">90%</span></b>
                        <div className='w-100 bg-secondary rounded-pill p-1'>
                            <div style={{ width: '90%', height: '3px', margin: '1px' }} className="skill-mouseOver rounded-pill ps-1 fw-bold text-dark">
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="3000" className="row mt-2">
                        <b>Tailwind CSS <span className="text-info">85%</span></b>
                        <div className='w-100 bg-secondary rounded-pill p-1'>
                            <div style={{ width: '85%', height: '3px', margin: '1px' }} className="skill-mouseOver rounded-pill ps-1 fw-bold text-dark">
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="3000" className="row mt-2">
                        <b>Shopify <span className="text-info">95%</span></b>
                        <div className='w-100 bg-secondary rounded-pill p-1'>
                            <div style={{ width: '95%', height: '3px', margin: '1px' }} className="skill-mouseOver rounded-pill ps-1 fw-bold text-dark">
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="3000" className="row mt-2">
                        <b>Theme Customize <span className="text-info">95%</span></b>
                        <div className='w-100 bg-secondary rounded-pill p-1'>
                            <div style={{ width: '95%', height: '3px', margin: '1px' }} className="skill-mouseOver rounded-pill ps-1 fw-bold text-dark">
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="3000" className="row mt-2">
                        <b>Google Merchant Account <span className="text-info">95%</span></b>
                        <div className='w-100 bg-secondary rounded-pill p-1'>
                            <div style={{ width: '95%', height: '3px', margin: '1px' }} className="skill-mouseOver rounded-pill ps-1 fw-bold text-dark">
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="3000" className="row mt-2">
                        <b>Wordpress <span className="text-info">85%</span></b>
                        <div className='w-100 bg-secondary rounded-pill p-1'>
                            <div style={{ width: '85%', height: '3px', margin: '1px' }} className="skill-mouseOver rounded-pill ps-1 fw-bold text-dark">
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="3000" className="mt-5">
                    <h4 className="fw-bold text-info">Also Know: </h4>
                    {
                        alsoSkills.map(skill => <button className="btn btn-secondary m-1" key={skill}>{skill}</button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;