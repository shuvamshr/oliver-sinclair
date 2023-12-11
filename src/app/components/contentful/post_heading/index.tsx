import { format } from "date-fns";
import Image from "next/image";

function FormatDate(date: any) {
  const originalDateString = date;
  const originalDate = new Date(originalDateString!);

  return format(originalDate, "MMMM dd, yyyy");
}

interface PostHeadingProps {
  tag?: string[];
  title?: string;
  excerpt?: string;
  authors?: string[];
  date?: string;
  coverImg?: string;
  coverImgLink?: string;
}

export default function PostHeading({
  tag = [],
  title,
  excerpt,
  authors = [],
  date,
  coverImg,
  coverImgLink,
}: PostHeadingProps) {
  const authorStyle =
    authors.length > 1
      ? "flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 my-4 border-y-[1px] border-gray-200 lg:py-6 py-5"
      : "flex flex-row items-center gap-4 my-4 border-y-[1px] border-gray-200 lg:py-6 py-5";

  return (
    <>
      <div className="flex flex-col m-0 gap-6">
        <div className="flex flex-wrap gap-2 m-0">
          {tag.map((value: any, index: any) => (
            <p
              key={index}
              className="font-sans font-medium text-xs text-red-900 bg-red-300 px-3 h-8 rounded-full flex items-center m-0"
            >
              {value}
            </p>
          ))}
        </div>
        <h1 className="font-serif font-semibold text-3xl lg:text-4xl text-gray-800 lg:leading-normal leading-snug m-0">
          {title}
        </h1>
        <h6 className="font-sans font-medium text-base lg:text-xl text-gray-700 leading-normal m-0">
          {excerpt}
        </h6>

        <div className={authorStyle}>
          <div className="flex flex-row gap-2">
            {authors.map((value: any, index: any) => (
              <>
                <Image
                  key={index}
                  src={"https:" + value.fields.picture.fields.file.url}
                  alt="Author Image"
                  className="m-0 rounded-full mix-blend-luminosity hover:mix-blend-normal"
                  height={44}
                  width={44}
                />
              </>
            ))}
          </div>

          <div className="flex flex-col gap-1">
            <h6 className="font-sans font-semibold text-sm text-gray-800">
              By{" "}
              {authors.map((value: any, index: any) => (
                <span key={index}>
                  {value.fields.name}
                  {index < authors.length - 1 && " & "}{" "}
                </span>
              ))}{" "}
            </h6>
            <h6 className="font-sans font-medium text-sm text-gray-700">
              {FormatDate(date)}
            </h6>
          </div>
        </div>
        <div className="flex flex-col gap-4 m-0">
          <div className="aspect-video relative">
            <Image
              src={"https:" + coverImg}
              className="rounded-lg m-0"
              alt="Card Thumbnail"
              fill={true}
            />
          </div>
          <div className="font-serif text-base text-gray-700 ">
            Photo Credit:{" "}
            <a href={coverImgLink} className="text-gray-700">
              Image Attribute
            </a>
          </div>
        </div>
        {authors.map(
          (value: any, index: any) =>
            value.fields.name === "ChatGPT" && (
              <div
                key={index}
                className="font-sans font-base text-sm text-gray-700 bg-gray-200 px-4 py-3 rounded-lg border-2 border-gray-300 leading-relaxed"
              >
                <strong className="text-gray-800">Disclaimer</strong>: This blog
                post was generated for testing purposes only using OpenAI&apos;s
                GPT-3.5. Readers are advised to verify information
                independently, as the content may not reflect real-world
                expertise, and it is not intended as professional advice. This
                disclaimer was also generated via ChatGPT.
              </div>
            )
        )}
      </div>
    </>
  );
}
