import { NextPage, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "../lib/api";
import { Box, Heading, Text, Stack, VStack } from "@chakra-ui/react";
import { FaAngleDoubleLeft, FaCalendarDay } from "react-icons/fa";
import Header from "../components/header";
import Footer from "../components/footer";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import imageSize from "rehype-img-size";
import remarkGfm from "remark-gfm";
import { components } from "../lib/mdxconverter";
// import LinkCard from "../components/linkCard";
// import { getOGP } from "../lib/ogp";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths = async () => {
  const posts = getAllPosts();
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug.replace(".md", ""),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  // MD 取得
  const post = getPostBySlug(params.slug + ".md");

  // OGP 取得
  // const ogpdata = getOGP("");

  // MDX 化
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm], //Table tag 用
      rehypePlugins: [[imageSize as any, { dir: "public" }]], //画像サイズ取得用
    },
  });
  return {
    props: {
      post: {
        ...post,
        mdxSource,
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
    <>
      <Header />
      <Box display="flex" alignItems="center" justifyContent="center" py="3">
        <Head>
          <title>{post.title}</title>
          <meta name="description" content={post.title} />
          <meta property="og:image" content={post.coverImage} />
        </Head>
        <Stack w="780px" h="100%" p="3">
          <VStack
            p={[5, 10]}
            rounded="2xl"
            w="100%"
            bg="white"
            boxShadow="base"
          >
            <Heading
              as="h1"
              pb="2"
              fontSize="26"
              borderBottom="1px solid #5c93bb2b"
            >
              {post.title}
            </Heading>
            <Text color="gray.400" fontSize="14">
              <FaCalendarDay
                style={{
                  display: "inline",
                  marginRight: "7px",
                }}
              />
              <time dateTime={post.date}>{post.date} に公開</time>
            </Text>

            <Box
              sx={{
                ul: {
                  pl: "5",
                  my: "6",
                  rounded: "md",
                },
                li: {
                  my: "6",
                },
                table: {
                  border: "1px #5c93bb2b solid",
                },
                td: {
                  border: "1px #5c93bb2b solid",
                  p: "2",
                },
                th: {
                  border: "1px #5c93bb2b solid",
                  bg: "gray.100",
                  p: "2",
                },
              }}
            >
              <MDXRemote
                {...post.mdxSource}
                components={components}
                scope={post}
              />
            </Box>
            <Link href="/">
              <a>
                <Text _hover={{ opacity: 0.5 }}>
                  <FaAngleDoubleLeft
                    style={{
                      display: "inline",
                      marginRight: "3px",
                    }}
                  />
                  記事一覧にもどる
                </Text>
              </a>
            </Link>
          </VStack>
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default Post;
