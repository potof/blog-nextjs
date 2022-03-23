import Image from "next/image";
import { Box, Heading, Text, Link as UILink } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

/**
 * next-mdx-remort で md to html へ変換するときに html タグを以下のコンポーネントに変換する
 */
export const components = {
  img: (props: any) => {
    return (
      <Box w="${props.width}" h="${props.height}">
        <Image
          {...props}
          src={"/" + props.src}
          layout="responsive"
          // loading="lazy"
          alt={props.alt}
        />
      </Box>
    );
  },
  p: (props: any) => {
    return (
      <Text my="16px" lineHeight="27px" color="#383838">
        {props.children}
      </Text>
    );
  },
  h2: (props: any) => {
    return (
      <Heading
        as="h2"
        pb="2"
        my="6"
        fontSize="22"
        borderBottom="1px solid #5c93bb2b"
      >
        {props.children}
      </Heading>
    );
  },
  h3: (props: any) => {
    return (
      <Heading as="h3" size="md" fontSize="19" my="6">
        {props.children}
      </Heading>
    );
  },
  a: (props: any) => {
    if (props.href.includes("amzn.to")) {
      return (
        <UILink href={props.href} isExternal>
          <Box
            border="1px"
            borderColor="gray.200"
            p="4"
            my="3"
            _hover={{
              background: "gray.200",
            }}
            rounded="lg"
          >
            Amazon.co.jp で探す : {props.children}
            <Text color="gray.400" fontSize="14">
              🔗 ${new URL(props.href).hostname}
            </Text>
          </Box>
        </UILink>
      );
    } else if (props.href.includes("http")) {
      return (
        <UILink href={props.href} color="pink.300" isExternal>
          {props.children}
          <FaExternalLinkAlt style={{ display: "inline", marginLeft: "3px" }} />
        </UILink>
      );
    } else {
      return (
        <Link href={props.href}>
          <a>
            <Text color="pink.300">{props.children}</Text>
          </a>
        </Link>
      );
    }
  },
};
