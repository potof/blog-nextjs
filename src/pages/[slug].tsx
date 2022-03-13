import { NextPage, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import Image from "next/image";
import { getAllPosts, getPostBySlug } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import { Box, Heading, Text } from "@chakra-ui/react";
import Header from "../lib/header";
import Footer from "../lib/footer";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

/**
 * 記事のパスを取得する
 */
export const getStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

/**
 * 記事の内容を取得する
 */
export const getStaticProps = async ({ params }: any) => {
  const post = getPostBySlug(params.slug, [
    "slug",
    "title",
    "date",
    "content",
    "coverImage",
    "categories",
    "tags",
  ]);
  // Markdown を HTML に変換する
  const content = await markdownToHtml(post.content);
  // content を詰め直して返す
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

const Post: NextPage<Props> = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Box>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.title} />
        <meta property="og:image" content={post.coverImage} />
      </Head>
      <Header />
      <Heading as="h1">{post.title}</Heading>

      <Text>Update : {post.date}</Text>
      <Image
        src={post.coverImage}
        alt={post.title}
        layout="intrinsic"
        width={500}
        height={500}
      ></Image>

      <Box dangerouslySetInnerHTML={{ __html: post.content }} />
      <Footer />
    </Box>
  );
};

export default Post;
