import React from "react";
import Link from "next/link";
import Image from "next/image";
import GitHubIcon from "../../public/images/iconmonstr-github-1.svg";
import LinkedInIcon from "../../public/images/iconmonstr-linkedin-3.svg";
import EmailIcon from "../../public/images/iconmonstr-gmail-3-240.png";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div className="z-10">
        <h5 className="text-xl font-bold  my-2">Let&apos;s Connect</h5>
        <p className=" mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={GitHubIcon} alt="Github Icon" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={LinkedInIcon} alt="Linkedin Icon" />
          </a>
          <a
            href="mailto:hb.khaleel@gmail.com?subject=contact%20by%20the%20portfolio&body=Hello%20Hiba,"
            className="flex flex-r text-primary-500 hover:underline"
          >
            <Image src={EmailIcon} alt="gmail Icon" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
