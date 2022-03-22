import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content");

/**
 * postsDirectory 以下のファイル名を取得する
 */
function getPostSlugs() {
  const allDirents = fs.readdirSync(postsDirectory, { withFileTypes: true });
  return allDirents.map(({ name }) => name);
}

/**
 * 指定したフィールド名から、記事のフィールドの値を取得する
 */
export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, slug);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const {
    data: { coverImage, title, date, categories },
    content,
  } = matter(fileContents);
  const descMatch: RegExpMatchArray | null = content.match(/\n.*\n/);
  const desc: string = descMatch ? descMatch[0].replace("\n", "") : "";

  return {
    slug: slug,
    content: content,
    title: title,
    date: date,
    coverImage: path.join("/images", coverImage),
    categories: categories[0],
    desc: desc,
  };
}

/**
 * すべての記事について、指定したフィールドの値を取得して返す
 */
export function getAllPosts(category = "all") {
  const slugsFiles = getPostSlugs();
  const slugs = slugsFiles
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  if (category === "all") {
    return slugs;
  } else {
    return slugs.filter((slug) => slug.categories.includes(category));
  }
}
