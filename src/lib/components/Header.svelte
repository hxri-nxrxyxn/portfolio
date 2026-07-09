<script lang="ts">
  let mobileOpen = $state(false);
  let scrolled = $state(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  function handleScroll() {
    scrolled = window.scrollY > 20;
  }
</script>

<svelte:window onscroll={handleScroll} />

<header class="header" class:header-scrolled={scrolled}>
  <div class="container header-inner">
    <a href="/" class="logo">Harinarayan<span class="logo-dot">.</span></a>

    <nav class="nav-desktop">
      {#each navItems as item}
        <a href={item.href} class="nav-link">{item.label}</a>
      {/each}
    </nav>

    <button
      class="hamburger"
      onclick={() => mobileOpen = !mobileOpen}
      aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={mobileOpen}
    >
      <span class="hamburger-line" class:open={mobileOpen}></span>
      <span class="hamburger-line" class:open={mobileOpen}></span>
    </button>
  </div>
</header>

{#if mobileOpen}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div class="overlay" role="presentation" onclick={() => mobileOpen = false}></div>
  <nav class="nav-mobile">
    {#each navItems as item}
      <a
        href={item.href}
        class="nav-mobile-link"
        onclick={() => mobileOpen = false}
      >
        {item.label}
      </a>
    {/each}
  </nav>
{/if}

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: var(--header-height);
    background: transparent;
    transition: background var(--transition), box-shadow var(--transition);
  }

  .header-scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(8px);
    box-shadow: 0 1px 0 var(--color-black-20);
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .logo {
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--color-black);
    text-decoration: none;
  }

  .logo-dot {
    color: var(--color-cardinal);
  }

  .nav-desktop {
    display: flex;
    gap: var(--space-lg);
  }

  .nav-link {
    font-family: var(--font-sans);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-black-70);
    text-decoration: none;
    padding: var(--space-xs) 0;
    border-bottom: 2px solid transparent;
    transition: color var(--transition), border-color var(--transition);
  }

  .nav-link:hover {
    color: var(--color-cardinal);
    border-bottom-color: var(--color-cardinal);
  }

  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--space-sm);
  }

  .hamburger-line {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--color-black);
    border-radius: 1px;
    transition: transform var(--transition), opacity var(--transition);
  }

  .hamburger-line.open:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .hamburger-line.open:nth-child(2) {
    opacity: 0;
  }

  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(46, 45, 41, 0.3);
    z-index: 98;
    animation: fadeIn 200ms ease;
  }

  .nav-mobile {
    position: fixed;
    top: var(--header-height);
    right: 0;
    width: 280px;
    height: calc(100vh - var(--header-height));
    background: var(--color-white);
    z-index: 99;
    display: flex;
    flex-direction: column;
    padding: var(--space-xl) var(--space-lg);
    gap: var(--space-md);
    animation: slideIn 250ms ease;
    box-shadow: -4px 0 20px rgba(46, 45, 41, 0.1);
  }

  .nav-mobile-link {
    font-family: var(--font-sans);
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-black);
    text-decoration: none;
    padding: var(--space-sm) 0;
    border-bottom: 1px solid var(--color-black-20);
    transition: color var(--transition);
  }

  .nav-mobile-link:hover {
    color: var(--color-cardinal);
  }

  @media (max-width: 768px) {
    .nav-desktop {
      display: none;
    }
    .hamburger {
      display: flex;
    }
  }
</style>
