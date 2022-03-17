import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Post = {
  slug: string;
  content: string;
  title: string;
  date: string;
  coverImage: string;
  categories: string;
};

const postsDirectory = path.join(process.cwd(), "content");

/**
 * postsDirectory 以下のファイル名を取得する
 */
export function getPostSlugs() {
  const allDirents = fs.readdirSync(postsDirectory, { withFileTypes: true });
  return allDirents.map(({ name }) => name);
}

/**
 * 指定したフィールド名から、記事のフィールドの値を取得する
 */
export function getPostBySlug(slug: string, fields: string[] = []) {
  const fullPath = path.join(postsDirectory, slug);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Post = {
    slug: "",
    content: "",
    title: "",
    date: "",
    coverImage: "",
    categories: "",
  };

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slug;
    } else if (field === "content") {
      items[field] = content;
    } else if (field === "coverImage") {
      items[field] = path.join("/images", data[field]);
    } else if (field === "title" || field === "date") {
      items[field] = data[field];
    } else if (field === "categories") {
      items[field] = data[field][0];
    }
  });
  return items;
}

/**
 * すべての記事について、指定したフィールドの値を取得して返す
 * @param fields 取得するフィールド
 */
export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
}
