// import { InputSearchField } from "@core/components/inputs/input-search";
import { InputSearch } from "@/core/components/common";
import { HStack, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const ServiceSearch = () => {
  const { control } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
    },
  });
  return (
    <HStack gap={10} mb={10}>
      <Text fontSize={"md"}>Selecciona un servicio</Text>
      <InputSearch
        control={control}
        name="name"
        w="270px"
        h="33px"
        inputProps={{
          borderColor: "border",
          placeholder: "selecciona un servicio",
        }}
      />
    </HStack>
  );
};

export default ServiceSearch;
