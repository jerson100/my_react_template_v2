import { PasswordStrengthMeter } from "@core/components/chakraui/password-input";
import { useWatch } from "react-hook-form";
import { LoginFormValues } from "@auth/libs/login-validation";
import { useMemo } from "react";
import { useAtomValue } from "jotai";
import { selectedPaletteAtom } from "@/core/states";

const PassSecurityCount = () => {
  const passwordValue = useWatch<LoginFormValues>({
    name: "password",
    defaultValue: "",
  });
  const selectedPalette = useAtomValue(selectedPaletteAtom);
  const strength = useMemo(() => {
    if (passwordValue === null || passwordValue.length === 0) return 0;
    if (passwordValue.length < 6) return 1;
    let score = 1;
    if (/[a-zA-Z]/.test(passwordValue) && /\d/.test(passwordValue)) score++;
    if (/[^a-zA-Z0-9]/.test(passwordValue)) score++;
    if (passwordValue.length >= 10) score++;
    return score;
  }, [passwordValue]);
  return (
    <PasswordStrengthMeter value={strength} color={`${selectedPalette}.500`} />
  );
};

export default PassSecurityCount;
