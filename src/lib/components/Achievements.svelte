<script lang="ts">
  const achievements = [
    { name: 'HackEFX 2.0', place: '1st Place' },
    { name: 'Code Kalari National Hackathon', place: '1st Place' },
    { name: 'Genesis 2.0', place: '3rd + Best Technical Implementation' },
    { name: 'AgentX', place: '2nd Place' },
    { name: 'Shastra 2k25', place: '1st Place' },
    { name: 'Eneriya \'25', place: '1st Place' },
    { name: 'Samvidhi 2024', place: '1st Place' },
    { name: 'Pegasus 3.0', place: '3rd Place' },
    { name: 'ECHO Hackathon', place: '1st Place' },
  ];
</script>

<section id="achievements" class="section">
  <div class="container">
    <div class="section-header">
      <p class="section-label">Achievements</p>
      <h2>9× Hackathon Winner</h2>
    </div>
    <div class="achievements-grid">
      {#each achievements as ach, i}
        <div class="achievement-card" style="--card-index: {i}">
          <span class="achievement-place">{ach.place}</span>
          <h3 class="achievement-name">{ach.name}</h3>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .achievements-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-md);
  }

  .achievement-card {
    padding: var(--space-lg);
    border: 1px solid var(--color-black-20);
    border-radius: var(--radius-md);
    transition: border-color var(--transition), background var(--transition), transform var(--transition);
  }

  .achievement-card:hover {
    border-color: var(--color-cardinal);
    background: rgba(140, 21, 21, 0.02);
    transform: translateY(-2px);
  }

  .achievement-place {
    display: inline-block;
    font-family: var(--font-sans);
    font-size: 0.6875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-cardinal);
    border: 1px solid var(--color-cardinal);
    padding: 0.125rem 0.5rem;
    border-radius: var(--radius-sm);
    margin-bottom: var(--space-sm);
  }

  .achievement-name {
    font-family: var(--font-sans);
    font-weight: 600;
    font-size: 0.9375rem;
    color: var(--color-black);
  }

  @media (max-width: 768px) {
    .achievements-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .achievements-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
