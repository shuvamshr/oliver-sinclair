import Button from "../../components/Button";
import Typography from "../../components/Typography";

export default function () {
  return (
    <>
      <div className="container-fluid bg-red-100">
        <div className="container mx-auto lg:px-0 px-6 py-32">
          <div className="grid grid-cols-12">
            <div className="lg:col-span-6 lg:gap-10 col-span-12 gap-6 flex flex-col ">
              <div className="flex flex-col gap-2">
                <Typography type="head-res-lg-medium">
                  NEW UX BUNDLE ADDED
                </Typography>
                <Typography type="head-res-5xl-semibold">
                  Crafting Creativity <br /> to Captivate.
                  <span className="text-red-900 font-bold italic">
                    {" "}
                    No Cap.
                  </span>
                </Typography>
              </div>
              <Typography type="body-res-xl-regular">
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
                <Typography type="body-fix-sm-regular">
                  learn more about our services, or figure out who oliver is
                </Typography>
              </div>
            </div>

            <div className="lg:col-start-8 lg:col-span-5 col-start-1 col-span-12 flex bg-gray-100 h-full rounded-tl-[5rem] rounded-br-[5rem]">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
