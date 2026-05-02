import { useState } from "react";
import "./Contact.css";

export default function Contact({ apiUrl }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        console.error(data.error);
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="contact-grid">
          <div className="contact-left">
            <p className="section-label">Let&apos;s Talk</p>
            <h2 className="section-title">
              Have a project<br />
              <em>in mind?</em>
            </h2>
            <div className="gold-line" />
            <p className="contact-text">
              I&apos;m currently open to new opportunities and interesting projects.
              Whether you have a question, a proposal, or just want to say hello
              — my inbox is always open.
            </p>
            <div className="contact-info">
              <div className="contact-info-item">
                <span className="info-label">Email</span>
                <a href="mailto:dsaraswat8001@gmail.com" className="info-value">dsaraswat8001@gmail.com</a>
              </div>
              <div className="contact-info-item">
                <span className="info-label">Location</span>
                <span className="info-value">Noida, India</span>
              </div>
              <div className="contact-info-item">
                <span className="info-label">GitHub</span>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="info-value">
                  github.com/yourusername
               <div className="contact-info-item">
  <span className="info-label">GitHub</span>
  <a href="https://github.com/dsaraswat8001-web" target="_blank" rel="noopener noreferrer" className="info-value">
    github.com/dsaraswat8001-web
  </a>
</div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              {status === "success" && (
                <p className="form-feedback success">✓ Message sent! I&apos;ll be in touch soon.</p>
              )}
              {status === "error" && (
                <p className="form-feedback error">✕ Something went wrong. Try again.</p>
              )}

              <button type="submit" className="btn-primary submit-btn" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
