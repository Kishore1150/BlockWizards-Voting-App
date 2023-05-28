import React from "react";
import { AiFillInstagram, AiOutlineGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
const Footer = () => {
  const links = [
    {
      id: "instagram",
      icon: <AiFillInstagram />,
    },
    {
      id: "twitter",
      icon: <BsTwitter />,
    },
    {
      id: "github",
      icon: <AiOutlineGithub />,
    },
  ];
  const listOfOptions = [
    {
      id: "app",
      title: "App",
      contents: ["Swap", "Tokens", "NFTs", "Pools"],
    },
    {
      id: "protocol",
      title: "Protocol",
      contents: ["Community", "Governance", "Developers"],
    },
    {
      id: "company",
      title: "Company",
      contents: ["Careers", "Blog"],
    },
    {
      id: "get help",
      title: "Get Help",
      contents: ["Contact Us", "Help Center"],
    },
  ];
  return (
    <div className="footer relative">
      <div className="footer__left">
        <img
          src="https://app.uniswap.org/static/media/unicornEmbossDark.76cdd4c5ce5fec4c8edb.png"
          alt=""
        />
        <ul>
          {links.map((link) => {
            return (
              <li>
                <a href="/" key={link.id} rel={`link.id`}>
                  {link.icon}
                </a>
              </li>
            );
          })}
        </ul>
        <p>© 2023 BW Labs</p>
      </div>
      <div className="footer__right">
        {listOfOptions.map((option) => {
          return (
            <div key={option.id} className="">
              <p className="footer__option__head">{option.title}</p>
              <ul>
                {option.contents.map((content) => {
                  return <li className="footer__option">{content}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
