import { Box, Stack, Image, Text, Link as UILink } from "@chakra-ui/react";
import Link from "next/link";
import { FaTwitter, FaGithub, FaBook } from "react-icons/fa";
import Head from "next/head";
import Script from "next/script";

const Header = () => {
  return (
    <>
      <Head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1536057836501643"
          crossOrigin="anonymous"
        ></Script>
      </Head>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="10vh"
        w="full"
        bg="#019cd0"
      >
        <Stack p={2} align="center">
          <Link href="/">
            <a>
              <Image
                src="/logo_clear2.png"
                alt="ぽとふバーガーDX"
                height={62}
                width={378}
                _hover={{ opacity: 0.5 }}
                display="inline"
              ></Image>
            </a>
          </Link>
          <Text>
            <UILink
              href="https://twitter.com/Potof_"
              _hover={{ opacity: 0.5 }}
              isExternal
            >
              <FaTwitter
                size={30}
                color={"#fff"}
                style={{
                  display: "inline",
                  marginRight: "7px",
                }}
              />
            </UILink>
            <UILink
              href="https://bookmeter.com/users/117579"
              _hover={{ opacity: 0.5 }}
              isExternal
            >
              <FaBook
                size={30}
                color={"#fff"}
                style={{
                  display: "inline",
                  marginRight: "3px",
                }}
              />
            </UILink>
          </Text>

          {/* <Text color="white">About</Text> */}
        </Stack>
      </Box>
    </>
  );
};

export default Header;
