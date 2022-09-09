import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BlogDetails = (props) => {
    const { headline, img, description, link } = props.blog;
    const imageOnMouseEnter = (e) => {
        e.target.style.transform = 'scale(1.2) rotate(10deg)';
    }
    const imageOnMouseOut = (e) => {
        e.target.style.transform = 'scale(1)'
    }
    return (
        <div
            className="col-lg-4 col-md-6"
        >
            <div
                className="border-global-style p-2 m-2 mt-4 "
                style={{ height: '95%' }}
            >
                <div style={{ overflow: 'hidden' }}>
                    <img
                        onMouseEnter={imageOnMouseEnter}
                        onMouseOut={imageOnMouseOut}
                        data-aos="flip-up" data-aos-duration="1000"
                        style={{ borderRadius: '7px', transition: '0.5s' }}
                        className="w-100"
                        src={img} alt=""
                    />
                </div>

                <h5 data-aos="fade-up" data-aos-duration="2000" className="pt-3 text-info">{headline}</h5>
                <p data-aos="fade-up" data-aos-duration="2500" style={{ textAlign: "justify" }}><small>{description} <span className="text-secondary">...see more</span></small></p>
                <div data-aos="fade-up" data-aos-duration="3000">
                    <a href={link} className="btn btn-info" target="_blank" rel="noopener noreferrer">
                        Read Continue... <FontAwesomeIcon icon={faArrowTrendUp} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;