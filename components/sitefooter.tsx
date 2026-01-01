import React from "react";
import Link from "next/link";
import { FlickeringGrid } from "./flickering-grid";
import Image from "next/image";

// Dynamic footer data
const footerData = {
  socialLinks: [
    {
      icon: "ri-facebook-fill text-blue-600!",
      url: "https://www.facebook.com/profile.php?id=61572493181532",
    },
    {
      icon: "ri-instagram-line text-pink-500!",
      url: "https://www.instagram.com/skill_griha/",
    },
    {
      icon: "ri-tiktok-fill text-black!",
      url: "https://www.tiktok.com/@skillgriha1",
    },
  ],
};

const Footer = () => {
  return (
    <footer className="footer-area style-one position-relative z-1 pt-5! pb-75!">
      <div className="container-fluid z-100 relative">
        <div className="row">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={120}
              height={26}
              className="logo-light"
            />
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={120}
              height={26}
              className="logo-dark d-none"
            />
          </Link>
          <div className="flex flex-col items-end justify-end">
            <div className="flex">
              <ul className="social-profile style-two list-unstyled mb-0">
                {footerData.socialLinks.map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex flex-column align-items-center justify-content-center rounded-circle text-2xl"
                    >
                      <i className={`${social.icon}  text-3xl!`}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-7 text-md-end text-center">
              <p className="copyright-text mb-0">
                <i className="ri-copyright-line"></i> All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={3}
        gridGap={3}
        color="#2651fd"
        backgroundOpacity={0.15}
        maxOpacity={0.7}
        flickerChance={0.3}
        logoText="Skill Griha"
        faded={true}
      />
    </footer>
  );
};

export default Footer;
