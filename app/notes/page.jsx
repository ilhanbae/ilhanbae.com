import NotePreview from "@/components/NotePreview";
import { getMarkdownMetadata } from "../../lib/utils";

const page = () => {
  const notes = getMarkdownMetadata("notes");
  const notesPreview = notes.map((note) => (
    <NotePreview key={note.slug} {...note} />
  ));

  return (
    <main className="main-container space-y-3">
      <section className="space-y-3">
        <p>Latest dev studies and ongoing project.</p>
      </section>
      <hr />
      <section className="space-y-3">
        {notes.length > 0 ? (
          <div>{notesPreview}</div>
        ) : (
          <div className="">No notes at this moment.</div>
        )}
      </section>
    </main>
  );
};

export default page;
