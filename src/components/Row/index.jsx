const rowStyle = {
  medium: "gap-12",
  small: "gap-6",
};

export default function Row(props) {
  const { gap = "medium", padding = "lg:py-32 py-16 lg:px-0 px-6" } = props;
  const rowType = `grid lg:grid-cols-12 grid-cols-6 ${padding} ${rowStyle[gap]}`;
  return (
    <>
      <div className={rowType}>{props.children}</div>
    </>
  );
}
