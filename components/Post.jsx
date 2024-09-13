import { MDXRemote } from "next-mdx-remote/rsc";
import ImageSlide from "./ImageSlide";

const components = {
  ImageSlide,
};

const Post = (props) => {
  return (
    <article className="prose">
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    </article>
  );
};

export default Post;
