import { Box, Stack } from "@chakra-ui/react";
import { Button } from "@core/components/chakraui/button";
import { Input } from "@core/components/chakraui/input";
import { Field } from "@core/components/chakraui/field";
import { useSignIn } from "@auth/hooks";
import { InputGroup } from "@core/components/chakraui/input-group";
import { LuUser, LuKey } from "react-icons/lu";
import { PasswordInput } from "@core/components/chakraui/password-input";
import { FormProvider } from "react-hook-form";
import PassSecurityCount from "./PassSecurityCount";
import { IsCoverFaceAtom, SpreadFingersAtom } from "@auth/states/login-atoms";
import { useSetAtom } from "jotai";

const Form = () => {
  const { instance, handleSubmit } = useSignIn();
  const setisCoverFaceAtom = useSetAtom(IsCoverFaceAtom);
  const setSpreadFingersAtom = useSetAtom(SpreadFingersAtom);

  const coverFace = () => {
    setisCoverFaceAtom(true);
  };
  const unCoverFace: React.FocusEventHandler<HTMLInputElement> = () => {
    setisCoverFaceAtom(false);
  };

  const { onBlur, ...passwordRegister } = instance.register("password");

  return (
    <FormProvider {...instance}>
      <form onSubmit={instance.handleSubmit(handleSubmit)}>
        <Box className="input-container">
          <Stack gap="6" align="flex-start">
            <Field
              label="Username"
              variant="normal"
              invalid={!!instance.formState.errors.username}
              errorText={instance.formState.errors.username?.message}
            >
              <InputGroup flex="1" startElement={<LuUser />} w={"full"}>
                <Input
                  id="username"
                  type="text"
                  {...instance.register("username")}
                />
              </InputGroup>
            </Field>
            <Field
              label="Contraseña"
              variant="normal"
              invalid={!!instance.formState.errors.password}
              errorText={instance.formState.errors.password?.message}
            >
              <Stack w={"full"}>
                <InputGroup flex="1" startElement={<LuKey />} w={"full"}>
                  <PasswordInput
                    id="password"
                    type="password"
                    onFocus={coverFace}
                    onVisibleChange={(b) => {
                      setSpreadFingersAtom(b);
                    }}
                    onBlur={(e) => {
                      unCoverFace(e);
                      onBlur(e);
                    }}
                    {...passwordRegister}
                  />
                </InputGroup>
                <PassSecurityCount />
              </Stack>
            </Field>
            <Button type="submit" w="full">
              Iniciar Sesión
            </Button>
          </Stack>
        </Box>
      </form>
    </FormProvider>
  );
};

export default Form;
