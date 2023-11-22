const colStyle = {
  "res-large": "lg:gap-10 gap-6",

  start: "justify-start",
  "res-center": "lg:justify-center justify-start",
};

export default function Index(props) {
  const {
    span = 12,
    start = "auto",
    gap = "res-large",
    justify = "start",
  } = props;

  const colType = `flex flex-col lg:col-span-${span} lg:col-start-${start} col-span-6 ${colStyle[gap]} ${colStyle[justify]}`;
  return (
    <>
      <div className={colType}>{props.children}</div>
    </>
  );
}
