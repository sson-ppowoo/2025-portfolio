import React, { useState, useEffect } from 'react';

function Work2() {
  const projects = [
    {
      id: 1,
      title: "개인 유투브 채널 배너 디자인",
      title_en: "[Personal YouTube Channel Banner Design]",
      Time: "제작기간 : 4시간 [1일] | 기여도 : 100% [Personal Work]",
      design_kr: "디자인요소",
      design_en: "[design Element]",
      font: ["Jua"],
      color: ["#B19ADB", "#846FB5", "#9A70BF", "#4D3D60"],
      Tool_kr: "사용한 툴",
      Tool_en: "[Use Tools]",
      Tool: ["PhotoShop", "ChatGPT"],
      Tools_img: [
        "img/icon/skills_icon/10_figma.png",
        "img/icon/skills_icon/11_photoshop.png",
        "img/icon/16_chatgpt.png",
      ],
      UIUX_kr: "고객요구사항",
      UIUX_en: "[Client's Requirements]",
      description:
        "#기존페이지 #적응형페이지 #이용시 #로딩시간지연 #CSS #미디어쿼리 #반응형처럼 #동작구현 #로딩시간단축 #Header&Footer #Color #회색요소 #구형디자인 #서브메뉴수정 #색감 #로고와통일감 #깔끔한느낌",
      image_web: "#",
      image_tablet: "#",
      image_mobile: "#",            
      href: "https://www.youtube.com/@sson_ppowoo"
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
      <h2>Design Projects</h2>
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

export default Work2;
