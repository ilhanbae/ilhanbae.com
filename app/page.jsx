import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const contacts = [
    {
      name: "GitHub",
      username: "ilhanbae",
      link: "https://github.com/ilhanbae",
    },
    {
      name: "LinkedIn",
      username: "ilhanbae",
      link: "https://linkedin.com/in/ilhanbae",
    },
  ];

  return (
    // lg:w-3/5 min-h-full p-5 space-y-3
    <main className="main-container space-y-3">

      <section className="space-y-3">
        <p className="">
          Hi! I'm Neil, an aspiring software engineer with interest in web
          development, automation, and UI/UX design. I recently graduated with a
          Bachelor of Science in Computer Science from the University at
          Buffalo. I'm passionate about minimalistic design. My goal is to
          create interactive tools that are both reliable and easy to use.
        </p>
      </section>
      <hr />
      <section>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              <span>{contact.name}</span>:{" "}
              <Link
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:bg-slate-200"
              >
                {contact.username}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Home;
