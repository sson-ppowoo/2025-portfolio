import React from "react";

function Main() {
  return (
    <div id="Main">
      <div className="Main_i">

        <div className="Main_Box">
          <div className="eclipse_container">          
            <figure className="moon">
              <img src="/img/main/moon.png" alt="moon"/>
            </figure>
            <div className="eclipse"></div>          
          </div>         

          <div className="main_text">

            <div className="text_motto">
              <h2>I have a new goal every day</h2>
            </div>

            <div className="text_song">
              <p>
                sson_ppowoo<br/>“ 언제 시작했는가 보다, 끝까지 가는것이 중요하다고생각해요 ”<br/>
                blooming <br/>" 새로운 날, 꽃을 피워가며, 나는 또 다른 나를 만나러 가 "<br/>
                이름에게 <br/>" 세상은 언제나 변하고, 그 속에서 나는 나를 찾아가 "<br/>
              </p>
            </div>

          </div>     

        </div>

        <div className="scroll_icon">
          <div className="mouse">
            <div className="roll"></div>            
          </div>
          <p>Scroll</p>
        </div>   

      </div>
      
    </div>
  );
}

export default Main;
