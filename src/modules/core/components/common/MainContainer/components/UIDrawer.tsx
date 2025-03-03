import {
  RadioCardItem,
  RadioCardLabel,
  RadioCardRoot,
} from "@/core/components/chakraui/radio-card";
import { selectedPaletteAtom, UIDrawerAtom } from "@/core/states";
import { For, Grid, GridItem } from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
} from "@core/components/chakraui/drawer";
import { useAtom } from "jotai";

const UIDrawer = () => {
  const [showDrawer, setShowDrawer] = useAtom(UIDrawerAtom);
  return (
    <DrawerRoot open={showDrawer} onOpenChange={(e) => setShowDrawer(e.open)}>
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle as={"h2"}>Interfaz de usuario</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <DrawerSelector />
        </DrawerBody>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

const colorPalettes = [
  { title: "Griss", value: "gray" },
  { title: "Rojo", value: "red" },
  { title: "Naranja", value: "orange" },
  { title: "Amarillo", value: "yellow" },
  { title: "Verde", value: "green" },
  { title: "Teal", value: "teal" },
  { title: "Azul", value: "blue" },
  { title: "Cyan", value: "cyan" },
  { title: "Morado", value: "purple" },
  { title: "Rosado", value: "pink" },
];

const DrawerSelector = () => {
  const [selectedPalette, setSelectedPalette] = useAtom(selectedPaletteAtom);
  const handleChangePalette = (palette: any) => {
    setSelectedPalette(palette.target.value);
  };
  return (
    <>
      <RadioCardRoot value={selectedPalette} onChange={handleChangePalette}>
        <RadioCardLabel as="h3">Selector de paleta</RadioCardLabel>
        <Grid
          gridTemplateColumns={"repeat(auto-fit, minmax(100px, 1fr))"}
          gap={3}
        >
          <For each={colorPalettes}>
            {(item) => (
              <GridItem key={item.value}>
                <RadioCardItem
                  cursor={"pointer"}
                  _hover={{
                    bg: {
                      _dark: `${item.value}.900/100`,
                      _light: `${item.value}.500/30`,
                    },
                  }}
                  colorPalette={item.value}
                  label={item.title}
                  value={item.value}
                />
              </GridItem>
            )}
          </For>
        </Grid>
      </RadioCardRoot>
    </>
  );
};

export default UIDrawer;
