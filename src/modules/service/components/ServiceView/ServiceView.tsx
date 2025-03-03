import { RenderServiceCardSkeleton } from "@/core/components/common/skeletons";
import { Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import ServiceSearch from "./components/ServiceSearch";
import { ServiceCard } from "./components/ServiceCard";
import { useChangeHeaderTitle } from "@/core/hooks";
import { Helmet } from "react-helmet-async";

const ServiceView = () => {
  const [isLoading, setIsLoading] = useState(false);
  useChangeHeaderTitle("Servicios");
  const services = [
    {
      primaryLevelId: "1",
      name: "Nombre del servicio",
      secondaryLevelCount: "1",
    },
    {
      primaryLevelId: "2",
      name: "Nombre del servicio",
      secondaryLevelCount: "1",
    },
    {
      primaryLevelId: "3",
      name: "Nombre del servicio",
      secondaryLevelCount: "1",
    },
    {
      primaryLevelId: "4",
      name: "Nombre del servicio",
      secondaryLevelCount: "1",
    },
    {
      primaryLevelId: "5",
      name: "Nombre del servicio",
      secondaryLevelCount: "1",
    },
  ];
  return (
    <>
      <Helmet>
        <meta name="description" content="Servicios | Pacífico" />
        <title>Servicios | Pacífico</title>
      </Helmet>
      <Flex justifyContent="center" marginX={0} marginY="auto">
        <Container maxWidth={"6xl"} mx={"auto"}>
          <ServiceSearch />
          <Grid
            gridTemplateColumns={"repeat(auto-fill, minmax(250px, 1fr))"}
            gap={6}
          >
            {services?.map((service: any) => (
              <GridItem key={service.primaryLevelId}>
                <ServiceCard
                  serviceName={service.name}
                  totalProcesses={service.secondaryLevelCount || 0}
                  primaryLevelId={service.primaryLevelId}
                  onlyOneService={services?.length === 1}
                />
              </GridItem>
            ))}
            {(isLoading || services?.length === 0) && (
              <RenderServiceCardSkeleton />
            )}
          </Grid>
        </Container>
      </Flex>
    </>
  );
};

export default ServiceView;
