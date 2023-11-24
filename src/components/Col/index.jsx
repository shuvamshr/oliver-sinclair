const colStyle = {
  "res-large": "lg:gap-10 gap-6",

  start: "justify-start",
  "res-center": "lg:justify-center justify-start",

  1: "lg:col-span-1 col-span-6",
  2: "lg:col-span-2 col-span-6",
  3: "lg:col-span-3 col-span-6",
  4: "lg:col-span-4 col-span-6",
  5: "lg:col-span-5 col-span-6",
  6: "lg:col-span-6 col-span-6",
  7: "lg:col-span-7 col-span-6",
  8: "lg:col-span-8 col-span-6",
  9: "lg:col-span-9 col-span-6",
  10: "lg:col-span-10 col-span-6",
  11: "lg:col-span-11 col-span-6",
  12: "lg:col-span-12 col-span-6",

  s1: "lg:col-start-1",
  s2: "lg:col-start-2",
  s3: "lg:col-start-3",
  s4: "lg:col-start-4",
  s5: "lg:col-start-5",
  s6: "lg:col-start-6",
  s7: "lg:col-start-7",
  s8: "lg:col-start-8",
  s9: "lg:col-start-9",
  s10: "lg:col-start-10",
  s11: "lg:col-start-11",
  s12: "lg:col-start-12",
};

export default function Index(props) {
  const { span = "12", pos, gap = "res-large", justify = "start" } = props;

  const colType = `flex flex-col ${colStyle[pos]} ${colStyle[span]} ${colStyle[gap]} ${colStyle[justify]}`;
  return (
    <>
      <div className={colType}>{props.children}</div>
    </>
  );
}
