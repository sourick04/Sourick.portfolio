import styles from './Education.module.css';
import { education } from '../data/resumeData';

/**
 * Education Section
 * Timeline-style layout
 */
export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <span className="section-label">My Background</span>
        <h2 className="section-title">Education</h2>
        <div className="divider" />

        <div className={styles.timeline}>
          {education.map((edu, i) => (
            <div key={i} className={styles.item}>
              {/* Timeline line + dot */}
              <div className={styles.timelineTrack}>
                <div className={styles.dot} />
                {i < education.length - 1 && <div className={styles.line} />}
              </div>

              {/* Content card */}
              <div className={`${styles.card} card`}>
                <div className={styles.cardTop}>
                  <span className={styles.icon}>{edu.icon}</span>
                  <span className={styles.period}>{edu.period}</span>
                </div>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <p className={styles.institution}>{edu.institution}</p>
                <div className={styles.detail}>
                  <span className="tag">{edu.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
