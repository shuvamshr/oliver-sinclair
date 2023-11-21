import CompanyLogo from "./assets/oliver-sinclair-logo.svg";

export default function Index() {
  return (
    <>
      <div className="container-fluid bg-white border-gray-200 border-b-[0.5px] fixed top-0 left-0 right-0 ">
        <div className="container mx-auto h-[84px] flex flex-row items-center lg:px-0 px-6">
          <img src={CompanyLogo} className="lg:w-[255px] w-[220px]" alt="" />
        </div>
      </div>
    </>
  );
}
