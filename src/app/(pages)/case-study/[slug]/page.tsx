import { client } from "@/app/api/contentful/client";

import Link from "next/link";

import RichText from "@/app/components/contentful/richtext";
import PostHeading from "@/app/components/contentful/post_heading";
import PreFooter from "@/app/global/sections/prefooter";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)).props?.posts.fields;
  return {
    title: data.title,
    description: data.excerpt,
    openGraph: {
      images: "https:" + data.coverImage.fields.file.url,
    },
  };
}

export default async function ({ params }: { params: { slug: string } }) {
  const data = (await getData(params.slug)).props?.posts.fields;

  return (
    <>
      <div className="container-fluid bg-white pt-32 lg:pt-40 pb-14 lg:pb-24 px-6 lg:px-0">
        <div className="container mx-auto flex justify-center">
          <div className="flex flex-col prose">
            <PostHeading
              tag={data.tag}
              title={data.title}
              excerpt={data.excerpt}
              authors={data.authors}
              date={data.date}
              coverImg={data.coverImage.fields.file.url}
              coverImgLink={data.coverLink}
            />

            <div className="font-sans text-gray-800 mt-2">
              <RichText content={data.content} />
            </div>

            <div className="font-sans text-sm text-gray-700 bg-gray-200 px-4 py-3 my-4 rounded-lg border-2 border-gray-300 leading-relaxed">
              <strong className="text-gray-800">Like what you read?</strong>{" "}
              Follow{" "}
              <Link
                href="https://www.linkedin.com/company/oliversinclair/"
                className="underline text-gray-700"
              >
                Oliver Sinclair on LinkedIn
              </Link>{" "}
              to keep yourself updated with the latest blogs!
            </div>
          </div>
        </div>
      </div>
      <PreFooter />
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
        destination: "/case-study",
        permanent: false,
      },
    };
  }

  return {
    props: {
      posts: response?.items?.[0],
    },
  };
}
