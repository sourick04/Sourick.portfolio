import { useState } from 'react';
import styles from './Contact.module.css';
import { personalInfo } from '../data/resumeData';

/**
 * Contact Section
 * - Contact form with validation (name, email, message)
 * - Social links
 * - Uses mailto: as fallback (can integrate Formspree/EmailJS)
 */
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Simple validation
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Invalid email address';
    if (!form.message.trim()) errs.message = 'Message is required';
    else if (form.message.trim().length < 20) errs.message = 'Message too short (min 20 chars)';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    // Clear error on change
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setLoading(true);

    // Mailto fallback — replace with Formspree/EmailJS for real sending
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      form.subject || `Portfolio Contact from ${form.name}`
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;

    setTimeout(() => {
      window.open(mailtoUrl, '_blank');
      setSubmitted(true);
      setLoading(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">Contact Me</h2>
        <div className="divider" />
        <p className="section-subtitle">
          Have an opportunity, project idea, or just want to say hello? I'd love to hear from you.
        </p>

        <div className={styles.grid}>
          {/* Left: Contact info */}
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Let's Connect</h3>
              <p className={styles.infoText}>
                I'm actively looking for internships, freelance opportunities, and collaborative projects.
                Feel free to reach out through any of the channels below.
              </p>

              <div className={styles.contactItems}>
                <a href={`mailto:${personalInfo.email}`} className={styles.contactItem}>
                  <div className={styles.contactIcon}>✉</div>
                  <div>
                    <div className={styles.contactLabel}>Email</div>
                    <div className={styles.contactValue}>{personalInfo.email}</div>
                  </div>
                </a>

                <a href={personalInfo.github} target="_blank" rel="noreferrer" className={styles.contactItem}>
                  <div className={styles.contactIcon}>⌥</div>
                  <div>
                    <div className={styles.contactLabel}>GitHub</div>
                    <div className={styles.contactValue}>github.com/sourick04</div>
                  </div>
                </a>

                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={styles.contactItem}>
                  <div className={styles.contactIcon}>in</div>
                  <div>
                    <div className={styles.contactLabel}>LinkedIn</div>
                    <div className={styles.contactValue}>sourick-banerjee</div>
                  </div>
                </a>

                <div className={styles.contactItem} style={{ cursor: 'default' }}>
                  <div className={styles.contactIcon}>📱</div>
                  <div>
                    <div className={styles.contactLabel}>Phone</div>
                    <div className={styles.contactValue}>{personalInfo.phone}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className={styles.successBox}>
                <div className={styles.successIcon}>🎉</div>
                <h3>Message Sent!</h3>
                <p>Your email client has opened. Thanks for reaching out — I'll get back to you soon.</p>
                <button className="btn btn-outline" onClick={() => setSubmitted(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.row}>
                  {/* Name */}
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">Your Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                      placeholder="Riya Sharma"
                    />
                    {errors.name && <span className={styles.error}>{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                      placeholder="riya@example.com"
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                  </div>
                </div>

                {/* Subject */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Internship Opportunity"
                  />
                </div>

                {/* Message */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    placeholder="Hi Sourick, I'd love to discuss..."
                  />
                  {errors.message && <span className={styles.error}>{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary ${loading ? styles.loading : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
