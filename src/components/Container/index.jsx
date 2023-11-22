const containerStyle = {
  offBlack: "bg-gray-900",
  black: "bg-black",
  offWhite: "bg-red-100",
  white: "bg-white",
};

export default function Index(props) {
  // Default Parameters
  const { color = "bg-red-100" } = props;

  const fluidContainerType = `container-fluid ${containerStyle[color]}`;
  const containerType = `container mx-auto ${containerStyle[color]}`;

  return (
    <>
      <div className={fluidContainerType}>
        <div className={containerType}>{props.children}</div>
      </div>
    </>
  );
}
