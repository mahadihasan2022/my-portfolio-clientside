import { SocialIcon } from 'react-social-icons';
import React from 'react';

const Available = () => {
    return (
        <div>
            <a title="Facebook" className="fs-3 m-1 text-info" href="https://www.facebook.com/mahadihasan.mim.56" target="_blank" rel="noopener noreferrer">
            <SocialIcon url="https://facebook.com" bgColor="black" fgColor="white" ></SocialIcon>
            </a>
            <a title="Linkedin" className="fs-3 m-1 text-info" href="https://www.linkedin.com/in/mahadi-hasan-mim-a1b917229/" target="_blank" rel="noopener noreferrer">
            <SocialIcon url="https://linkedin.com" bgColor="Black" fgColor="white" ></SocialIcon>
            </a>
            <a title="Github" className="fs-3 m-1 text-info" href="https://github.com/mahadihasan2022" target="_blank" rel="noopener noreferrer">
            <SocialIcon url="https://github.com" bgColor="black" fgColor="white" ></SocialIcon>
            </a>
        </div>
    );
};

export default Available;