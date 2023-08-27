import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Social from './Social'


export default function Homepage() {

    return (
      <>
        <div className='container-fluid'
        style={{
            backgroundImage: 'url("https://i.imgur.com/QhnQ8HH.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}>
            <div className='homepage-flex container-fluid'>
                <p className='intro'>Hi, I'm</p>
                <p className='name'>Nichole</p>
                <p className='can-do'>Programmer | Designer | Photographer</p>
                <img className='avatar img-fluid' src='https://i.imgur.com/2K3Lvht.jpg' />
            </div>

      </div>
      <Social />
      </>
    )
}