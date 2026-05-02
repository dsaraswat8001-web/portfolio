import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-container footer-inner">
        <p className="footer-copy">
          © {new Date().getFullYear()} Your Name. Built with React, Node.js & MongoDB.
        </p>
        <div className="footer-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:your@email.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
