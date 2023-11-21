import CompanyLogo from "./assets/oliver-sinclair-logo.svg";
import MenuIcon from "./assets/menu.svg";

import Typography from "../../components/Typography";
import Button from "../../components/Button";

export default function Index() {
  return (
    <>
      <div className="container-fluid bg-white border-gray-200 border-b-[0.5px] fixed top-0 left-0 right-0 ">
        <div className="container mx-auto h-[84px]  items-center lg:px-0 px-6 flex flex-row justify-between">
          <img src={CompanyLogo} className="lg:w-[255px] w-[220px]" alt="" />
          <div className="lg:flex lg-flex-row lg:gap-10  hidden">
            <Typography type="head-fix-base-semibold">home</Typography>
            <Typography type="body-fix-base-regular">services</Typography>
            <Typography type="body-fix-base-regular">case studies</Typography>
            <Typography type="body-fix-base-regular">blogs</Typography>
            <Typography type="body-fix-base-regular">contact</Typography>
          </div>
          <div className="lg:flex lg:flex-row lg:gap-3 hidden">
            <Button type="secondary-fix-medium-fit">View Bundles</Button>
            <Button type="primary-fix-medium-fit">Who's Oliver?</Button>
          </div>
          <img src={MenuIcon} className="lg:hidden" alt="" />
        </div>
      </div>
    </>
  );
}
