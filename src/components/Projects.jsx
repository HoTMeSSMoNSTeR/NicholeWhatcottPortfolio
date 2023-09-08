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
        <>
        <header className="headers skills projects-header">Projects</header>
        <div>
            {data}
        </div>
        </>
    )
}