import { useEffect, useState } from "react";
import Reveal from "./Reveal.jsx";
import { Icon } from "./Icons.jsx";
import { profile } from "../data.js";

const WEB3FORMS_ACCESS_KEY = "c9b490cc-6720-4e48-8e7a-8520a5c4b90e";

const contactItems = [
  {
    icon: "pin",
    title: "Address",
    value: "Islamabad, 44000 - Pakistan",
  },
  {
    icon: "mail",
    title: "Email",
    value: profile.email,
    link: `mailto:${profile.email}`,
  },
  {
    icon: "phone",
    title: "Phone",
    value: "+92 312 6457286",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => setSubmitted(false), 3000);
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject || `New message from ${form.name}`,
          message: form.message,
        }),
      });

      // Web3Forms answers 200 even for some logical failures, so the `success`
      // flag in the body is the real outcome — not response.ok alone.
      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        throw new Error(data?.message || "Failed to send");
      }
    } catch (err) {
      console.error("Error:", err);
      setError(err.message || "Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="wrap contact-grid">
        <div className="contact-copy">
          <Reveal as="h2" className="big">
            Contact Me
          </Reveal>
          <Reveal as="p" className="sub" delay={1}>
            Interested in working together or have a project in mind? I'd love
            to hear from you. Complete the contact form below, and I'll respond
            as soon as possible. You can also reach me directly via email.
          </Reveal>

          <Reveal className="contact-info" delay={2}>
            {contactItems.map((item) => {
              const IconCmp = Icon[item.icon];
              return (
                <div className="info-card" key={item.title}>
                  <div className="info-icon">
                    <IconCmp strokeWidth="1.8" />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    {item.link ? (
                      <a href={item.link}>{item.value}</a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>

        <Reveal className="contact-panel" delay={2}>
          {submitted && (
            <div
              style={{
                position: "fixed",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0, 0, 0, 0.6)",
                zIndex: 1000,
                backdropFilter: "blur(4px)",
              }}
            >
              <div
                style={{
                  background: "var(--panel)",
                  border: "1px solid var(--success)",
                  borderRadius: "20px",
                  padding: "48px 40px",
                  textAlign: "center",
                  maxWidth: "420px",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "var(--success-soft)",
                    border: "2px solid var(--success)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    fontSize: "28px",
                  }}
                >
                  ✓
                </div>
                <h3
                  style={{
                    fontSize: "24px",
                    color: "var(--text)",
                    marginBottom: "12px",
                    fontFamily: "'Sora', sans-serif",
                  }}
                >
                  Thank You!
                </h3>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "15px",
                    lineHeight: "1.6",
                    marginBottom: "28px",
                  }}
                >
                  Your message has been sent successfully. I'll get back to you
                  as soon as possible.
                </p>
              </div>
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field-row">
              <label>
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </label>
            </div>

            <div className="field-row">
              <label>
                <span>Phone</span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                />
              </label>
              <label>
                <span>Subject</span>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                />
              </label>
            </div>

            <label className="message-field">
              <span>Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here"
                required
              />
            </label>

            {error && (
              <div
                role="alert"
                style={{
                  background: "rgba(233, 84, 84, 0.12)",
                  border: "1px solid #e95454",
                  borderRadius: "10px",
                  padding: "12px 16px",
                  color: "var(--text)",
                  fontSize: "14px",
                  lineHeight: "1.5",
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={loading}
              style={{
                opacity: loading ? 0.6 : 1,
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Sending..." : "Submit Now"}
            </button>
          </form>
        </Reveal>
      </div>

      <Footer />
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-brand">{profile.name}</div>
      <div className="footer-tagline">
        Building modern full-stack and AI-enabled products that solve real
        business problems.
      </div>
      <div className="footer-social">
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <Icon.linkedin strokeWidth="1.6" />
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Icon.github strokeWidth="1.6" />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <Icon.mail strokeWidth="1.6" />
        </a>
      </div>
      <div className="footer-copy">
        © Copyright {profile.name}. All Rights Reserved
      </div>
    </footer>
  );
}
