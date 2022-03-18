import { Box, Text, Stack, Image } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
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
                height={62}
                width={378}
                _hover={{ opacity: 0.5 }}
              ></Image>
            </a>
          </Link>

          {/* <Text color="white">About</Text> */}
        </Stack>
      </Box>
    </>
  );
};

export default Header;
