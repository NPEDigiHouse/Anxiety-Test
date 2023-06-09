import { Group } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { ROUTES } from "../utils/const/routes";
import { NavbarMenuType } from "../utils/const/types";
import HeaderNavbarMenuItems from "./HeaderNavbarMenuItems";

export interface IHeaderLayout {
  scrollY: any;
  currentPage: NavbarMenuType;
  setCurrentPage: React.Dispatch<React.SetStateAction<NavbarMenuType>>;
}

const HeaderLayout: React.FC<IHeaderLayout> = ({ scrollY = 0, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(scrollY != 0);

  useEffect(() => {
    setIsScrolled(scrollY != 0);
  }, [scrollY]);

  return (
    <div className="relative z-[100] ">
      <div className="fixed top-4 w-full ">
          <Group
            className={`${
              !isScrolled ? "bg-transparent border-white" : "bg-white/[0.925] !border-secondary-500 shadow-[0_0_20px_4px_rgba(0,0,0,0.125)]"
            } px-3 py-2 transition-all ease-linear duration-200 rounded-full justify-evenly w-fit gap-2 sm:gap-8 mx-auto border flex-nowrap`}
          >
            <HeaderNavbarMenuItems
              href={`/${ROUTES.home}`}
              isScrolled={isScrolled}
              label="Home"
              // onClick={() => {
              //   setCurrentPage("");
              // }}
              isActive={currentPage == ROUTES.home}
            />
            <HeaderNavbarMenuItems
              href={`/${ROUTES.anxietyTest}`}
              isScrolled={isScrolled}
              label="Tes Kecemasan"
              isActive={currentPage == ROUTES.anxietyTest}
            />
            <HeaderNavbarMenuItems
              href={`/${ROUTES.anxietyClass}`}
              isScrolled={isScrolled}
              label="Tingkat Kecemasan"
              isActive={currentPage == ROUTES.anxietyClass}
            />
          </Group>
      </div>
    </div>
  );
};
export default HeaderLayout;
