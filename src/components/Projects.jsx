import React from 'react';
import FEProjectArray from './FEProjectArray';
import ProjectCard from './ProjectCard';


export default function Projects() {
    const data = FEProjectArray.map(project => {
        return <ProjectCard 
        key={project.id}
        {...project}
        />
    })

    return(
        <div className="project-page">
            <header className="headers skills projects-header">Front End Projects</header>
            <div className="flexbox">
                {data}
            </div>
        </div>
    )
}