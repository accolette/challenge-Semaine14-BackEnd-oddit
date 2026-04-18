<script>
  // récupération des données de la requete du +page.js
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.post.title}</title>
</svelte:head>

<div class="container">
  <div class="glass-panel">
    <h2>{data.post.title}</h2>

    <section class="posts-list">
      <div class="post">
        {#if data.post.length === 0}
          <p>Post indisponible</p>
        {/if}
        <p>{data.post.content}</p>
        <div class="post-meta">
          <span>Par {data.post.author?.pseudo || "Anonyme"}</span>
          <span>{new Date(data.post.createdAt).toLocaleDateString()}</span>
          <span
            >Catégorie : {#each data.post.categories as category}
              <span>{category?.name + " " || "Non renseignée"}</span>
            {/each}
          </span>
        </div>
        <ul>
          {#each data.post.comments as comment}
            <li>
              {comment.content}
              <span>de {comment.author?.pseudo || "Anonyme"}</span>
            </li>
          {/each}
        </ul>
      </div>
      <a href="/">Retour aux posts</a>
    </section>
  </div>
</div>

<style>
  a {
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
    margin-top: 2rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
  }

  .posts-list {
    padding: 1rem;
    color: white;
  }

  .post {
    padding: 1rem 0;
  }

  .posts-list ul {
    list-style: none;
    padding-top: 1rem;
    margin: 0;
  }

  .posts-list li {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    color: white;
  }

  .posts-list p {
    margin: 0 0 15px 0;
    color: rgba(255, 255, 255, 0.9);
  }

  .posts-list span {
    font-style: italic;
  }
</style>
