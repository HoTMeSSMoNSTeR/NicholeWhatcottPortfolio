import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
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
            <div className="contact-header">Please feel free to reach out with any questions or offers!!</div>
            <form ref={form} className="contact-form" id="contact-form" onSubmit={sendEmail}>
                <label className="form-label email-form" htmlFor="name">
                    Name: <input type="text" name="from_name" id="name" className="form-control-lg user_name" />
                </label>
                <br />
                <label className="form-label email-form" htmlFor="affil">
                    Company/Affiliation: <input type="text" id="affil" className="form-control-lg" />
                </label>
                <br />
                <label className="form-label email-form" htmlFor="email">
                    Email: <input type="email" name="reply_to" className="form-control-lg user_email" id="email" />
                </label>
                <br />
                <label className="form-label email-form" htmlFor="message">
                    Message: <textarea className="form-control-lg" rows={2} name="message"/>
                </label>
                <input type="submit" value="Send"/>
            </form>
        </div>
    )
}