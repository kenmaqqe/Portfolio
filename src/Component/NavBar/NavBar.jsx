import React from 'react';
import Logo from '../../assets/logo.svg';
import './style.css';

const NavBar = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf';  
    link.download = 'Resume.pdf'; 
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link);  
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <div className='logo'>
        <img src={Logo} alt="logo" />
        <span>kenmaqqe</span>
      </div>
      <div className='buttons'>
        <button onClick={handleDownload}>
          Resume
        </button>
        <button onClick={()=>scrollToSection('contact-section')}>
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
