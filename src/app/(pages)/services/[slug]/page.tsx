import { client } from "@/app/api/contentful/client";

import Button from "@/app/components/button";
import Image from "next/image";

import CheckmarkIcon from "./assets/checkmark.svg";

import RichText from "@/app/components/contentful/richtext";

import GrowImg from "./assets/grow.png";
import ServiceHeaderImg from "./assets/services-header.jpg";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)).props?.posts.fields;
  return {
    title: data.title,
    description: data.excerpt,
    openGraph: {
      images: ServiceHeaderImg,
      url: "https:oliver-sinclair.vercel.app/services/" + data.slug,
    },
  };
}

export default async function ({ params }: { params: { slug: string } }) {
  const data = (await getData(params.slug)).props?.posts.fields;

  return (
    <>
      <div className="container-fluid bg-white pt-32 lg:pt-44 pb-14 lg:pb-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 items-start">
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-10 lg:sticky lg:top-24">
              <div className="flex flex-col rounded-lg shadow-md w-full h-full  hover:shadow-xl transition ease-in-out duration-300">
                <div className="flex flex-col lg:gap-8 lg:px-8 lg:py-10 px-6 py-8">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2 lg:gap-3">
                      <h6 className="font-sans font-medium text-sm text-red-700 lg:leading-none leading-snug uppercase">
                        {data.title}
                      </h6>
                      <h5 className="font-sans font-semibold text-xl text-gray-800 leading-normal hover:text-red-700">
                        {data.headline}
                      </h5>
                    </div>

                    <p className="font-serif font-regular text-base  text-gray-700 leading-normal">
                      {data.excerpt}
                    </p>
                  </div>

                  <div className="hidden lg:flex lg:flex-col gap-8">
                    <div className="w-full h-[1px] bg-gray-200"></div>
                    <div className="flex flex-col gap-5">
                      <h6 className="font-sans font-semibold text-base text-gray-800 leading-none">
                        Included Features
                      </h6>
                      <div className="flex flex-col gap-4">
                        <ul className="list-none flex flex-col gap-4">
                          {data.feature.map((value: any, index: any) => (
                            <li
                              key={index}
                              className="font-sans font-medium text-sm  text-gray-700 leading-none flex flex-row gap-4 items-center"
                            >
                              <Image
                                src={CheckmarkIcon}
                                alt=""
                                className="w-5 h-5"
                              />
                              <span>{value}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 pt-12 lg:pt-0 lg:col-span-6 lg:col-start-7 overflow-y-auto">
              <Image src={ServiceHeaderImg} alt="" />
              <div className="font-sans text-gray-800 prose mt-12">
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
                  thrive—experience the journey with Oliver Sinclair&apos;s{" "}
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
                  link="/services"
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
