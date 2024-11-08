import React from 'react'
import Arrow from '../../assets/arrow.svg'
import projects from '../../data/projects'
import ButtonArrow from '../../assets/button.svg'
import './index.css'
import Typical from 'react-typical'

const Project = () => {
  return (
    <section className='project-section'>
      <div className='left'>
        <h2><Typical steps={['Featured Projects', 1000, ' ', 500]} loop={Infinity} wrapper="p" /></h2>
        <img src={Arrow} alt="arrow-image" />
      </div>
      <div className='right'>
        {projects.map((a,key)=>{
          return(
            <a key={key} className='project-card' href={a.link} target='_blank'>
              <img src={a.img} alt={a.name} />
              <span>
                <div>
                  <h3>{a.name}</h3>
                  <p>{a.description}</p>
                </div>
                <button><img src={ButtonArrow} alt="button-arrow"/></button>
              </span>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Project