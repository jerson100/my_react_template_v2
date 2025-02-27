import { selectedPaletteAtom } from "@/core/states";
import { Box, Field as ChakraField, defineStyle } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import * as React from "react";

export interface FieldProps extends Omit<ChakraField.RootProps, "label"> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  errorText?: React.ReactNode;
  optionalText?: React.ReactNode;
  variant?: "normal" | "floating";
}

const floatingStyles = defineStyle({
  pos: "absolute",
  bg: "bg",
  px: "0.5",
  top: "-3",
  insetStart: "2",
  fontWeight: "normal",
  pointerEvents: "none",
  transition: "position",
  _peerPlaceholderShown: {
    color: "fg.muted",
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    color: "fg",
    top: "-3",
    insetStart: "2",
  },
});

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  function Field(props, ref) {
    const {
      label,
      children,
      helperText,
      errorText,
      optionalText,
      variant = "normal",
      ...rest
    } = props;
    const selectedPalette = useAtomValue(selectedPaletteAtom);
    return (
      <ChakraField.Root ref={ref} {...rest}>
        {variant == "normal" ? (
          <>
            {label && (
              <ChakraField.Label color={`${selectedPalette}.600`}>
                {label}
                <ChakraField.RequiredIndicator fallback={optionalText} />
              </ChakraField.Label>
            )}
            {children}
          </>
        ) : (
          <FielFloating
            label={label}
            children={children}
            optionalText={optionalText}
          />
        )}
        {helperText && (
          <ChakraField.HelperText>{helperText}</ChakraField.HelperText>
        )}
        {errorText && (
          <ChakraField.ErrorText>{errorText}</ChakraField.ErrorText>
        )}
      </ChakraField.Root>
    );
  }
);

const FielFloating: React.FC<
  React.PropsWithChildren & {
    label?: React.ReactNode;
    optionalText?: React.ReactNode;
  }
> = ({ children, label, optionalText }) => {
  // Verificamos que el children sea un ReactElement válido antes de clonarlo
  if (!React.isValidElement(children)) {
    throw new Error("El children de CustomField debe ser un ReactElement.");
  }
  const classNames = `peer ${children.props.className}`;
  const placeholder = "";

  const clonedChild = React.cloneElement(children as any, {
    className: classNames, // Combina clases
    placeholder: placeholder, // Agrega el placeholder dinámico
  });
  return (
    <Box pos="relative" w="full">
      {clonedChild}
      {label && (
        <ChakraField.Label css={floatingStyles}>
          {label}
          <ChakraField.RequiredIndicator fallback={optionalText} />
        </ChakraField.Label>
      )}
    </Box>
  );
};
