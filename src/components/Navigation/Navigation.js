import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Logo.png";
import "./Navigation.css";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scroll] = useState(0);
  const handleClick = (id) => {
    setOpen(false);
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     setScroll(window.scrollY);
  //   });
  // }, []);

  return (
    <nav className={`navigation ${scroll > 50 ? "hidden" : ""}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="#" onClick={() => handleClick("header")}>
              About me
            </Link>
          </li>
          <li>
            <Link to="#" onClick={() => handleClick("skills")}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="#" onClick={() => handleClick("projects")}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="#" onClick={() => handleClick("footer")}>
              Contact me
            </Link>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      {open && (
        <div className="responsive-nav">
          <ul>
            <li>
              <Link to="#" onClick={() => handleClick("header")}>
                Header
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleClick("skills")}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleClick("projects")}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleClick("footer")}>
                Footer
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
