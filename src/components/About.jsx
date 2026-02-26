import styles from './About.module.css';
import { personalInfo, summary } from '../data/resumeData';
import logo from '../../pictures/WhatsApp Image 2026-02-26 at 12.47.37 PM.jpeg';

/**
 * About Section
 * - Professional summary
 * - Social/contact links
 */
export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className={styles.grid}>
          {/* Left: Text */}
          <div className={styles.content}>
            <span className="section-label">Who I Am</span>
            <h2 className="section-title">About Me</h2>
            <div className="divider" />

            {summary.split('\n').map((para, i) => (
              <p key={i} className={styles.para}>{para.trim()}</p>
            ))}

            {/* Contact chips */}
            <div className={styles.links}>
              <a href={`mailto:${personalInfo.email}`} className={styles.chip}>
                <span>✉</span> {personalInfo.email}
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className={styles.chip}>
                <span>⌥</span> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={styles.chip}>
                <span>in</span> LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Decorative card */}
          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.avatar}>
                <div>
                    <a
                      href="#hero"
                      className={styles.logo}
                      onClick={(e) => {
                          e.preventDefault();
                          document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                      <img src={logo} alt="Sourick logo" className={styles.logoImg} />        
                    </a>
                  </div>
              </div>
              <h3 className={styles.cardName}>{personalInfo.name}</h3>
              <p className={styles.cardTitle}>{personalInfo.title}</p>

              <div className={styles.cardMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>📍</span>
                  <span>Kolkata, West Bengal, India</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>🎓</span>
                  <span>IEM, ECE — 2023 to Present</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>📱</span>
                  <span>{personalInfo.phone}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>🌐</span>
                  <span>GDG Member, IEM</span>
                </div>
              </div>

              {/* Status badge */}
              <div className={styles.statusBadge}>
                <span className={styles.statusDot} />
                Available for opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
