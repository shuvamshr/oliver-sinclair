"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/button";
import ContactCard from "@/app/components/contact_card";
import OliverSinclairBeta from "@/app/global/header/assets/oliver-sinclair-beta.svg";

interface ResumeClientWrapperProps {
  children: React.ReactNode;
}

export default function ResumeClientWrapper({ children }: ResumeClientWrapperProps) {
  const [conToggle, setConToggle] = useState(true);

  const backgroundCloseToggle = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setConToggle(!conToggle);
    }
  };

  const toggleContact = () => setConToggle(!conToggle);

  return (
    <>
      {/* Contact Modal */}
      <div
        className={`flex fixed z-50 justify-center align-middle pt-32 px-6 w-full h-full bg-black/50 transition ease-out duration-200 ${
          conToggle ? "hidden" : "block"
        }`}
        onClick={backgroundCloseToggle}
      >
        <ContactCard onClick={toggleContact} />
      </div>

      {/* Simplified Header */}
      <div className="container-fluid bg-white px-6 lg:px-0 fixed top-0 left-0 right-0 flex flex-row h-20 items-center z-40 border-b-[0.5px] border-gray-200">
        <div className="container mx-auto flex flex-row items-center justify-between">
          <Link href="/">
            <Image
              src={OliverSinclairBeta}
              alt="Logo"
              className="lg:w-[270px] w-[260px]"
            />
          </Link>
          <Button
            title="Get in Touch"
            type="primary"
            size="medium"
            onClick={toggleContact}
          />
        </div>
      </div>

      <main className="mt-20">
        {children}
      </main>

      {/* Final CTA - Since it needs state, I'll pass a 'trigger' or implement it here */}
      <div className="container-fluid bg-red-100 py-14 lg:py-24 px-6 lg:px-0">
        <div className="container mx-auto text-center">
          <div className="flex flex-col gap-6 items-center">
            <h2 className="font-sans font-semibold text-2xl lg:text-4xl text-gray-800">
              Interested in collaborating?
            </h2>
            <p className="font-serif text-gray-700 max-w-xl mb-6">
              I&apos;m always open to discussing new projects, design challenges, or opportunities to help you grow.
            </p>
            <Button
              title="Get in Touch"
              type="primary"
              size="large"
              onClick={toggleContact}
            />
          </div>
        </div>
      </div>

      {/* Simplified Footer */}
      <div className="container-fluid bg-black py-8 px-6 lg:px-0">
        <div className="container mx-auto flex flex-row justify-between items-center text-white font-sans text-sm">
          <p>© Shuvam Shrestha, 2024</p>
          <Link href="/" className="hover:text-red-700 transition">Return to Home</Link>
        </div>
      </div>
    </>
  );
}
