import React from "react";

const ResumeLinks = ({ links }) => {
  return (
    <div className="ResumeLinks">
      {links.map((item, idx) => (
        <div key={idx} className="ResumeLink">
          <span className="ResumeLabel">{item.label}</span>

          <div className="item_more">
            <a 
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              보기👀
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResumeLinks;
