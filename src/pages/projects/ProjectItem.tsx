import React from 'react';

export interface ProjectItemProps {
    name: string;
    description: string;
    tag: string;
    image: string;
    techStack: string[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({ name, description, tag, image, techStack }) => {
    return (
        <div className='project-item'>
            <img className='project-cover' src={image} alt="thumbnail of project" />
            <div className='project-details'>
                <div className='project-header'><h3 className='project-title'>{name}</h3> <p className='project-tag'>{tag}</p></div>
                <p className='project-description'>{description}</p>
                <ul className='tech-stack'>
                    {techStack.map((tech, index) => (
                        <li className='tech-item' key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectItem;
