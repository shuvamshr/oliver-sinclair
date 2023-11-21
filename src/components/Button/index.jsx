export default function Index(props) {
  let buttonType;
  const [type, style] = props.type.split(/-(.*)/s);

  const res_large_block = "lg:h-16 lg:text-lg h-12 text-base w-full";
  const fix_large_block = "h-16 text-lg w-full";
  const fix_medium_block = "h-12 text-base w-full";

  switch (style) {
    case "res-large-block":
      buttonType = res_large_block;
      break;
    case "fix-large-block":
      buttonType = fix_large_block;
      break;
    case "fix-medium-block":
      buttonType = fix_medium_block;
      break;
    default:
      buttonType = fix_medium_block;
      break;
  }

  if (type === "primary") {
    return (
      <button
        className={
          buttonType +
          " rounded-none bg-red-900 font-semibold font-sans text-white hover:bg-red-700 transition linear duration-300"
        }
      >
        {props.children}
      </button>
    );
  } else if (type === "secondary") {
    return (
      <button
        className={
          buttonType +
          " rounded-none bg-white font-semibold font-sans text-red-900 hover:bg-red-300 border-[1.5px] border-red-900 transition linear duration-300"
        }
      >
        {props.children}
      </button>
    );
  }
}
