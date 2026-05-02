import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-container footer-inner">
        <p className="footer-copy">
          © {new Date().getFullYear()} Devansh. Built with React, Node.js & MongoDB.
        </p>
        <div className="footer-links">
          <a href="https://github.com/dsaraswat8001-web" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:dsaraswat8001@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}