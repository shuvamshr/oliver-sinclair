import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const options = {};

export default function RichText(props: any) {
  return <>{documentToReactComponents(props.content)}</>;
}
