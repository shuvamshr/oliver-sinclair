import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { Suspense } from "react";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
      return (
        <Suspense
          fallback={
            <div className="lg:h-[400px] h-[300px] w-full bg-gray-200 rounded-lg m-0 animate-pulse"></div>
          }
        >
          <iframe
            className="rounded-lg m-0 aspect-video lg:h-[400px] h-[300px]"
            height="100%"
            width="100%"
            src={node.data.target.fields.embedUrl}
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        </Suspense>
      );
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      return (
        <Suspense
          fallback={
            <div className="lg:h-[400px] h-[300px] w-full bg-gray-200 rounded-lg m-0 animate-pulse"></div>
          }
        >
          <div className="aspect-video relative">
            <Image
              src={"https:" + node.data.target.fields.file.url}
              className="rounded-lg m-0"
              alt="Card Thumbnail"
              fill={true}
            />
          </div>
        </Suspense>
      );
    },
  },
};

interface RichTextProps {
  content?: any;
}

export default function RichText({ content }: RichTextProps) {
  return <>{documentToReactComponents(content, options)}</>;
}
