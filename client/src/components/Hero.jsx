import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-content">
        <p className="hero-greeting animate-fadeUp" style={{ animationDelay: "0.1s" }}>
          Hello, I&apos;m
        </p>
        <h1 className="hero-name animate-fadeUp" style={{ animationDelay: "0.25s" }}>
          Your<br />
          <span className="hero-name-italic">Name</span>
        </h1>
        <div className="hero-divider animate-fadeUp" style={{ animationDelay: "0.4s" }} />
        <p className="hero-role animate-fadeUp" style={{ animationDelay: "0.5s" }}>
          Full‑Stack Developer
        </p>
        <p className="hero-tagline animate-fadeUp" style={{ animationDelay: "0.65s" }}>
          I build fast, accessible, and beautiful web applications — from database to UI.
        </p>
        <div className="hero-actions animate-fadeUp" style={{ animationDelay: "0.8s" }}>
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-outline">Get in Touch</a>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
