import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  picture: string;
  username?: string;
};

const Avatar = ({ name, picture, username }: Props) => {
  const image = (
    <div className="w-10 h-10 rounded-full overflow-hidden border-gray-200 dark:border-gray-700 inline-block leading-[0] !border-2 relative bg-black/5">
      <Image
        src={picture}
        className="absolute inset-0 object-cover w-full h-full"
        alt={name}
        width={40}
        height={40}
      />
    </div>
  );
  if (username) {
    return (
      <Link
        href={`/author/${username}`}
        as="/author/[slug]"
        className="flex items-center gap-2 mt-6"
      >
        {image}
        <div className="text-sm font-medium">{name}</div>
      </Link>
    );
  }
  return (
    <div className="flex items-center gap-2 mt-6">
      {image}
      <div className="text-sm font-medium">{name}</div>
    </div>
  );
};

export default Avatar;
