import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const MenuClick = (menu) => {
    setActiveMenu(menu);
    const section = document.getElementById(menu);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="header" className="header">
      <div className="header_i">
        <div className="logobox">
          <h1 className="logo">
            <a href="https://2025-portfolio-henna.vercel.app/">
              <img src="/img/main/logo.png" alt="logo" />
            </a>
          </h1>
          <p>sson_ppowoo's portfolio</p>
        </div>

        <ul className={`menu ${menuOpen ? "open" : ""}`}>
         
          <li
            className={`menuli ${activeMenu === "Main" ? "active" : ""}`}
            onClick={() => MenuClick("Main")}
          >
            Main
          </li>
          <li
            className={`menuli ${activeMenu === "About" ? "active" : ""}`}
            onClick={() => MenuClick("About")}
          >
            About
          </li>
          {/* <li
            className={`menuli ${activeMenu === "About" ? "active" : ""}`}
            onClick={() => MenuClick("About")}
          >
            Skills
          </li> */}
          <li
            className={`menuli ${activeMenu === "Work" ? "active" : ""}`}
            onClick={() => MenuClick("Work")}
          >
            Work
          </li>
          <li
            className={`menuli ${activeMenu === "Contact" ? "active" : ""}`}
            onClick={() => MenuClick("Contact")}
          >
            Contact
          </li>
          <li
            className={`Close ${activeMenu === "Close" ? "active" : ""}`}
            onClick={() => toggleMenu("Close")}
          >
            Close
          </li>
        </ul>

        <div className={`ham ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </section>
  );
}

export default Header;
