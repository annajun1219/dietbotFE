import React from "react";

const MainPage = () => {
  return (
    <div>
      {/* 현재 체중 및 진행 상태 */}
      <section>
        <p>현재 체중: <strong>95kg</strong></p>
        <p>현재 2단계 4일차 진행중</p>
      </section>

      {/* 메인 카드 */}
      <section>
        <h2>회재 님</h2>
        <p>D + 12</p>
        <p>2단계 4일차 진행중</p>
      </section>

      {/* 차트 영역 */}
      <section>
        <img src="/path/to/chart-placeholder.png" alt="체중 변화 차트" />
      </section>

      {/* My Page와 ChatBot 버튼 */}
      <section>
        <button>My Page</button>
        <button>ChatBot</button>
      </section>

      {/* 추가 정보 섹션 */}
      <section>
        <p>
          “박용우 다이어트”에 대해 더 알고 싶다면? <a href="#">Click!</a>
        </p>
      </section>
    </div>
  );
};

export default MainPage;
