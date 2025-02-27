import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import {
  AbsoluteCenter,
  Button as ChakraButton,
  Span,
  Spinner,
} from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import * as React from "react";
import { selectedPaletteAtom } from "../../states/theme-state";

interface ButtonLoadingProps {
  loading?: boolean;
  loadingText?: React.ReactNode;
}

export interface ButtonProps extends ChakraButtonProps, ButtonLoadingProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const { loading, disabled, loadingText, children, ...rest } = props;
    const selectedPalette = useAtomValue(selectedPaletteAtom);
    return (
      <ChakraButton
        disabled={loading || disabled}
        ref={ref}
        _active={{
          transform: "scale(0.95)", // Escala el botón cuando se hace clic
          transition: "transform 0.2s ease", // Transición suave
        }}
        variant={"surface"}
        colorPalette={selectedPalette}
        {...rest}
      >
        {loading && !loadingText ? (
          <>
            <AbsoluteCenter display="inline-flex">
              <Spinner size="inherit" color="inherit" />
            </AbsoluteCenter>
            <Span opacity={0}>{children}</Span>
          </>
        ) : loading && loadingText ? (
          <>
            <Spinner size="inherit" color="inherit" />
            {loadingText}
          </>
        ) : (
          children
        )}
      </ChakraButton>
    );
  }
);
