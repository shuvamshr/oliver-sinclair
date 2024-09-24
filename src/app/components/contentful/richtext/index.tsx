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
          <iframe src={node.data.target.fields.embedUrl} allowFullScreen />
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
          <Image
            src={"https:" + node.data.target.fields.file.url}
            className="rounded-lg m-0"
            alt="Card Thumbnail"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Suspense>
      );
    },
  },
  renderMark: {
    [MARKS.BOLD]: (text: any) => <span className="font-semibold">{text}</span>,
    [MARKS.UNDERLINE]: (text: any) => (
      <span className="font-semibold text-blue-600">{text}</span>
    ),
  },
};

interface RichTextProps {
  content?: any;
}

export default function RichText({ content }: RichTextProps) {
  return <>{documentToReactComponents(content, options)}</>;
}
