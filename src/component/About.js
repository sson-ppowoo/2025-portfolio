import React from "react";

const careerList = [
  {
    title: "경력",
    info: "이력서 & 자기소개서",
    icon: "/img/icon/Download.png",
    info2: "외식/식품 프랜차이즈 경력 10년차",
    day2: "2012.03~2024.07",
  },
  {
    title: "교육",
    info: "산대특) AI & React 활용 스마트 시티 웨더  구축 _ 리퍼블리셔 양성",
    day: "24.10~25.03",
  },
  {
    title: "자격증",
    info: "자동차 운전 면허 : 2종 보통 (자차보유)",
    // info2: "웹 디자인 개발 기능사",
    day: "20.09.09",
    // day2: "25.04.10(필기예정)",
  },
  // {
  //   title: "기타",
  //   info: "스트릿 주짓수(대구대회) 여성 화이트 -69.0kg 금메달",
  //   info2: "스트릿 주짓수(구미대회) 여성 비기너 -64.0kg금메달",
  //   day: "24.06.27",
  //   day2: "24.04.28",
  // }
];
const filesDownload = () => {
  const files = [
    { href: "/files/입사지원서_손민정.pdf", download: "입사지원서_손민정.pdf" },
    { href: "/files/자기소개서_손민정.pdf", download: "자기소개서_손민정.pdf" },
  ];

  files.forEach((file, index) => {
    const a = document.createElement("a");
    a.href = file.href;
    a.download = file.download;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
};

function About() {
  return (
    <section id="About" className="About">
      <h2 className="About_title">About</h2>

      <div className="About_Allbox">
        <div className="About_img">
          <figure>
            <img src="/img/IdPicture/2025 (7).jpg" alt="증명사진" />
          </figure>
        </div>

        <div className="About_R">
          <div className="About_text">
            <p>
              안녕하십니까.
              <br className="br1" />
              {/* 기본에 충실하면서도, 더 나은 퍼블리싱을 고민합니다. */}
              기본에 충실하면서, 더 나은 퍼블리싱을 위해 끊임없이 고민하는
              <br className="br2" />
              {/* 새로운 기술을 배우고 적용하는 과정에서 성장을 느낍니다. */}
              신입 웹 퍼블리셔 <span>손민정</span>입니다.
              <br className="br3" />
              {/* 새로운 코드와 툴을 학습하는 즐거움으로 웹을 만들어가는 */}
              새로운 기술을 배우고 적용하는 과정에서 성장의 기쁨을 느끼며,
              <br className="br4" />
              {/* &nbsp;신입 웹 퍼블리셔 <span> 손민정 </span>입니다. */}
              코드와 툴을 학습하는 즐거움으로 웹을 만들어가고 있습니다.
            </p>
          </div>

          {careerList.map((career, i) => (
            <div className="About_textlist" key={i}>
              <div className="About_list">
                <p>{career.title}</p>
              </div>

              <div className="About_info">
                <div className="info">
                  <div className="info1">
                    <p>{career.info}</p>

                    {career.icon && (
                      <img
                        src={career.icon}
                        alt="다운로드버튼"
                        onClick={filesDownload}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </div>
                  <span>{career.day}</span>
                </div>

                <div className="info2">
                  <p>{career.info2}</p>
                  <span>{career.day2}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
