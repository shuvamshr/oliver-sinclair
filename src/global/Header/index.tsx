import { useState } from "react";

import MenuIcon from "./assets/menu.svg";
import CloseIcon from "./assets/close.svg";
import OliverColorLogo from "./assets/oliver-color.svg";

import Button from "../../components/Button/index.tsx";

import { Outlet, Link } from "react-router-dom";

import { NavLink } from "react-router-dom";

const linkStyle = {
  active: "font-sans font-semibold text-sm text-gray-800 leading-none",
  inactive: "font-serif font-regular text-base text-gray-700 leading-none",
  sidebar_active: "font-sans font-semibold text-lg text-gray-800",
  sidebar_inactive: "font-serif font-regular text-lg text-gray-700",
};

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
            <Link to="/">
              <img
                src={OliverColorLogo}
                className="lg:w-[255px] w-[210px]"
                alt=""
              />
            </Link>
            <img src={CloseIcon} alt="" onClick={() => setToggle(!toggle)} />
          </div>
          <div className="flex flex-col gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? linkStyle["sidebar_active"]
                  : linkStyle["sidebar_inactive"]
              }
              onClick={() => setToggle(!toggle)}
            >
              home
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? linkStyle["sidebar_active"]
                  : linkStyle["sidebar_inactive"]
              }
              onClick={() => setToggle(!toggle)}
            >
              services
            </NavLink>

            <NavLink
              to="/case-studies"
              className={({ isActive }) =>
                isActive
                  ? linkStyle["sidebar_active"]
                  : linkStyle["sidebar_inactive"]
              }
            >
              case studies
            </NavLink>

            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? linkStyle["sidebar_active"]
                  : linkStyle["sidebar_inactive"]
              }
            >
              blogs
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? linkStyle["sidebar_active"]
                  : linkStyle["sidebar_inactive"]
              }
            >
              contact
            </NavLink>
          </div>

          <div className="flex flex-col gap-3">
            <Button title="View Bundles" type="secondary" size="large" />
            <Button title="Who's Oliver" type="primary" size="large" />
          </div>
        </div>
      </div>
      <div className="container-fluid bg-white px-6 lg:px-0 fixed top-0 left-0 right-0 flex flex-row flex-start h-20 items-center z-40 border-b-[0.5px] border-gray-200">
        <div className="container mx-auto flex flex-row items-center justify-between">
          <Link to="/">
            <img
              src={OliverColorLogo}
              className="lg:w-[255px] w-[210px]"
              alt=""
            />
          </Link>
          <div className="lg:flex lg:flex-row hidden items-center gap-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? linkStyle["active"] : linkStyle["inactive"]
              }
            >
              home
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? linkStyle["active"] : linkStyle["inactive"]
              }
            >
              services
            </NavLink>

            <NavLink
              to="/case-studies"
              className={({ isActive }) =>
                isActive ? linkStyle["active"] : linkStyle["inactive"]
              }
            >
              case studies
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? linkStyle["active"] : linkStyle["inactive"]
              }
            >
              blogs
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? linkStyle["active"] : linkStyle["inactive"]
              }
            >
              contact
            </NavLink>
          </div>
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
      <Outlet />
    </>
  );
}
