import { Box, chakra, List } from "@chakra-ui/react";
import { Children, FC, PropsWithChildren, useEffect, useState } from "react";
import { DownIcon } from "../../icons";
import { LinkButton } from "@/core/components/chakraui/link-button";
import { Link, useLocation } from "react-router";
import { useAtomValue } from "jotai";
import { selectedPaletteAtom } from "@/core/states";
import { useCurrentPalette } from "@/core/hooks";
import { AnimatePresence, motion } from "motion/react";

interface MenuItemWrapperProps extends PropsWithChildren {
  label: string;
  icon?: React.ReactNode;
  to?: string;
  level: number;
  isParentActive?: boolean;
}

const BoxMotion = chakra(motion.div);

const MenuItemWrapper: FC<MenuItemWrapperProps> = (item) => {
  const location = useLocation();
  const selectedPalette = useAtomValue(selectedPaletteAtom);
  const hasChildren = Children.count(item.children) > 0;
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(hasPath(item));
  }, [location.pathname, item]);

  const hasPath = (item: MenuItemWrapperProps): boolean => {
    if (!item) return false;
    if (item.to) return location.pathname === item.to;
    if (item.children) {
      return Children.toArray(item.children).some((child) =>
        hasPath((child as React.ReactElement<MenuItemWrapperProps>).props)
      );
    }
    return false;
  };

  const handleToggle = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.stopPropagation();
    setIsExpanded((isExpanded) => !isExpanded);
  };

  const currentIsActive = location.pathname === item.to;
  const isActive = currentIsActive || hasPath(item);

  return (
    <>
      <List.Item listStyle={"none"} onClick={handleToggle}>
        <Box
          listStyle={"none"}
          borderRight={currentIsActive ? 3 : 0}
          borderRightStyle={"solid"}
          borderRightColor={`${selectedPalette}.600/60`}
          w={"full"}
        >
          <LinkButton
            as={Link}
            pl={0}
            bg={"transparent"}
            color={isActive ? `text.${selectedPalette}` : "GrayText"}
            w={"full"}
            outline={"none"}
            justifyContent={"flex-start"}
            asChild
          >
            {item.to ? (
              <Link to={item.to}>
                <DownButton
                  icon={item.icon}
                  label={item.label}
                  hasChildren={hasChildren}
                  isExpanded={isExpanded}
                />
              </Link>
            ) : (
              <Box>
                <DownButton
                  icon={item.icon}
                  label={item.label}
                  hasChildren={hasChildren}
                  isExpanded={isExpanded}
                />
              </Box>
            )}
          </LinkButton>
        </Box>

        <AnimatePresence presenceAffectsLayout>
          {isExpanded && item.children && (
            <motion.div
              initial={{ height: 0, overflow: "hidden" }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              key={item.label}
            >
              {item.children}
            </motion.div>
          )}
        </AnimatePresence>
      </List.Item>
    </>
  );
};

const DownButton: FC<
  Pick<MenuItemWrapperProps, "label" | "icon"> & {
    hasChildren: boolean;
  } & { isExpanded: boolean }
> = ({ label, icon, hasChildren, isExpanded }) => {
  return (
    <>
      {icon}
      {label}
      {hasChildren && (
        <BoxMotion
          animate={{
            rotate: isExpanded ? 0 : -90,
            transition: {
              duration: 0.2,
              ease: "linear",
            },
          }}
          ml={"auto"}
        >
          <DownIcon />
        </BoxMotion>
      )}
    </>
  );
};

export default MenuItemWrapper;
