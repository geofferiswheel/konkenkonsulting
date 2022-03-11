import fs from "fs";
import path from "path";
import matter from "gray-matter";

const pagesDirectory = path.join(process.cwd(), "content/pages");

export function getSortedPagesData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(pagesDirectory);
  const allPagesData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(pagesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // Combine the data with the id
    return {
      id,
      title: matterResult.data.title,
      slug: matterResult.data.slug,
      thumbnail: matterResult.data.thumbnail,
      body: matterResult.content,
    };
  });

  // Sort posts by date
  return allPagesData;
}
