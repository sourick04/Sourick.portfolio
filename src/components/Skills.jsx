import { useState } from 'react';
import styles from './Skills.module.css';
import { skills, softSkills } from '../data/resumeData';

/**
 * Skills Section
 * - Technical skills grouped by category
 * - Soft skills as tags
 * - Tab filter between categories
 */

// Category icons mapping
const categoryIcons = {
  Frontend: '🖥',
  Backend: '⚙️',
  Databases: '🗄',
  Languages: '💻',
  'ML & AI': '🤖',
  Tools: '🔧',
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...Object.keys(skills)];

  const displayedSkills =
    activeCategory === 'All'
      ? skills
      : { [activeCategory]: skills[activeCategory] };

  return (
    <section className="section" id="skills">
      <div className="container">
        <span className="section-label">What I Know</span>
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="divider" />
        <p className="section-subtitle">
          A categorized view of my technical toolkit — from frontend frameworks to ML techniques.
        </p>

        {/* Category filter tabs */}
        <div className={styles.tabs}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.tab} ${activeCategory === cat ? styles.activeTab : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat !== 'All' && <span>{categoryIcons[cat]}</span>}
              {cat}
            </button>
          ))}
        </div>

        {/* Skill cards grid */}
        <div className={styles.grid}>
          {Object.entries(displayedSkills).map(([category, items]) => (
            <div key={category} className={`${styles.card} card`}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{categoryIcons[category]}</span>
                <h3 className={styles.cardTitle}>{category}</h3>
              </div>
              <div className={styles.tags}>
                {items.map(skill => (
                  <span key={skill} className={`${styles.skillTag} tag`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className={styles.softSkills}>
          <h3 className={styles.softTitle}>Soft Skills</h3>
          <div className={styles.softTags}>
            {softSkills.map(skill => (
              <span key={skill} className={styles.softTag}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
