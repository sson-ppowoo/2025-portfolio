import React, { useState } from "react";

function Work() {
  const projects = [
    {
      id: 1,
      title: "공차 메인페이지 클론코딩",
      title_en: "[Gongcha Main Page Clone Coding]",
      Time: "제작기간 : 96시간 [4일] | 기여도 : 100% [Personal Work]",
      design_kr: "디자인요소",
      design_en: "[design Element]",
      font: ["NanumGothic", "ChosunCentennial"],
      color: ["#CF3E58", "#C30E2E", "#efefef"],
      Tool_kr: "사용한 툴",
      Tool_en: "[Use Tools]",
      Tool: ["HTML5", "CSS3", "JavaScript"],
      Tools_img: [
        "img/icon/skills_icon/1_html5.png",
        "img/icon/skills_icon/2_css3.png",
        "img/icon/skills_icon/3_JavaScript.png",
      ],
      UIUX_kr: "UI/UX 개선점",
      UIUX_en: "[UI/UX_Improvements Points]",
      description:
        "기존의 적응형페이지 이용시 모바일페이지 접속에 로딩페이지가 오래출력 되면서 로딩 시간이 길어져, 이 사항을 CSS의 미디어쿼리 이용하여 이미지 디자인은 2가지이지만 반응형처럼 동작하도록 구현하여 로딩시간을 단축하였습니다.  Header&Footer의 Color중 회색요소가 다소 깔끔하지 못하고 구형의 웹 페이지 디자인 느낌을 강하게 주어 서브메뉴의 구현 방식을 수정하고, 색감은 로고와 통일감을 주어 깔끔한 느낌을 주기위해 노력하였습니다.",
      image_web: "/img/work/GongCha_Web.png",
      image_tablet: "/img/work/GongCha_Tap.png",
      image_mobile: "/img/work/GongCha_Mobile.png",
      href: "https://gong-cha-clone.vercel.app/"
    },
    {
      id: 2,
      title: "2025 개인 포트폴리오",
      title_en: "[2025 Personal Portfolio]",
      Time: "제작기간 : 120시간 [5일] | 기여도 : 100% [Personal Work]",
      design_kr: "디자인요소",
      design_en: "[design Element]",
      font: ["Jua", "NotoSansKR", "SupermercadoOne.ttf"],
      color: ["#FBF8FF","#E3D8F2","#9481EB","#AEA9BA","#494554","#FDECA6"],
      Tool_kr: "사용한 툴",
      Tool_en: "[Use Tools]",
      Tool: ["HTML5", "CSS3", "JavaScript", "React"],
      Tools_img: [
        "img/icon/skills_icon/1_html5.png",
        "img/icon/skills_icon/2_css3.png",
        "img/icon/skills_icon/3_JavaScript.png",
        "img/icon/skills_icon/5_React.png",
      ],
      UIUX_kr: "UI/UX",
      UIUX_en: "[UI/UX_Improvements Points]",
      description:
        "웹 퍼블리셔에 손민정에 대한 정보전달을 목적으로 하는 페이지 입니다. ",
      image_web: "/img/work/portfolio_최종_Web.png",
      image_tablet: "/img/work/portfolio_최종_Tap.png",
      image_mobile: "/img/work/portfolio_최종_Mobile.png",
      href: "https://2025-portfolio-henna.vercel.app/"
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

  return (
    <section id="Work">
      <h2>Work</h2>
      <div className="Work_container">
        {projects.map((Work, index) => (
          <div className="Work_item" key={Work.id}>
            <div
              className="Work_R"
              style={{ display: index === currentIndex ? "block" : "none" }}
            >
              <div
                className="Work_image"
                style={{ display: index === currentIndex ? "block" : "none" }}
              >
                <figure className="img_scroll_container">
                  <span>Web_Size</span>
                  <img src={Work.image_web} alt={Work.title} />
                  <span>Tablet_Size</span>
                  <img src={Work.image_tablet} alt={Work.title} />
                  <span>Mobile_Size</span>
                  <img src={Work.image_mobile} alt={Work.title} />
                </figure>
              </div>
              <div className="Work_image_info">
                <p>스크롤하여 페이지를 확인하세요</p>
                <span>
                  <a href={Work.href} target="_blank" rel="noreferrer">
                    자세히 보러 가기👀
                  </a>
                </span>
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
                  {Work.Tools_img.map((Tools_img) => (
                    <span key={Tools_img}>
                      <img src={Tools_img} alt="Tools" />
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
      </div>
    </section>
  );
}

export default Work;
