"use client";

import { useState } from "react";

import Button from "@/app/components/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactCard from "@/app/components/contact_card";

import Image from "next/image";

import OliverSinclairLogo from "./assets/oliver-color.svg";
import CloseIcon from "./assets/close.svg";
import MenuIcon from "./assets/menu.svg";

const linkStyle = {
  active: "font-sans font-semibold text-sm text-gray-800 leading-none",
  inactive:
    "font-serif font-regular text-base text-gray-700 leading-none transition ease-in-out duration-300 hover:font-sans hover:font-semibold hover:text-sm hover:text-gray-800",
  sidebar_active: "font-sans font-semibold text-lg text-gray-800",
  sidebar_inactive: "font-serif font-regular text-lg text-gray-700",
};

export default function Header() {
  const [toggle, setToggle] = useState(true);
  const [conToggle, setConToggle] = useState(true);
  const pathname = usePathname();

  return (
    <>
      <div
        className={`flex fixed z-50 justify-center align-middle pt-32 px-6 w-full h-full bg-black/50  transition ease-out duration-200 ${
          conToggle ? "hidden" : "block"
        }`}
      >
        <ContactCard onClick={() => setConToggle(!conToggle)} />
      </div>
      <div
        className={`container-fluid bg-white px-6 z-40 h-screen w-full fixed transition ease-out duration-200  ${
          toggle ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="container mx-auto h-full flex flex-col gap-10">
          <div className="flex flex-col gap-8 pt-28">
            <Link
              className={`${
                pathname === "/"
                  ? linkStyle["sidebar_active"]
                  : linkStyle["sidebar_inactive"]
              }`}
              href="/"
              onClick={() => setToggle(!toggle)}
            >
              home
            </Link>

            <Link
              className={`${
                pathname === "/services"
                  ? linkStyle["sidebar_active"]
                  : linkStyle["sidebar_inactive"]
              }`}
              href="/services"
              onClick={() => setToggle(!toggle)}
            >
              services
            </Link>

            <Link
              className={`${
                pathname.startsWith("/case-study/") ||
                pathname === "/case-study"
                  ? linkStyle["sidebar_active"]
                  : linkStyle["sidebar_inactive"]
              }`}
              href="/case-study"
              onClick={() => setToggle(!toggle)}
            >
              case studies
            </Link>

            <Link
              className={`${
                pathname.startsWith("/blogs/") || pathname === "/blogs"
                  ? linkStyle["sidebar_active"]
                  : linkStyle["sidebar_inactive"]
              }`}
              href="/blogs"
              onClick={() => setToggle(!toggle)}
            >
              blogs
            </Link>

            <div
              className={`${linkStyle["sidebar_inactive"]} hover:cursor-pointer`}
              onClick={() => {
                setToggle(!toggle);
                setConToggle(!conToggle);
              }}
            >
              contact
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              title="Get in Touch"
              type="secondary"
              size="large"
              link="https://calendly.com/oliversinclair/30min"
              newTab={true}
            />
            <Button
              title="Who's Oliver"
              type="primary"
              size="large"
              link="blogs/unveiling-the-enigma-who-is-oliver-sinclair"
              newTab={true}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid bg-white px-6 lg:px-0 fixed top-0 left-0 right-0 flex flex-row flex-start h-20 items-center z-40 border-b-[0.5px] border-gray-200">
        <div className="container mx-auto flex flex-row items-center justify-between">
          <Link href="/">
            <Image
              src={OliverSinclairLogo}
              alt="Oliver Sinclair Logo"
              className="lg:w-[255px] w-[210px]"
            />
          </Link>
          <div className="lg:flex lg:flex-row hidden items-center gap-10">
            <Link
              className={`${
                pathname === "/" ? linkStyle["active"] : linkStyle["inactive"]
              }`}
              href="/"
            >
              home
            </Link>

            <Link
              className={`${
                pathname === "/services"
                  ? linkStyle["active"]
                  : linkStyle["inactive"]
              }`}
              href="/services"
            >
              services
            </Link>

            <Link
              className={`${
                pathname.startsWith("/case-study/") ||
                pathname === "/case-study"
                  ? linkStyle["active"]
                  : linkStyle["inactive"]
              }`}
              href="/case-study"
            >
              case studies
            </Link>

            <Link
              className={
                pathname.startsWith("/blogs/") || pathname === "/blogs"
                  ? linkStyle["active"]
                  : linkStyle["inactive"]
              }
              href="/blogs"
            >
              blogs
            </Link>
            <div
              className={`${linkStyle["inactive"]} hover:cursor-pointer`}
              onClick={() => setConToggle(!conToggle)}
            >
              contact
            </div>
          </div>
          <div className="lg:flex lg:flex-row gap-4 hidden">
            <Button
              title="Get in Touch"
              type="secondary"
              size="medium"
              link="https://calendly.com/oliversinclair/30min"
              newTab={true}
            />
            <Button
              title="Who's Oliver"
              type="primary"
              size="medium"
              link="blogs/unveiling-the-enigma-who-is-oliver-sinclair"
              newTab={true}
            />
          </div>

          <Image
            src={toggle ? MenuIcon : CloseIcon}
            alt="Menu Icon"
            className="lg:hidden transition ease-in-out duration-100"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>
    </>
  );
}
