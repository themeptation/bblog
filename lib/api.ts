const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getAllPosts(limit = 0) {
  const posts = await fetch(`${baseUrl}/api/posts`).then((res) => res.json());
  return limit ? posts.slice(0, limit) : posts;
}

export async function getPostBySlug(slug) {
  const post = await fetch(`${baseUrl}/api/post/${slug}`).then((res) =>
    res.json()
  );
  return post;
}
