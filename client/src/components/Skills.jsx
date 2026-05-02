import "./Skills.css";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Responsive Design", "Vite", "REST API Integration"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Python / Flask", "RESTful API Design", "Authentication / JWT", "WebSockets"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose ODM", "Database Design", "Data Modeling"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git & GitHub", "Docker (basics)", "Vercel / Netlify", "Render / Heroku", "VS Code", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <p className="section-label">Expertise</p>
        <h2 className="section-title">Technical Skills</h2>
        <div className="gold-line" />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-group">
              <h3 className="skill-category">{group.category}</h3>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill} className="skill-item">
                    <span className="skill-dot" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
