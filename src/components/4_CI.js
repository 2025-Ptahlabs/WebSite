const CI = () => {
  return (
    <section id="ci" className="ci-section">
      <div className="container">
        <h2 className="section-title">CI 소개</h2>

        <div className="ci-content">
          <div className="ci-logo">
            <img
              src="./images/logo/2x/SignColor@2x.png"
              alt="PTAH LABS CI"
              className="ci-logo-image"
            />
          </div>

          <div className="ci-section-block">
            <h3 className="ci-subtitle">
              <span className="vertical-line"></span> Symbol Meaning
            </h3>
            <p className="ci-description">
              저희 CI는 전시공간과 디지털 미디어를 융합을 시각적으로 형상화한
              디자인입니다.
            </p>
            <ul className="ci-list">
              <li>직사각형 프레임은 전시공간과 디지털 모니터를 의미합니다.</li>
              <li>
                내부 선 구조는 디지털 레이어와 미디어 흐름, 알고리즘을
                상징합니다.
              </li>
              <li>
                점선 있고 정체된 디자인은 기술 기반 설계 철학을 표현합니다.
              </li>
            </ul>
          </div>

          <div className="ci-section-block">
            <h3 className="ci-subtitle">
              <span className="vertical-line"></span> Color & Style
            </h3>
            <p className="ci-description">
              자연친화적인 카키 그린 컬러는 지속가능성과 조화로운 기술을 상징하며,
              다양한 환경에서도 안정감과 신뢰감을 전달합니다.
            </p>
            <p className="ci-description">
              미니멀한 디자인은 예술과 기술의 조화, 그리고 간결한 인터페이스를
              의미합니다.
            </p>

            <div className="color-palette">
              <div className="color-sample primary"></div>
              <div className="color-sample accent"></div>
              <div className="color-sample secondary"></div>
              <div className="color-sample light"></div>
              <div className="color-sample text"></div>
            </div>
          </div>

          <div className="ci-section-block">
            <h3 className="ci-subtitle">
              <span className="vertical-line"></span> What We Do
            </h3>
            <p className="ci-description">
              우리는 미디어 아트와 디지털 전시를 위한 프로그래밍 & 디자인 솔루션
              전문 기업입니다.
            </p>
            <ul className="ci-list">
              <li>인터랙티브 미디어 아트 개발</li>
              <li>디지털 전시 시스템 구축</li>
              <li>실감형 XR/AR 콘텐츠 설계</li>
              <li>데이터 시각화 및 예술기반 시스템 개발</li>
              <li>공간 인터페이스 및 UX 디자인</li>
            </ul>
          </div>

          <div className="ci-section-block">
            <h3 className="ci-subtitle">
              <span className="vertical-line"></span> Vision
            </h3>
            <p className="ci-description vision-text">
              기술을 기반으로, 예술을 매개로, 사람과 공간을 연결하며,
              사용자 경험을 우선시하고 관객과의 소통을 통해 새로운 경험을 창조합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CI;