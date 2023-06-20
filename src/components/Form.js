import "./FormStyles.css";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g83dlyd', 'template_wsw34cd', form.current, 'NZT707xxzT2xoi3Zo')
      .then((result) => {
          console.log(result.text);
          console.log('message send')
      }, (error) => {
          console.log(error.text);
      });
  };

  return <div className="form">
     <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" className="btn"/>
    </form>
  </div>;
};

export default Form;
