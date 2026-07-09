<section id="about" class="section">
  <div class="container">
    <div class="section-header">
      <p class="section-label">About</p>
      <h2>Product-focused engineering</h2>
    </div>
    <div class="about-grid">
      <div class="about-text">
        <p class="serif about-lead">
          I build systems that balance performance, simplicity, and real-world impact.
          My approach is rooted in deep understanding of the full stack — from kernel
          internals to CI/CD pipelines.
        </p>
        <p>
          As a <strong>Debian Package Maintainer</strong>, I maintain production-quality
          software adhering to rigorous open-source standards. My <strong>9 hackathon
          wins</strong> span AI/ML, cybersecurity, and edge computing — each pushing
          me to ship working prototypes under tight constraints.
        </p>
        <p>
          Currently pursuing my B.Tech in Computer Science at <strong>Saintgits College
          of Engineering</strong>, I'm focused on building systems that matter — whether
          it's a zero-trace kiosk OS, an EV dashboard, or an edge-AI surveillance system.
        </p>
      </div>
      <div class="about-stats">
        <div class="stat">
          <span class="stat-number">9×</span>
          <span class="stat-label">Hackathon Winner</span>
        </div>
        <div class="stat">
          <span class="stat-number">5+</span>
          <span class="stat-label">Production Projects</span>
        </div>
        <div class="stat">
          <span class="stat-number">Go</span>
          <span class="stat-label">Primary Language</span>
        </div>
        <div class="stat">
          <span class="stat-number">Debian</span>
          <span class="stat-label">Package Maintainer</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-2xl);
    align-items: start;
  }

  .about-lead {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--color-black);
  }

  .about-text p {
    color: var(--color-black-60);
  }

  .about-text strong {
    color: var(--color-black);
    font-weight: 600;
  }

  .about-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-lg);
  }

  .stat {
    padding: var(--space-lg);
    background: var(--color-black-10);
    border-radius: var(--radius-md);
    text-align: center;
  }

  .stat-number {
    display: block;
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 1.75rem;
    color: var(--color-cardinal);
    margin-bottom: var(--space-xs);
  }

  .stat-label {
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--color-black-50);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  @media (max-width: 768px) {
    .about-grid {
      grid-template-columns: 1fr;
      gap: var(--space-xl);
    }
    .about-stats {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 480px) {
    .about-stats {
      grid-template-columns: 1fr;
    }
  }
</style>
