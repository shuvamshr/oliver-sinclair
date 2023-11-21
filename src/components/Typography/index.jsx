const typographyStyle = {
  // Font Type
  sans: "font-sans",
  serif: "font-serif",

  // Font Size
  "5xl": "text-5xl leading-normal",
  "res-5xl": "lg:text-5xl text-3xl lg:leading-normal",
  "4xl": "text-4xl lg:leading-normal",
  "res-4xl": "lg:text-4xl text-3xl lg:leading-normal",
  "3xl": "text-3xl lg:leading-normal",
  "res-3xl": "lg:text-3xl text-2xl leading-normal",
  "2xl": "text-2xl leading-normal",
  "res-2xl": "lg:text-2xl text-xl leading-normal",
  xl: "text-xl leading-normal",
  "res-xl": "lg:text-xl text-lg leading-normal",
  lg: "text-lg leading-normal",
  "res-lg": "lg:text-lg text-base leading-normal",
  base: "text-base leading-normal",
  "res-base": "lg:text-base text-sm leading-normal",
  sm: "text-sm leading-normal",
  "res-sm": "lg:text-sm text-xs leading-normal",
  xs: "text-xs leading-normal",

  // Font Weight
  bold: "font-bold",
  semibold: "font-semibold",
  medium: "font-medium",
  regular: "font-regular",

  // Text Align
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",

  // Font Color
  deepBlack: "text-gray-800",
  liteBlack: "text-gray-700",
  deepWhite: "text-white",
  liteWhite: "text-gray-100",
};

export default function Index(props) {
  // Default Parameters
  const {
    type = "sans",
    size = "base",
    weight = "regular",
    align = "left",
    color = type === "sans" ? "deepBlack" : "liteBlack",
  } = props;

  const typographyType = `${typographyStyle[type]} ${typographyStyle[size]} ${typographyStyle[weight]}  ${typographyStyle[align]} ${typographyStyle[color]}`;

  switch (type) {
    case "sans":
      return <h1 className={typographyType}>{props.children}</h1>;
    case "serif":
      return <p className={typographyType}>{props.children}</p>;
  }
  return;
}
