"use client";

import { useEffect } from "react";

import Button from "../../components/button";
import Note from "@/app/components/note";
import Image from "next/image";
import Link from "next/link";

import ServiceList from "@/app/global/sections/service_list";
import BlogList from "@/app/global/sections/blog_list";
import PreFooter from "@/app/global/sections/prefooter";
import Credentials from "@/app/global/sections/credentials";

import CreativityImg from "./assets/creativity.png";
import GroupworkImg from "./assets/groupwork.png";
import ProcessImg from "./assets/process.png";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container-fluid bg-red-100 pt-32 lg:pt-44 pb-14 lg:pb-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-10">
              <div className="flex flex-col gap-2 lg:gap-4">
                <Link
                  href="https://oliver-sinclair.vercel.app/case-study/alleviating-commuting-stress-and-anxiety-for-university-students-a-user"
                  className="font-sans font-medium text-base lg:text-lg text-gray-800 lg:leading-none leading-snug hover:text-red-700 transition ease-in-out duration-200"
                >
                  READ LATEST CASE STUDY
                </Link>
                <h1 className="font-sans font-semibold text-3xl lg:text-4xl text-gray-800 lg:leading-normal leading-relaxed">
                  Crafting Experiences <br className="lg:block hidden" />
                  to Captivate.{" "}
                  <span className="text-red-900 font-bold italic animate-pulse">
                    No Cap.
                  </span>
                </h1>
                <p className="font-serif font-regular text-base lg:text-lg text-gray-700 lg:leading-normal leading-relaxed">
                  Embark on a digital journey where captivation knows no bounds.
                  Shuvam Shrestha is devoted to crafting experiences that
                  transcend expectations.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
                  <Button
                    title="View Projects"
                    link="case-study"
                    display="block"
                  />
                  <Button
                    title="View Projects"
                    link="case-study"
                    display="block"
                  />
                  <Button
                    title="Who’s Shuvam?"
                    type="secondary"
                    link="https://www.linkedin.com/in/shuvamshr/"
                    display="block"
                    newTab={true}
                  />
                </div>

                <p className="font-sans font-medium text-xs lg:text-sm text-gray-700 leading-normal">
                  Read the latest project, or figure out who Shuvam is
                </p>
              </div>
            </div>
            <div className="col-span-12 pt-10 lg:pt-0 lg:col-span-5 lg:col-start-8 ">
              <Image src={CreativityImg} alt="Creativity Image" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-gray-900 py-14 lg:py-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2 flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h1 className="font-sans font-semibold text-2xl lg:text-3xl lg:text-center text-white lg:leading-normal leading-relaxed">
                  Certified expertise across{" "}
                  <span className="text-red-900 font-bold italic">10+</span>{" "}
                  industries,
                  <br className="lg:block hidden" /> universities and events
                </h1>
                <p className="font-serif font-regular text-sm lg:text-base lg:text-center text-gray-300 lg:leading-normal leading-relaxed">
                  A dedicated professional (just one dude) with a diverse array
                  of skills and knowledge acquired through certified expertise
                  from various industries, renowned universities, and impactful
                  events
                </p>
              </div>

              <Credentials />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-red-200 py-14 lg:py-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 pb-10 lg:pb-0 lg:col-span-5">
              <Image src={GroupworkImg} alt="" />
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col lg:items-start gap-10">
              <div className="flex flex-col gap-4">
                <h1 className="font-sans font-semibold text-2xl lg:text-3xl  text-gray-800 lg:leading-normal leading-relaxed">
                  Who is..{" "}
                  <span className="text-red-900 font-bold italic">
                    Shuvam Shrestha?
                  </span>
                </h1>
                <p className="font-serif font-regular text-base  text-gray-700 lg:leading-normal leading-relaxed">
                  In the vast landscape of talent and expertise, there emerges a
                  name that resonates with versatility and innovation - Shuvam
                  Shrestha. But who is Shuvam Shrestha, and why is he
                  creating ripples in various industries? Let&apos;s embark on a
                  journey to uncover the story behind Shuvam. <br />
                  <br />
                  Shuvam Shrestha is not just a designer; he is a problem solver,
                  an embodiment of dynamic capabilities tailored to meet your
                  specific needs.
                </p>
              </div>

              <Button
                title="Learn More About Shuvam"
                size="large"
                display="fit"
                link="https://www.linkedin.com/in/shuvamshr/"
                newTab={true}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-white py-14 lg:py-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:items-center flex flex-col gap-10">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3 flex flex-col">
              <Image src={ProcessImg} alt="" />
            </div>
            <div
              className="col-span-12 lg:col-span-10 lg:col-start-2 flex flex-col gap-10"
              id="bundles"
            >
              <div className="flex flex-col gap-4">
                <h1 className="font-sans font-semibold text-2xl lg:text-3xl lg:text-center text-gray-800 lg:leading-normal leading-relaxed">
                  All your design needs bundled.{" "}
                  <span className="text-red-900 font-bold italic">
                    Take your pick.
                  </span>
                </h1>
                <p className="font-serif font-regular text-base lg:text-center text-gray-700 lg:leading-normal leading-relaxed">
                  Explore a wide range of services tailored to meet
                  your specific needs. From essential connectivity to
                  personalized digital solutions, find the perfect approach for
                  an enhanced and seamless experience.
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8 lg:col-start-3 flex flex-col lg:flex-row gap-3 lg:gap-5">
              <Link
                href="https://www.linkedin.com/in/shuvamshr/"
                className="w-full"
                target="_blank"
              >
                <Button title="Who’s Shuvam?" display="block" />
              </Link>
              <Link href="services" className="w-full">
                <Button
                  title="View Services"
                  type="secondary"
                  display="block"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ServiceList />

      <div className="container-fluid bg-blue-100 py-14 lg:py-16 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="lg:grid lg:grid-cols-12 flex flex-col items-center gap-10">
            <div className="lg:col-span-8 flex flex-col">
              <div className="flex flex-col gap-4">
                <h1 className="font-sans font-semibold text-2xl  text-gray-800 leading-normal">
                  Got something a bit more custom?
                </h1>
                <p className="font-serif font-regular text-base  text-gray-700 lg:leading-normal leading-relaxed">
                  For custom-tailored solutions beyond my standard services,
                  reach out to me. I&apos;m here to craft personalized
                  experiences that precisely meet your unique requirements and
                  preferences.
                </p>
              </div>
            </div>
            <div className="lg:col-span-3 lg:col-start-10 flex flex-col w-full">
              <Button
                title="Get in Touch"
                type="secondary"
                display="block"
                link="https://www.linkedin.com/in/shuvamshr/"
                newTab={true}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-white py-14 lg:py-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:items-center flex flex-col gap-10">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2 flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h1 className="font-sans font-semibold text-2xl lg:text-3xl lg:text-center text-gray-800 lg:leading-normal leading-relaxed">
                  Unlock Wisdom by Exploring Some{" "}
                  <span className="text-red-900 font-bold italic">
                    Informative Blogs
                  </span>
                </h1>
                <p className="font-serif font-regular text-base lg:text-center text-gray-700 lg:leading-normal leading-relaxed">
                  Dive into the blog section and embark on a journey of
                  expanding your knowledge. Discover insightful articles, expert
                  tips, and the latest trends that will empower you to stay
                  informed and make informed decisions in an ever-evolving
                  landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BlogList showAll={false} />

      <PreFooter />
    </>
  );
}
