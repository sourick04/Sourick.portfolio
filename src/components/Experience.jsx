import styles from './Experience.module.css';
import { experience } from '../data/resumeData';

/**
 * Experience / Internships Section
 */
export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <span className="section-label">Work History</span>
        <h2 className="section-title">Experience</h2>
        <div className="divider" />

        <div className={styles.list}>
          {experience.map((exp, i) => (
            <div key={i} className={`${styles.card} card`}>
              {/* Header */}
              <div className={styles.header}>
                <div className={styles.headerLeft}>
                  <div className={styles.companyIcon}>
                    {exp.company.charAt(0)}
                  </div>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                </div>
                <div className={styles.headerRight}>
                  <span className={styles.period}>{exp.period}</span>
                  <span className={styles.duration}>{exp.duration}</span>
                </div>
              </div>

              {/* Highlights */}
              <ul className={styles.highlights}>
                {exp.highlights.map((point, j) => (
                  <li key={j} className={styles.highlight}>
                    <span className={styles.bullet}>→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech used */}
              <div className={styles.tech}>
                {exp.tech.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
