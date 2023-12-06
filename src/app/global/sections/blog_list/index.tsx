import PostCard from "@/app/components/post_card";
import { client } from "@/app/api/contentful/client";

export default async function BlogList() {
  const data = (await getData()).props.posts;

  return (
    <>
      <div className="container-fluid bg-white px-6 lg:px-0 pb-14 lg:pb-24">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between gap-y-8">
            {data.map((post: any, index: any) => (
              <PostCard
                key={index}
                slug={post.fields.slug}
                thumbnail={"default"}
                title={post.fields.title}
                excerpt={post.fields.excerpt}
                category={["Category 1", "Category 2"]}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

async function getData() {
  const response = await client.getEntries({ content_type: "post" });

  return {
    props: {
      posts: response.items,
      revalidate: 60,
    },
  };
}
