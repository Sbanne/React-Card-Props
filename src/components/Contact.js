import React from 'react'
import mail from '../images/Mail-Icon.svg'
import Phone from '../images/phone.png'
export default function Contact(props) {
    return (
        <div className="contact-card">
            <img src={props.img} alt="img" />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={Phone} alt="img" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mail} alt="img" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}