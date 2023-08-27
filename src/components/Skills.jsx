import React from 'react'
import './SkillsArray'
import SkillCard from './SkillCard'
import SkillsArray from './SkillsArray'
import 'bootstrap/dist/css/bootstrap.css'

export default function Skills() {
    const data = SkillsArray.map(skill => {
        return <SkillCard 
        key={skill.id}
        {...skill}
        />
    })

    return (
        <>
            <header className='headers skills'>I don't even have any good skills. 
            You know like nunchuck skills, bow hunting skills... </header>
            <p className='sub-header'>But I do have these skills.</p>
            <div className='container'>
                <div className='row'>
                    {data}
                </div>
            </div>
        </>
    )
}