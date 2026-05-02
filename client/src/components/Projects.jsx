import "./Projects.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        {project.image ? (
          <img 
  src={project.image || "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80"} 
  alt={project.title} 
  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80" }}
  loading="lazy" 
/>
        ) : (
          <div className="project-image-placeholder" />
        )}
        <div className="project-overlay">
          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                GitHub
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link primary">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-info">
        <div className="project-tech">
          {project.tech?.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
      </div>
    </div>
  );
}

export default function Projects({ projects, loading }) {
  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <p className="section-label">My Work</p>
        <h2 className="section-title">Selected Projects</h2>
        <div className="gold-line" />

        {loading ? (
          <div className="projects-loading">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="skeleton-card" />
            ))}
          </div>
        ) : projects.length > 0 ? (
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p._id} project={p} />
            ))}
          </div>
        ) : (
          <p className="no-projects">No projects found. Check your API connection.</p>
        )}
      </div>
    </section>
  );
}
