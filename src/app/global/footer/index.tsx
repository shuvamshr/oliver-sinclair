"use client";

import Image from "next/image";

import OliverSinclairWhiteLogo from "./assets/oliver-white.svg";

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-black py-14 lg:pt-24 lg:pb-16 px-6 lg:px-0">
        <div className="container mx-auto flex flex-col gap-16">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-3 lg:flex lg:flex-col lg:justify-between">
              <Image
                src={OliverSinclairWhiteLogo}
                alt="Oliver Sinclair White Logo"
              />
              <p className="font-serif font-regular text-sm text-white leading-none lg:block hidden">
                a project by Shuvam Shrestha. Who’s that?
              </p>
            </div>

            <div className="col-span-12 lg:col-span-9 lg:col-start-5 flex lg:flex-row flex-col justify-around gap-10">
              <div className="lg:w-[1px] lg:h-full lg:mt-0 h-[1px] w-full mt-10 bg-[#353535] "></div>
              <div className="flex flex-col gap-8">
                <h6 className="font-sans font-semibold text-lg text-white leading-none">
                  Browse Around
                </h6>
                <ul className="list-none flex flex-col gap-6">
                  <li className="font-serif font-regular text-base  text-gray-300 leading-none">
                    home
                  </li>
                  <li className="font-serif font-regular text-base  text-gray-300 leading-none">
                    services
                  </li>
                  <li className="font-serif font-regular text-base  text-gray-300 leading-none">
                    case studies
                  </li>
                  <li className="font-serif font-regular text-base  text-gray-300 leading-none">
                    blogs
                  </li>
                  <li className="font-serif font-regular text-base  text-gray-300 leading-none">
                    contact
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-8">
                <h6 className="font-sans font-semibold text-lg text-white leading-none">
                  Services
                </h6>
                <ul className="list-none flex flex-col gap-6">
                  <li className="font-serif font-regular text-base  text-gray-300 leading-none">
                    UX Research
                  </li>
                  <li className="font-serif font-regular text-base  text-gray-300 leading-none">
                    Design System
                  </li>
                  <li className="font-serif font-regular text-base  text-gray-300 leading-none">
                    No Code Development
                  </li>
                  <li className="font-serif font-regular text-base  text-gray-300 leading-none">
                    Product Design
                  </li>
                  <li className="font-serif font-regular text-base  text-gray-300 leading-none">
                    View All
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-8">
                <h6 className="font-sans font-semibold text-lg text-white leading-none">
                  Connect
                </h6>
                <ul className="list-none flex flex-col gap-6">
                  <li className="font-serif font-regular text-base  text-gray-300 leading-none">
                    LinkedIn
                  </li>
                  <li className="font-serif font-regular text-base  text-gray-300 leading-none">
                    Facebook
                  </li>
                  <li className="font-serif font-regular text-base  text-gray-300 leading-none">
                    Instagram
                  </li>
                  <li className="font-serif font-regular text-base  text-gray-300 leading-none">
                    Twitter
                  </li>
                  <li className="font-serif font-regular text-base  text-gray-300 leading-none">
                    Email
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-[#353535] "></div>
          <div className="flex lg:flex-row flex-col justify-between gap-10">
            <p className="font-sans font-regular text-base text-white leading-none">
              Copyright 2023, Oliver Sinclair
            </p>
            <div className="flex flex-row gap-16">
              <p className="font-sans font-semibold text-base text-white leading-none">
                Privacy Policy
              </p>
              <p className="font-sans font-semibold text-base text-white leading-none">
                Terms & Conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
