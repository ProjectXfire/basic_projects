import React, { useEffect, useState } from "react";
// Data
import { menusData } from "../data/menus";
// Components
import { MenuNavbar } from "./cMenuNavbar";
import { MenuList } from "./cMenuList";

export const Menu = () => {
  //--> Hooks

  const [menus, setMenus] = useState(menusData);
  const [categories, setCategories] = useState<string[]>([]);

  //--> Methods

  const handleCategory = (cat: string) => {
    if (cat === "all") {
      setMenus(menusData);
      return;
    }
    const menuByCat = menusData.filter((menu) => menu.category === cat);
    setMenus(menuByCat);
  };

  //--> Effects

  useEffect(() => {
    const tempCat = menusData.map((menu) => menu.category);
    const cat = Array.from(new Set(tempCat));
    setCategories(cat);
  }, []);

  //--> Renders

  return (
    <>
      <MenuNavbar categories={categories} onSelectCat={handleCategory} />
      <MenuList menus={menus} />
    </>
  );
};
