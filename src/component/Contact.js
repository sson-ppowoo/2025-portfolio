import React from "react";

function Contact() {
  const contactUrl = [
    {
      id: 1,
      name: "Instagram",
      url: "https://www.instagram.com/sson_ppowoo/?hl=ko",
      img: "/img/icon/logos_instagram.png",
    },
    {
      id: 2,
      name: "Google-Mail",
      email: "ssonmin930408@gmail.com",
      img: "/img/icon/logos_google-gmail.png",
      copy: true,
    },
  ];

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    alert("이메일 주소가 복사되었습니다!");
  };

  return (
    <section id="Contact">
      <div className="ContactAll">
        <h2 className="Contact_title">Contact</h2>
        <p className="Contact_text">
          신입 웹 퍼블리셔로서 아직 배울 것이 많지만, <br />
          맡은 역할에 대한 책임감과 꾸준한 학습을 통해 안정적인 화면 구현으로
          팀에 기여하고자 합니다.
          <br />
          <br />
          저의 포트폴리오를 봐주셔서 감사합니다.
        </p>
        <figure className="Contact_figure">
          <img
            src="/img/main/KakaoTalk_QR.jpg"
            alt="카카오톡 친구추가 QR코드"
          />
        </figure>
        {/* <div className="SNSurl">
          {contactUrl.map((item, i) => (
            <a key={item.id} href={item.url} target="_blank" rel="noreferrer">
              <figure>
                <img src={item.img} alt={item.name} />
              </figure>
            </a>
          ))}
        </div> */}
        <div className="SNSurl">
          {contactUrl.map((item) =>
            item.copy ? (
              <button
                key={item.id}
                type="button"
                className="sns_copy"
                onClick={() => handleCopyEmail(item.email)}
              >
                <figure>
                  <img src={item.img} alt={item.name} />
                </figure>
              </button>
            ) : (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure>
                  <img src={item.img} alt={item.name} />
                </figure>
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
