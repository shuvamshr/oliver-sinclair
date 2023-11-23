const buttonStyle = {
  primary:
    "rounded-none bg-red-900 text-white hover:bg-red-700 transition linear duration-300",
  secondary:
    "rounded-none bg-white text-red-900 hover:bg-red-300 border-[1.5px] border-red-900 transition linear duration-300",
  large: "h-16 text-lg",
  "res-large": "lg:h-16 lg:text-lg h-12 text-base",
  medium: "h-12 text-base",
  fit: "w-fit px-6",
  block: "w-full",
  typography: "font-semibold font-sans",
};

export default function Index(props) {
  const { type = "primary", size = "large", display = "block" } = props;

  const buttonType = `${buttonStyle[type]} ${buttonStyle[size]} ${buttonStyle[display]} ${buttonStyle["typography"]}`;

  return (
    <>
      <button className={buttonType}>{props.children}</button>
    </>
  );
}
