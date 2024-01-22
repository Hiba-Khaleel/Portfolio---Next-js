import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="group">
      <div className="h-52 md:h-72 rounded-t-xl relative group">
        <div
          className="h-full w-full rounded-t-xl"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        ></div>
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#e8def7] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={`{/${gitUrl}}`}
            className="h-14 w-14 border-2 mr-2 relative rounded-full border-black hover:border-white"
          >
            <CodeBracketIcon className="h-10 w-10  m-2 p-1 cursor-pointer hover:text-white" />
          </Link>
          <Link
            href={`{/${previewUrl}}`}
            className="h-14 w-14 border-2 relative rounded-full border-black hover:border-white"
          >
            <EyeIcon className="h-10 w-10 m-2 p-1 cursor-pointer hover:text-white" />
          </Link>
        </div>
      </div>
      <div className=" rounded-b-xl bg-[#d5c3f3] py-6 px-4">
        <h5 className="text-xl font-semibold mb-8">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
