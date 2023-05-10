import { useState } from 'react';


function Contact() {
  const [ input, setInput ] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput(values => ({...values, [name]: value}));
}

const handleSubmit = (event) => {
  event.preventDefault();
  alert(input)
}

// add a validator for email addresses

return (
<div>

  <form className="contactForm" onSubmit={handleSubmit}>
    <label>Your Name:
    <input 
      type="text" 
      name="contactName" 
      value={input.contactName|| ""} 
      onChange={handleChange}
    />
    </label>
    <label>Your email:
      <input 
        type="text" 
        name="contactEmail" 
        value={input.contactEmail || ""} 
        onChange={handleChange}
      />
      </label>
      <input type="submit" />
  </form>

  </div>


);
}

export default Contact;