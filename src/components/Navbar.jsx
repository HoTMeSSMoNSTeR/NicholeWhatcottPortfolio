import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Homepage from './Homepage';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Resume from './Resume'
import Blog from './Blog'


export default function Navbar() {

    return(
        <>
        <nav className='navbar navbar-expand nav-flex'>
            <Link className='nav-link navbar-text nav-color' to='/'>Home</Link>
            <Link className='nav-link navbar-text nav-color' to='/Skills'>Skills</Link>
            <Link className='nav-link navbar-text nav-color' to='/Projects'>Projects</Link>
            <Link className='nav-link navbar-text nav-color' to='/Blog'>Blog</Link>
            <Link className='nav-link navbar-text nav-color' to='/Resume'>Experience</Link>
            <Link className='nav-link navbar-text nav-color' to='/AboutMe'>About Me</Link>
        </nav>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/AboutMe' element={<AboutMe />} />
            <Route path='/Skills' element={<Skills />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Blog' element={<Blog />} />
            <Route path='/Resume' element={<Resume />} />
        </Routes>
        </>

    )
}