import BlogList from "../../global/sections/blog_list";

import PreFooter from "@/app/global/sections/prefooter";

export default async function Blogs() {
  return (
    <>
      <div className="container-fluid bg-white pt-32 lg:pt-44 pb-14 lg:pb-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex flex-col gap-2 lg:gap-4">
                <h1 className="font-sans font-semibold text-3xl lg:text-5xl text-gray-800 leading-normal">
                  Latest Blogs
                </h1>
                <p className="font-serif font-regular text-base lg:text-lg text-gray-700 leading-normal">
                  Expand your knowledge with our latest content
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlogList />
      <PreFooter />
    </>
  );
}
