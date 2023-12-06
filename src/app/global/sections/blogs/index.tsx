import BlogsData from "./assets/blogs.json";
import Card from "@/app/components/card";

export default function Blogs() {
  return (
    <>
      <div className="container-fluid bg-white px-6 lg:px-0 pb-14 lg:pb-24">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-evenly gap-y-8">
            {BlogsData.map((blogs, index) => (
              <Card
                key={index}
                thumbnail={blogs.thumbnail}
                title={blogs.title}
                description={blogs.description}
                category={blogs.category}
                buttonText="Continue Reading"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
