<script>
  import { onMount } from "svelte";

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  let posts = $state([]);

  async function getAllPosts() {
    const response = await fetch(`${apiBaseUrl}/posts`, {
      headers: {},
    });
    posts = await response.json();
  }

  $inspect(posts);

  onMount(getAllPosts);
</script>

<div class="container">
  <div class="glass-panel">
    <h2>Posts</h2>

    <section class="posts-list">
      <h3>Posts récents</h3>
      <div id="posts-list"></div>
      {#if posts.length === 0}
        <p>Pas de posts pour le moment !</p>
      {/if}

      {#each posts as post}
        <div class="post">
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

  .posts-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .posts-list li {
    background: rgba(255, 255, 255, 0.1);
    margin-bottom: 15px;
    padding: 20px;
    border-radius: 10px;
    color: white;
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
