import ProjectPreview from "@/components/ProjectPreview";
import { getMarkdownMetadata } from "../../lib/utils";

const page = async () => {
  const posts = getMarkdownMetadata("projects");
  const postPreview = posts.map((post) => (
    <ProjectPreview key={post.slug} {...post} />
  ));

  return (
    <main className="main-container space-y-3">
      <section className="space-y-3">
        <p>
          Over the past few years, my journey in web development has been a
          blend of experimentation and continuous learning. Here’s a glimpse
          into some of the projects I’ve undertaken during my studies:
        </p>
      </section>
      <hr />
      <section className="space-y-3">
        {posts.length > 0 ? (
          <div className="space-y-3">{postPreview}</div>
        ) : (
          <div className="">No projects at this moment.</div>
        )}
      </section>
    </main>
  );
};

export default page;
