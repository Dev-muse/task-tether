import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MenuIcon } from "lucide-react";
import Logo from "@/public/tasktether-logo.svg";
// import { currentUser } from '@clerk/nextjs'

type Props = {};

const Navbar = async (props: Props) => {
  // const user = await currentUser()
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center justify-between border-b-[1px] border-neutral-900 ">
      <aside className="flex items-center gap-[2px]">
        <Image src={Logo} alt="Task tether logo" className="shadow-sm w-40" />
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Clients</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
          <li>
            <Link href="#">Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#32c26e_0%,#a3e635_50%,#32c26e_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {/* TODO: wire up user object with this state */}

            {true ? "Dashboard" : "Get Started"}
          </span>
        </Link>
        {/* {user ? <UserButton afterSignOutUrl="/" /> : null} */}
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;
