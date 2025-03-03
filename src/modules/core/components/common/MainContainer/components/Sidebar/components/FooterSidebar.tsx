import { Box } from "@chakra-ui/react";
import { Avatar } from "@core/components/chakraui/avatar";
import { Button } from "@core/components/chakraui/button";
import { RiArrowRightLine } from "react-icons/ri";
import UserMenu from "../../../../UserMenu";

const FooterSidebar = () => {
  return (
    <Box mt="auto">
      <UserMenu>
        <Button
          variant="subtle"
          size={"md"}
          w={"full"}
          justifyContent={"flex-start"}
        >
          <Avatar size={"xs"} />
          Jerson Ramírez
          <RiArrowRightLine />
        </Button>
      </UserMenu>
    </Box>
  );
};

export default FooterSidebar;
