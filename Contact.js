import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
    
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="firstName" value={form.firstName} onChange={handleInputChange} />
        
        <label>Last Name:</label>
        <input type="text" name="lastName" value={form.lastName} onChange={handleInputChange} />
        
        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleInputChange} />
        
        <label>Comments:</label>
        <textarea name="comments" value={form.comments} onChange={handleInputChange} />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
