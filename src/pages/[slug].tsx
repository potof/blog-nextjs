import { NextPage, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import { Box, Heading, Text, Stack, VStack } from "@chakra-ui/react";
import Header from "../lib/header";
import Footer from "../lib/footer";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import imageSize from "rehype-img-size";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

/**
 * 記事のパスを取得する
 */
export const getStaticPaths = async () => {
  const posts = getAllPosts();
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
  const post = getPostBySlug(params.slug);
  // Markdown を HTML に変換する
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [[imageSize as any, { dir: "public" }]],
    },
  });
  // content を詰め直して返す
  return {
    props: {
      post: {
        ...post,
        mdxSource,
      },
    },
  };
};

const components = {
  img: (props: any) =>
    // height and width are part of the props, so they get automatically passed here with {...props}
    {
      console.log(props);
      return (
        <div style={{ width: `${props.width}px`, height: `${props.height}px` }}>
          <Image
            {...props}
            src={"/" + props.src}
            layout="responsive"
            loading="lazy"
          />
        </div>
      );
    },
};

const Post: NextPage<Props> = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Header />
      <Box display="flex" alignItems="center" justifyContent="center" py="3">
        <Head>
          <title>{post.title}</title>
          <meta name="description" content={post.title} />
          <meta property="og:image" content={post.coverImage} />
        </Head>
        <Stack w="780px" h="100%" p="3">
          <VStack p={3} rounded="md" w="100%" bg="white" boxShadow="base">
            <Text textAlign="left">
              <time>{post.date}</time>
            </Text>
            <Heading as="h1" pb="6">
              {post.title}
            </Heading>
            <Box
              sx={{
                h2: {
                  bg: "#019cd0",
                  color: "white",
                  p: "3",
                  rounded: "md",
                  fontSize: "1.143em",
                  my: "6",
                  fontWeight: "bold",
                },
                ul: {
                  bg: "#EEF9FF",
                  p: "3",
                  pl: "12",
                  my: "6",
                  rounded: "md",
                  fontWeight: "bold",
                },
                p: {
                  my: "16px",
                },
              }}
            />
            <MDXRemote {...post.mdxSource} components={components} />

            <Link href="/">
              <a>一覧にもどる</a>
            </Link>
          </VStack>
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default Post;
