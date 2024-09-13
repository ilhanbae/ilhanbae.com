import Image from "next/image";

const Hero = (props) => {
  return <div></div>;
};

export default Hero;
// const Hero = (props) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[calc(100vh-90px)] bg-red-200">
//       {/* Left column */}
//       <div className="relative bg-blue-200 flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 flex items-center justify-center">
//           <Image
//             src={props.coverImage}
//             alt="Project Overview Background"
//             layout="fill"
//             objectFit="contain"
//             quality={100}
//             priority
//           />
//         </div>
//         <div className="absolute inset-0 flex items-end justify-center p-4">
//           <div className="bg-black bg-opacity-50 p-4 rounded-lg w-full">
//             <h2 className="text-xl font-semibold mb-2 text-white">Title</h2>
//             <ul className="list-disc pl-5 text-white">
//               <li>Source Link</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Right column */}
//       <div className="flex flex-col gap-4 overflow-y-auto p-4">
//         <div className="bg-green-200 p-4">
//           <h2 className="text-xl font-semibold mb-2">Team</h2>
//           <ul className="list-disc pl-5">
//             <li>October 2023 - December 2023</li>
//             <li>3 students</li>
//           </ul>
//         </div>
//         <div className="bg-yellow-200 p-4">
//           <h2 className="text-xl font-semibold mb-2">Tech Stack / Tools</h2>
//           <ul className="list-disc pl-5">
//             <li>Languages: Javascript, PHP</li>
//             <li>
//               Libraries/Frameworks: React, Tailwind.css, Yup Schema Builder,
//               React Big Calendar
//             </li>
//             <li>Database: MySQL</li>
//             <li>Tools: Git, Trello, Figma</li>
//             <li>WAS: Apache 2.4.6</li>
//           </ul>
//         </div>
//         <div className="bg-purple-200 p-4">
//           <h2 className="text-xl font-semibold mb-2">My Role</h2>
//           <ul className="list-disc pl-5">
//             <li>Wireframing</li>
//             <li>Fullstack Development</li>
//             <li>API Documentation</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
