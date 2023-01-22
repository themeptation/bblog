import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: any;
  tags: string[];
  excerpt: string;
};

const PostHeader = ({
  title,
  coverImage,
  date,
  author,
  tags,
  excerpt,
}: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <p className="mt-3 text-3xl">{excerpt}</p>
      <div className="flex flex-col flex-wrap gap-3 my-8">
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
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <CoverImage title={title} src={coverImage} />
    </>
  );
};

export default PostHeader;
