export default function Index(props) {
  let buttonType;

  const primaryLargeBlock =
    "w-full h-14 rounded-none bg-red-900 text-lg font-semibold font-sans text-white hover:bg-[red] transition linear duration-300";
  const secondaryLargeBlock =
    "w-full h-14 rounded-none bg-white text-lg font-semibold font-sans text-red-900 border-2 border-red-900";
  const primaryLargeFit =
    "h-14 px-8 rounded-none bg-red-900 text-lg font-semibold font-sans text-white";
  const secondaryLargeFit =
    "h-14 px-8 rounded-none bg-white text-lg font-semibold font-sans text-red-900 border-2 border-red-900";

  switch (props.type) {
    case "primary-large-block":
      buttonType = primaryLargeBlock;
      break;
    case "secondary-large-block":
      buttonType = secondaryLargeBlock;
      break;
    case "primary-large-fit":
      buttonType = primaryLargeFit;
      break;
    case "secondary-large-fit":
      buttonType = secondaryLargeFit;
      break;
    default:
      buttonType = primaryLargeFit;
      break;
  }

  return <button className={buttonType}>{props.children}</button>;
}
