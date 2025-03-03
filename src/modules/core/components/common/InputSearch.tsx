import { FC } from "react";
import { useController } from "react-hook-form";
import { SearchIcon } from "@core/components/common";
import { SafeAny } from "@core/types";
import { InputGroup, InputGroupProps } from "../chakraui/input-group";
import { Loader } from "./loader";
import { Field } from "../chakraui/field";
import { InputProps } from "@chakra-ui/react";
import { Input } from "../chakraui/input";

type InputSearchProps = InputGroupProps & {
  label?: string;
  ml?: string;
  inputProps?: InputProps;
  control?: any;
  name?: string;
  isLoading?: boolean;
};

export const InputSearch: FC<InputSearchProps> = ({
  inputProps,
  isLoading,
  ...props
}) => {
  return (
    <Field
      label={props.label}
      mb={0}
      mr={3}
      w={"65px"}
      display={"flex"}
      justifyContent={"end"}
    >
      <InputGroup
        marginRight={1}
        endElement={
          <>
            {isLoading ? (
              <Loader size={"md"} color="brand.primary" thickness={3} />
            ) : (
              <SearchIcon color={"brand.primary"} />
            )}
          </>
        }
        {...(props as SafeAny)}
        alignItems={"center"}
      >
        <Input {...(inputProps as SafeAny)} />
      </InputGroup>
    </Field>
  );
};

export const InputSearchField: FC<InputSearchProps> = ({
  inputProps,
  ...props
}) => {
  const { field } = useController({
    control: props.control,
    name: props?.name ?? "",
  });
  field.value = field.value ?? "";
  return (
    <InputGroup {...(props as any)} right={<SearchIcon />}>
      <Input bg={"white"} {...inputProps} {...field} />
    </InputGroup>
  );
};
