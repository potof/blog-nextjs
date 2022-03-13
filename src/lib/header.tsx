// import Link from "next/link";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

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
        <Image
          src="/logo_clear2.png"
          alt="ぽとふバーガーDX"
          height={62}
          width={378}
        ></Image>
      </Box>
    </>
  );
};

export default Header;
