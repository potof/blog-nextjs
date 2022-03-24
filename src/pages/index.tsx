import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../lib/api";
import { Box, Heading, Text, Stack, HStack, Image } from "@chakra-ui/react";
import Header from "../components/header";
import Footer from "../components/footer";
import CategoryList from "../components/categoryList";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts();
  const allCategories: string[] = Array.from(
    new Set(
      allPosts.map((post) => {
        return post.categories;
      })
    )
  ).sort();
  return {
    props: { allPosts, allCategories },
  };
};

const Home: NextPage<Props> = ({ allPosts, allCategories }) => {
  return (
    <>
      <Head>
        <title>ぽとふバーガーDX</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />

      <CategoryList categories={allCategories} />

      <Box display="flex" alignItems="center" justifyContent="center" py="3">
        <Stack w="780px" h="100%">
          {allPosts.map((post) => (
            <Link
              href="/[slug]"
              as={`/${post.slug.replace(".md", "")}`}
              key={post.title}
            >
              <a>
                <HStack
                  p={3}
                  rounded="md"
                  w="100%"
                  bg="white"
                  boxShadow="base"
                  _hover={{ opacity: 0.7 }}
                >
                  <Image
                    borderRadius="md"
                    boxSize="65px"
                    src={post.coverImage}
                    alt={post.title}
                  />
                  <Stack>
                    <Box p={2} rounded="md" w="100%">
                      <Text fontSize="13" color="gray.500">
                        {post.date}
                      </Text>
                      <Heading as="h2" size="sm">
                        {post.title}
                      </Heading>
                      <Text fontSize="sm" color="gray.500">
                        {post.desc}
                      </Text>
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
