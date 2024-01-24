import React from "react";

const Footer = () => {
  const authorName = "Hiba Khaleel";
  const location = "Lund / Sweden";
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer border z-10 border-t-black border-l-transparent border-r-transparent ">
      <div className="container p-12 flex justify-between">
        <span>
          {" "}
          {authorName} - {location}
        </span>

        <p>&copy; {currentYear} . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
