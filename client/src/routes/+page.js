export async function load({ fetch }) {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  const response = await fetch(`${apiBaseUrl}/posts`);
  const posts = await response.json();

  return {
    posts,
  };
}
