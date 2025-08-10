import { useState } from 'react';
import './Contact.css'
import Swal from 'sweetalert2'

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "d0d4bc6e-b1f2-4a0b-84f1-af74c9c8d5a8");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
            // setResult("Form Submitted Successfully");
            Swal.fire({
                title: "Message Sent",
                text: "your message has been sent",
                icon: "success"
              });
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section className="contact">
            <form onSubmit={onSubmit}>
                <h2>Send Any Message!</h2>
                <div className="input-box">
                    <label>Name</label>
                    <input type="text" className="field" placeholder='enter your name' name='name' required/>
                </div>
                <div className="input-box">
                    <label>Email Address</label>
                    <input type="text" className="field" placeholder='enter your email' name='email' required/>
                </div>
                <div className="input-box">
                    <label>Message</label>
                    <textarea name="message" id="" className='field mess' placeholder='Message' required></textarea>
                    <button type='submit'>Send Message</button>
                </div>
            </form>
        </section>
    )
}

export default Contact