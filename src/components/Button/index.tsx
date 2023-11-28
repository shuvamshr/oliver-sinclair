const buttonStyle: Record<string, string> = {
  default:
    "font-sans font-semibold rounded-[4px] transition ease-out duration-200",
  primary: "bg-red-900 text-white hover:bg-red-700",
  secondary:
    "bg-white text-red-900 border-[1px] border-red-900 hover:bg-red-300",
  large: "h-16 text-base",
  medium: "h-12 text-sm",

  fit: "px-8",
  block: "w-full",
};

interface ButtonProps {
  base?: "default";
  title?: string;
  type?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  display?: "fit" | "block";
  onClick?: () => void;
}

export default function Button({
  base = "default",
  title = "untitled",
  type = "primary",
  size = "large",
  display = "fit",
  onClick,
}: ButtonProps) {
  const buttonClass = `${buttonStyle[base]} ${buttonStyle[type]} ${buttonStyle[size]} ${buttonStyle[display]}`;

  return (
    <>
      <button className={buttonClass} onClick={onClick}>
        {title}
      </button>
    </>
  );
}
