export default function Index(props) {
  let typographyType;
  const [type, style] = props.type.split(/-(.*)/s);

  const res_5xl_semibold =
    "lg:max-2xl:text-5xl lg:max-2xl:leading-normal text-3xl leading-normal font-semibold";

  const res_lg_medium =
    "lg:max-2xl:text-lg lg:max-2xl:leading-normal text-base leading-normal font-medium";

  const res_xl_regular =
    "lg:max-2xl:text-xl lg:max-2xl:leading-normal text-lg leading-normal font-regular";

  const fix_sm_regular = "text-sm leading-normal font-regular";

  switch (style) {
    case "res-5xl-semibold":
      typographyType = res_5xl_semibold;
      break;
    case "res-lg-medium":
      typographyType = res_lg_medium;
      break;
    case "res-xl-regular":
      typographyType = res_xl_regular;
      break;
    case "fix-sm-regular":
      typographyType = fix_sm_regular;
      break;
  }

  if (type === "head") {
    return (
      <h1 className={typographyType + " font-sans text-gray-800"}>
        {props.children}
      </h1>
    );
  } else if (type === "body") {
    return (
      <p className={typographyType + " font-serif text-gray-800"}>
        {props.children}
      </p>
    );
  }
}
