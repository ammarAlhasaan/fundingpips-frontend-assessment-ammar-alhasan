"use client";
import { Navbar as HeroNavbar, NavbarBrand } from "@heroui/navbar";

export default function Navbar() {
  return (
    <HeroNavbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Stock Tracker</p>
      </NavbarBrand>
    </HeroNavbar>
  );
}
