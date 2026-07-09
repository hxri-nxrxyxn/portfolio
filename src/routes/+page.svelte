<script lang="ts">
  import '$lib/design.css';
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Achievements from '$lib/components/Achievements.svelte';
  import Education from '$lib/components/Education.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Harinarayan Maniyanthara Rajesh — Portfolio</title>
  <meta name="description" content="Product-focused Software Engineer building high-performance systems with Go, PostgreSQL, and Linux. 9× hackathon winner." />
  <link rel="icon" href="/favicon.svg" />
</svelte:head>

<Header />

<main>
  <Hero />
  <About />
  <Skills />
  <Experience />
  <Projects />
  <Achievements />
  <Education />
  <Contact />
</main>

<Footer />
