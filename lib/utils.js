import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getMarkdownMetadata(folder) {
  try {
    const files = fs.readdirSync(folder);
    const markdownFiles = files.filter((file) => file.endsWith(".mdx"));

    const metadata = markdownFiles.map((fileName) => {
      const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf8");
      const { data } = matter(fileContents);
      return {
        ...data,
        slug: fileName.replace(".mdx", ""), // used for dynamic path
        folder: folder,
      };
    });

    return metadata;
  } catch (error) {
    return [];
  }
}

export async function getMarkdownContent(folder, slug) {
  try {
    const file = path.join(process.cwd(), folder, `${slug}.mdx`);
    const text = fs.readFileSync(file, "utf-8");
    const { content, data } = matter(text);

    return { content, data };
  } catch (error) {
    return { content: "", data: {} };
  }
}
