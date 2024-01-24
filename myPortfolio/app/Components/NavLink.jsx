const NavLink = ({ href, title, isActive, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    // Scroll smoothly to the target element
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`block py-2 pl-3 pr-4 text-black sm:text-xl  md:p-0 hover:text-white hover:cursor-pointer ${
        isActive ? "border-b-2 border-purple-50" : ""
      }`}
    >
      <a>{title}</a>
    </div>
  );
};

export default NavLink;
