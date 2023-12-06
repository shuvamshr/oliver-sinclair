"use client";

import Button from "../button";
import Image from "next/image";
import Link from "next/link";

import CheckmarkIcon from "./assets/checkmark.svg";
import ServicePlaceholderIcon from "./assets/service-placeholder.svg";
import ThumbnailPlaceholderImg from "./assets/thumbnail-placeholder.jpg";

// const cardStyle: Record<string, string> = {
//   // Add Style If Required
// };

interface CardProps {
  slug?: string;
  thumbnail?: "default" | string;
  category?: string[];
  titleIcon?: "default" | string;
  title?: string;
  description?: string;
  feature?: string[];
  buttonText?: string;
}

export default function Card({
  slug,
  thumbnail,
  category,
  titleIcon,
  title = "untitled",
  description = "No description provided",
  feature,
  buttonText = "Learn More",
}: CardProps) {
  // const cardClass = ``;
  return (
    <>
      <div className="flex flex-col lg:flex-shrink-0 lg:w-[30%] rounded-lg shadow-md w-full h-full">
        {thumbnail && (
          <Image
            src={thumbnail == "default" ? ThumbnailPlaceholderImg : thumbnail}
            className="h-56 rounded-t-lg bg-cover"
            alt="Card Thumbnail"
          />
        )}
        <div className="flex flex-col gap-8 lg:px-8 lg:py-10 px-6 py-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {category && (
                <div className="flex flex-wrap gap-2">
                  {category.map((value, index) => (
                    <p
                      key={index}
                      className="font-sans font-medium text-xs text-red-900 bg-red-300 px-3 h-8 rounded-full flex items-center"
                    >
                      {value}
                    </p>
                  ))}
                </div>
              )}

              <div className="flex flex-row gap-4 lg:gap-5 items-center">
                {titleIcon && (
                  <Image
                    src={
                      titleIcon == "default"
                        ? ServicePlaceholderIcon
                        : "/" + titleIcon
                    }
                    alt="Card Title Icon"
                    className="w-6 h-6 lg:w-8 lg:h-8"
                    width={30}
                    height={30}
                  />
                )}

                <h5 className="font-sans font-semibold text-lg text-gray-800 leading-normal">
                  {title}
                </h5>
              </div>
            </div>

            <p className="font-serif font-regular text-base  text-gray-700 leading-normal">
              {description}
            </p>
          </div>

          {feature && (
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
          )}
          <Link href={`/posts/${slug}`} aria-label={title}>
            <Button title={buttonText} size="medium" display="block" />
          </Link>
        </div>
      </div>
    </>
  );
}