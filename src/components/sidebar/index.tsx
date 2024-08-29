"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/icon.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { menuOptions } from "@/lib/constants";
import clsx from "clsx";
import { Separator } from "@/components/ui/separator";
import { Database, GitBranch, LucideMousePointerClick } from "lucide-react";
import { ModeToggle } from "../mode-toggle";

type Props = {};

const Sidebar = (props: Props) => {
  const pathName = usePathname();
  return (
    <nav
      className="dark:bg-black h-screen overflow-scroll
    flex justify-between items-center flex-col gap-10 py-6 px-2"
    >
      <div className="flex items-center justify-center flex-col gap-8">
        <Link href={"/"} className="flex flex-row font-bold">
          <Image alt="task tether logo" src={Logo} className="w-10" />
        </Link>
        <TooltipProvider>
          {menuOptions.map((menuItem, index) => {
            return (
              <ul className="" key={menuItem.name}>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger>
                    <li>
                      <Link
                        href={menuItem.href}
                        className={clsx(
                          "group h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer",
                          {
                            "dark:bg-[#70992e] bg-[#000000]":
                              pathName == menuItem.href,
                          }
                        )}
                      >
                        <menuItem.Component
                          selected={pathName === menuItem.href}
                        />
                      </Link>
                    </li>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="bg-black/10 backdrop-blur-md"
                  >
                    <span>{menuItem.name}</span>
                  </TooltipContent>
                </Tooltip>
              </ul>
            );
          })}
        </TooltipProvider>
        <Separator />
        <div
          className="flex flex-col items-center gap-9
          dark:bg-[#353346]/30 py-4 px-2 rounded-full h-56 overflow-scroll no-scrollbar
        border-[1px] "
        >
          <div
            className="relative dark:bg-[#353346]/70 p-2 
            rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]"
          >
            <LucideMousePointerClick size={18} className="dark:text-white" />
            <div
              className="border-l-2 border-muted-foreground/50 
            h-6 left-1/2 absolute transform translate-x-[-50%] -bottom-[30px]"
            />
          </div>
          <div
            className="relative dark:bg-[#353346]/70 p-2 
            rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]"
          >
            <GitBranch size={18} className="text-muted-foreground" />
            <div
              className="border-l-2 border-muted-foreground/50 
            h-6 left-1/2 absolute transform translate-x-[-50%] -bottom-[30px]"
            />
          </div>
          <div
            className="relative dark:bg-[#353346]/70 p-2 
            rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]"
          >
            <Database size={18} className="text-muted-foreground" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 flex-col">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Sidebar;
