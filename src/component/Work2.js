import React, { useState, useEffect } from "react";

function Work2() {
  const projects = [   
    {
      id: 1,
      title: "초대장 스튜디오 로고제작",
      title_en: "[Production of Invitation Studio Logos]",
      Time: "제작기간 : 1시간 | 기여도 : 50% [Using AI Work]",
      design_kr: "디자인요소",
      design_en: "[design Element]",
      font: ["| AI Generation Font", ],
      color: ["#F1EEE3", "#817494"],
      Tool_kr: "사용한 툴",
      Tool_en: "[Use Tools]",
      Tool: ["photoshop", "chatgpt"],
      Tools_img: [
        "img/icon/skills_icon/11_photoshop.png",
        "img/icon/skills_icon/16_chatgpt.png",
      ],
      UIUX_kr: "키워드",
      UIUX_en: "[description]",
      description:
        "#로고제작 #초대장스튜디오 #로고디자인 #포토샵 #AI활용디자인 #ChatGPT",
      image_web: "img/work/songil_logo.png",
      image_tablet: "img/work/songil_logo.png",
      image_mobile: "img/work/songil_logo.png",
      href: "https://drive.google.com/file/d/1kCZ0BVbHBu4CoLFGg350jO0GV78jP1t_/view?usp=sharing",
    },
    {
      id: 2,
      title: "유투브 메인 배너 제작",
      title_en: "[YouTube Main Banner Production]",
      Time: "제작기간 : 1시간 | 기여도 : 50% [Using AI Work]",
      design_kr: "디자인요소",
      design_en: "[design Element]",
      font: ["Jua", "AI Generation Font" ],
      color: ["#E0BFE9", "#DBB697", "#593845"],
      Tool_kr: "사용한 툴",
      Tool_en: "[Use Tools]",
      Tool: ["photoshop", "chatgpt"],
      Tools_img: [
        "img/icon/skills_icon/11_photoshop.png",
        "img/icon/skills_icon/16_chatgpt.png",
      ],
      UIUX_kr: "키워드",
      UIUX_en: "[description]",
      description:
        "#배너제작 #배너디자인 #유투브대문제작 #규격에 맞춘 디자인 #포토샵 #AI활용디자인 #ChatGPT",
      image_web: "img/work/youtube 배너 _ leesalin.png",
      image_tablet: "img/work/youtube 배너 _ leesalin.png",
      image_mobile: "img/work/youtube 배너 _ leesalin.png",
      href: "https://drive.google.com/file/d/1LUBKHO_8RLW9CQwxIKRgFEfwp7R-2-G1/view?usp=sharing",
    },
    {
      id: 3,
      title: "앱 출시 홍보 포스터 제작_내부보고용",
      title_en: "[Create Application posters]",
      Time: "제작기간 : 3시간 | 기여도 : 50% [Mockup Use Operations]",
      design_kr: "디자인요소",
      design_en: "[design Element]",
      font: ["Sandoll 공병각필", "Sandoll 방각본" ,"KoPub돋움체_Pro" ],
      color: ["#D70029", "#ffffff"],
      Tool_kr: "사용한 툴",
      Tool_en: "[Use Tools]",
      Tool: ["illustrator", "Freepik"],
      Tools_img: [
        "img/icon/skills_icon/12_illustrator.png",        
      ],
      UIUX_kr: "키워드",
      UIUX_en: "[description]",
      description:
        "#포스터 #앱출시홍보 #만불사 #앱기획서 #사용자유입경로설정 #어도비 #일러스트",
      image_web: "img/work/100만 만불회원 만불사 앱 출시.png",
      image_tablet: "img/work/100만 만불회원 만불사 앱 출시.png",
      image_mobile: "img/work/100만 만불회원 만불사 앱 출시.png",
      href: "https://drive.google.com/file/d/1lhFwhOTirpuHmng_Lw4dHiMKUAKQxTtl/view?usp=sharing",
    },
    {
      id: 4,
      title: "앱 리뉴얼 뉴 앱 아이콘 적용시안 보고",
      title_en: "[App Renewal App Apply New App Icon]",
      Time: "제작기간 : 3시간 | 기여도 : 50% [Mock-up and AI-utilized works]",
      design_kr: "디자인요소",
      design_en: "[design Element]",
      // font: ["Sandoll 공병각필", "Sandoll 방각본" ,"KoPub돋움체_Pro" ],
      color: ["#D70029", "#ffffff"],
      Tool_kr: "사용한 툴",
      Tool_en: "[Use Tools]",
      Tool: ["illustrator", "Freepik"],
      Tools_img: [
        "img/icon/skills_icon/12_illustrator.png",        
      ],
      UIUX_kr: "키워드",
      UIUX_en: "[description]",
      description:
        "#포스터 #앱출시홍보 #만불사 #앱기획서 #사용자유입경로설정 #어도비 #일러스트",
      image_web: "img/work/100만 만불회원 만불사 앱 출시.png",
      image_tablet: "img/work/100만 만불회원 만불사 앱 출시.png",
      image_mobile: "img/work/100만 만불회원 만불사 앱 출시.png",
      href: "https://drive.google.com/file/d/1lhFwhOTirpuHmng_Lw4dHiMKUAKQxTtl/view?usp=sharing",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProjects = projects.length;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalProjects - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalProjects - 1 ? 0 : prevIndex + 1
    );
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imgWidthSrc = (work) => {
    if (!work) return null;

    if (windowWidth <= 500) {
      return work.image_mobile;
    } else if (windowWidth <= 1024) {
      return work.image_tablet;
    } else {
      return work.image_web;
    }
  };

  return (
    <section id="Work">
      <h2>Work | Design</h2>
      {/* <h2>Web Projects</h2> */}
      <div className="Work_container">
        {projects.map((Work, index) => (
          <div className="Work_item" key={Work.id}>
            <div
              className="Work_L"
              style={{ display: index === currentIndex ? "block" : "none" }}
            >
              <div
                className="Work_image"
                style={{ display: index === currentIndex ? "block" : "none" }}
              >
                <figure className="img_container">
                  <img key={Work.id} src={imgWidthSrc(Work)} alt={Work.title} />
                </figure>
              </div>
            </div>

            <div
              className="Work_description"
              style={{ display: index === currentIndex ? "block" : "none" }}
            >
              <div className="Work_title">
                <h3>{Work.title}</h3>
                <span>{Work.title_en}</span>
              </div>

              <p className="Work_Time">{Work.Time}</p>

              <div className="design">
                <div className="design_box">
                  <h3>{Work.design_kr}</h3>
                  <span>{Work.design_en}</span>
                </div>

                <div className="design_Element">
                  <div className="Element">
                    Font :{" "}
                    {Work.font.map((font) => (
                      <span key={font}>{font + " | "}</span>
                    ))}
                  </div>

                  <div className="Element">
                    Color :{" "}
                    {Work.color.map((color) => (
                      <span key={color}>
                        <div
                          style={{
                            backgroundColor: color,
                            width: "24px",
                            height: "14px",
                            border: "2px solid #494554",
                            borderRadius: "5px",
                            display: "inline-flex",
                          }}
                        ></div>
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="useTools">
                <div className="tools_title">
                  <h3>{Work.Tool_kr}</h3>
                  <span>{Work.Tool_en}</span>
                </div>

                <div className="tools_icon">
                  {Work.Tools_img.map((Tools_img, i) => (
                    <span key={Tools_img}>
                      <img src={Tools_img} alt={Work.Tool[i]} />
                    </span>
                  ))}
                </div>
              </div>

              <div className="uiux">
                <div className="Work_UIUX">
                  <h3>{Work.UIUX_kr}</h3>
                  <span>{Work.UIUX_en}</span>
                </div>
                <p>{Work.description}</p>
              </div>

              <div className="item_more">
                <span>
                  <a href={Work.href} target="_blank" rel="noreferrer">
                    자세히 보러 가기👀
                  </a>
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="slide_btn">
          <figure onClick={() => prevSlide()}>
            <img src="/img/icon/arrow-left-long-solid.svg" alt="이전으로" />
          </figure>
          <figure onClick={() => nextSlide()}>
            <img src="/img/icon/arrow-right-long-solid.svg" alt="다음으로" />
          </figure>
        </div>
        <div className="slide_number">
          {projects[currentIndex].id} / {totalProjects}
        </div>
      </div>
    </section>
  );
}

export default Work2;
