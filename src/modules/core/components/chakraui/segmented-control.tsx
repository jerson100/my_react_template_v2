"use client";

import { selectedPaletteAtom } from "@/core/states";
import { For, SegmentGroup } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import * as React from "react";

interface Item {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface SegmentedControlProps extends SegmentGroup.RootProps {
  items: Array<string | Item>;
}

function normalize(items: Array<string | Item>): Item[] {
  return items.map((item) => {
    if (typeof item === "string") return { value: item, label: item };
    return item;
  });
}

export const SegmentedControl = React.forwardRef<
  HTMLDivElement,
  SegmentedControlProps
>(function SegmentedControl(props, ref) {
  const { items, ...rest } = props;
  const data = React.useMemo(() => normalize(items), [items]);
  const selectedPalette = useAtomValue(selectedPaletteAtom);
  return (
    <SegmentGroup.Root
      ref={ref}
      {...rest}
      bg={{ _light: "white", _dark: "transparent" }}
    >
      <SegmentGroup.Indicator
        bg={`${selectedPalette}.500/8`}
        borderRightColor={`${selectedPalette}.500/70`}
        borderRightWidth={3}
        borderRightStyle={"solid"}
        borderRadius={0}
        color={"white"}
      />
      <For each={data}>
        {(item) => (
          <SegmentGroup.Item
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            color={`${selectedPalette}.500`}
            fontWeight={"500"}
            cursor={"pointer"}
            p={0}
          >
            <SegmentGroup.ItemText w={"100%"}>
              {item.label}
            </SegmentGroup.ItemText>
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
        )}
      </For>
    </SegmentGroup.Root>
  );
});
