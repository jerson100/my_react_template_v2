import { Heading as HeadingChakraui, HeadingProps } from "@chakra-ui/react";
import { FC } from "react";

const Heading: FC<HeadingProps> = (props) => {
  return <HeadingChakraui {...props}>{props.children}</HeadingChakraui>;
};

export default Heading;
