import styles from './Footer.module.css';
import { personalInfo } from '../data/resumeData';
import logo from '../../pictures/SB.png';

/**
 * Footer Component
 * - Social links
 * - Copyright
 * - Back to top
 */
export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Brand */}
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

          {/* Quick links */}
          <div>
            <h4 className={styles.colTitle}>Navigation</h4>
            <nav className={styles.navLinks}>
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className={styles.colTitle}>Connect</h4>
            <div className={styles.socials}>
              <a href={`mailto:${personalInfo.email}`} className={styles.socialLink} aria-label="Email">
                <span>✉</span> Email
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="GitHub">
                <span>⌥</span> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <span>in</span> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} Sourick Banerjee. Built with React & ❤️
          </p>
          <button className={styles.backToTop} onClick={scrollToTop} aria-label="Back to top">
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
