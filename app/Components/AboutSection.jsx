"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Image from "next/image";

const AboutSection = () => {
  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>HTML & CSS</li>
          <li>Git</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>MySQL</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Next js</li>
          <li>TailWind</li>
        </ul>
      ),
    },
    {
      title: "Tools",
      id: "tools",
      content: (
        <ul className="list-disc pl-2">
          <li>VS code</li>
          <li>Postman</li>
          <li>Heroku</li>
          <li>Netlify</li>
          <li>GitHub</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>FooCoding Web development</li>
          <li>Hermods- programming 1 python & C#</li>
          <li>Udemy- React & Next js</li>
        </ul>
      ),
    },
  ];

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handelTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="text-black">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about.jpg"
          alt="about image"
          width={500}
          height={300}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold  mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Junior front-end developer. Committed to creating user-friendly and
            accessible web experiences. Open to new opportunities and
            connections in the field.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handelTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>

            <TabButton
              selectTab={() => handelTabChange("tools")}
              active={tab === "tools"}
            >
              {" "}
              Tools{" "}
            </TabButton>
            <TabButton
              selectTab={() => handelTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
