import Link from "next/link";
import { Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react";
import {
  FaAmazon,
  FaFish,
  FaPlane,
  FaBook,
  FaUtensils,
  FaHamburger,
  FaGlasses,
  FaLaptop,
  FaHome,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface CategoriesType {
  [name: string]: { name: string; icon: IconType };
}
export const categories: CategoriesType = {
  amazon: { name: "買ってよかったもの", icon: FaAmazon },
  aquarium: { name: "水族館", icon: FaFish },
  blog: { name: "Blog", icon: FaHamburger },
  books: { name: "Books", icon: FaBook },
  fashion: { name: "ファッション", icon: FaGlasses },
  gadget: { name: "ガジェット", icon: FaLaptop },
  life: { name: "生活", icon: FaHome },
  items: { name: "日用品", icon: FaHome },
  food: { name: "食品", icon: FaUtensils },
  curry: { name: "レトルトカレー", icon: FaUtensils },
  hokkaido: {
    name: "北海道旅行・グルメ",
    icon: FaPlane,
  },
  kanto: {
    name: "関東旅行・グルメ",
    icon: FaPlane,
  },
  tohoku: {
    name: "東北旅行・グルメ",
    icon: FaPlane,
  },
  tokyo: {
    name: "東京旅行・グルメ",
    icon: FaPlane,
  },
  kansai: {
    name: "関西旅行・グルメ",
    icon: FaPlane,
  },
};

export const CategoryLink = (category: string) => {
  return (
    <Link href="/" passHref>
      <Tag as="a" variant="solid" colorScheme="gray" m="0.5" size="sm">
        {category in categories && (
          <TagLeftIcon boxSize="12px" as={categories[category].icon} />
        )}
        <TagLabel>
          {category in categories ? categories[category].name : category}
        </TagLabel>
      </Tag>
    </Link>
  );
};
