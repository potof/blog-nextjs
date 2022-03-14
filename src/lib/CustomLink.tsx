import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
};

const CustomLink = ({ children, href }: Props) => {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  } else {
    return (
      <Link href={href}>
        <a>{children}</a>
      </Link>
    );
  }
};
export default CustomLink;
