<script>
  // récupération des données de la requete du +page.js
  let { data } = $props();
</script>

<div class="container">
  <div class="glass-panel">
    <h2>Posts</h2>

    <section class="posts-list">
      <h3>Posts récents</h3>
      <div id="posts-list"></div>
      {#if data.posts.length === 0}
        <p>Pas de posts pour le moment !</p>
      {/if}

      {#each data.posts as post}
        <div class="post">
          <a href="/posts/{post.id}">
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <div class="post-meta">
              <span>Par {post.author?.pseudo || "Anonyme"}</span>
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              <span
                >Catégorie : {#each post.categories as category}
                  <span>{category?.name + " " || "Non renseignée"}</span>
                {/each}
              </span>
            </div>
          </a>
        </div>
      {/each}
    </section>
  </div>
</div>

<style>
  .posts-list {
    padding: 1rem;
    color: white;
  }

  h3 {
    text-align: center;
  }

  .post {
    padding: 1rem 0;
  }

  .posts-list h4 {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 1rem;
    margin: 0 0 10px 0;
    font-size: 1.1rem;
  }

  .posts-list p {
    margin: 0 0 15px 0;
    color: rgba(255, 255, 255, 0.9);
  }

  .posts-list span {
    font-style: italic;
  }
</style>
