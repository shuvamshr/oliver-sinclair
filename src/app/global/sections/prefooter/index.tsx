import Button from "@/app/components/button";

import Image from "next/image";

import GrowImg from "./assets/grow.png";

export default function PreFooter() {
  return (
    <div className="container-fluid bg-red-200 py-14 lg:py-16 px-6 lg:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-10">
            <div className="flex flex-col gap-2 lg:gap-4">
              <h1 className="font-sans font-semibold text-2xl lg:text-3xl  text-gray-800 lg:leading-normal leading-relaxed">
                Elevate Your Growth with Oliver
              </h1>
              <p className="font-serif font-regular text-base  text-gray-700 lg:leading-normal leading-relaxed">
                Empower your aspirations, seize opportunities, and
                thrive—experience the journey of growth with Oliver Sinclair by
                your side.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
              <Button
                title="Who’s Oliver?"
                display="block"
                link="/blogs/unveiling-the-enigma-who-is-oliver-sinclair"
              />
              <Button
                title="View Service Bundles"
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
  );
}
