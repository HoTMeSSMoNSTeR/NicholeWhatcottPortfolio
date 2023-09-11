import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';


export default function Contact() {

    return(
        <div>
            <form action='mailto:hotmessmonster@gmail.com' method="post" className="contact-form">
                <label className="form-label email-form" htmlFor="name">
                    Name: <input type="text" id="name" className="form-control-lg" />
                </label>
                <br />
                <label className="form-label email-form" htmlFor="email">
                    Email: <input type="email" className="form-control-lg" id="email" />
                </label>
                <br />
                <label className="form-label email-form" htmlFor="message">
                    Message: <textarea className="form-control-lg" rows={5}/>
                </label>
            </form>
        </div>
    )
}