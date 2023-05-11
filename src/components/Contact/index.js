import { useState } from 'react';
import '../../styles/Contact.css';


function Contact() {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(input));
  }

  // add a validator for email addresses
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }


  return (
    <div className="contactMe">

      <h1>Let's Connect</h1>

      <form className="contactForm" onSubmit={handleSubmit}>
        <div><label>Your Name:
          <input
            type="text"
            name="contactName"
            value={input.contactName || ""}
            onChange={handleChange}
          />
        </label>
        </div>


        <div>
          <label>Your email:
            <input
              type="text"
              name="contactEmail"
              value={input.contactEmail || ""}
              onChange={handleChange}
              className={!validateEmail(input.contactEmail) ? "invalid" : ""}
            />
          </label>
        </div>

        <div>
          <label>
            Message:
            <textarea
              name="message"
              value={input.message || ""}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <input type="submit" />

        </div>
      </form>

    </div>


  );
}

export default Contact;