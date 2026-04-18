<script>
  let active = $state("posts");

  function setActive(position) {
    active = position;
  }
</script>

<main>
  <div class="navbar">
    <h1>O'ddit - Bienvenue</h1>
    <nav>
      <!-- TODOD  Attention enelever le prevent default par la suite ! -->
      <a
        href="/"
        onclick={(e) => {
          e.preventDefault();
          setActive("posts");
        }}
        class:active={active === "posts"}>Posts</a
      >
      <a
        href="/"
        onclick={(e) => {
          e.preventDefault();
          setActive("profil");
        }}
        class:active={active === "profils"}>Profil</a
      >
      <button id="logout-btn">Déconnexion</button>
    </nav>
  </div>
</main>

<style>
  .navbar {
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(1rem);
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 2rem;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .navbar h1 {
    color: white;
    font-size: 1.3rem;
    margin: 0;
    letter-spacing: 1px;
  }

  .navbar nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .navbar a,
  .navbar button {
    background: none;
    border: none;
    color: white;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
    padding: 0 2rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
  }

  .navbar a:hover,
  .navbar button:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .navbar a.active {
    background: rgba(255, 255, 255, 0.2);
  }

  @media screen and (max-width: 668px) {
    .navbar {
      justify-content: center;
    }
  }
</style>
