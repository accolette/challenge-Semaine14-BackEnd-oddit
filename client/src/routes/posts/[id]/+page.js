export async function load({ params, fetch }) {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  const response = await fetch(`${apiBaseUrl}/posts/${params.id}`);
  const post = await response.json();

  return {
    post,
  };
}
