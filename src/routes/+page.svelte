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
  <title>Harinarayan Maniyanthara Rajesh — Software Engineer</title>
  <meta name="description" content="Builds backend services in Go and PostgreSQL. Maintains the noss package for Debian. 9 hackathon wins." />
  <meta name="keywords" content="Harinarayan Maniyanthara Rajesh, software engineer, Go developer, Debian maintainer, hackathon winner" />
  <meta name="author" content="Harinarayan Maniyanthara Rajesh" />

  <!-- Open Graph -->
  <meta property="og:title" content="Harinarayan Maniyanthara Rajesh — Software Engineer" />
  <meta property="og:description" content="Builds backend services in Go and PostgreSQL. Maintains the noss package for Debian. 9 hackathon wins." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://hari.laddu.cc" />
  <meta property="og:image" content="/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Harinarayan Maniyanthara Rajesh — Software Engineer" />
  <meta name="twitter:description" content="Backend services in Go and PostgreSQL. Debian package maintainer. 9 hackathon wins." />
  <meta name="twitter:image" content="/og-image.png" />

  <!-- Canonical -->
  <link rel="canonical" href="https://hari.laddu.cc" />
  <link rel="icon" href="/favicon.svg" />
  <link rel="llms-txt" href="/llms.txt" />

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
