import CaseStudiesList from "@/app/global/sections/case_studies_list";

import Button from "@/app/components/button";
import Image from "next/image";

import GrowImg from "./assets/grow.png";

export default async function CaseStudies() {
  return (
    <>
      <div className="container-fluid bg-white pt-32 lg:pt-44 pb-14 lg:pb-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:items-center flex flex-col gap-10">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2 flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h1 className="font-sans font-semibold text-2xl lg:text-3xl lg:text-center text-gray-800 lg:leading-normal leading-relaxed">
                  Proven track record of{" "}
                  <span className="text-red-900 font-bold italic">
                    Ambitious Projects.
                  </span>
                </h1>
                <p className="font-serif font-regular text-base lg:text-center text-gray-700 lg:leading-normal leading-relaxed">
                  our team of dedicated professionals comprises individuals with
                  a diverse array of skills and knowledge acquired through
                  certified expertise from various industries, renowned
                  universities, and impactful events
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8 lg:col-start-3 flex flex-col lg:flex-row gap-3 lg:gap-5">
              <Button title="Who’s Oliver?" display="block" />
              <Button
                title="View Service Bundles"
                type="secondary"
                display="block"
              />
            </div>
          </div>
        </div>
      </div>

      <CaseStudiesList />
      <div className="container-fluid bg-red-200 py-14 lg:py-16 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-10">
              <div className="flex flex-col gap-2 lg:gap-4">
                <h1 className="font-sans font-semibold text-2xl lg:text-3xl  text-gray-800 lg:leading-normal leading-relaxed">
                  Grow better with Oliver today
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
              <Image src={GrowImg} alt="" className="mix-blend-multiply" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
