import React from 'react'
import Logo from '../../assets/logo.svg'
import './style.css'

const Footer = () => {
  return (
    <footer>
      <div className='social-and-logo'>
        <div className='logo'>
          <img src={Logo} alt='logo' />
          <span>kenmaqqe</span>
        </div>
        <div className='social-media-footer'>
          <a href="https://www.linkedin.com/in/kenmaqqe/" target='_blank'>Linkedin</a>
          <a href="https://t.me/kenmaqqe" target='_blank'>Telegram</a>
          <a href="https://www.instagram.com/kenmaqe" target='_blank'>Instagram</a>
        </div>
      </div>
      <div className='copyright'>
        <h4>Copyright. Portfolio 2024</h4>
        <h4>Created by <a href="https://www.linkedin.com/in/kenmaqqe/" target='_blank'>kenmaqqe</a></h4>
      </div>
    </footer>
  )
}

export default Footer