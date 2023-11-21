import Header from "../../global/Header";

import Button from "../../components/Button";

import Typography from "../../components/Typography";

import CreativityImg from "./assets/creativity.png";

import AppleLogo from "./assets/apple.svg";
import DolbyLogo from "./assets/dolby.svg";
import LeedsLogo from "./assets/leeds.svg";
import OliverWhiteLogo from "./assets/oliver-white.svg";
import UTSLogo from "./assets/uts.svg";

export default function () {
  return (
    <>
      <Header />
      <div className="container-fluid bg-red-100 mt-6">
        <div className="container mx-auto lg:px-0 px-6 py-32">
          <div className="grid grid-cols-12">
            <div className="lg:col-span-6 lg:gap-10 col-span-12 gap-6 flex flex-col justify-center">
              <div className="flex flex-col gap-2">
                <Typography size="res-lg" weight="medium">
                  NEW UX BUNDLE ADDED
                </Typography>

                <Typography size="res-5xl" weight="semibold">
                  Crafting Creativity <br /> to Captivate.
                  <span className="text-red-900 font-bold italic">
                    {" "}
                    No Cap.
                  </span>
                </Typography>
              </div>

              <Typography type="serif" size="res-xl">
                Embark on a digital journey where captivation knows no bounds.
                At Oliver Sinclair, we're devoted to crafting experiences that
                transcend expectations.
              </Typography>

              <div className="flex flex-col gap-10">
                <div className="flex flex-col lg:flex-row lg:gap-6 gap-4">
                  <Button type="primary-res-large-block">
                    Who's My Oliver?
                  </Button>
                  <Button type="secondary-res-large-block">
                    View Service Bundles
                  </Button>
                </div>
                <Typography type="serif" size="sm">
                  learn more about our services, or figure out who oliver is
                </Typography>
              </div>
            </div>

            <div className="lg:col-start-8 lg:col-span-5 col-span-12 justify-center">
              <img src={CreativityImg} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-gray-900">
        <div className="container mx-auto lg:px-0 px-6 py-32">
          <div className="grid grid-cols-12">
            <div className="lg:col-span-10 lg:col-start-2 lg:gap-12 col-span-12 gap-12 flex flex-col justify-center">
              <div className="flex flex-col gap-6">
                <Typography
                  size="res-4xl"
                  weight="semibold"
                  color="deepWhite"
                  align="center"
                >
                  Certified expertise from over{" "}
                  <span className="text-red-900 font-bold italic">10+</span>{" "}
                  industries,
                  <br /> universities and events
                </Typography>
                <Typography
                  type="serif"
                  size="res-lg"
                  color="liteWhite"
                  align="center"
                >
                  our team of dedicated professionals comprises individuals with
                  a diverse array of skills and knowledge acquired through
                  certified expertise from various industries, renowned
                  universities, and impactful events
                </Typography>
              </div>
              <div className="flex flex-wrap justify-around gap-12 items-center">
                <img src={UTSLogo} alt="" />
                <img src={AppleLogo} alt="" />
                <img src={DolbyLogo} alt="" />
                <img src={LeedsLogo} alt="" />
                <img src={OliverWhiteLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
