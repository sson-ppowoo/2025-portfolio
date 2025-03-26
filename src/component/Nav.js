import React, { useState, useEffect } from 'react';

function Nav() {
  const [activeMenu, setActiveMenu] = useState(null);
  
  const navMenuClick = (menu) => {
    setActiveMenu(menu);
    const section = document.getElementById(menu);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveMenu(entry.target.id);
          }
        });
      },
      { threshold: 0.1 } 
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <section className='nav'>
      <div className='Right_nav_box'>
        <div className={`Top ${activeMenu === 'header' ? 'active' : ''}`}
              onClick={() => navMenuClick('header')}
            >
              Top
        </div>        
        <ul className="Right_nav">          
          <li
            className={`navli ${activeMenu === 'Main' ? 'active' : ''}`}
            onClick={() => navMenuClick('Main')}
          >
            Main
          </li>
          <li
            className={`navli ${activeMenu === 'About' ? 'active' : ''}`}
            onClick={() => navMenuClick('About')}
          >
            About
          </li>
          {/* <li
            className={`navli ${activeMenu === 'About' ? 'active' : ''}`}
            onClick={() => navMenuClick('About')}
          >
            Skills
          </li> */}
          <li
            className={`navli ${activeMenu === 'Work' ? 'active' : ''}`}
            onClick={() => navMenuClick('Work')}
          >
            Work
          </li>
          <li
            className={`navli ${activeMenu === 'Contact' ? 'active' : ''}`}
            onClick={() => navMenuClick('Contact')}
          >
            Contact
          </li>
        </ul>               

      </div>
    </section>
  );
}

export default Nav;

