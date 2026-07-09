<script lang="ts">
  const skillGroups = [
    {
      category: 'Languages',
      skills: ['Go', 'Python', 'JavaScript', 'TypeScript'],
    },
    {
      category: 'Frameworks',
      skills: ['SvelteKit', 'Node.js', 'Vue.js', 'Nuxt.js'],
    },
    {
      category: 'Databases & Systems',
      skills: ['PostgreSQL', 'Linux', 'Docker', 'Systemd', 'QEMU'],
    },
    {
      category: 'AI & Computer Vision',
      skills: ['TensorFlow', 'MediaPipe', 'OpenCV'],
    },
    {
      category: 'Embedded & IoT',
      skills: ['Raspberry Pi', 'MQTT'],
    },
    {
      category: 'DevOps & Infrastructure',
      skills: ['Git', 'CI/CD', 'Cloudflare Tunnels'],
    },
  ];
</script>

<section id="skills" class="section">
  <div class="container">
    <div class="section-header">
      <p class="section-label">Skills</p>
      <h2>Technologies I build with</h2>
    </div>
    <div class="skills-grid">
      {#each skillGroups as group}
        <div class="skill-group">
          <h3 class="skill-category">{group.category}</h3>
          <div class="skill-list">
            {#each group.skills as skill}
              <span class="skill-tag">{skill}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-xl);
  }

  .skill-group {
    padding: 0;
  }

  .skill-category {
    font-family: var(--font-sans);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-cardinal);
    margin-bottom: var(--space-md);
  }

  .skill-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
  }

  .skill-tag {
    display: inline-block;
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--color-black);
    background: var(--color-black-10);
    padding: 0.375rem 0.75rem;
    border-radius: var(--radius-sm);
    transition: background var(--transition), color var(--transition);
  }

  .skill-tag:hover {
    background: var(--color-cardinal);
    color: var(--color-white);
  }

  @media (max-width: 768px) {
    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-lg);
    }
  }

  @media (max-width: 480px) {
    .skills-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
