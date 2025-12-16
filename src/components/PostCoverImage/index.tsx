import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};
export function PostCoverImage({
  imageProps,

  linkProps,
}: PostCoverImageProps) {
  return (
    <Link
      {...linkProps}
      className={clsx("w-full h-full overflow-hidden", linkProps.className)}
      href={"#"}
    >
      <Image
        {...imageProps}
        alt={imageProps.alt}
        className={clsx(
          "group-hover:scale-110 transition-all duration-300 ease-in-out rounded-xl object-cover object-center"
        )}
      />
    </Link>
  );
}
