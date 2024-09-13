import { getMarkdownMetadata, getMarkdownContent } from "../../../lib/utils";
import Post from "@/components/Post";
import Hero from "@/components/Hero";

const page = async (props) => {
  const slug = props.params.slug;
  const { content, data } = await getMarkdownContent("projects", slug);
  return (
    <div className="">
      <Hero coverImage={data.coverImage} />
      <Post source={content} />
    </div>
  );
};

// Generate dynamic path for project posts: /project/[slug]
export const generateStaticParams = async () => {
  const posts = getMarkdownMetadata("projects");
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default page;
