export default function Serif(props) {
  let typographyType;

  const heading =
    "lg:max-2xl:text-5xl lg:max-2xl:leading-normal text-3xl leading-normal font-semibold font-serif text-gray-800";

  const description =
    "lg:max-2xl:text-xl leading-normal text-lg font-regular font-serif text-gray-800";

  switch (props.type) {
    case "heading":
      typographyType = heading;
      break;
    case "description":
      typographyType = description;
      break;
    default:
      typographyType = description;
      break;
  }

  return (
    <>
      <p className={typographyType}>{props.children}</p>
    </>
  );
}
