import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-container about-grid">
        <div className="about-left">
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Crafting digital<br />
            <em>experiences</em>
          </h2>
          <div className="gold-line" />
          <p className="about-text">
            I&apos;m a passionate full-stack developer with a love for clean code,
            thoughtful design, and solving real-world problems through technology.
            I specialize in building end-to-end web applications — from designing
            intuitive user interfaces to architecting scalable backend systems.
          </p>
          <p className="about-text">
            When I&apos;m not writing code, you&apos;ll find me exploring new frameworks,
            contributing to open source, or reading about software architecture.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Learning</span>
            </div>
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Cups of Coffee</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-image-frame">
            <div className="about-image-placeholder">
              <span>YOUR PHOTO</span>
              <p>Replace this div with an &lt;img&gt; tag</p>
            </div>
            <div className="frame-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
