"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  const links = [
    {
      label: "About",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Notes",
      href: "/notes",
    },
  ];

  return (
    <nav className="md:sticky md:top-0 md:left-0 md:self-start md:h-full md:pl-16 md:pt-16 pl-5 pt-5 z-10">
      <ul className="flex space-x-3 md:flex-col md:space-x-0 md:space-y-3 text-slate-500 whitespace-nowrap">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="hover:text-slate-950">
              <span>{isActive(link.href) ? "[x]" : "[ ]"}</span>
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
