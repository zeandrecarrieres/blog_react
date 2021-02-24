import React from 'react'

function Contact() {
    return (
        <div className="contact">
            <h2>CONTACT</h2>
            <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" />
            <label htmlFor="name">Message: </label>
            <input type="textarea" name="name" id="message" />
            </div>
            <button className="send-btn">Send</button>
        
            
        </div>
    )
}

export default Contact
