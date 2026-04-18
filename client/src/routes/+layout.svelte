<script>
  import "../lib/assets/css/reset.css";
  import "../lib/assets/css/app.css";
  import Navbar from "../lib/assets/components/Navbar.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <title>Bienvenue sur O'ddit</title>
</svelte:head>

<Navbar />

{@render children()}
