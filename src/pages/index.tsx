import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../lib/api";
import { Box, Heading, Text, Stack, HStack, Image } from "@chakra-ui/react";
import Header from "../lib/header";
import Footer from "../lib/footer";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["slug", "title", "date", "coverImage"]);
  return {
    props: { allPosts },
  };
};

const Home: NextPage<Props> = ({ allPosts }) => {
  return (
    <>
      <Header />
      <Box display="flex" alignItems="center" justifyContent="center" py="3">
        <Head>
          <title>ぽとふバーガーDX</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <Stack w="780px" h="100%">
          {allPosts.map((post) => (
            <Link href="/[slug]" as={`/${post.slug}`} key={post.title}>
              <a>
                <HStack p={3} rounded="md" w="100%" bg="white" boxShadow="base">
                  <Image
                    borderRadius="md"
                    boxSize="65px"
                    src={post.coverImage}
                    alt={post.title}
                  />
                  <Stack>
                    <Box p={2} rounded="md" w="100%">
                      <Text fontSize={10}>{post.date}</Text>
                      <Heading as="h2" size="sm">
                        {post.title}
                      </Heading>
                    </Box>
                  </Stack>
                </HStack>
              </a>
            </Link>
          ))}
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
