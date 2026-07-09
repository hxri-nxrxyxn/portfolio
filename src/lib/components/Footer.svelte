<footer class="footer">
  <div class="container">
    <div class="footer-inner">
      <p class="footer-text">
        &copy; {new Date().getFullYear()} Harinarayan Maniyanthara Rajesh. Built with SvelteKit.
      </p>
      <div class="footer-links">
        <a href="https://github.com/hxri-nxrxyxn" target="_blank" rel="noopener noreferrer" class="footer-link">GitHub</a>
        <span class="footer-divider">·</span>
        <a href="https://linkedin.com/in/harinarayanmr" target="_blank" rel="noopener noreferrer" class="footer-link">LinkedIn</a>
        <span class="footer-divider">·</span>
        <a href="mailto:hari@laddu.cc" class="footer-link">Email</a>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    padding: var(--space-xl) 0;
    border-top: 1px solid var(--color-black-20);
    margin-top: var(--space-2xl);
  }

  .footer-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-md);
  }

  .footer-text {
    font-size: 0.8125rem;
    color: var(--color-black-40);
    margin: 0;
  }

  .footer-links {
    display: flex;
    gap: var(--space-sm);
    align-items: center;
  }

  .footer-link {
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--color-black-50);
    text-decoration: none;
    transition: color var(--transition);
  }

  .footer-link:hover {
    color: var(--color-cardinal);
  }

  .footer-divider {
    color: var(--color-black-30);
    font-size: 0.8125rem;
  }
</style>
