import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link, Route, Routes } from 'react-router-dom'

export default function Social() {
    return(
        <>
            <nav className='navbar socials-flex'>
                <Link to="https://www.linkedin.com/in/nicholeroxanne/" target='_blank'>
                    <img className='little-links' src='https://i.imgur.com/nuOMY4p.jpg' />
                </Link>
                <Link to="https://www.instagram.com/codingnerdnichole/" target='_blank'>
                    <img className='little-links' src='https://i.imgur.com/DCJNHjz.jpg' />
                </Link>
                <Link to="https://github.com/HoTMeSSMoNSTeR" target='_blank'>
                    <img className='little-links' src='https://i.imgur.com/5hG6uEa.jpg' />
                </Link>
                <Link to="https://twitter.com/coding_nerd87" target='_blank'>
                    <img className='little-links' src='https://i.imgur.com/yaNkjUx.jpg' />
                </Link>
                {/* <Link to="" target='_blank'>
                    <img className='little-links' src='https://i.imgur.com/nuOMY4p.jpg' />
                </Link> */}
            </nav>
        </>
    )
}