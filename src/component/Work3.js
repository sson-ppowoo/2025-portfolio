import React, { useState, useEffect } from "react";

function Work3() {
  const projects = [   
    {
      id: 1,
      title: "스톡이미지 제작",
      title_en: "[Stock image production]",
      Time: "제작기간 : 3시간 | 기여도 : 100% [Self-made Work]",
      design_kr: "디자인요소",
      design_en: "[design Element]",
      // font: ["| AI Generation Font", ],
      color: ["#FA3E00", "#FDA63B", "#FEBD80", "#616B4D", "#A1B247", "#843A17"],
      Tool_kr: "사용한 툴",
      Tool_en: "[Use Tools]",
      Tool: ["photoshop"],
      Tools_img: [
        "img/icon/skills_icon/11_photoshop.png"        
      ],
      // UIUX_kr: "UI/UX",
      // UIUX_en: "[UI/UX_Improvements Points]",
      description:
        "#스톡이미지제작 #자체제작 #오브젝트 #포토샵 #디자인 #그림 #PNG #가을 #한가위",
      image_web: "img/work/감_png.png",
      image_tablet: "img/work/감_png.png",
      image_mobile: "img/work/감_png.png",
      // href: "https://drive.google.com/file/d/1kCZ0BVbHBu4CoLFGg350jO0GV78jP1t_/view?usp=sharing",
    },
    {
      id: 2,
      title: "스톡이미지 제작",
      title_en: "[Stock image production]",
      Time: "제작기간 : 3시간 | 기여도 : 100% [Self-made Work]",
      design_kr: "디자인요소",
      design_en: "[design Element]",
      // font: ["| AI Generation Font", ],
      color: ["#D83239", "#F09772", "#EFB4B3"],
      Tool_kr: "사용한 툴",
      Tool_en: "[Use Tools]",
      Tool: ["photoshop"],
      Tools_img: [
        "img/icon/skills_icon/11_photoshop.png"        
      ],
      // UIUX_kr: "UI/UX",
      // UIUX_en: "[UI/UX_Improvements Points]",
      description:
        "#스톡이미지제작 #자체제작 #오브젝트 #포토샵 #디자인 #그림 #PNG #가을 #단풍",
      image_web: "img/work/단풍_png.png",
      image_tablet: "img/work/단풍_png.png",
      image_mobile: "img/work/단풍_png.png",
      // href: "https://drive.google.com/file/d/1kCZ0BVbHBu4CoLFGg350jO0GV78jP1t_/view?usp=sharing",
    },
    {
      id: 3,
      title: "스톡이미지 제작",
      title_en: "[Stock image production]",
      Time: "제작기간 : 3시간 | 기여도 : 100% [Self-made Work]",
      design_kr: "디자인요소",
      design_en: "[design Element]",
      // font: ["| AI Generation Font", ],
      color: ["#7E1E02", "#C06831","#E5A185", "#E9C398", "#D66F2A","#EAC66A","#A87E5D"],
      Tool_kr: "사용한 툴",
      Tool_en: "[Use Tools]",
      Tool: ["photoshop"],
      Tools_img: [
        "img/icon/skills_icon/11_photoshop.png"        
      ],
      // UIUX_kr: "UI/UX",
      // UIUX_en: "[UI/UX_Improvements Points]",
      description:
        "#스톡이미지제작 #자체제작 #오브젝트 #포토샵 #디자인 #그림 #PNG #가을 #도토리",
      image_web: "img/work/도토리_완성.png",
      image_tablet: "img/work/도토리_완성.png",
      image_mobile: "img/work/도토리_완성.png",
      // href: "https://drive.google.com/file/d/1kCZ0BVbHBu4CoLFGg350jO0GV78jP1t_/view?usp=sharing",
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
      <h2>Work | Stock</h2>
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
                  <img key={Work.id} src={imgWidthSrc(Work)} alt={Work.title} style={{width : "auto", height : "400px", margin:"0 auto" }} />
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
                  {/* <div className="Element">
                    Font :{" "}
                    {Work.font.map((font) => (
                      <span key={font}>{font + " | "}</span>
                    ))}
                  </div> */}

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
                {/* <div className="Work_UIUX">
                  <h3>{Work.UIUX_kr}</h3>
                  <span>{Work.UIUX_en}</span>
                </div> */}
                <p>{Work.description}</p>
              </div>

              {/* <div className="item_more">
                <span>
                  <a href={Work.href} target="_blank" rel="noreferrer">
                    자세히 보러 가기👀
                  </a>
                </span>
              </div> */}
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

export default Work3;
