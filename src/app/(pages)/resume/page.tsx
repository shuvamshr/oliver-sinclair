
import Image from "next/image";
import Button from "@/app/components/button";
import CaseStudiesList from "@/app/global/sections/case_studies_list";
import ResumeClientWrapper from "@/app/components/resume/ResumeClientWrapper";

// Branding Assets
import CreativityImg from "../(home)/assets/creativity.png";

export const metadata = {
  title: "Resume & Portfolio | Shuvam Shrestha",
  description: "A professional landing page featuring selected case studies, blogs, and credentials.",
};

export default function ResumePage() {
  return (
    <ResumeClientWrapper>
      {/* Hero Section */}
      <div className="container-fluid bg-red-100 pt-12 lg:pt-24 pb-14 lg:pb-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h1 className="font-sans font-semibold text-3xl lg:text-5xl text-gray-800 leading-tight">
                  Professional Portfolio <br />
                  & Case Studies
                </h1>
                <p className="font-serif font-regular text-base lg:text-xl text-gray-700 leading-relaxed max-w-xl">
                  A curated collection of my work in product design, user research, and digital strategy.
                  Below you&apos;ll find deep dives into my design process and insights from the field.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <Button
                  title="Connect on LinkedIn"
                  type="secondary"
                  link="https://www.linkedin.com/in/shuvamshr/"
                  newTab={true}
                />
              </div>
            </div>
            <div className="col-span-12 pt-10 lg:pt-0 lg:col-span-5 lg:col-start-8 ">
              <Image src={CreativityImg} alt="Hero illustration" />
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="container-fluid bg-white py-14 lg:py-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4 mb-12">
            <h2 className="font-sans font-semibold text-2xl lg:text-4xl text-gray-800">
              Selected Case Studies
            </h2>
            <div className="w-20 h-1 bg-red-700"></div>
          </div>
          <CaseStudiesList />
        </div>
      </div>

    </ResumeClientWrapper>
  );
}
