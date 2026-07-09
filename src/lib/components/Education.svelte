<section id="education" class="section">
  <div class="container">
    <div class="section-header">
      <p class="section-label">Education</p>
      <h2>Saintgits College of Engineering</h2>
    </div>
    <div class="education-card">
      <div class="education-main">
        <h3 class="education-degree">B.Tech in Computer Science & Engineering</h3>
        <p class="education-location">Kottayam, Kerala</p>
        <div class="education-meta">
          <span class="education-gpa">CGPA: <strong>7.5 / 10</strong></span>
          <span class="education-divider">·</span>
          <span class="education-year">Expected Graduation: April 2027</span>
        </div>
      </div>
      <div class="education-logo">
        <span class="education-initials">S</span>
      </div>
    </div>
  </div>
</section>

<style>
  .education-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-xl);
    border: 1px solid var(--color-black-20);
    border-radius: var(--radius-md);
    gap: var(--space-xl);
    transition: border-color var(--transition);
  }

  .education-card:hover {
    border-color: var(--color-cardinal-light);
  }

  .education-degree {
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 1.125rem;
    margin-bottom: var(--space-xs);
  }

  .education-location {
    font-size: 0.875rem;
    color: var(--color-black-50);
    margin-bottom: var(--space-sm);
  }

  .education-meta {
    font-size: 0.875rem;
    color: var(--color-black-50);
    display: flex;
    gap: var(--space-sm);
    flex-wrap: wrap;
  }

  .education-meta strong {
    color: var(--color-black);
  }

  .education-divider {
    color: var(--color-black-30);
  }

  .education-logo {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--color-cardinal);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .education-initials {
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--color-white);
  }

  @media (max-width: 480px) {
    .education-card {
      flex-direction: column;
      text-align: center;
    }
    .education-meta {
      justify-content: center;
    }
  }
</style>
