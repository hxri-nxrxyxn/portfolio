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
  <title>Harinarayan Maniyanthara Rajesh — Software Engineer & 9× Hackathon Winner</title>
  <meta name="description" content="Product-focused software engineer building high-performance systems with Go, PostgreSQL, and Linux. Debian Package Maintainer. 9× hackathon winner." />
  <meta name="keywords" content="Harinarayan Maniyanthara Rajesh, software engineer, Go developer, Debian maintainer, hackathon winner, portfolio, Svelte" />
  <meta name="author" content="Harinarayan Maniyanthara Rajesh" />

  <!-- Open Graph -->
  <meta property="og:title" content="Harinarayan Maniyanthara Rajesh — Software Engineer" />
  <meta property="og:description" content="Product-focused engineer building high-performance systems with Go, PostgreSQL, and Linux. 9× hackathon winner." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://hari.laddu.cc" />
  <meta property="og:image" content="/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Harinarayan Maniyanthara Rajesh — Software Engineer" />
  <meta name="twitter:description" content="Product-focused engineer. Go, PostgreSQL, Linux. Debian maintainer. 9× hackathon winner." />
  <meta name="twitter:image" content="/og-image.png" />

  <!-- Canonical -->
  <link rel="canonical" href="https://hari.laddu.cc" />
  <link rel="icon" href="/favicon.svg" />

  <!-- JSON-LD Structured Data: Person -->
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Harinarayan Maniyanthara Rajesh",
      "givenName": "Harinarayan",
      "familyName": "Rajesh",
      "additionalName": "Maniyanthara",
      "jobTitle": "Software Engineer",
      "email": "hari@laddu.cc",
      "telephone": "+919995283835",
      "url": "https://hari.laddu.cc",
      "sameAs": [
        "https://github.com/hxri-nxrxyxn",
        "https://linkedin.com/in/harinarayanmr"
      ],
      "knowsAbout": ["Go", "PostgreSQL", "Linux", "Docker", "SvelteKit", "Computer Vision"],
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Saintgits College of Engineering"
      }
    })}
  </script>
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
