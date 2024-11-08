import React from 'react'
import Avatar from '../../assets/Avatar.svg'
import './style.css'
import skils from '../../data/tech-skils'
import language from '../../data/language'
import socials from '../../data/socials'

const Hero = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section>
      <div className='hero-info'>
        <div className='hero-info-text'>
          <h1>
            I <span className='underlined'>develop</span> sites for any taste
          </h1>
          <p>
            I'm excited to design and build your website. I'll create a user-friendly experience that looks great and functions perfectly
          </p>
          <button onClick={()=>scrollToSection('contact-section')}>Hire Me</button>
        </div>
        <div className='hero-info-photo'>
          <img src={Avatar} alt="my-avatar" />
        </div>
      </div>
      <div className='card'>
        <div className='card-tech'>
          <span>Tech skils</span>
          <ul>
            {skils.map((a,key)=>{
              return(<li key={key} className='tech-li'>
                <a className='tech-link' href={a.link} target="_blank">
                  <img src={a.img} alt={a.name} className='tech-img' />
                  <h3 className='tech-name'>{a.name}
                  </h3>
                </a>
                </li>)
            })}
          </ul>
        </div>
        <div className='card-lang'>
          <span>Language</span>
          <ul>
            {language.map((a,key)=>{
              return(
                <li key={key} className='lang'>
                  <h3>{a.name} {a.level}</h3>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='card-social'>
            <span>Social media</span>
            <ul>
              {socials.map((a,key)=>{
                return(
                  <li key={key}>
                    <a href={a.link} className='social-link' target="_blank">
                      <img src={a.img} alt={a.name} />
                      <h3 className='soc-name'>{a.name}</h3>
                    </a>
                  </li>
                )
              })}
            </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero