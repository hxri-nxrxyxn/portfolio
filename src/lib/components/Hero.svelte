<section class="hero section">
  <div class="container">
    <div class="hero-content">
      <p class="section-label">Software Engineer</p>
      <h1 class="hero-title">
        Harinarayan<br />
        <span class="hero-title-serif">Maniyanthara Rajesh</span>
      </h1>
      <p class="hero-subtitle">
        I build production-ready systems — from <strong>Go</strong> backends
        and Linux-based kiosk OSes to edge AI and computer vision.
        I maintain <strong>Debian</strong> packages and have won
        <span class="highlight-count">9</span> hackathons by turning
        ambitious ideas into working products.
      </p>
      <div class="hero-actions">
        <a href="#projects" class="btn btn-primary">View Projects</a>
        <a href="#contact" class="btn btn-outline">Get in Touch</a>
      </div>
      <div class="hero-links">
        <a href="https://github.com/hxri-nxrxyxn" target="_blank" rel="noopener noreferrer" class="hero-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          <span>GitHub</span>
        </a>
        <a href="https://linkedin.com/in/harinarayanmr" target="_blank" rel="noopener noreferrer" class="hero-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          <span>LinkedIn</span>
        </a>
        <a href="mailto:hari@laddu.cc" class="hero-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          <span>hari@laddu.cc</span>
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: var(--header-height);
  }

  .hero-content {
    max-width: 780px;
  }

  .hero-title {
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: clamp(2.5rem, 7vw, 4.5rem);
    line-height: 1.05;
    letter-spacing: -0.03em;
    margin-bottom: var(--space-lg);
  }

  .hero-title-serif {
    font-family: var(--font-serif);
    font-weight: 400;
    font-style: italic;
    color: var(--color-cardinal);
  }

  .hero-subtitle {
    font-family: var(--font-sans);
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--color-black-60);
    margin-bottom: var(--space-xl);
    max-width: 600px;
  }

  .hero-subtitle strong {
    color: var(--color-black);
    font-weight: 600;
  }

  .highlight-count {
    display: inline-block;
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 1rem;
    color: var(--color-white);
    background: var(--color-cardinal);
    padding: 0.125rem 0.375rem;
    border-radius: var(--radius-sm);
    line-height: 1.3;
  }

  .hero-actions {
    display: flex;
    gap: var(--space-md);
    margin-bottom: var(--space-xl);
    flex-wrap: wrap;
  }

  .hero-links {
    display: flex;
    gap: var(--space-lg);
    flex-wrap: wrap;
  }

  .hero-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    font-family: var(--font-sans);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-black-50);
    text-decoration: none;
    transition: color var(--transition);
  }

  .hero-link:hover {
    color: var(--color-cardinal);
  }

  .hero-link svg {
    flex-shrink: 0;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-sans);
    font-weight: 600;
    font-size: 0.875rem;
    padding: 0.75rem 1.5rem;
    border-radius: var(--radius-md);
    text-decoration: none;
    transition: all var(--transition);
    cursor: pointer;
  }

  .btn-primary {
    background: var(--color-cardinal);
    color: var(--color-white);
    border: 1px solid var(--color-cardinal);
  }

  .btn-primary:hover {
    background: var(--color-cardinal-dark);
    border-color: var(--color-cardinal-dark);
  }

  .btn-outline {
    background: transparent;
    color: var(--color-black);
    border: 1px solid var(--color-black-30);
  }

  .btn-outline:hover {
    border-color: var(--color-cardinal);
    color: var(--color-cardinal);
  }
</style>
