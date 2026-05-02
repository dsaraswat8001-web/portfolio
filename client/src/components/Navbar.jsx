import { useState, useEffect } from "react";
import "./Navbar.css";

const links = ["About", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="#hero" className="nav-logo">
  Devansh
</a>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
              {link}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
            Hire Me
          </a>
        </li>
      </ul>

      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
        <span className={open ? "bar open" : "bar"} />
        <span className={open ? "bar open" : "bar"} />
        <span className={open ? "bar open" : "bar"} />
      </button>
    </nav>
  );
}
