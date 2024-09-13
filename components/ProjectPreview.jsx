import Link from "next/link";

const ProjectPreview = (props) => {
  return (
    <div className="flex justify-between">
      <Link href={`${props.folder}/${props.slug}`} className="w-fit">
        <h2 className="text-blue-600 underline">
          {props.title}: {props.subtitle}
        </h2>
      </Link>
    </div>
  );
};

export default ProjectPreview;