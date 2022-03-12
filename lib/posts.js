import fs from "fs";
import path from "path";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getBySlug(dir, slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const items = {};
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}

// Returns contents of a page in the _snippets directory
export function getPostDataBySlug(slug, fields = []) {
  return getBySlug(postsDirectory, slug, fields);
}

export function getAllPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // Combine the data with the id
    return {
      key: id,
      title: matterResult.data.title,
      slug: matterResult.data.slug,
      thumbnail: matterResult.data.thumbnail,
      body: matterResult.content,
      url: `/posts/${id}`,
    };
  });

  // Sort posts by date
  return allPostsData;
}

export function getSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");
    return {
      params: { slug: id },
    };
  });
}

export function getUrls() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");
    return {
      params: { slug: `/posts/${id}` },
    };
  });
}
