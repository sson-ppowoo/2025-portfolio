import React, { useState } from "react";
import "../css/WorkSlider.css";

const WorkSlider = ({ data = [] }) => {
  const [current, setCurrent] = useState(0);
  // 방어 코드
  if (!Array.isArray(data) || data.length === 0) return null;


  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="work-slider" id="Work">     

      <div className="work-slider-container">
        <ul
          className="work-slider-list"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {data.map((item) => (
            <li className="work-slider-item" key={item.id}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="work-slider-link"
              >
                {/* 이미지 */}
                <div className="work-slider-image">
                  <picture>
                    <source
                      media="(max-width: 768px)"
                      srcSet={item.image_mobile}
                    />
                    <source
                      media="(max-width: 1024px)"
                      srcSet={item.image_tablet}
                    />
                    <img src={item.image_web} alt={item.title} loading="lazy" />
                  </picture>
                </div>

                {/* 텍스트 */}
                <div className="work-slider-info">
                  <h3 className="work-title">{item.title}</h3>
                  <span className="work-title-en">{item.title_en}</span>
                  <p className="work-time">{item.Time}</p>
                  <p className="work-desc">{item.description}</p>

                  {item.font && item.font.length > 0 && (
                    <div className="font-element">
                      <strong>Font:</strong>
                      {item.font.map((f, i) => (
                        <span key={i}>{f}</span>
                      ))}
                    </div>
                  )}

                  {item.color && item.color.length > 0 && (
                    <div className="color-element">
                      <strong>Color:</strong>
                      {item.color.map((c, i) => (
                        <div key={i} style={{ backgroundColor: c }} />
                      ))}
                    </div>
                  )}

                  {item.Tools_img && item.Tools_img.length > 0 && (
                    <ul className="work-tools">
                      {item.Tools_img.map((icon, idx) => (
                        <li key={idx}>
                          <img src={icon} alt="tool icon" loading="lazy" />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* 네비게이션 */}
      <div className="slide-number">
        {current + 1} / {data.length}
      </div>
      <div className="slide-btn">
        <figure onClick={prevSlide}>◀</figure>
        <figure onClick={nextSlide}>▶</figure>
      </div>
    </section>
  );
};

export default WorkSlider;
