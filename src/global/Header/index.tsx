import { useState } from "react";

import MenuIcon from "./assets/menu.svg";
import CloseIcon from "./assets/close.svg";
import OliverColorLogo from "./assets/oliver-color.svg";

import Button from "../../components/Button/index.tsx";

export default function Header() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div
        className={`container-fluid bg-white px-6 z-50 h-screen w-full fixed transition ease-out duration-200  ${
          toggle ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="container mx-auto h-full flex flex-col gap-10">
          <div className="flex flex-row flex-start h-20 items-center justify-between  border-b-[0.5px] border-gray-200">
            <img
              src={OliverColorLogo}
              className="lg:w-[255px] w-[230px]"
              alt=""
            />
            <img src={CloseIcon} alt="" onClick={() => setToggle(!toggle)} />
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-sans font-semibold text-lg text-gray-800">
              home
            </p>
            <p className="font-serif font-regular text-lg text-gray-800">
              services
            </p>
            <p className="font-serif font-regular text-lg text-gray-800">
              case studies
            </p>
            <p className="font-serif font-regular text-lg text-gray-800">
              blogs
            </p>
            <p className="font-serif font-regular text-lg text-gray-800">
              contact us
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Button title="View Bundles" type="secondary" size="large" />
            <Button title="Who's Oliver" type="primary" size="large" />
          </div>
        </div>
      </div>
      <div className="container-fluid bg-white px-6 lg:px-0 fixed top-0 left-0 right-0 flex flex-row flex-start h-20 items-center z-40 border-b-[0.5px] border-gray-200">
        <div className="container mx-auto flex flex-row justify-between">
          <img
            src={OliverColorLogo}
            className="lg:w-[255px] w-[230px]"
            alt=""
          />
          <ul className="lg:flex lg:flex-row hidden items-center gap-10">
            <li className="font-sans font-semibold text-sm text-gray-800 leading-none">
              home
            </li>
            <li className="font-serif font-regular text-base text-gray-700 leading-none">
              services
            </li>
            <li className="font-serif font-regular text-base text-gray-700 leading-none">
              case studies
            </li>
            <li className="font-serif font-regular text-base text-gray-700 leading-none">
              blogs
            </li>
            <li className="font-serif font-regular text-base text-gray-700 leading-none">
              contact
            </li>
          </ul>
          <div className="lg:flex lg:flex-row gap-4 hidden">
            <Button title="View Bundles" type="secondary" size="medium" />
            <Button title="Who's Oliver" type="primary" size="medium" />
          </div>
          <img
            src={MenuIcon}
            alt=""
            className="lg:hidden"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>
    </>
  );
}
