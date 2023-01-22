import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { BLOG_NAME } from "../lib/constants";
import Post from "../interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const subHeroPosts = allPosts.slice(1, 3);
  const posts = allPosts.slice(3);
  return (
    <>
      <Layout>
        <Head>
          <title>{`${BLOG_NAME} - Clean Next.js Tailwind Blog Template`}</title>
        </Head>
        <Container>
          <Intro />
          <h2 className="mt-20 mb-4 text-base font-normal tracking-wider uppercase">
            Get started with our <b>Featured Posts</b>
          </h2>
          <div className="flex flex-wrap gap-10 xl:flex-nowrap ">
            <div className="basis-full xl:basis-[65%] shrink-0">
              {heroPost && (
                <HeroPost
                  title={heroPost.title}
                  coverImage={heroPost.coverImage}
                  date={heroPost.date}
                  author={heroPost.author}
                  slug={heroPost.slug}
                  excerpt={heroPost.excerpt}
                  tags={heroPost.tags}
                />
              )}
            </div>
          </div>
          <h2 className="mt-32 mb-4 text-base font-normal tracking-wider uppercase">
            See what we’ve <b>written lately</b>
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {posts.length > 0 && <MoreStories posts={posts} />}
          </div>
          <div className="flex items-center justify-center mt-20">
            <button
              className="relative flex-grow btn sm:flex-grow-0"
              type="submit"
            >
              <span className="">Load More</span>
            </button>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = await getAllPosts();

  return {
    props: { allPosts },
  };
};
