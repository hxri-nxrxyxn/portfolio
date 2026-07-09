<script lang="ts">
  const projects = [
    {
      title: 'SecureBox Vault',
      subtitle: 'Zero-Trace Digital Clean Room',
      date: 'Feb 2026',
      description: 'A stateless kiosk OS that runs read-only environments with volatile sessions. Each user session is isolated inside a QEMU sandbox. Document transfers go through encrypted Cloudflare Tunnels.',
      tags: ['QEMU', 'Linux', 'Cloudflare', 'Security'],
    },
    {
      title: 'Kesla',
      subtitle: 'High-Performance EV Dashboard',
      date: 'Jan 2026',
      description: 'An EV dashboard OS that boots in under 3 seconds on a Raspberry Pi. Uses systemd optimization for fast startup and MediaPipe for 3D gesture navigation. Runs on a minimal Chromium kiosk.',
      tags: ['Raspberry Pi', 'systemd', 'MediaPipe', 'Chromium'],
    },
    {
      title: 'Veekshan',
      subtitle: 'Edge-AI Surveillance Search',
      date: 'Jan 2026',
      description: 'Search surveillance footage using natural language — "person in green shirt." Built a pipeline that connects NLP queries to computer vision models running on local hardware.',
      tags: ['Computer Vision', 'NLP', 'Edge AI', 'Embedded'],
    },
    {
      title: 'Mishran',
      subtitle: 'AI Multi-Camera Production System',
      date: 'Jan 2026',
      description: 'Syncs video feeds from multiple phones into one timeline. Uses an n8n-orchestrated AI agent to select shots autonomously during live production.',
      tags: ['n8n', 'AI Agents', 'Video', 'Backend'],
    },
    {
      title: 'EyeTap',
      subtitle: 'Gaze-Controlled Interface',
      date: 'Oct 2025',
      description: 'A gaze-tracking interface for hands-free computer control. Uses OpenCV and dlib for real-time eye estimation. Streams video from Android over WebSockets.',
      tags: ['OpenCV', 'dlib', 'WebSockets', 'Android'],
    },
  ];
</script>

<section id="projects" class="section">
  <div class="container">
    <div class="section-header">
      <p class="section-label">Projects</p>
      <h2>What I've Built</h2>
    </div>
    <div class="projects-grid">
      {#each projects as project}
        <article class="project-card">
          <div class="project-date">{project.date}</div>
          <h3 class="project-title">{project.title}</h3>
          <p class="project-subtitle">{project.subtitle}</p>
          <p class="project-desc">{@html project.description}</p>
          <div class="project-tags">
            {#each project.tags as tag}
              <span class="project-tag">{tag}</span>
            {/each}
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
  }

  .project-card {
    padding: var(--space-xl);
    border: 1px solid var(--color-black-20);
    border-radius: var(--radius-md);
    transition: border-color var(--transition), box-shadow var(--transition);
    display: flex;
    flex-direction: column;
  }

  .project-card:hover {
    border-color: var(--color-cardinal-light);
    box-shadow: 0 4px 12px rgba(140, 21, 21, 0.06);
  }

  .project-date {
    font-family: var(--font-sans);
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--color-black-40);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--space-sm);
  }

  .project-title {
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 1.125rem;
    margin-bottom: var(--space-xs);
  }

  .project-subtitle {
    font-family: var(--font-serif);
    font-size: 0.9375rem;
    font-style: italic;
    color: var(--color-cardinal);
    margin-bottom: var(--space-md);
  }

  .project-desc {
    font-size: 0.875rem;
    line-height: 1.7;
    color: var(--color-black-60);
    flex: 1;
    margin-bottom: var(--space-lg);
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
  }

  .project-tag {
    display: inline-block;
    font-family: var(--font-sans);
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--color-black-50);
    background: var(--color-black-10);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius-sm);
  }

  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
