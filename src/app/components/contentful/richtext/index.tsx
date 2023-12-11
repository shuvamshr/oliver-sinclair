import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function RichText(props: any) {
  return <>{documentToReactComponents(props.content)}</>;
}
