import { client } from "@/app/api/contentful/client";
import RichText from "@/app/components/post/RichText";

export default async function ({ params }: { params: { slug: string } }) {
  const data = (await getData(params.slug)).props?.posts.fields;
  console.log(data.content);

  return (
    <>
      <div className="container-fluid bg-white pt-32 lg:pt-44 pb-14 lg:pb-24 px-6 lg:px-0">
        <div className="container mx-auto lg:px-[20%] px-0">
          <div className="flex flex-col lg:gap-4 gap-2">
            <h1 className="font-serif font-semibold text-3xl lg:text-4xl text-gray-800 leading-normal">
              {data.title}
            </h1>
            <h6 className="font-sans font-medium text-base lg:text-xl text-gray-700 leading-normal">
              {data.excerpt}
            </h6>
          </div>
          <div className="flex flex-col mt-10">
            <div className="font-sys_serif font-regular text-base  text-gray-800 leading-relaxed">
              <RichText content={data.content} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

async function getData(params: any) {
  const response = await client.getEntries({
    content_type: "post",
    "fields.slug": params,
  });

  if (!response.items?.length) {
    return {
      redirect: {
        destination: "/blogs",
        permanent: false,
      },
    };
  }

  return {
    props: {
      posts: response?.items?.[0],
      revalidate: 60,
    },
  };
}
