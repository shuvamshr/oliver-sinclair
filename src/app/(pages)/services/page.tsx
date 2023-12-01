"use client";

import Button from "@/app/components/button";
import Card from "@/app/components/card";
import Image from "next/image";

import { useEffect } from "react";

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
                  our team of dedicated professionals comprises individuals with
                  a diverse array of skills
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
                <Button title="Who’s Oliver?" display="block" />
                <Button
                  title="View Service Bundles"
                  type="secondary"
                  display="block"
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

      <div className="container-fluid bg-white px-6 lg:px-0 pb-14 lg:pb-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                titleIcon="user-experience.svg"
                title="User Experience Research"
                description="A comprehensive exploration of your target audience's needs and requirements utilizing advanced human-centered methodologies"
                feature={[
                  "Extensive User Profile of Target Audience",
                  "User Behavior Analysis Report",
                  "Documentation of Usability Testing",
                ]}
                buttonText="Learn more"
              />
            </div>

            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                titleIcon="digital-product.svg"
                title="Digital Product Design"
                description="Crafting meaninful and intuitive digital experiences that align seamlessly with user expectations and business goals"
                feature={[
                  "Competitive Analysis and UX Report",
                  "Workshop Session and Ideation Notes",
                  "Development Ready Prototype",
                ]}
                buttonText="Learn more"
              />
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                titleIcon="branding.svg"
                title="Precise Branding Guidelines"
                description="Cohesive brand identity with clear guidelines that reflect your values and resonate with your audience"
                feature={[
                  "Brand Research Report & Documents",
                  "Comprehensive Digital Brand Book",
                  "Asset and Resources Folder",
                ]}
                buttonText="Learn more"
              />
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                titleIcon="design-system.svg"
                title="Dynamic Design System"
                description="Establish a design system that serves as the foundation for consistent, scalable, and efficient design across your organization"
                feature={[
                  "Digital Product Audit Report",
                  "Figma Design Component Libraries",
                  "Usage Consultation Session",
                ]}
                buttonText="Learn more"
              />
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                titleIcon="react-component.svg"
                title="React Component Libraries"
                description="React component libraries that enhance the development process, providing a library of consistent and reusable components"
                feature={[
                  "Dynamic React Component Library",
                  "Figma Component Guide",
                  "Usage Consultation Session",
                ]}
                buttonText="Learn more"
              />
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                titleIcon="development.svg"
                title="Frontend Web Development"
                description="Bring designs to life with expert frontend web development, ensuring a responsive, high-performance, and user-friendly products"
                feature={[
                  "Competitive Analysis & Figma Prototype",
                  "Dynamic Web Development & Hosting",
                  "Headless CMS Integration",
                ]}
                buttonText="Learn more"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-blue-100 py-14 lg:py-16 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="lg:grid lg:grid-cols-12 flex flex-col items-center gap-10">
            <div className="lg:col-span-8 flex flex-col">
              <div className="flex flex-col gap-4">
                <h1 className="font-sans font-semibold text-2xl  text-gray-800 leading-normal">
                  Got something a bit more custom?
                </h1>
                <p className="font-serif font-regular text-base  text-gray-700 lg:leading-normal leading-relaxed">
                  our team of dedicated professionals comprises individuals with
                  a diverse array of skills and knowledge acquired through
                  certified expertise from various industries, renowned
                  universities, and impactful events
                </p>
              </div>
            </div>
            <div className="lg:col-span-3 lg:col-start-10 flex flex-col w-full">
              <Button
                title="View Service Bundles"
                type="secondary"
                display="block"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
