// import Link from "next/link";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        minHeight="10vh"
        gap={8}
        mb={8}
        w="full"
        bg="#019cd0"
      >
        <Link href="/">
          <a>
            <Image
              src="/logo_clear2.png"
              alt="ぽとふバーガーDX"
              height={62}
              width={378}
            ></Image>
          </a>
        </Link>
      </Box>
    </>
  );
};

export default Header;
