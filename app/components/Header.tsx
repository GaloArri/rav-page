"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    if (!theme) {
      setTheme("dark");
    }
  }, [theme, setTheme]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const currentTheme = mounted
    ? theme === "system"
      ? systemTheme
      : theme
    : "dark";

  return (
    <>
      {/* Spacer div with color depending on theme */}
      <div
        className={`h-48 w-full ${
          currentTheme === "dark" ? "bg-[#222222]" : "bg-[#f7f7f7]"
        }`}
        aria-hidden="true"
      ></div>

      {/* Header with dynamic theme styles */}
      <header
        className={`fixed w-full top-0 transition-transform duration-300 z-50 ${
          !visible ? "-translate-y-full" : "translate-y-0"
        } ${
          currentTheme === "dark"
            ? "bg-[#1a1a1a]/90 text-white"
            : "bg-[#f7f7f7] text-black"
        }`}
      >
        {/* Top row with background image */}
        <div className="relative h-32 w-full">
          <Image
            src="/images/head.jpg"
            alt="Header background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[hsl(var(--header-overlay))]" />
          <div className="relative h-full flex items-center justify-center">
            <Link href="/" className="flex items-center">
              {mounted && (
                <Image
                  src="/assets/logo.svg"
                  alt="Logo"
                  width={50}
                  height={100}
                  className={`w-auto h-20 hover:opacity-80 transition-opacity ${
                    currentTheme === "dark"
                      ? "invert brightness-200"
                      : "invert-0"
                  }`}
                  priority
                />
              )}
            </Link>
          </div>
        </div>

        {/* Bottom row with navigation */}
        <div
          className={`w-full border-b ${
            currentTheme === "dark" ? "border-[#333333]" : "border-[#cccccc]"
          } ${currentTheme === "dark" ? "bg-[#1a1a1a]/90" : "bg-[#f7f7f7]/90"}`}
        >
          <div className="h-16 flex items-center justify-between">
            <div className="w-full max-w-screen-xl mx-auto px-4 flex items-center justify-center">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-12">
                <Link
                  href="/"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Inicio
                </Link>
                {/* <Link
                  href="/products"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Productos
                </Link> */}
                <Link
                  href="/about"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Nosotros
                </Link>
                <Link
                  href="/trayectoria"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Trayectoria
                </Link>
                <Link
                  href="/servicios"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Servicios
                </Link>
              </nav>

              {/* Mobile Menu Button - Positioned absolutely */}
              <div className="md:hidden absolute right-4">
                <div className="flex items-center space-x-4">
                  <ThemeToggle />
                  <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="relative">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only"> </span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent
                      side="right"
                      className={`${
                        currentTheme === "dark"
                          ? "bg-[#1a1a1a]/90"
                          : "bg-[#f7f7f7]/90"
                      } border-[#333333]`}
                    >
                      <SheetHeader>
                        <SheetTitle> </SheetTitle>
                      </SheetHeader>
                      <nav className="flex flex-col space-y-6 mt-8">
                        <Link
                          href="/about"
                          className="text-lg font-medium hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          Nosotros
                        </Link>
                        <Link
                          href="/contact"
                          className="text-lg font-medium hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          Contacto
                        </Link>
                        <Link
                          href="/trayectoria"
                          className="text-lg font-medium hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          Trayectoria
                        </Link>
                        <Link
                          href="/Servicios"
                          className="text-lg font-medium hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          Servicios
                        </Link>
                      </nav>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>

              {/* Desktop Theme Toggle - Positioned absolutely */}
              <div className="hidden md:block absolute right-4">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
