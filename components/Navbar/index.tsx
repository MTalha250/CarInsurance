"use client";
import React from "react";
import Link from "next/link";
import { navLinks } from "@/constants";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <div className="px-16 py-5 shadow flex justify-between w-full bg-white items-center">
      <h1 className="font-extrabold text-2xl">Car Insurance.</h1>

      <NavigationMenu>
        <NavigationMenuList>
          {navLinks.map((item) => (
            <NavigationMenuItem>
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
              <NavigationMenuContent className="p-5 flex flex-col">
                <NavigationMenuLink>Link</NavigationMenuLink>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>Log In</NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
