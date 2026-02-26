import { useState } from 'react';
import styles from './Projects.module.css';
import { projects } from '../data/resumeData';

/**
 * Projects Section
 * - Cards with tech tags
 * - Filter by technology
 * - GitHub & Live Demo links
 */
export default function Projects() {
  const [filter, setFilter] = useState('All');

  // Collect unique tech tags from all projects
  const allTech = ['All', ...new Set(projects.flatMap(p => p.tech))];

  const filtered = filter === 'All'
    ? projects
    : projects.filter(p => p.tech.includes(filter));

  return (
    <section className="section" id="projects">
      <div className="container">
        <span className="section-label">What I've Built</span>
        <h2 className="section-title">Projects</h2>
        <div className="divider" />
        <p className="section-subtitle">
          A selection of personal and professional projects across full-stack web development and machine learning.
        </p>

        {/* Tech filter */}
        <div className={styles.filters}>
          {allTech.map(tech => (
            <button
              key={tech}
              className={`${styles.filterBtn} ${filter === tech ? styles.active : ''}`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className={styles.grid}>
          {filtered.map((project, i) => (
            <div key={i} className={`${styles.card} card`}>
              {/* Top bar decoration */}
              <div className={styles.cardBar} />

              <div className={styles.cardBody}>
                {project.featured && (
                  <span className={styles.featuredBadge}>⭐ Featured</span>
                )}

                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                {/* Tech tags */}
                <div className={styles.tech}>
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className={`${styles.techTag} tag`}
                      onClick={() => setFilter(t)}
                      style={{ cursor: 'pointer' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card footer: links */}
              <div className={styles.cardFooter}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.linkBtn}
                >
                  ⌥ GitHub
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles.linkBtn} ${styles.liveBtn}`}
                  >
                    ↗ Live Demo
                  </a>
                ) : (
                  <span className={styles.noLive}>Private / WIP</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className={styles.empty}>
            No projects found for "{filter}".{' '}
            <button onClick={() => setFilter('All')}>Show all</button>
          </div>
        )}
      </div>
    </section>
  );
}
