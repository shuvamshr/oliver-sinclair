const rowStyle = {
  medium: "gap-12",
  small: "gap-6",
};

export default function Row(props) {
  const { gap = "medium" } = props;
  const rowType = `grid grid-cols-6 lg:grid-cols-12 ${rowStyle[gap]}`;
  return (
    <>
      <div className={rowType}>{props.children}</div>
    </>
  );
}
