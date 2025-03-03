import { AiOutlineCheckCircle } from "react-icons/ai";
import { chakra } from "@chakra-ui/react";
import { wrapIconWithMeta } from "@core/utils";

export const ActiveCircleIcon = wrapIconWithMeta(chakra(AiOutlineCheckCircle), {
  tags: ["active", "circle", "icon"],
  description: "Active circle icon",
});
