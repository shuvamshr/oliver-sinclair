export default function Loading() {
  return (
    <>
      <div className="container-fluid bg-white pt-32 lg:pt-44 pb-14 lg:pb-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 items-start animate-pulse">
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-10 lg:sticky lg:top-24">
              <div className="flex flex-col rounded-lg  w-full h-full  border-2 border-gray-100">
                <div className="flex flex-col lg:gap-8 lg:px-8 lg:py-10 px-6 py-8">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2 lg:gap-3">
                      <h6 className="font-sans font-medium text-sm text-gray-200 lg:leading-none leading-snug uppercase bg-gray-200 w-1/2 rounded-sm">
                        |
                      </h6>
                      <h5 className="font-sans font-semibold text-xl text-gray-200 leading-normal  bg-gray-200 w-2/3 rounded-md">
                        |
                      </h5>
                    </div>

                    <p className="font-serif font-regular text-base  text-gray-200 h-16 leading-normal bg-gray-200 w-full rounded-md"></p>
                  </div>

                  <div className="hidden lg:flex lg:flex-col gap-8">
                    <div className="w-full h-[1px] bg-gray-200"></div>
                    <div className="flex flex-col gap-5">
                      <h6 className="font-sans font-semibold text-base text-gray-200 leading-none bg-gray-200 w-1/2 rounded-sm">
                        |
                      </h6>
                      <div className="flex flex-col gap-4">
                        <ul className="list-none flex flex-col gap-4">
                          <li className="font-sans font-medium text-sm  text-gray-200 leading-none flex flex-row gap-4 items-center">
                            <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                            <span className="bg-gray-200 text-gray-200 w-1/2 rounded-sm">
                              |
                            </span>
                          </li>
                          <li className="font-sans font-medium text-sm  text-gray-700 leading-none flex flex-row gap-4 items-center">
                            <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                            <span className="bg-gray-200 text-gray-200 w-1/2 rounded-sm">
                              |
                            </span>
                          </li>
                          <li className="font-sans font-medium text-sm  text-gray-700 leading-none flex flex-row gap-4 items-center">
                            <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                            <span className="bg-gray-200 text-gray-200 w-1/2 rounded-sm">
                              |
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 pt-12 lg:pt-0 lg:col-span-6 lg:col-start-7 overflow-y-auto">
              <div className="w-full h-52 bg-gray-200 rounded-md" />
              <div className="prose mt-12 w-full rounded-sm">
                <div className="flex flex-col gap-6">
                  <div className="w-2/4 h-6 bg-gray-200"></div>
                  <div className="w-full h-24 bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
