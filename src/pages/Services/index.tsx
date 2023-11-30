import { Button, Card } from "../../components";

import { useEffect } from "react";

import ProcessImg from "./assets/process.png";

export default function Index() {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container-fluid bg-white py-14 lg:py-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:items-center flex flex-col gap-10">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3 flex flex-col">
              <img src={ProcessImg} alt="" />
            </div>
            <div className="col-span-12 lg:col-span-10 lg:col-start-2 flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h1 className="font-sans font-semibold text-2xl lg:text-3xl lg:text-center text-gray-800 lg:leading-normal leading-relaxed">
                  All your design needs bundled.{" "}
                  <span className="text-red-900 font-bold italic">
                    Take your pick.
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

      <div className="container-fluid bg-white px-6 lg:px-0 pb-14 lg:pb-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                titleIcon="default"
                title="User Experience Research"
                description="our team of dedicated professionals comprises individuals with
                a diverse array of skills "
                feature={[
                  "Desk Research & Case Study",
                  "User Interview, Story & Persona",
                  "Usability Testing & Field Testing",
                ]}
                buttonText="Learn more"
              />
            </div>

            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                titleIcon="default"
                title="User Experience Research"
                description="our team of dedicated professionals comprises individuals with
                a diverse array of skills "
                feature={[
                  "Desk Research & Case Study",
                  "User Interview, Story & Persona",
                  "Usability Testing & Field Testing",
                ]}
                buttonText="Learn more"
              />
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                titleIcon="default"
                title="User Experience Research"
                description="our team of dedicated professionals comprises individuals with
                a diverse array of skills "
                feature={[
                  "Desk Research & Case Study",
                  "User Interview, Story & Persona",
                  "Usability Testing & Field Testing",
                ]}
                buttonText="Learn more"
              />
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                titleIcon="default"
                title="User Experience Research"
                description="our team of dedicated professionals comprises individuals with
                a diverse array of skills "
                feature={[
                  "Desk Research & Case Study",
                  "User Interview, Story & Persona",
                  "Usability Testing & Field Testing",
                ]}
                buttonText="Learn more"
              />
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                titleIcon="default"
                title="User Experience Research"
                description="our team of dedicated professionals comprises individuals with
                a diverse array of skills "
                feature={[
                  "Desk Research & Case Study",
                  "User Interview, Story & Persona",
                  "Usability Testing & Field Testing",
                ]}
                buttonText="Learn more"
              />
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                titleIcon="default"
                title="User Experience Research"
                description="our team of dedicated professionals comprises individuals with
                a diverse array of skills "
                feature={[
                  "Desk Research & Case Study",
                  "User Interview, Story & Persona",
                  "Usability Testing & Field Testing",
                ]}
                buttonText="Learn more"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
