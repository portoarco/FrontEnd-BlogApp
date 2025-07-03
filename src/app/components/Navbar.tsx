"use client";

import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  return (
    <nav className="flex flex-col md:flex-row md:justify-between p-2 bg-[#ebedf6] items-center ">
      <div id="logo" className="">
        <Image
          src="/logo.svg"
          width={120}
          height={50}
          alt="logo"
          className="w-40"
        ></Image>
      </div>
      <div
        id="menu"
        className="flex lg:justify-between gap-5 py-2 text-lg leading-[24px] font-medium"
      >
        <Link href="/">Home</Link>
        <Link href="/">Articles</Link>
        <Link href="/">Author</Link>
        <Link href="/">Contact</Link>
      </div>
      <div id="toggle" className="flex gap-2 ">
        <button
          type="button"
          className=" max-md:absolute max-md:right-4 max-md:top-5 cursor-pointer "
        >
          <Sun size={25}></Sun>
        </button>
        <div className="flex justify-between gap-2 ">
          <Button
            type="button"
            className="bg-gray-600 cursor-pointer"
            onClick={() => router.push("/signin")}
          >
            Sign In
          </Button>
          <Button
            type="button"
            className="cursor-pointer"
            onClick={() => router.push("/signup")}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
