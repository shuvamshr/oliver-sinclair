"use client";

import Image from "next/image";
import Link from "next/link";

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
                  <Link
                    href="/"
                    className="font-serif font-regular text-base  text-gray-300 leading-none"
                  >
                    home
                  </Link>
                  <Link
                    href="/services"
                    className="font-serif font-regular text-base  text-gray-300 leading-none"
                  >
                    services
                  </Link>
                  <Link
                    href="/case-study"
                    className="font-serif font-regular text-base  text-gray-300 leading-none"
                  >
                    case studies
                  </Link>
                  <Link
                    href="/blogs"
                    className="font-serif font-regular text-base  text-gray-300 leading-none"
                  >
                    blogs
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/shuvamshr/"
                    className="font-serif font-regular text-base  text-gray-300 leading-none"
                    target="_blank"
                  >
                    get in touch
                  </Link>
                </ul>
              </div>
              <div className="flex flex-col gap-8">
                <h6 className="font-sans font-semibold text-lg text-white leading-none">
                  Services
                </h6>
                <ul className="list-none flex flex-col gap-6">
                  <Link
                    href="/services"
                    className="font-serif font-regular text-base  text-gray-300 leading-none"
                  >
                    user experience research
                  </Link>
                  <Link
                    href="/services"
                    className="font-serif font-regular text-base  text-gray-300 leading-none"
                  >
                    digital product design
                  </Link>
                  <Link
                    href="/services"
                    className="font-serif font-regular text-base  text-gray-300 leading-none"
                  >
                    branding guidelines
                  </Link>
                  <Link
                    href="/services"
                    className="font-serif font-regular text-base  text-gray-300 leading-none"
                  >
                    design system
                  </Link>
                  <Link
                    href="/services"
                    className="font-serif font-regular text-base underline text-gray-300 leading-none"
                  >
                    view all
                  </Link>
                </ul>
              </div>
              <div className="flex flex-col gap-8">
                <h6 className="font-sans font-semibold text-lg text-white leading-none">
                  Connect
                </h6>
                <ul className="list-none flex flex-col gap-6">
                  <Link
                    href="https://www.linkedin.com/in/shuvamshr/"
                    target="_blank"
                    className="font-serif font-regular text-base  text-gray-300 leading-none"
                  >
                    linkedin
                  </Link>
                  <Link
                    href="mailto:shuvamshrestha408@gmail.com"
                    className="font-serif font-regular text-base  text-gray-300 leading-none"
                  >
                    email address
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-[#353535] "></div>
          <div className="flex lg:flex-row flex-col justify-between gap-10">
            <p className="font-sans font-regular text-base text-white leading-none">
              Oliver Sinclair, 2024
            </p>
            <div className="flex flex-row gap-16">
              <p className="font-sans font-semibold text-base text-white leading-none">
                <s>Privacy Policy</s>
              </p>
              <p className="font-sans font-semibold text-base text-white leading-none">
                <s>Terms & Conditions</s>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
