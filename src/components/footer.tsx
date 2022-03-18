import Link from "next/link";
import { Box, Text, Stack, Image } from "@chakra-ui/react";
import { categories } from "./category";
import CategoryList from "./categoryList";

const Footer = () => {
  return (
    <>
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
                height={50}
                width={302.88}
                _hover={{ opacity: 0.5 }}
              ></Image>
            </a>
          </Link>
          <CategoryList categories={Object.keys(categories).sort()} />

          <Text pt={6} fontSize={"sm"} textAlign={"center"} color="gray.100">
            © 2022 ぽとふバーガーDX All rights reserved.
          </Text>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
