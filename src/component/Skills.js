import React from "react";
const skillBox = ["Web_publishing", "Desing", "PaperWork"];
const Icon = [  
  {
    id: "Web_publishing",
    src: `/img/icon/skills_icon/1_html5.png`,
    alt: "HTML_icon",
    progress: 90,
  },
  {
    id: "Web_publishing",
    src: `/img/icon/skills_icon/2_css3.png`,
    alt: "CSS_icon",
    progress: 90,
  },
  {
    id: "Web_publishing",
    src: `/img/icon/skills_icon/3_JavaScript.png`,
    alt: "JS_icon",
    progress: 80,
  },
  {
    id: "Web_publishing",
    src: `/img/icon/skills_icon/4_scss.png`,
    alt: "SCSS_icon",
    progress: 80,
  },
  {
    id: "Web_publishing",
    src: `/img/icon/skills_icon/5_React.png`,
    alt: "React_icon",
    progress: 70,
  },
  {
    id: "Web_publishing",
    src: `/img/icon/skills_icon/6_react_router.png`,
    alt: "React Router_icon",
    progress: 60,
  },
  {
    id: "Web_publishing",
    src: `/img/icon/skills_icon/7_react_redux.png`,
    alt: "React Redux_icon",
    progress: 60,
  },
  {
    id: "Web_publishing",
    src: `/img/icon/skills_icon/8_redux_toolkit.png`,
    alt: "React Tollkit_icon",
    progress: 60,
  },
  {
    id: "Web_publishing",
    src: `/img/icon/skills_icon/9_react_query.png`,
    alt: "React Query_icon",
    progress: 60,
  },
  {
    id: "Desing",
    src: `/img/icon/skills_icon/10_figma.png`,
    alt: "Figma_icon",
    progress: 80,
  },
  {
    id: "Desing",
    src: `/img/icon/skills_icon/11_photoshop.png`,
    alt: "PhotoShop_icon",
    progress: 70,
  },
  {
    id: "Desing",
    src: `/img/icon/skills_icon/12_illustrator.png`,
    alt: "Illustrator_icon",
    progress: 60,
  },

  {
    id: "PaperWork",
    src: `/img/icon/skills_icon/13_excel2.png`,
    alt: "Excel_icon",
    progress: 80,
  },
  {
    id: "PaperWork",
    src: `/img/icon/skills_icon/14_word.png`,
    alt: "Word_icon",
    progress: 80,
  },
  {
    id: "PaperWork",
    src: `/img/icon/skills_icon/15_powerpoint.png`,
    alt: "PowerPoint_icon",
    progress: 80,
  }
];


function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>

      <figure className="skills_Banner">
        <img src="/img/main/Banner.png" alt="Banner" />
      </figure>

      <div className="skills_AllBox">
        {skillBox.map((skill) => (
          <div key={skill} className="skill_box">
            <h3>{skill}</h3>

            <div className="icon_container">
              {Icon.filter((icon) => icon.id === skill).map((icon) => (
                <div key={icon.src} className="skill_item">                  
                  <div className="skill_itemBox">                    
                    <img src={icon.src} alt={icon.alt} className="icon_img" />
                  </div>
                  {icon.progress && (
                    <div className="progress_bar">
                      <div style={{ width: `${icon.progress}%` }} className="progress">
                        <div className="progress_moon">
                          <span className="learning" >
                            {icon.progress}% learning</span>
                          <figure className="moon_icon">
                            <img 
                              src="/img/icon/learning_moon1.png"
                              alt="moon_icon"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="Toggle">
          <figure>
            <img src="/img/icon/caret-down-solid.svg" alt="Toggle_btn" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Skills;
