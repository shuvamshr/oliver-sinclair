"use client";

import Button from "../button";
import Image from "next/image";
import Link from "next/link";

import CheckmarkIcon from "./assets/checkmark.svg";
import ServicePlaceholderIcon from "./assets/service-placeholder.svg";

// const cardStyle: Record<string, string> = {
//   // Add Style If Required
// };

interface ServiceCardProps {
  slug?: string;
  icon?: "default" | string;
  title?: string;
  description?: string;
  feature?: string[];
  buttonText?: string;
}

export default function ServiceCard({
  slug,
  icon,
  title = "untitled",
  description = "No description provided",
  feature = [],
}: ServiceCardProps) {
  // const cardClass = ``;
  return (
    <>
      <div className="flex flex-col lg:w-[32%] rounded-lg shadow-md w-full h-full  hover:shadow-xl transition ease-in-out duration-300">
        <div className="flex flex-col gap-8 lg:px-8 lg:py-10 px-6 py-8">
          <div className="flex flex-col gap-6">
            <Link
              href={`/services/${slug}`}
              className="flex flex-row gap-4 lg:gap-5 items-center"
            >
              {icon && (
                <Image
                  src={
                    icon == "default" ? ServicePlaceholderIcon : "https:" + icon
                  }
                  alt="Card Title Icon"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                  width={30}
                  height={30}
                />
              )}

              <h5 className="font-sans font-semibold text-lg text-gray-800 leading-normal hover:text-red-700">
                {title}
              </h5>
            </Link>

            <p className="font-serif font-regular text-base  text-gray-700 leading-normal">
              {description}
            </p>
          </div>

          <>
            <div className="w-full h-[1px] bg-gray-200"></div>
            <div className="flex flex-col gap-5">
              <h6 className="font-sans font-semibold text-base text-gray-800 leading-none">
                Included Features
              </h6>
              <div className="flex flex-col gap-4">
                <ul className="list-none flex flex-col gap-4">
                  {feature.map((value, index) => (
                    <li
                      key={index}
                      className="font-sans font-medium text-sm  text-gray-700 leading-none flex flex-row gap-4 items-center"
                    >
                      <Image src={CheckmarkIcon} alt="" className="w-5 h-5" />
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>

          <Button
            title="Learn more"
            size="medium"
            display="block"
            link={`/services/${slug}`}
          />
        </div>
      </div>
    </>
  );
}
