import { Box } from "@chakra-ui/react";
import { CategoryLink } from "../components/category";

const CategoryList = ({ categories }: { categories: string[] }) => {
  return (
    <Box p="2" alignItems="center" justifyContent="center">
      {categories.map((category: string) => {
        return CategoryLink(category);
      })}
    </Box>
  );
};

export default CategoryList;
