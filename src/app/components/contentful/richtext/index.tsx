import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
      return (
        <iframe
          className="rounded-lg m-0 aspect-video"
          height="400"
          width="100%"
          src={node.data.target.fields.embedUrl}
          title={node.data.target.fields.title}
          allowFullScreen={true}
        />
      );
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      return (
        <div className="aspect-video relative">
          <Image
            src={"https:" + node.data.target.fields.file.url}
            className="rounded-lg m-0"
            alt="Card Thumbnail"
            fill={true}
          />
        </div>
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
