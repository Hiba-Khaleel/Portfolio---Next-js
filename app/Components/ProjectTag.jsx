import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? " border-purple-600 hover:border-purple-600"
    : " border-slate-600 hover:text-purple-500";
  return (
    <div>
      <button
        onClick={() => onClick(name)}
        className={`${buttonStyle} rounded-full border-2  px-6 py-3 text-xl cursor-pointer`}
      >
        {name}
      </button>
    </div>
  );
};

export default ProjectTag;
