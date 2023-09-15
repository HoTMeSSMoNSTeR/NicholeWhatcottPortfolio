import React, {useRef} from 'react'
// import emailjs from 'emailjs'
import 'bootstrap/dist/css/bootstrap.css';


export default function Contact() {

    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm('service_wxle4fi', 'template_s8oftpj', form.current, 'kY2gwtA_SiZklUywK')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text);
        });

    };


    return(
        <div>
            <form ref={form} className="contact-form" id="contact-form" onSubmit={sendEmail}>
                <label className="form-label email-form" htmlFor="name">
                    Name: <input type="text" id="name" className="form-control-lg" />
                </label>
                <br />
                <label className="form-label email-form" htmlFor="affil">
                    Company/Affiliation: <input type="text" id="affil" className="form-control-lg" />
                </label>
                <br />
                <label className="form-label email-form" htmlFor="email">
                    Email: <input type="email" className="form-control-lg" id="email" />
                </label>
                <br />
                <label className="form-label email-form" htmlFor="message">
                    Message: <textarea className="form-control-lg" rows={2}/>
                </label>
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}