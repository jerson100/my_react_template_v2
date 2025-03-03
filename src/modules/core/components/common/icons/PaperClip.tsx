import { BsPaperclip } from "react-icons/bs";
import { chakra } from "@chakra-ui/react";

import { TbClipboardCheck } from "react-icons/tb";
import { wrapIconWithMeta } from "@/core/utils";
export const PaperClipIcon = chakra(BsPaperclip);

export const ClipboardCheckIcon = wrapIconWithMeta(chakra(TbClipboardCheck), {
  description: "Clipboard  with check icon",
  tags: ["task", "clipboard", "check", "menu"],
});
