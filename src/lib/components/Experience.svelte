<script lang="ts">
  const experiences = [
    {
      role: 'Package Maintainer',
      org: 'Debian Project',
      period: 'Oct 2025 – Present',
      description: 'Package maintainer for the Debian Project. Ships the noss RSS/Atom feed aggregator — packaging, dependency updates, and security patches following Debian policy.',
    },
  ];
</script>

<section id="experience" class="section">
  <div class="container">
    <div class="section-header">
      <p class="section-label">Experience</p>
      <h2>Open Source & Professional</h2>
    </div>
    <div class="experience-list">
      {#each experiences as exp}
        <article class="experience-item">
          <div class="experience-meta">
            <span class="experience-period">{exp.period}</span>
          </div>
          <div class="experience-content">
            <h3 class="experience-role">{exp.role}</h3>
            <p class="experience-org">{exp.org}</p>
            <p class="experience-desc">{exp.description}</p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .experience-list {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .experience-item {
    display: grid;
    grid-template-columns: 140px 1fr;
    gap: var(--space-xl);
    padding: var(--space-lg) 0;
    border-bottom: 1px solid var(--color-black-20);
  }

  .experience-item:last-child {
    border-bottom: none;
  }

  .experience-period {
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--color-black-50);
    display: block;
    padding-top: 0.125rem;
  }

  .experience-role {
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 1.125rem;
    margin-bottom: var(--space-xs);
  }

  .experience-org {
    font-family: var(--font-sans);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-cardinal);
    margin-bottom: var(--space-sm);
  }

  .experience-desc {
    font-size: 0.9375rem;
    color: var(--color-black-60);
    line-height: 1.7;
    max-width: 600px;
  }

  @media (max-width: 640px) {
    .experience-item {
      grid-template-columns: 1fr;
      gap: var(--space-sm);
    }
  }
</style>
