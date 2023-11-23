const containerStyle = {
  offBlack: "bg-gray-900",
  black: "bg-black",
  offWhite: "bg-red-100",
  white: "bg-white",
  offBlue: "bg-blue-100",

  default: "lg:py-32 py-16 lg:px-0 px-6",
  compact: "py-16 lg:px-0 px-6",
};

export default function Index(props) {
  // Default Parameters
  const { color = "bg-red-100", padding = "default" } = props;

  const fluidContainerType = `container-fluid ${containerStyle[color]}`;
  const containerType = `container mx-auto ${containerStyle[color]} ${containerStyle[padding]}`;

  return (
    <>
      <div className={fluidContainerType}>
        <div className={containerType}>{props.children}</div>
      </div>
    </>
  );
}
