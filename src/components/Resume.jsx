import React from 'react';

export default function Resume() {
    
    return (
        <div className='experiences'>
            <p className='cert-title headers'>Education & Certification</p>
            <div className='cert'>
                <img src='https://i.imgur.com/ysRcYh3.png' className='cert-img'/>
                <p>Front End Developer Bootcamp</p>
            </div>
            <div className='cert'>
                <img src='https://i.imgur.com/vibmYd1.jpg' className='cert-img' />
                <p>Bachelor of Scince in Art</p>
            </div>
            <div className='cert'>
                <img src='https://i.imgur.com/HrBGoyQ.png' className='res-img' />
                <img src='https://i.imgur.com/9DM3HsL.png' className='res-img' />
                <p>Resume</p>
            </div>
        </div>
    )
}