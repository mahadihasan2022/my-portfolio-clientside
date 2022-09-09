import { faCode, faCodeBranch, faFileImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Accordion } from 'react-bootstrap';

const ProjectDetails = (props) => {
    const { _id, title, img, description, categories, technology, features, liveSite, clientCode, serverCode } = props.project;
    const onMouseOverImageHandler = id => {
        document.getElementById(`project-image-hover` + id).style.backgroundPosition = 'bottom';
    }
    const onMouseOutImageHandler = id => {
        document.getElementById(`project-image-hover` + id).style.backgroundPosition = 'top';
    }
    const technologyDetails = technology.split(',');
    const featuresDetails = features.split(',');
    const categoriesDetails = categories.split(',');
    return (
        <div
            className="col-md-6">
            <div className="border-global-style p-2 m-2 mt-4">
                <div
                    id={"project-image-hover" + _id}
                    onMouseOver={() => onMouseOverImageHandler(_id)}
                    onMouseOut={() => onMouseOutImageHandler(_id)}
                    style={{ height: 400, backgroundPosition: 'top', transition: 'ease-in-out 4s', backgroundSize: 'cover', backgroundImage: `url(${img})`, borderRadius: 10 }}
                    className="p-2">
                </div>
                <h2 data-aos="fade-up" data-aos-duration="2000" className="text-info fw-bolder mt-3">{title}</h2>

                <div data-aos="fade-up" data-aos-duration="3000">
                    <a href={liveSite} className="btn btn-info m-1" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFileImage} /> Live Site
                    </a>
                    <a href={clientCode} className="btn btn-info m-1" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faCode} /> Client Code
                    </a>
                </div>
                {
                    serverCode &&
                    <a href={serverCode} className="btn btn-info m-1" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faCodeBranch} /> Server Code
                    </a>
                }

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <div>
                                {
                                    categoriesDetails?.map(ctg => <span key={ctg} className="btn btn-danger m-1">{ctg}</span>)
                                }
                                <h2 className="text-secondary">Details Information</h2>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body style={{ borderRadius: 5 }} className="project-details-div">
                            <div className="p-1">
                                <div className="mt-5 mb-5">
                                    <p><b className="text-info">Technology: </b></p>
                                    {
                                        technologyDetails.map(tec => <button className="btn btn-secondary m-1" key={tec}>{tec}</button>)
                                    }
                                </div>
                                <div className="mt-5 mb-5">
                                    <p><b className="text-info">Features: </b></p>
                                    {
                                        featuresDetails.map(fea => <li className="" key={fea}>{fea}</li>)
                                    }
                                </div>
                                <p style={{ textAlign: 'justify' }}><b className="text-info">Description: </b>{description}</p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>


            </div>
        </div>
    );
};

export default ProjectDetails;