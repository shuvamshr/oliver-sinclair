import { client } from "@/app/api/contentful/client";

import PostCard from "@/app/components/post_card";

interface BlogListProps {
  showAll?: boolean;
}

export default async function BlogList({ showAll = false }: BlogListProps) {
  const data = (await getData()).props.posts;

  data.map((post: any, index: any) => console.log(post.fields.feature));

  const publicBlog = data.filter((post: any) => {
    return (
      post.fields.category === "blogs" && (showAll || post.fields.feature) // Include post.fields.feature only if showAll is true
    );
  });

  console.log("-----");

  publicBlog.map((post: any, index: any) => console.log(post.fields.feature));

  return (
    <>
      <div className="container-fluid bg-white px-6 lg:px-0 pb-14 lg:pb-24">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between gap-y-8">
            {publicBlog.map((post: any, index: any) => (
              <PostCard
                key={index}
                slug={post.fields.slug}
                thumbnail={post.fields.coverImage.fields.file.url}
                title={post.fields.title}
                excerpt={post.fields.excerpt}
                tags={post.fields.tag}
                category={post.fields.category}
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
