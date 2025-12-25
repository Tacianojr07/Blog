import clsx from "clsx";

type SpinLoaderProps = {
  containerClass?: string;
  className?: string;
};
export function SpinLoader({ containerClass }: SpinLoaderProps) {
  const classes = clsx(
    "flex",
    "items-center",
    "justify-center",
    containerClass
  );

  return (
    <div className={classes}>
      <div
        className={clsx(
          "w-10 h-10",
          "border-5 border-t-transparent border-slate-900",
          "rounded-full",
          "animate-spin"
        )}
      ></div>
    </div>
  );
}
