import Footer from "../../global/Footer/Footer.tsx";
import Header from "../../global/Header/Header.tsx";

import Button from "../../components/Button/Button.tsx";
import Card from "../../components/Card/Card.tsx";

import CreativityImg from "./assets/creativity.png";
import GroupworkImg from "./assets/groupwork.png";
import ProcessImg from "./assets/process.png";
import GrowImg from "./assets/grow.png";

import UTSLogo from "./assets/uts.svg";
import AppleLogo from "./assets/apple.svg";
import DolbyLogo from "./assets/dolby.svg";
import LeedsLogo from "./assets/leeds.svg";
import OliverLogo from "./assets/oliver.svg";

export default function Index() {
  return (
    <>
      <Header />

      <div className="container-fluid bg-red-200 pt-40 lg:pt-44 pb-14 lg:pb-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-10">
              <div className="flex flex-col gap-2 lg:gap-4">
                <h6 className="font-sans font-medium text-base lg:text-lg text-gray-800 lg:leading-none leading-snug">
                  NEW UX BUNDLE ADDED
                </h6>
                <h1 className="font-sans font-semibold text-3xl lg:text-4xl text-gray-800 lg:leading-normal leading-relaxed">
                  Crafting Experiences <br className="lg:block hidden" />
                  that Captivate.{" "}
                  <span className="text-red-900 font-bold italic">No Cap.</span>
                </h1>
                <p className="font-serif font-regular text-base lg:text-lg text-gray-700 lg:leading-normal leading-relaxed">
                  Embark on a digital journey where captivation knows no bounds.
                  At Oliver Sinclair, we're devoted to crafting experiences that
                  transcend expectations.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
                  <Button title="Who’s Oliver?" display="block" />
                  <Button
                    title="View Service Bundles"
                    type="secondary"
                    display="block"
                  />
                </div>
                <p className="font-serif font-regular text-sm lg:text-base text-gray-700 leading-normal">
                  learn more about our services, or figure out who oliver is
                </p>
              </div>
            </div>
            <div className="col-span-12 py-10 lg:py-0 lg:col-span-5 lg:col-start-8 ">
              <img src={CreativityImg} alt="" />
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
                  Certified expertise from over{" "}
                  <span className="text-red-900 font-bold italic">10+</span>{" "}
                  industries,
                  <br className="lg:block hidden" /> universities and events
                </h1>
                <p className="font-serif font-regular text-sm lg:text-base lg:text-center text-gray-300 lg:leading-normal leading-relaxed">
                  our team of dedicated professionals comprises individuals with
                  a diverse array of skills and knowledge acquired through
                  certified expertise from various industries, renowned
                  universities, and impactful events
                </p>
              </div>
              <div className="lg:flex lg:flex-wrap lg:justify-around lg:overflow-hidden flex flex-row overflow-x-auto snap-x gap-12">
                <img
                  src={UTSLogo}
                  className="snap-center lg:scale-110"
                  alt=""
                />
                <img
                  src={AppleLogo}
                  className="snap-center lg:scale-110"
                  alt=""
                />
                <img
                  src={DolbyLogo}
                  className="snap-center lg:scale-110"
                  alt=""
                />
                <img
                  src={LeedsLogo}
                  className="snap-center lg:scale-110"
                  alt=""
                />
                <img
                  src={OliverLogo}
                  className="snap-center lg:scale-110"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-red-200 py-14 lg:py-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 py-10 lg:py-0 lg:col-span-5">
              <img src={GroupworkImg} alt="" />
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col lg:items-start gap-10">
              <div className="flex flex-col gap-4">
                <h1 className="font-sans font-semibold text-2xl lg:text-3xl  text-gray-800 lg:leading-normal leading-relaxed">
                  Who is..{" "}
                  <span className="text-red-900 font-bold italic">
                    Oliver Sinclair?
                  </span>
                </h1>
                <p className="font-serif font-regular text-sm lg:text-base  text-gray-700 lg:leading-normal leading-relaxed">
                  we inspire businesses to conceive and craft the digital realms
                  of the future. Success is a collective voyage with oliver, and
                  you’re just one click away from getting your way. our team of
                  dedicated professionals comprises individuals with a diverse
                  array of skills. <br />
                  <br />
                  knowledge acquired through certified expertise from various
                  industries, renowned universities, and impactful events
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
                <Button
                  title="Find an Oliver For You"
                  size="large"
                  display="fit"
                />
                <Button
                  title="View Services"
                  type="secondary"
                  size="large"
                  display="fit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

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
                <p className="font-serif font-regular text-sm lg:text-base lg:text-center text-gray-700 lg:leading-normal leading-relaxed">
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
                feature={["Feature 1", "Feature 2"]}
                buttonText="Continue Reading"
              />
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                thumbnail="default"
                title="Improving B2B Customer Experience For Assistive Technology Dealers"
                description="our team of dedicated professionals comprises individuals with a diverse array of skills and knowledge."
                category={["CMS Platform", "Case Study"]}
                buttonText="Continue Reading"
              />
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card />
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card />
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card />
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card />
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
                <p className="font-serif font-regular text-sm lg:text-base  text-gray-700 lg:leading-normal leading-relaxed">
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

      <div className="container-fluid bg-white py-14 lg:py-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:items-center flex flex-col gap-10">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2 flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h1 className="font-sans font-semibold text-2xl lg:text-3xl lg:text-center text-gray-800 lg:leading-normal leading-relaxed">
                  Proven Track Record of{" "}
                  <span className="text-red-900 font-bold italic">
                    Ambitious Projects
                  </span>
                </h1>
                <p className="font-serif font-regular text-sm lg:text-base lg:text-center text-gray-700 lg:leading-normal leading-relaxed">
                  our team of dedicated professionals comprises individuals with
                  a diverse array of skills and knowledge acquired through
                  certified expertise from various industries, renowned
                  universities, and impactful events
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-white px-6 lg:px-0 pb-14 lg:pb-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                thumbnail="default"
                title="Improving B2B Customer Experience For Assistive Technology Dealers"
                description="our team of dedicated professionals comprises individuals with a diverse array of skills and knowledge."
                category={["CMS Platform", "Case Study"]}
                buttonText="Continue Reading"
              />
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                thumbnail="default"
                title="Improving B2B Customer Experience For Assistive Technology Dealers"
                description="our team of dedicated professionals comprises individuals with a diverse array of skills and knowledge."
                category={["CMS Platform", "Case Study"]}
                buttonText="Continue Reading"
              />
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12">
              <Card
                thumbnail="default"
                title="Improving B2B Customer Experience For Assistive Technology Dealers"
                description="our team of dedicated professionals comprises individuals with a diverse array of skills and knowledge."
                category={["CMS Platform", "Case Study"]}
                buttonText="Continue Reading"
              />
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
                  Grow better with Oliver today
                </h1>
                <p className="font-serif font-regular text-sm lg:text-base  text-gray-700 lg:leading-normal leading-relaxed">
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
            <div className="col-span-12 py-10 lg:py-0 lg:col-span-5 lg:col-start-8 ">
              <img src={GrowImg} alt="" className="mix-blend-multiply" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
