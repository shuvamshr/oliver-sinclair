import ServicePlaceholderIcon from "./assets/service-placeholder-icon.svg";
import CheckmarkIcon from "./assets/checkmark-icon.svg";

import Typography from "../Typography";
import Button from "../Button";

export default function Index() {
  return (
    <>
      <div className="flex flex-col w-full lg:w-[382px] shadow-md hover:shadow-xl py-10 px-8 gap-8 rounded-lg transition linear duration-300">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-5 items-center">
            <img src={ServicePlaceholderIcon} alt="" />
            <Typography size="xl" weight="semibold">
              Design Bundle
            </Typography>
          </div>
          <Typography type="serif" size="base">
            Our team of dedicated professionals comprises individuals with a
            diverse array of skills and knowledge.
          </Typography>
        </div>
        <div className="w-full h-[1px] bg-gray-200"></div>
        <div className="flex flex-col gap-6">
          <Typography size="lg" weight="medium">
            Included Features
          </Typography>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <img src={CheckmarkIcon} alt="" />
              <Typography type="serif" size="base">
                Feature 1
              </Typography>
            </div>
            <div className="flex flex-row gap-4">
              <img src={CheckmarkIcon} alt="" />
              <Typography type="serif" size="base">
                Feature 2
              </Typography>
            </div>
            <div className="flex flex-row gap-4">
              <img src={CheckmarkIcon} alt="" />
              <Typography type="serif" size="base">
                Feature 3
              </Typography>
            </div>
          </div>
        </div>
        <Button type="primary-fix-medium-block">Learn more</Button>
      </div>
    </>
  );
}
