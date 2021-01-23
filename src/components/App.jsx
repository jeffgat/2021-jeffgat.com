import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import WebProjects from './WebProjects/WebProjects';
import DesignProjects from './DesignProjects/DesignProjects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  webProjectsData,
  designProjectsData,
  contactData,
  footerData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [webProjects, setWebProjects] = useState([]);
  const [designProjects, setDesignProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setWebProjects([...webProjectsData]);
    setDesignProjects([...designProjectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, webProjects, contact, footer, designProjects }}>
      <Hero />
      <About />
      <WebProjects />
      <DesignProjects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
