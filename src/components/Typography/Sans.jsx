export default function Sans(props) {
  let typographyType;

  const heading =
    "lg:max-2xl:text-5xl lg:max-2xl:leading-normal text-3xl leading-normal font-semibold font-sans text-gray-800 ";

  const caption =
    "lg:max-2xl:text-lg leading-snug text-md font-medium font-sans text-gray-800 l";

  switch (props.type) {
    case "heading":
      typographyType = heading;
      break;
    case "caption":
      typographyType = caption;
      break;
    default:
      typographyType = lg_Medium;
      break;
  }

  return (
    <>
      <h1 className={typographyType}>{props.children}</h1>
    </>
  );
}
