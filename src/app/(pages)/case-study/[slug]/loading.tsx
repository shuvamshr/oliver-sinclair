export default function Loading() {
  return (
    <>
      <div className="container-fluid bg-white pt-32 lg:pt-40 pb-14 lg:pb-24 px-6 lg:px-0 animate-pulse">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center">
            <div className="flex flex-col m-0 gap-6 prose w-full">
              <div className="flex gap-2">
                <div className="flex flex-wrap gap-2 m-0 bg-gray-200 h-8 w-24 rounded-full  animate-pulse"></div>
                <div className="flex flex-wrap gap-2 m-0 bg-gray-200 h-8 w-24 rounded-full  animate-pulse"></div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="h-10 bg-gray-200 w-full rounded-md animate-pulse"></div>
                <div className="h-10 bg-gray-200 w-full rounded-md  animate-pulse"></div>
                <div className="h-10 bg-gray-200 w-2/3 rounded-md animate-pulse"></div>
              </div>

              <div className="h-20 bg-gray-200 w-full rounded-md animate-pulse mt-4"></div>
              <div className="flex flex-row items-center gap-4 my-4 border-y-[1px] border-gray-200 lg:py-8 py-5 h-24">
                <div className="h-11 w-11 bg-gray-200 rounded-full"></div>
                <div className="flex flex-col gap-2 ">
                  <div className="h-4 w-32 bg-gray-200 rounded-sm"></div>
                  <div className="h-4 w-24 bg-gray-200 rounded-sm"></div>
                </div>
              </div>
              <div className="w-full h-[400px] bg-gray-200 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
