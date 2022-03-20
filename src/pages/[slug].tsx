import { NextPage, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import {
  Box,
  Heading,
  Text,
  Stack,
  VStack,
  Link as UILink,
} from "@chakra-ui/react";
import Header from "../components/header";
import Footer from "../components/footer";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
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
  img: (props: any) => {
    return (
      <Box w="${props.width}" h="${props.height}">
        <Image
          {...props}
          src={"/" + props.src}
          layout="responsive"
          loading="lazy"
        />
      </Box>
    );
  },
  p: (props: any) => {
    return <Text>{props.children}</Text>;
  },
  a: (props: any) => {
    if (props.href.includes("http")) {
      return (
        <UILink href={props.href} target="_blank" color="pink.300" isExternal>
          {props.children}
        </UILink>
      );
    } else {
      return <Link href={props.href}>{props.children}</Link>;
    }
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
          <VStack p={10} rounded="2xl" w="100%" bg="white" boxShadow="base">
            <Heading as="h1" pb="2">
              {post.title}
            </Heading>
            {/* <Text textAlign="left">
              <time>{post.date}</time>
            </Text> */}

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
                  lineHeight: "27px",
                  color: "#383838",
                },
              }}
            >
              <MDXRemote {...post.mdxSource} components={components} />
            </Box>
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
