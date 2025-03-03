import { Spinner } from "@chakra-ui/react";

export interface LoaderProps {
  size: "inherit" | "xs" | "sm" | "md" | "lg" | "xl";
  color?: string;
  thickness?: number;
}

export function Loader(props: LoaderProps) {
  const color = props.color === "" ? "#3498db" : props.color;
  const thick = props.thickness ? props.thickness + "px" : "7px";

  return (
    <Spinner
      borderWidth={thick}
      animationDuration="0.65s"
      // color="gray.200"
      color={color}
      size={props.size || "xl"}
    />
  );
}
