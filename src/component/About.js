import React from "react";

const careerList = [
  {
    title: "경력",
    info: "이력서 & 자기소개서",
    icon: "/img/icon/Download.png",
    info2:"외식/식품 프랜차이즈 경력 10년차",
    day2: "2012.03~2024.07",
  },
  {
    title: "교육",
    info: "산대특) AI & React 활용 스마트 시티 웨더  구축 _ 리퍼블리셔 양성",
    day: "24.10~25.03",
  },
  {
    title: "자격증",
    info: "자동차 운전 면허 : 2종 보통",
    info2: "웹 디자인 개발 기능사",
    day: "20.09.09",
    day2: "25.04.10(필기예정)",
  },
  {
    title: "기타",
    info: "스트릿 주짓수(대구대회) 여성 화이트 -69.0kg 금메달",
    info2: "스트릿 주짓수(구미대회) 여성 비기너 -64.0kg금메달",
    day: "24.06.27",
    day2: "24.04.28",
  }
];
const filesDownload = () => {
  const files = [
    { href: "/files/손민정_이력서.docx", download: "손민정_이력서.docx" },
    { href: "/files/자기소개서_손민정.docx", download: "자기소개서_손민정.docx" },
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
            <img src="/img/IdPicture/2025 (1).jpg" alt="증명사진" />
          </figure>
        </div>

        <div className="About_R">
          <div className="About_text">
            <p>
              안녕하십니까.<br/>기본에 충실하면서도, 더 나은 퍼블리싱을 고민합니다.
              새로운 기술을 배우고 적용하는 과정에서 성장을 느낍니다. 새로운
              코드와 툴을 학습하는 즐거움으로 웹을 만들어가는 신입 웹 퍼블리셔 
              <span> 손민정 </span>입니다.
            </p>
          </div>

          {careerList.map((career, i) => (
            <div className="About_textlist" key={i}>
              <div className="About_list">
                <p>{career.title}</p>
              </div>

              <div className="About_info">                

                <p>{career.info}</p>

                {career.icon && (
                  <img
                  src={career.icon}
                  alt="다운로드버튼"
                  onClick={filesDownload}
                  style={{ cursor: "pointer" }}
                  />
                )}
                <span>{career.day}</span>
                

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
