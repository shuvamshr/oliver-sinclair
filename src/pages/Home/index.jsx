import Button from "../../components/Button";
import Sans from "../../components/Typography/Sans.jsx";
import Serif from "../../components/Typography/Serif.jsx";

export default function () {
  return (
    <>
      <div className="container mx-auto lg:max-2xl:px-0 px-4 py-[8rem]">
        <div class="grid grid-cols-12">
          <div className="lg:max-2xl:col-span-6 col-span-12 flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <Sans type="caption">NEW UX BUNDLE ADDED</Sans>
              <Sans type="heading">
                Crafting Creativity <br /> to Captivate.
                <span className="text-red-900 font-bold italic"> No Cap.</span>
              </Sans>
            </div>
            <Serif type="description">
              Embark on a digital journey where captivation knows no bounds. At
              Oliver Sinclair, we're devoted to crafting experiences that
              transcend expectations.
            </Serif>

            <div className="flex flex-col gap-10">
              <div className="flex flex-col lg:max-2xl:flex-row lg:max-2xl:gap-6 gap-4">
                <Button type="primary-large-block">Who's My Oliver?</Button>
                <Button type="secondary-large-block">
                  View Service Bundles
                </Button>
              </div>
              <p className="text-sm font-regular font-serif text-gray-800 leading-1">
                learn more about our services, or figure out who oliver is
              </p>
            </div>
          </div>

          <div className="lg:max-2xl:col-start-8 lg:max-2xl:col-span-5 col-start-1 col-span-12 flex bg-[gray] h-full rounded-tl-[5rem] rounded-br-[5rem]">
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
