"use client";

import { useEffect } from "react";

import Button from "@/app/components/button";
import Image from "next/image";
import Link from "next/link";

import Services from "@/app/global/sections/services";

import ProcessPlainImg from "./assets/process-plain.png";

export default function Index() {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container-fluid bg-white pt-32 lg:pt-44 pb-14 lg:pb-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-10">
              <div className="flex flex-col gap-2 lg:gap-4">
                <h6 className="font-sans font-medium text-base text-red-700 lg:leading-none leading-snug">
                  WE&apos;RE AT YOUR SERVICE
                </h6>
                <h1 className="font-sans font-semibold text-2xl lg:text-3xl  text-gray-800 lg:leading-normal leading-relaxed">
                  All your design needs bundled.
                </h1>
                <p className="font-serif font-regular text-base  text-gray-700 lg:leading-normal leading-relaxed">
                  Explore our wide range of service bundles tailored to meet
                  your specific needs
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
                <Button
                  title="Browse Services"
                  display="block"
                  link="/services#services"
                />
                <Button
                  title="Get in Touch"
                  type="secondary"
                  display="block"
                  link="https://calendly.com/oliversinclair/30min"
                  newTab={true}
                />
              </div>
            </div>
            <div className="col-span-12 pt-10 lg:pt-0 lg:col-span-5 lg:col-start-8 ">
              <Image
                src={ProcessPlainImg}
                alt=""
                className="mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="services" className="h-[0px]"></div>
      <Services />

      <div className="container-fluid bg-blue-100 py-14 lg:py-16 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="lg:grid lg:grid-cols-12 flex flex-col items-center gap-10">
            <div className="lg:col-span-8 flex flex-col">
              <div className="flex flex-col gap-4">
                <h1 className="font-sans font-semibold text-2xl  text-gray-800 leading-normal">
                  Got something a bit more custom?
                </h1>
                <p className="font-serif font-regular text-base  text-gray-700 lg:leading-normal leading-relaxed">
                  For custom-tailored solutions beyond our standard bundles,
                  reach out to us. We&apos;re here to craft personalized service
                  packages that precisely meet your unique requirements and
                  preferences.
                </p>
              </div>
            </div>
            <div className="lg:col-span-3 lg:col-start-10 flex flex-col w-full">
              <Button
                title="Get in Touch"
                type="secondary"
                display="block"
                link="https://calendly.com/oliversinclair/30min"
                newTab={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
