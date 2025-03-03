"use client";
import {Navbar as HeroNavbar, NavbarBrand} from "@heroui/navbar";

export default function Navbar() {
  return (
    <div className="container mx-auto"> {/* ✅ Custom container here */}
      <HeroNavbar className="w-full flex justify-between">
        <NavbarBrand>
          <p className="font-bold text-inherit">Stock Tracker</p>
        </NavbarBrand>
      </HeroNavbar>
    </div>
  );
}
