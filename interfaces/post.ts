type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: any;
  excerpt: string;
  tags?: string[];
  ogImage: {
    url: string;
  };
  content: string;
};

export default PostType;
