import Typography from "../Typography";

export default function Index(props) {
  return (
    <>
      <div className="flex flex-col w-fit h-8 px-4 bg-red-300  rounded-full justify-center">
        <Typography size="xs" weight="medium" color="deepRed">
          {props.children}
        </Typography>
      </div>
    </>
  );
}
