<section id="contact" class="section">
  <div class="container">
    <div class="section-header">
      <p class="section-label">Contact</p>
      <h2>Get in Touch</h2>
    </div>
    <div class="contact-grid">
      <div class="contact-info">
        <p class="contact-lead serif">
          Open to software engineering roles and interesting problems.
          Also available for open-source collaboration and hackathon mentoring.
        </p>
        <div class="contact-details">
          <div class="contact-item">
            <span class="contact-label">Email</span>
            <a href="mailto:hari@laddu.cc" class="contact-value">hari@laddu.cc</a>
          </div>
          <div class="contact-item">
            <span class="contact-label">Phone</span>
            <a href="tel:+919995283835" class="contact-value">+91 99952 83835</a>
          </div>
          <div class="contact-item">
            <span class="contact-label">Location</span>
            <span class="contact-value">Thrissur, Kerala, India</span>
          </div>
          <div class="contact-item">
            <span class="contact-label">GitHub</span>
            <a href="https://github.com/hxri-nxrxyxn" target="_blank" rel="noopener noreferrer" class="contact-value">@hxri-nxrxyxn</a>
          </div>
          <div class="contact-item">
            <span class="contact-label">LinkedIn</span>
            <a href="https://linkedin.com/in/harinarayanmr" target="_blank" rel="noopener noreferrer" class="contact-value">@harinarayanmr</a>
          </div>
        </div>
      </div>
      <div class="contact-cta">
        <div class="contact-card">
          <h3 class="contact-card-title">Available for opportunities</h3>
          <p class="contact-card-text">
            Open to software engineering roles, open-source collaboration,
            and hackathon judging or mentoring.
          </p>
          <a href="mailto:hari@laddu.cc" class="btn btn-primary contact-btn">
            Send an Email
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-2xl);
    align-items: start;
  }

  .contact-lead {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--color-black-60);
    margin-bottom: var(--space-xl);
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }

  .contact-item {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: var(--space-md);
    padding: var(--space-sm) 0;
    border-bottom: 1px solid var(--color-black-10);
  }

  .contact-label {
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--color-black-40);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .contact-value {
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    color: var(--color-black);
    text-decoration: none;
  }

  .contact-value:hover {
    color: var(--color-cardinal);
  }

  .contact-card {
    padding: var(--space-xl);
    border: 1px solid var(--color-black-20);
    border-radius: var(--radius-md);
    background: var(--color-black-10);
  }

  .contact-card-title {
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 1.125rem;
    margin-bottom: var(--space-sm);
  }

  .contact-card-text {
    font-size: 0.875rem;
    color: var(--color-black-60);
    line-height: 1.7;
    margin-bottom: var(--space-lg);
  }

  .contact-btn {
    width: 100%;
    text-align: center;
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

  @media (max-width: 768px) {
    .contact-grid {
      grid-template-columns: 1fr;
      gap: var(--space-xl);
    }
  }
</style>
