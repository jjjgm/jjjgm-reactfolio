
import { useState } from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react'

import '../styles/Contact.css';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState(false);

  function handleEmailChange(e) {
    setEmail(e.target.value);
    if (!isValidEmail(e.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all required fields.');
    } else if (emailError) {
      alert('Please enter a valid email address.');
    } else {
      // NEEDS SERVER SIDE TO SEND FORM TO AN EMAIL OR STORE IN DB
      alert(`Thank you for reahing out ${name}!`);
      setName('');
      setEmail('');
      setMessage('');
      setEmailError(false);
    }
  }

  function isValidEmail(email) {
    // REGEX FOR EMAIL VALIDATION
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }


  return (
    <div className="contact">

      <h2 className="contact-title">Contact</h2>

    <Form className='form' onSubmit={handleSubmit}>
    <Form.Field>
      <label>Name</label>
      <input value={name} onChange={event => setName(event.target.value)} placeholder='Name' />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input value={email} onChange={handleEmailChange} placeholder='Email' />
    </Form.Field>

    <TextArea value={message} onChange={event => setMessage(event.target.value)} rows={2} placeholder={`Message`}/>

    <Button type='submit'>Submit</Button>
  </Form>

    </div>
  );
}

export default Contact;





