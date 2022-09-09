import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import projectSvg from '../../image/svg/project.svg'
import ProjectDetails from './ProjectDetails';

const Project = () => {
    const [projectsData, setProjectsData] = useState([]);
    useEffect(() => {
        axios('https://hidden-savannah-18290.herokuapp.com/projects')
        .then(res => {
            if(res.status === 200){
                let getAllProjects = []
                res.data.map(project => getAllProjects = [project, ...getAllProjects])
                setProjectsData(getAllProjects)
            }
            if(res.status === 404){
                window.location.reload();
            }
        })
    },[])
    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center mt-5 pb-2 border-bottom border-info border-5 text-info">My Resent Project</h2>
            <div className="text-center">
                <img
                    data-aos="flip-up"
                    data-aos-duration="2500"
                    className="w-50" src={projectSvg} alt="" />
            </div>
            <div className="row">
                {
                    projectsData.map(project => <ProjectDetails key={project._id} project={project}></ProjectDetails>)
                }
            </div>
            <Link to="/add-project" className="btn btn-outline-info mt-3">Add New Project</Link>
        </div>
    );
};

export default Project;