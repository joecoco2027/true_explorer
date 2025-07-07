"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeaderNav() {
  const router = useRouter()
  const [selectedMode, setSelectedMode] = useState("dark");
  const { setTheme } = useTheme();
  const [isSticky, setIsSticky] = useState(false); 
  const navz = [
    { label: "Reacts", href: "/reacts"},
    { label: "Wisdom", href: "/wisdom"},
    { label: "Diaries", href: "/diaries"},
    { label: "Tales", href: "/tales"},
    { label: "About", href: "/about"},
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight;  

      if (scrollY >= threshold && !isSticky){
        setIsSticky(true); 
      }else if (scrollY < threshold && isSticky){
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSticky])

  const handMode = () => {
    const html = document.getElementsByTagName("html");
    const currentMode = html[0].className;
    const modeBtn = document.getElementById("btn-mode");

    if (currentMode === "dark") {
      html[0].className = "light";
      setSelectedMode("light");
      setTheme("light");
    } else {
      html[0].className = "dark";
      setSelectedMode("dark");
      setTheme("dark");
    }
  };

  return (
      <nav className={`${isSticky ? 'fixed top-0 bg-white shadow-md' : 'relative bg-transparent'} h-14 w-full px-4 bg-gray-400 dark:bg-gray-800 dark:text-white shadow-md border-b-2`}>
        <div className="flex justify-between items-center h-14">
          <div className="text-veryDarkBlueText text-detail font-bold">
            <Link className="text-veryDarkBlueText dark:text-white hover:text-blue-500" href="/">
              TRUEEXPLORER
            </Link>
          </div>
          <div className="">
            <select name="" id="" className="md:hidden">
              {navz.map((item) => (
                <option className="p-5" key={item.href} onClick={()=> router.push(item.href)}>
                  {item.label}
                </option>
              ))}
            </select>
            <ul className="flex flex-row justify-between hidden md:flex ">
              {navz.map((item) => (
                <li className="p-5" key={item.href}>
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-800 dark:text-white pb-4 hover:border-b-violet-50 hover:text-blue-500 hover:border-b-4 font-medium hover:transform-border hover:transition-all hover:ease-linear"
                >
                  {item.label}
                </Link>
                </li>
              ))}
            </ul>
          </div>
          <Button
            id="btn-mode"
            className="text-veryDarkBlueText bg-transparent hover:bg-transparent text-detail
       dark:bg-darkBlueElements dark:text-whiteText hover:opacity-80"
            onClick={handMode}
          >
            {selectedMode === "dark" ? (
              <span className="flex flex-row items-center gap-3">
                <Sun className="dark:text-white text-veryDarkBlueText " />
                Light Mode
              </span>
            ) : (
              <span id="sunIcon" className="flex flex-row items-center gap-3">
                <Moon className="dark:text-white   text-veryDarkBlueText " />
                Dark Mode
              </span>
            )}
          </Button>
        </div>
      </nav>
  )
}