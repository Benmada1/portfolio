import { useCallback, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ProjectDialog from './components/ProjectDialog.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import Contact from './sections/Contact.jsx';
import FinalCta from './sections/FinalCta.jsx';
import { getProject } from './data/projects.js';

export default function App() {
  const [openId, setOpenId] = useState(null);
  const open = useCallback((id) => setOpenId(id), []);
  const close = useCallback(() => setOpenId(null), []);
  const project = openId ? getProject(openId) : null;

  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <Header />
      <main id="contenu">
        <Hero />
        <About />
        <Skills />
        <Projects onOpen={open} />
        <Experience onOpen={open} />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      {project ? <ProjectDialog key={project.id} project={project} onClose={close} /> : null}
    </>
  );
}
