import Link from "next/link";

const NotePreview = (props) => {
  return (
    <div className="flex justify-between">
      <Link href={`${props.folder}/${props.slug}`} className="w-fit">
        <h2 className="text-blue-600 hover:bg-slate-200">{props.title}</h2>
      </Link>
      <h2>{props.date}</h2>
    </div>
  );
};

export default NotePreview;
