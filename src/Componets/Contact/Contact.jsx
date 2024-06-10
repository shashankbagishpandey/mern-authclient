import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arow from '../../assets/white-arrow.png'

function Contact() {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "99dc6f28-c408-4a9a-8d4b-51b6f06faeaf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.  amet dignissimos culpa facere, quo aperiam rerum excepturi quia ab obcaecati.</p>
            <ul>
                <li> <img src={mail_icon} alt="" />Contact@gmail.com</li>
                <li> <img src={phone_icon} alt="" />9112345627</li>
                <li><img src={location_icon} alt="" />22 california Cambrige, <br/>M1 123 UNSsn jsadk</li>

            </ul>
        </div>
        <div className="contact-col">
            <form action="" onSubmit={onSubmit}>
                <label htmlFor="">Your name</label>
                <input type="text" name='name' placeholder='Enter your name ' />
                <label htmlFor="">Phone Number</label>
                <input type="text" name='phone' placeholder='Enter your phone ' />
                <label htmlFor="">Write your message here</label>
                <textarea name='message' id='' cols='30' rows='6' placeholder='Enter your message'></textarea>
                <button className='btn dark-btn'>submit now <img src={white_arow} alt="" /></button>

            </form>
            <span >{result}</span>


        </div>
      
    </div>
  )
}

export default Contact
