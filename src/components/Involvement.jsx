import styles from './Involvement.module.css';
import { involvement } from '../data/resumeData';

/**
 * Professional Involvement & Achievements Section
 */
export default function Involvement() {
  return (
    <section className="section" id="involvement">
      <div className="container">
        <span className="section-label">Community & Growth</span>
        <h2 className="section-title">Involvement & Achievements</h2>
        <div className="divider" />

        <div className={styles.grid}>
          {involvement.map((item, i) => (
            <div key={i} className={`${styles.card} card`}>
              <span className={styles.icon}>{item.icon}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}

          {/* Static achievement card */}
          <div className={`${styles.card} ${styles.accentCard} card`}>
            <span className={styles.icon}>🎯</span>
            <h3 className={styles.title}>Strong Academic Performance</h3>
            <p className={styles.description}>
              Maintained a CGPA of 8.21 through the first two years of B.Tech at IEM, 
              balancing coursework with active development projects and internship work.
            </p>
          </div>

          <div className={`${styles.card} card`}>
            <span className={styles.icon}>💡</span>
            <h3 className={styles.title}>AI/ML Self-Learning</h3>
            <p className={styles.description}>
              Independently developed and deployed a Movie Recommendation Model using Python 
              and ML techniques — demonstrating initiative beyond the classroom curriculum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
