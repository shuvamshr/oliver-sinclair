import { useState } from "react";

import Image from "next/image";

import Note from "@/app/components/note";

import UTSLogo from "./assets/uts.svg";
import AppleLogo from "./assets/apple.svg";
import DolbyLogo from "./assets/dolby.svg";
import LeedsLogo from "./assets/leeds.svg";
import OliverLogo from "./assets/oliver-white.svg";

export default function Credentials() {
  const [selectedLogo, setSelectedLogo] = useState([
    "untitled",
    "undescribed",
    "unlinked",
  ]);
  const [activeLogo, setActiveLogo] = useState("");

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
      <div className="lg:flex lg:flex-wrap lg:justify-between items-center lg:overflow-hidden flex flex-row overflow-x-auto snap-x gap-16">
        <Image
          src={UTSLogo}
          className={`snap-center hover:opacity-50 transition ease-in-out duration-200 ${
            activeLogo === "University of Technology Sydney:"
              ? "opacity-50"
              : ""
          }`}
          alt=""
          onClick={() =>
            handleLogoClick(
              "University of Technology Sydney:",
              "Completed Master of Interaction Degree and garnered expertise in product design process using human-centered research and study",
              "https://www.uts.edu.au/study/find-a-course/master-interaction-design-extension"
            )
          }
        />
        <Image
          src={AppleLogo}
          className={`snap-center hover:opacity-50 transition ease-in-out duration-200 ${
            activeLogo === "Apple Foundation Program:" ? "opacity-50" : ""
          }`}
          alt=""
          onClick={() =>
            handleLogoClick(
              "Apple Foundation Program:",
              "Completed a highly competitive 4 week program hosted by Apple and University of Technology Sydney",
              "https://www.linkedin.com/posts/shuvamshr_applefoundationprogram-productdesign-iosdevelopment-activity-7039541695239127040-F32l?utm_source=share&utm_medium=member_desktop"
            )
          }
        />
        <Image
          src={DolbyLogo}
          className={`snap-center hover:opacity-50 transition ease-in-out duration-200 ${
            activeLogo === "Dolby.IO Hackathon:" ? "opacity-50" : ""
          }`}
          alt=""
          onClick={() =>
            handleLogoClick(
              "Dolby.IO Hackathon:",
              "Won first place prize for a two day hackathon to develop a platform for social good using Dolby's Conference API",
              "https://www.linkedin.com/posts/shuvamshr_dolby-hackathon-activity-7081946350925352960-Bbaw?utm_source=share&utm_medium=member_desktop"
            )
          }
        />
        <Image
          src={LeedsLogo}
          className={`snap-center hover:opacity-50 transition ease-in-out duration-200 ${
            activeLogo === "Leeds Beckett University:" ? "opacity-50" : ""
          }`}
          alt=""
          onClick={() =>
            handleLogoClick(
              "Leeds Beckett University:",
              "Completed Bachelor of Computer Science and gained advanced software engineering and management knowledge",
              "https://www.leedsbeckett.ac.uk/courses/computer-science-bsc/"
            )
          }
        />
        <Image
          src={OliverLogo}
          className={`snap-center hover:opacity-50 transition ease-in-out duration-200 ${
            activeLogo === "Oliver Sinclair:" ? "opacity-50" : ""
          }`}
          alt=""
          onClick={() =>
            handleLogoClick(
              "Oliver Sinclair:",
              "Just put this logo in here to see how consistent it would look with established logos. I think it looks fine for now. Might update it later. I've linked the company logo page below.",
              "https://www.linkedin.com/company/oliversinclair/"
            )
          }
        />
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
