import React from 'react'

function Contact() {
    return (
        <div id="contact">
            <h2>Contact</h2>
            <hr />
            <p>school 262</p>

            <form>
                <input type="text" name="name" placeholder="Name" />

                <input type="text" name="email" placeholder="Email" />

                <input type="text" name="message" placeholder="Message" />

                <button>Send Message</button>
            </form>

        </div>
    )
}
export default Contact;