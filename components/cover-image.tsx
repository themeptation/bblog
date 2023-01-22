import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className="absolute inset-0 object-cover w-full h-full"
      width={920}
      height={690}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/post/${slug}`} href="/post/[slug]" aria-label={title}>
          <div
            className={cn(
              "block relative pt-[75%] bg-black/5 rounded-3xl overflow-hidden",
              {
                "transition duration-200 hover:-translate-y-1": slug,
              }
            )}
          >
            {image}
          </div>
        </Link>
      ) : (
        <div className="block relative pt-[75%] bg-black/5 rounded-3xl overflow-hidden">
          {image}
        </div>
      )}
    </div>
  );
};

export default CoverImage;
