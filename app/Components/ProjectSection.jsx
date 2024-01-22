"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "WikiPaper Reading website",
    image: "/images/Wiki.png",
    gitUrl: "https://github.com/Hiba-Khaleel/wikiPaper-App",
    previewUrl: "https://wikipaperapp1.onrender.com",
    tag: ["All", "Front-End"],
  },
  {
    id: 2,
    title: "Full stack Portfolio",
    image: "/images/node.png",
    gitUrl: "https://github.com/Hiba-Khaleel/portfolio1",
    previewUrl: "https://wikipaperapp1.onrender.com",
    tag: ["All", "Full-Stack"],
  },
  {
    id: 3,
    title: "Next js Portfolio",
    image: "/images/next.png",
    gitUrl: "https://github.com/Hiba-Khaleel/wikiPaper-App",
    previewUrl: "https://wikipaperapp1.onrender.com",
    tag: ["All", "Front-End"],
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTaChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="lg:mt-10">
      <h2 className="text-center text-4xl font-bold ">My Projects</h2>
      <div className=" flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTaChange}
          name="All"
          isSelected={tag === "All"}
        />{" "}
        <ProjectTag
          onClick={handleTaChange}
          name="Front-End"
          isSelected={tag === "Front-End"}
        />
        <ProjectTag
          onClick={handleTaChange}
          name="Full-Stack"
          isSelected={tag === "Full-Stack"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
export default ProjectSection;
