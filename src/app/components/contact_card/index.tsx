"use client";

import Image from "next/image";

import LinkedInIcon from "./assets/linkedin-icon.svg";
import EmailIcon from "./assets/email-icon.svg";
import DownloadIcon from "./assets/download-icon.svg";
import OliverRedIcon from "./assets/oliver-mini-red-icon.svg";
import CloseIcon from "./assets/close.svg";

import Link from "next/link";

// const cardStyle: Record<string, string> = {
//   // Add Style If Required
// };

interface ContactCardProps {
  onClick: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ onClick }) => {
  // const cardClass = ``;
  return (
    <>
      <div className="flex flex-col lg:w-[32%] rounded-lg shadow-md w-full h-fit bg-white hover:shadow-2xl">
        <div className="flex flex-col gap-8 lg:px-8 lg:py-10 px-6 py-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-row justify-between">
              <h5 className="font-sans font-semibold text-xl text-gray-800 leading-normal">
                Reach Out To Me
              </h5>

              <Image
                src={CloseIcon}
                alt=""
                className="w-5 h-5 cursor-pointer hover:scale-150 transition ease-in-out duration-150"
                onClick={onClick}
              />
            </div>

            <p className="font-serif font-regular text-base  text-gray-700 leading-normal">
              This website was designed and developed by Shuvam Shrestha. Always
              ready to have a quick chat!
            </p>
          </div>

          <div className="w-full h-[1px] bg-gray-200"></div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <ul className="list-none flex flex-col gap-8">
                <li className="font-sans font-medium text-sm  text-gray-700 leading-none flex flex-row gap-4 items-center hover:text-red-700">
                  <Image src={LinkedInIcon} alt="" className="w-5 h-5" />
                  <Link
                    href="https://www.linkedin.com/in/shuvam-s-976186184/"
                    target="_blank"
                  >
                    Connect on LinkedIn
                  </Link>
                </li>
                <li className="font-sans font-medium text-sm  text-gray-700 leading-none flex flex-row gap-4 items-center  hover:text-red-700">
                  <Image src={EmailIcon} alt="" className="w-5 h-5" />
                  <Link
                    href="mailto:shuvamshrestha408@gmail.com"
                    target="_blank"
                  >
                    Send me an Email
                  </Link>
                </li>

                <li className="font-sans font-medium text-sm  text-gray-700 leading-none flex flex-row gap-4 items-center  hover:text-red-700">
                  <Image src={DownloadIcon} alt="" className="w-5 h-5" />
                  <Link
                    href="https://drive.google.com/file/d/1ZOoDodGyOyBcIkACWOBt4azQCNymwdk2/view?usp=sharing"
                    target="_blank"
                  >
                    Download my Resume
                  </Link>
                </li>
                <li className="font-sans font-medium text-sm  text-gray-700 leading-none flex flex-row gap-4 items-center  hover:text-red-700">
                  <Image src={OliverRedIcon} alt="" className="w-5 h-5" />
                  <Link
                    href="https://www.linkedin.com/company/oliversinclair/"
                    target="_blank"
                  >
                    Follow Company Page
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
