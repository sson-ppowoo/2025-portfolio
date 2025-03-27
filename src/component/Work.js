import React, { useState, useEffect } from 'react';

function Work() {
  const projects = [
    {
      id: 1,
      title: "공차 메인페이지 클론코딩 2024",
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
        "#기존페이지 #적응형페이지 #이용시 #로딩시간지연 #CSS #미디어쿼리 #반응형처럼 #동작구현 #로딩시간단축 #Header&Footer #Color #회색요소 #구형디자인 #서브메뉴수정 #색감 #로고와통일감 #깔끔한느낌",
      image_web: "/img/work/GongCha_Web.png",
      image_tablet: "/img/work/GongCha_Tap.png",
      mage_mobile: "/img/work/GongCha_Mobile.png",      
      href: "https://gong-cha-clone.vercel.app/"
    },
    {
      id: 2,
      title: "손민정 개인 포트폴리오 2025",
      title_en: "[2025 Personal Portfolio]",
      Time: "제작기간 : 120시간 [5일 : 진행중] | 기여도 : 100% [Personal Work] |",
      design_kr: "디자인요소",
      design_en: "[design Element]",
      font: ["Jua", "NotoSansKR", "SupermercadoOne"],
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
        "2025년 웹 퍼블리셔 취업을 목표로 제작한 포트폴리오입니다. 다양한 포트폴리오를 참고하여 웹 퍼블리셔에 대한 정보 전달이 효과적으로 이루어질 수 있도록 구성하였습니다. 좌측 이미지는 실제 작업물이 아니라, 디자인 단계에서 Figma를 활용해 제작한 와이어프레임 이미지입니다. 제작 과정에서 사용성이 어색한 부분을 지속적으로 수정하고, 필요한 기능을 구현하며 완성도를 높여 나가며 현재 지속적으로 제작 진행중입니다.",
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


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
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
      <h2>Work</h2>
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
                <figure className="img_frame">
                  <img key={Work.id} src={imgWidthSrc(Work)} alt={Work.title} />
                </figure>                
                <figure className="img_container">
                  <img key={Work.id} src={imgWidthSrc(Work)} alt={Work.title} />
                </figure>                
              </div>

              <p className='Work_image_info'>사진을 스크롤하여 페이지 확인이 가능합니다</p>
         
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

export default Work;
