import React from "react";

function Contact() {
  const contactUrl = [
    {
      id: 1,
      name: "Instagram",
      url: "https://www.instagram.com/sson_ppowoo/?hl=ko",
      img: "/img/icon/skill-icons_instagram.png",
    },
    {
      id: 2,
      name: "GitHub",
      url: "https://github.com/sson-ppowoo",
      img: "/img/icon/uiw_github.png",
    },
    {
      id: 3,
      name: "google",
      url: "mailto:ssonmin930408@gmail.com",
      img: "/img/icon/logos_google-gmail.png",
    },
  ];
  return (
    <section id="Contact">
      <div className="ContactAll">
        <h2 className="Contact_title">Contact</h2>
        <p className="Contact_text">
          첫발을 내딛는 지금, 새로운 도전에 대한 기대와 열정으로 가득합니다.<br/>
          배움을 멈추지 않고 성장하며, 긍정적인 변화를 만들어가는 웹 퍼블리셔가
          되겠습니다. <br/>저의 프로젝트를 봐주셔서 감사합니다. 더 궁금하시다면
          언제든지 연락 주세요! (●'◡'●)
        </p>
        <figure>
          <img
            src="/img/main/KakaoTalk_20250312_114720165.jpg"
            alt="카카오톡 친구추가 QR코드"
          />
        </figure>
        <div className="SNSurl">
          {contactUrl.map((item, i) => (
            <a key={item.id} href={item.url} target="_blank" rel="noreferrer">
              <figure>
                <img src={item.img} alt={item.name} />
              </figure>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
