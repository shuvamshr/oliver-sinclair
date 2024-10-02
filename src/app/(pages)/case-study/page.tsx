import Button from "@/app/components/button";
import Link from "next/link";

import CaseStudiesList from "@/app/global/sections/case_studies_list";
import PreFooter from "@/app/global/sections/prefooter";

export default async function CaseStudies() {
  return (
    <>
      <div className="container-fluid bg-white pt-32 lg:pt-44 pb-14 lg:pb-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:items-center flex flex-col gap-10">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2 flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h1 className="font-sans font-semibold text-2xl lg:text-3xl lg:text-center text-gray-800 lg:leading-normal leading-relaxed">
                  Digital experiences for{" "}
                  <span className="text-red-900 font-bold italic">People.</span>
                </h1>
                <p className="font-serif font-regular text-base lg:text-center text-gray-700 lg:leading-normal leading-relaxed">
                  Pproblem-solving in action – delve into the latest Projects
                  Gallery, where challenges transform into success stories.
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8 lg:col-start-3 flex flex-col lg:flex-row gap-3 lg:gap-5">
              <Button
                title="Get in Touch"
                display="block"
                link="https://www.linkedin.com/in/shuvamshr/"
                newTab={true}
              />
              <Button
                title="View Blogs"
                type="secondary"
                display="block"
                link="blogs"
              />
            </div>
          </div>
        </div>
      </div>

      <CaseStudiesList />
      <PreFooter />
    </>
  );
}
