"use client";
import { totalCartItemSelector } from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import React from "react";
import { FaOpencart } from "react-icons/fa6";

interface NavbarProps {
  className?: string;
}
const Navbar = (prop: NavbarProps) => {
  const totalItems = useAppSelector(totalCartItemSelector);
  return (
    <div className="flex items-center justify-between my-10 max-w-[80vw] mx-auto">
      <Link href={"/"} className="font-black text-xl italic">Fake Shop</Link>

      <Link href={"/cart"} className={`relative ${prop.className}`}>
        <FaOpencart className="" size={50} />
        <span className={`${totalItems<1 ? "":"bg-red-500"} py-1 px-3 bg-opacity-90 text-white absolute -top-3 -right-3 rounded-full animate-pingOnce`}>
          {!!totalItems && totalItems}
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
