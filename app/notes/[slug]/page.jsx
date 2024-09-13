import { getMarkdownMetadata, getMarkdownContent } from "../../../lib/utils";
import Post from "@/components/Post";

const page = (props) => {
  const slug = props.params.slug;
  const { content, data } = getMarkdownContent("notes", slug);
  return (
    <div className="min-h-full p-5">
      <div className="flex flex-col">
        <Post source={content} />
      </div>
    </div>
  );
};

// This ensures pages are prerenderd as static content
export const generateStaticParams = async () => {
  const posts = getMarkdownMetadata("notes");
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default page;
