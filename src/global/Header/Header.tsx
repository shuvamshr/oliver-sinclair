import MenuIcon from "./assets/menu.svg";
import OliverColorLogo from "./assets/oliver-color.svg";

import Button from "../../components/Button/Button.tsx";

export default function Header() {
  return (
    <>
      <div className="container-fluid bg-white px-6 lg:px-0 fixed top-0 left-0 right-0 flex flex-row flex-start h-20 items-center z-50">
        <div className="container mx-auto flex flex-row justify-between">
          <img
            src={OliverColorLogo}
            className="lg:w-[255px] w-[240px]"
            alt=""
          />
          <ul className="lg:flex lg:flex-row hidden items-center gap-10">
            <li className="font-sans font-semibold text-sm text-gray-800 leading-none">
              home
            </li>
            <li className="font-serif font-regular text-base text-gray-800 leading-none">
              services
            </li>
            <li className="font-serif font-regular text-base text-gray-800 leading-none">
              case studies
            </li>
            <li className="font-serif font-regular text-base text-gray-800 leading-none">
              blogs
            </li>
            <li className="font-serif font-regular text-base text-gray-800 leading-none">
              contact
            </li>
          </ul>
          <div className="lg:flex lg:flex-row gap-4 hidden">
            <Button title="View Bundles" type="secondary" size="medium" />
            <Button title="Who's Oliver" type="primary" size="medium" />
          </div>
          <img src={MenuIcon} alt="" className="lg:hidden" />
        </div>
      </div>
    </>
  );
}
