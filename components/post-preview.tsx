import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
  tags: string[];
  small?: boolean;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags,
  small = false,
}: Props) => {
  return (
    <article>
      <CoverImage slug={slug} title={title} src={coverImage} />
      {!small ? (
        <div className="mt-8 space-y-3">
          <div className="flex flex-wrap gap-3">
            {tags?.map((tag: string) => (
              <Link
                className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black tracking-wide whitespace-nowrap"
                href="/"
                key={tag}
              >
                {tag}
              </Link>
            ))}
          </div>
          <div className="flex items-center text-sm dark:text-gray-200">
            <span className="whitespace-nowrap ">
              <DateFormatter dateString={date} />
            </span>
            <span className="px-2.5">⋅</span>
            <span className="whitespace-nowrap">5 min read</span>
          </div>
          <h2 className={`text-2xl font-bold leading-snug mt-3`}>
            <Link as={`/post/${slug}`} href="/post/[slug]">
              {title}
            </Link>
          </h2>
          <p className="mt-3">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      ) : (
        <h2 className={`text-xl font-bold leading-snug mt-3`}>
          <Link as={`/post/${slug}`} href="/post/[slug]">
            {title}
          </Link>
        </h2>
      )}
    </article>
  );
};

export default PostPreview;
