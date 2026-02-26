import { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { personalInfo } from '../data/resumeData';
'use client';

/**
 * Hero Section
 * - Animated typing effect cycling through titles
 * - Stats row
 * - Download Resume + Contact Me CTAs
 */
export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const titles = personalInfo.titleAlternates;

  // Typing animation logic
 useEffect(() => {
  if (!titles || titles.length === 0) return;

  const currentTitle = titles[titleIndex];

  const delay = isDeleting
    ? 50
    : charIndex === currentTitle.length
    ? 2000
    : 80;

  const timer = setTimeout(() => {
    if (!isDeleting) {
      if (charIndex < currentTitle.length) {
        setDisplayedTitle(currentTitle.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else {
        setIsDeleting(true);
      }
    } else {
      if (charIndex > 0) {
        setDisplayedTitle(currentTitle.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
        console.log('herooooo');
      }
    }
  }, delay);

  return () => clearTimeout(timer);
}, [charIndex, isDeleting, titleIndex]);

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Main content */}
          <div>
            {/* Greeting label */}
            <span className={styles.label}>👋 Hello, I am</span>

            {/* Name */}
            <h1 className={styles.name}>
              {personalInfo.name.split(' ')[0]}{' '}
              <span>{personalInfo.name.split(' ')[1]}</span>
            </h1>

            {/* Animated title */}
            <div className={styles.titleRow}>
              <p className={styles.titleText}>
                {displayedTitle}
                <span className={styles.cursor} aria-hidden="true" />
              </p>
            </div>

            {/* Bio */}
            <p className={styles.bio}>{personalInfo.bio}</p>

            {/* CTA Buttons */}
            <div className={styles.actions}>
              <a
                href={personalInfo.resumeUrl}
                className="btn btn-primary"
                download
                target="_blank"
                rel="noreferrer"
              >
                ↓ Download Resume
              </a>
              <a
                href="#contact"
                className="btn btn-outline"
                onClick={scrollToContact}
              >
                Contact Me →
              </a>
            </div>

            {/* Stats */}
            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>3<span>+</span></div>
                <div className={styles.statLabel}>Projects Built</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>4<span>mo</span></div>
                <div className={styles.statLabel}>Internship</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>8.21</div>
                <div className={styles.statLabel}>CGPA</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>5<span>+</span></div>
                <div className={styles.statLabel}>Technologies</div>
              </div>
            </div>
          </div>

          {/* Decorative vertical text */}
          <div className={styles.verticalText}>
            Full Stack Developer · MERN · ML
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollDot} />
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  );
}
