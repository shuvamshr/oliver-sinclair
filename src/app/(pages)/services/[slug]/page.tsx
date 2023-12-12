"use client";

import { useEffect } from "react";

import { client } from "@/app/api/contentful/client";

import Button from "@/app/components/button";
import Image from "next/image";

import RichText from "@/app/components/contentful/richtext";

import GrowImg from "./assets/grow.png";

export default async function ({ params }: { params: { slug: string } }) {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const data = (await getData(params.slug)).props?.posts.fields;

  return (
    <>
      <div className="container-fluid bg-white pt-32 lg:pt-44 pb-14 lg:pb-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 items-start">
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-10 lg:sticky lg:top-24">
              <div className="flex flex-col gap-2 lg:gap-4">
                <h6 className="font-sans font-medium text-base text-red-700 lg:leading-none leading-snug uppercase">
                  {data.title}
                </h6>
                <h1 className="font-sans font-semibold text-2xl lg:text-3xl  text-gray-800 lg:leading-normal leading-relaxed">
                  {data.headline}
                </h1>
                <p className="font-serif font-regular text-base  text-gray-700 lg:leading-normal leading-relaxed">
                  {data.excerpt}
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
                <Button
                  title={`View ${data.title} Projects`}
                  size="medium"
                  type="secondary"
                  display="fit"
                  link="/services#services"
                />
              </div>
            </div>
            <div className="col-span-12 pt-10 lg:pt-0 lg:col-span-6 lg:col-start-7 overflow-y-auto">
              <div className="font-sans font-base text-sm text-gray-700 bg-gray-200 px-5 py-4 rounded-lg border-2 border-gray-300 leading-relaxed">
                <strong className="text-gray-800">Disclaimer</strong>: Parts of
                this post was generated using OpenAI&apos;s GPT-3.5, mostly for
                testing purposes, or the human author may not have a background
                in content writing. Readers are advised to verify information
                independently, as the content may not reflect real-world
                expertise, and it is not intended as professional advice. This
                disclaimer was also generated via ChatGPT.
              </div>
              <div className="font-sans text-gray-800 prose mt-8">
                <RichText content={data.content} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-red-200 py-14 lg:py-16 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-10">
              <div className="flex flex-col gap-2 lg:gap-4">
                <h1 className="font-sans font-semibold text-2xl lg:text-3xl  text-gray-800 lg:leading-normal leading-relaxed">
                  Ready to get Started?
                </h1>
                <p className="font-serif font-regular text-base  text-gray-700 lg:leading-normal leading-relaxed">
                  Empower your aspirations, seize opportunities, and
                  thrive—experience the journey with Oliver Sinclair's{" "}
                  {data.title} package.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
                <Button
                  title="Get in Touch"
                  display="block"
                  link="https://www.linkedin.com/in/shuvam-s-976186184/"
                  newTab={true}
                />
                <Button
                  title="View Other Services"
                  type="secondary"
                  display="block"
                  link="services"
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

async function getData(params: any) {
  const response = await client.getEntries({
    content_type: "service",
    "fields.slug": params,
  });

  if (!response.items?.length) {
    return {
      redirect: {
        destination: "/services",
        permanent: false,
      },
    };
  }

  return {
    props: {
      posts: response?.items?.[0],
    },
  };
}
