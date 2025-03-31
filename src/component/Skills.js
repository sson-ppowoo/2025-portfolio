import React, { useState, useEffect, useRef } from "react";

const skillBox = ["Web_publishing", "Design", "PaperWork","Collaboration"];
const Icon = [
  {
    id: 1,
    menu: "Web_publishing",
    title: "HTML",
    src: `/img/icon/skills_icon/1_html5.png`,
    alt: "HTML_icon",
    progress: 90,
  },
  {
    id: 2,
    menu: "Web_publishing",
    title: "CSS",
    src: `/img/icon/skills_icon/2_css3.png`,
    alt: "CSS_icon",
    progress: 90,
  },
  {
    id: 3,
    menu: "Web_publishing",
    title: "JavaScript",
    src: `/img/icon/skills_icon/3_JavaScript.png`,
    alt: "JS_icon",
    progress: 80,
  },
  {
    id: 4,
    menu: "Web_publishing",
    title: "SCSS",
    src: `/img/icon/skills_icon/4_scss.png`,
    alt: "SCSS_icon",
    progress: 80,
  },
  {
    id: 5,
    menu: "Web_publishing",
    title: "React",
    src: `/img/icon/skills_icon/5_React.png`,
    alt: "React_icon",
    progress: 70,
  },
  {
    id: 6,
    menu: "Web_publishing",
    title: "React Router",
    src: `/img/icon/skills_icon/6_react_router.png`,
    alt: "React Router_icon",
    progress: 60,
  },
  {
    id: 7,
    menu: "Web_publishing",
    title: "Redux Tollkit",
    src: `/img/icon/skills_icon/7_react_redux.png`,
    alt: "React Redux_icon",
    progress: 60,
  },  
  {
    id: 8,
    menu: "Web_publishing",
    title: "React Query",
    src: `/img/icon/skills_icon/9_react-query.png`,
    alt: "React Query_icon",
    progress: 60,
  },
  {
    id: 9,
    menu: "Design",
    title: "Figma",
    src: `/img/icon/skills_icon/10_figma.png`,
    alt: "Figma_icon",
    progress: 80,
  },
  {
    id: 10,
    menu: "Design",
    title: "PhotoShop",
    src: `/img/icon/skills_icon/11_photoshop.png`,
    alt: "PhotoShop_icon",
    progress: 70,
  },
  {
    id: 11,
    menu: "Design",
    title: "Illustrator",
    src: `/img/icon/skills_icon/12_illustrator.png`,
    alt: "Illustrator_icon",
    progress: 60,
  },

  {
    id: 12,
    menu: "PaperWork",
    title: "Excel",
    src: `/img/icon/skills_icon/13_excel2.png`,
    alt: "Excel_icon",
    progress: 80,
  },
  {
    id: 13,
    menu: "PaperWork",
    title: "Word",
    src: `/img/icon/skills_icon/14_word.png`,
    alt: "Word_icon",
    progress: 80,
  },
  {
    id: 14,
    menu: "PaperWork",
    title: "PowerPoint",
    src: `/img/icon/skills_icon/15_powerpoint.png`,
    alt: "PowerPoint_icon",
    progress: 80,
  },
  {
    id: 15,
    menu: "Collaboration",
    title: "Github",
    src: `/img/icon/uiw_github.png`,
    alt: "github_icon",
    progress: 80,
  },
  {
    id: 16,
    menu: "Collaboration",
    title: "Notion",
    src: `/img/icon/logos_notion-icon.png`,
    alt: "Notion_icon",
    progress: 80,
  },
  {
    id: 17,
    menu: "Toggle",
    Text: ": 잘 다룰수 있는 ",
    progress: 90,
  },
  {
    id: 18,
    menu: "Toggle",
    Text: ": 다소 미숙하지만 잘 다룰 수 있는",
    progress: 80,
  },
  {
    id: 19,
    menu: "Toggle",
    Text: ": 미숙하지만 다룰 수 있는",
    progress: 70,
  },
  {
    id: 20,
    menu: "Toggle",
    text: ": 검색과 심화학습, 시간이 필요한",
    progress: 60,
  },
];
function Skills() {
  const [isToggleVisible, setIsToggleVisible] = useState(false);
  const progressRefs = useRef({});

  const ToggleClick = () => {
    setIsToggleVisible((prev) => !prev);    
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 애니메이션을 위해 transition을 설정
            const target = entry.target;
            target.style.transition = "width 1s ease-in-out"; // 애니메이션을 추가
            target.style.width = target.dataset.width + "%"; // 원래 부여된 값으로 확장
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -50px 0px" }
    );

    // progressRefs.current의 값들을 순회하며 각각의 요소를 관찰합니다.
    Object.values(progressRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      // 컴포넌트가 unmount될 때 모든 요소의 관찰을 종료합니다.
      Object.values(progressRefs.current).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="About" className="skills">
      <h2 className="skills_title">Skills</h2>

      <div className="skills_AllBox">
        {skillBox.map((skill, idx) => (
          <div key={idx} className="skill_box">
            <h3>{skill}</h3>

            <div className="icon_container">
              {Icon.filter((icon) => icon.menu === skill).map((icon) => (
                <div key={icon.src} className="skill_item">
                  <div className="skill_itemBox">
                    <img src={icon.src} alt={icon.alt} className="icon_img" />
                    <span className="icon_title">{icon.title}</span>
                  </div>
                  {icon.progress && (
                    <div className="progress_bar">
                      <div
                        ref={(el) => (progressRefs.current[icon.src] = el)}
                        data-width={icon.progress}
                        style={{
                          width: "0%",
                          transition: "width 0.8s ease-in-out",
                        }}
                        className="progress"
                      >
                        <div className="progress_butterfly">
                          <span className="learning">
                            {icon.progress}%learning
                          </span>
                          <figure className="butterfly_icon">
                            <img
                              src="/img/icon/butterfly.png"
                              alt="butterfly_icon"
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

        <div
          className="Toggle"
          style={{ display: isToggleVisible ? "block" : "none" }}
        >
          {Icon.filter((icon) => icon.menu === "Toggle").map((icon) => (
            <div key={icon.src} className="toggle_item">
              <div className="progress_bar">
                <div
                  style={{ width: `${icon.progress}%` }}
                  className="progress"
                >
                  <div className="progress_butterfly">
                    <span className="learning">{icon.progress}%</span>
                    <figure className="butterfly_icon">
                      <img src="/img/icon/butterfly.png" alt="butterfly_icon" />
                    </figure>
                  </div>
                </div>
              </div>

              <p className="Toggle_Text">{icon.Text || icon.text}</p>
            </div>
          ))}
        </div>

        <div className="Toggle_icon" onClick={ToggleClick}>
          <figure className="Toggle_img">
            <img
              src={
                isToggleVisible
                  ? "/img/icon/Vector_close.png" // 닫힌 상태
                  : "/img/icon/Vector_open.png" // 열린 상태
              }
              alt="Toggle_Btn"
            />
          </figure>
          <span>Cilck!</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
