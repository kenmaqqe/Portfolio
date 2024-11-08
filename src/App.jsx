import React from 'react';
import { useInView } from 'react-intersection-observer'; // Імпортуємо бібліотеку
import './App.css';
import { Contact, Footer, Hero, NavBar, Project } from './Component';

const App = () => {
  // Використовуємо useInView для кожної секції
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true, // Запускаємо анімацію лише один раз
    threshold: 0.2, // Анімація буде запускатись, коли 50% елементу буде видно
  });

  const { ref: projectRef, inView: projectInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div>
      <div className="container">
        <main>
          <NavBar />
          {/* Hero Section */}
          <section
            ref={heroRef}
            className={`Hero ${heroInView ? 'fade-in' : ''}`}
          >
            <Hero />
          </section>

          {/* Project Section */}
          <section
            ref={projectRef}
            className={`Project ${projectInView ? 'fade-in' : ''}`}
          >
            <Project />
          </section>

          {/* Contact Section */}
          <section
            ref={contactRef}
            className={`Contacts ${contactInView ? 'fade-in' : 'і'}`}
          >
            <Contact />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
