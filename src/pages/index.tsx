import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../lib/api";
import { Box, Heading, Text } from "@chakra-ui/react";
import Header from "../lib/header";
import Footer from "../lib/footer";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["slug", "title", "date", "tags"]);
  return {
    props: { allPosts },
  };
};

const Home: NextPage<Props> = ({ allPosts }) => {
  return (
    <Box alignItems="center" minHeight="70vh" gap={8} mb={8} w="full">
      <Head>
        <title>ぽとふバーガーDX</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      {allPosts.map((post) => (
        <Box>
          <Heading as="h2" size="sm">
            <Link href="/[slug]" as={`/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
            <Text>{post.date}</Text>
          </Heading>
        </Box>
      ))}

      <Footer />
    </Box>
  );
};

export default Home;
