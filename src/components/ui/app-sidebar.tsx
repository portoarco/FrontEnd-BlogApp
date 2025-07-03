"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { useEffect, useState } from "react";

export function AppSidebar() {
  // state data username
  const [username, setCurrentUsername] = useState("");

  // ambil data dari localstorage
  useEffect(() => {
    const storedUser = localStorage.getItem("logInUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setCurrentUsername(parsedUser.fullname);
    }
  }, []);


  return (
    //   <Sidebar>
    //     <SidebarHeader />
    //     <p>This is Header</p>
    //     <SidebarContent>
    //       <SidebarGroup />
    //       <SidebarGroup />
    //     </SidebarContent>
    //     <p>This is Footer</p>
    //     <SidebarFooter />
    //   </Sidebar>
    // )

    <Sidebar>
      <SidebarHeader className="border border-t-2 border-gray-200">
        <div className="flex gap-x-3 px-2 py-1 items-center">
          <Image
            src="/icon2.png"
            width={20}
            height={20}
            alt="profile-logo"
            className="w-7"
          ></Image>
          <p>
            Hello, <span className="font-bold">{username}</span>
          </p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroupLabel className="mt-2">Dashboard</SidebarGroupLabel>
        <div>
          <ul className="flex items-start flex-col select-none">
            <button
              type="button"
              className="hover:bg-gray-200 w-full cursor-pointer text-left py-2 px-2 transition-colors duration-300"
            >
              <a href="#create-article">Create New Article</a>
            </button>
            <button className="hover:bg-gray-200 w-full cursor-pointer text-left py-2 px-2 transition-colors duration-200">
              <a href="#article-list">Manage Article</a>
            </button>
            <button className="hover:bg-gray-200 w-full cursor-pointer text-left py-2 px-2 transition-colors duration-200">
              Manage Account
            </button>
            <button className="hover:bg-gray-200 w-full cursor-pointer text-left py-2 px-2 transition-colors duration-200">
              Settings
            </button>
          </ul>
        </div>
      </SidebarContent>
      <SidebarFooter className="gap-3 border-t-2 border-gray-200">
        <div className="flex justify-between items-center">
          <Image
            src="/logo.svg"
            width={30}
            height={30}
            alt="navbar-logo"
            className="w-20 "
          ></Image>
          <p className="text-sm">Created by Arco</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
