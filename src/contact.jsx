// File: client/src/Contact.jsx
// Student: Harshit Madaan
// StudentID: 301493954
// Date: 2025-09-25
// Purpose: Contact form and contact details

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact(){
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName:'', lastName:'', phone:'', email:'', message:''
  });

  function handleChange(e){
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e){
    e.preventDefault();
    const messages = JSON.parse(localStorage.getItem('messages') || '[]');
    messages.push({ ...form, date: new Date().toISOString() });
    localStorage.setItem('messages', JSON.stringify(messages));

    console.log('Saved message:', form);

    navigate('/');
  }

  return (
    <div className="page">
    <section>
      <h1>Contact Me</h1>

      <div className="contact-layout">
        <div className="contact-panel">
          <h3>Contact Information</h3>
          <p>Email: harshitkmadaan@gmail.com</p>
          <p>Phone: +1 (437)757-1234</p>
          <p>Location: Toronto, ON</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>First Name
            <input name="firstName" value={form.firstName} onChange={handleChange} required/>
          </label>
          <label>Last Name
            <input name="lastName" value={form.lastName} onChange={handleChange} required/>
          </label>
          <label>Contact Number
            <input name="phone" value={form.phone} onChange={handleChange}/>
          </label>
          <label>Email Address
            <input name="email" type="email" value={form.email} onChange={handleChange} required/>
          </label>
          <label>Message
            <textarea name="message" value={form.message} onChange={handleChange} rows={5} required/>
          </label>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
    </div>
  );
}
