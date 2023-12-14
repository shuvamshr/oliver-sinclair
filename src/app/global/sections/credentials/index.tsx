import { useState } from "react";

import Image from "next/image";

import Note from "@/app/components/note";

import UTSLogo from "./assets/uts.svg";
import AppleLogo from "./assets/apple.svg";
import DolbyLogo from "./assets/dolby.svg";
import LeedsLogo from "./assets/leeds.svg";
import OliverLogo from "./assets/oliver-white.svg";

import CredentialData from "./assets/credentials.json";

const getLogoByValue = (logoValue: any) => {
  switch (logoValue) {
    case "UTSLogo":
      return UTSLogo;
    case "AppleLogo":
      return AppleLogo;
    case "DolbyLogo":
      return DolbyLogo;
    case "LeedsLogo":
      return LeedsLogo;
    case "OliverLogo":
      return OliverLogo;
    default:
      return OliverLogo; // You might want to handle the default case appropriately
  }
};

export default function Credentials() {
  const [selectedLogo, setSelectedLogo] = useState([
    "untitled",
    "undescribed",
    "unlinked",
  ]);
  const [activeLogo, setActiveLogo] = useState("");

  const logoStyle =
    "snap-center hover:opacity-50 transition ease-in-out duration-200 cursor-pointer";

  const handleLogoClick = (
    title: string,
    description: string,
    link: string
  ) => {
    if (selectedLogo[0] === title) {
      setSelectedLogo(["untitled", "undescribed", "unlinked"]);
      setActiveLogo("");
    } else {
      setSelectedLogo([title, description, link]);
      setActiveLogo(title);
    }
  };

  return (
    <>
      <div className="flex flex-row lg:justify-around lg:flex-wrap lg:overflow-hidden overflow-x-auto snap-x gap-16 items-center">
        {CredentialData.map((value, index) => (
          <Image
            key={index}
            src={getLogoByValue(value.logo)}
            className={`${logoStyle} ${
              activeLogo === value.title ? "animate-pulse" : ""
            }`}
            alt=""
            onClick={() =>
              handleLogoClick(value.title, value.description, value.link)
            }
          />
        ))}
      </div>
      <div
        className={`transition-all duration-200 ease-in ${
          selectedLogo[0] === "untitled" ? "hidden" : ""
        }`}
      >
        {selectedLogo[0] !== "untitled" && (
          <Note
            title={selectedLogo[0]}
            description={selectedLogo[1]}
            link={selectedLogo[2]}
          />
        )}
      </div>
    </>
  );
}
