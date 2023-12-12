import { client } from "@/app/api/contentful/client";

import ServiceCard from "@/app/components/service_card";

// interface ServiceListProps {
//   showAll?: boolean;
// }

export default async function ServiceList() {
  const data = (await getData()).props.posts;

  data.map((post: any, index: any) =>
    console.log(post.fields.icon.fields.file.url)
  );

  return (
    <>
      <div className="container-fluid bg-white px-6 lg:px-0 pb-14 lg:pb-24">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between gap-y-8">
            {data.map((post: any, index: any) => (
              <ServiceCard
                key={index}
                slug={post.fields.slug}
                title={post.fields.title}
                description={post.fields.excerpt}
                feature={post.fields.feature}
                icon={post.fields.icon.fields.file.url}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

async function getData() {
  const response = await client.getEntries({ content_type: "service" });

  return {
    props: {
      posts: response.items,
    },
  };
}
