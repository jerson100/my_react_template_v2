import { useChangeHeaderTitle } from "@/core/hooks";
import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

const ProfileView = () => {
  useChangeHeaderTitle("Perfil");
  return (
    <>
      <Helmet>
        <meta name="description" content="Perfil de x" />
        <title>Perfil | User</title>
      </Helmet>
      <Box>ProfileView</Box>
    </>
  );
};

export default ProfileView;
