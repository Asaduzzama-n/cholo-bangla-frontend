/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MoonIcon, SunIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "./menubar";
import { isLoggedIn, removeUserInfo } from "@/helpers/auth.helpers";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  const { user, setLoading, setUser } = useAuth();

  const logOut = () => {
    removeUserInfo("accessToken");
    setUser(null);
    router.push("/login");
  };

  // Load theme from local storage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="bg-white dark:bg-secondary shadow sticky top-0 z-10">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h2 className="font-bold">CHOLO-BANGLA</h2>
              {/* <img className="h-8 w-8" src="/logo.svg" alt="Logo" /> */}
            </div>
          </div>

          <div className="flex items-center">
            <div className="mx-10 flex items-baseline space-x-4 md:space-x-10">
              <Link href="/" passHref>
                Home
              </Link>
              <Link className="hidden md:block" href="/about" passHref>
                About
              </Link>
              <Link href="/events" passHref>
                Events
              </Link>
            </div>

            <div className="flex bg-black/15 p-1 hover:bg-black/20 items-center rounded-full">
              <button
                onClick={toggleDarkMode}
                className="p-1 rounded-full text-gray-900 dark:text-white focus:outline-none"
              >
                {darkMode ? (
                  <SunIcon className="h-6 w-6" />
                ) : (
                  <MoonIcon className="h-6 w-6" />
                )}
              </button>
              <h2 className="font-bold ml-5">{user?.firstName}</h2>

              <Menubar className="">
                <MenubarMenu>
                  <MenubarTrigger className=" cursor-pointer ">
                    <UserCircleIcon className="h-6 w-6 outline-none" />
                  </MenubarTrigger>
                  <MenubarContent className="m-5">
                    <MenubarItem>
                      <Link className="w-full" href="/profile" passHref>
                        Profile
                      </Link>
                    </MenubarItem>
                    <MenubarSeparator></MenubarSeparator>

                    {user?.email ? (
                      <MenubarItem>
                        <button
                          onClick={() => logOut()}
                          className="w-full text-start"
                        >
                          Logout
                        </button>
                      </MenubarItem>
                    ) : (
                      <MenubarItem>
                        <Link className="w-full" href="/login" passHref>
                          Login
                        </Link>
                      </MenubarItem>
                    )}
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
