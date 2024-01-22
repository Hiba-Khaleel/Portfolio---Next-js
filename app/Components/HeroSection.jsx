// "use client";
// import React from "react";
// import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";

// const HeroSection = () => {
//   return (
//     <section>
//       <div className="grid grid-cols-1 sm:grid-cols-12">
//         <div className="col-span-7 place-self-center text-center sm:text-left">
//           <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-5xl font-extrabold">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
//               Hello I'm{" "}
//             </span>
//             <TypeAnimation
//               sequence={[
//                 // Same substring at the start will only be typed out once, initially
//                 "Hiba Khaleel",
//                 1000, // wait 1s before replacing "Mice" with "Hamsters"
//                 "Web Developer",
//                 1000,
//                 "Full-stack Developer",
//                 1000,
//                 "Front-end Developer",
//                 1000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//             />
//           </h1>
//           <p className="text-base text-[#ADB7BE] sm:text-lg mb-6 lg:text-xl ">
//             blablabla some foo writing is here to trin on tailwind terarara
//             bbbrrffoddo
//           </p>
//           <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white bg-gradient-to-br from-blue-500 to-pink-500 hover:bg-slate-200 text-white">
//             Hire me
//           </button>
//           <button className="px-1 py-1 w-full rounded-full bg-transparent bg-gradient-to-br from-blue-500 to-pink-500 hover:bg-slate-800 text-white mt-2">
//             <span className="block bg-[#121212] hover bg-slate-800 rounded-full px-5 py-2 ">
//               Download CV
//             </span>
//           </button>
//         </div>
//         <div className=" cool-span-5 lg:ml:5 place-self-center mt-4 lg:mt-0">
//           <div className="rounded-full  bg-[#181818] w-[220px] h-[220px] lg:w-[370px] lg:h-[370px] relative ">
//             <Image
//               src="/images/coding.jpg"
//               alt="hero image"
//               className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
//               width={300}
//               height={300}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="home" className="lg:py-8">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-black bg-clip-text bg-gradient-to-right from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Hiba Khaleel",
                1000,
                "A full-stack developer",
                1000,
                "A web Developer",
                1000,
                "A front-end Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-black text-base sm:text-lg mb-6 lg:text-xl">
            Passionate Junior Fullstack Developer dedicated to sculpting
            immersive user journeys. Expertise in frontend technologies like
            React, TypeScript,coupled with backend skills in Node.js and MySQL.
            Eager to collaborate on visionary projects that push the boundaries
            of user-centric design. Let's embark on a journey of innovation and
            create unparalleled digital experiences together!
          </p>
          <div>
            <Link
              href="/#contact"
              className=" border-2 border-[#7954BA] px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-[#7954BA] text-black hover:text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-2 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-white text-white mt-3"
            >
              <span className=" border-2 border-purple-600 block bg-[#7954BA] hover:bg-white hover:text-black hover:border-[#7954BA] rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero2.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
