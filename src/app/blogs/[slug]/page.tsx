import { client } from "@/app/api/contentful/client";

export default async function ({ params }: { params: { slug: string } }) {
  const data = (await getData(params.slug)).props?.posts.fields;
  console.log("================");
  console.log(data);
  return (
    <>
      <div className="container-fluid bg-white pt-32 lg:pt-44 pb-14 lg:pb-24 px-6 lg:px-0">
        <div className="container mx-auto">
          <h1 className="font-sans text-3xl text-gray-800 font-semibold align-middle">
            {data.title}
          </h1>
          <p className="font-serif font-regular text-base  text-gray-700 lg:leading-normal leading-relaxed">
            {data.excerpt}
          </p>
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
