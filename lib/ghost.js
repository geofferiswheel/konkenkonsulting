import GhostContentAPI from "@tryghost/content-api";

const url = process.env.NEXT_PUBLIC_GHOST_HOST;
const key = process.env.NEXT_PUBLIC_GHOST_KEY;
const version = process.env.NEXT_PUBLIC_GHOST_VERSION;

const api = new GhostContentAPI({ url: url, key: key, version: version });

export async function fetchEntries() {
  return await api.posts
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}
