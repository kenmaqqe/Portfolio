import React, { useRef, useState } from 'react';
import Arrow from '../../assets/arrow.svg';
import './style.css';
import Typical from 'react-typical';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6xby9n8', 'template_15zarce', form.current, 'NwkI1tFhRel2fdfRp')
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSent(true); // Показуємо подяку після відправлення
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section className='ContactSection' id='contact-section'>
      <div className='ContactMe'>
        <h2 className='element'>
          <Typical steps={['Contact here', 1000, ' ', 500]} loop={Infinity} wrapper="p" />
        </h2>
        <img src={Arrow} alt="arrow-img" />
      </div>
      {isSent ? (
        <div className="thank-you-message">
          <p>Thanks :)</p> 
        </div>
      ) : (
        <form action="submit" className='Contact' ref={form} onSubmit={sendEmail}>
          <span>
            <label htmlFor="Name" className='Name'>Name:</label>
            <input type="text" name='to_name' id='Name' />
          </span>
          <span>
            <label htmlFor="Email" className='Email'>Email:</label>
            <input type="email" name='from_name' id='Email' />
          </span>
          <span className='TextSpan'>
            <label htmlFor="Text" className='Text'>Your Message:</label>
            <textarea name="message" id="Text"></textarea>
          </span>
          <div className='button'>
            <button type="submit">Send Here</button>
          </div>
        </form>
      )}
    </section>
  );
};

export default Contact;
