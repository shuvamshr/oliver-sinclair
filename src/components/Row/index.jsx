const rowStyle = {
  medium: "gap-12",
  small: "gap-6",

  center: "flex flex-col justify-center",
};

export default function Row(props) {
  const { gap = "medium", align } = props;
  const rowType = `grid grid-cols-6 lg:grid-cols-12 ${rowStyle[gap]} ${rowStyle[align]}`;
  return (
    <>
      <div className={rowType}>{props.children}</div>
    </>
  );
}
