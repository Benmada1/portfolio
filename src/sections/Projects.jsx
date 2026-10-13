import ProjectCard from '../components/ProjectCard.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { featuredProjects } from '../data/projects.js';

export default function Projects({ onOpen }) {
  return (
    <section id="projets" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHead
          number="03"
          label="Projets"
          id="projects-title"
          title={<>Réalisations <em>choisies</em>.</>}
          intro="Applications de gestion, e-commerce et application fitness. Chaque étude de cas détaille les fonctionnalités et les technologies réellement utilisées."
        />
        <div className="cards">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}
