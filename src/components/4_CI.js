import { useRouter } from 'next/router';

const CI = () => {
  const router = useRouter();
  const isMainPage = router.pathname === '/';

  if (isMainPage) {
    // 메인 페이지용 간단 버전
    return (
      <section id="ci" className="ci-section ci-section-simple">
        <div className="container">
          <h2 className="section-title">CI</h2>

          <div className="ci-content">
            <div className="ci-logo">
              <img
                src="/images/logo/2x/SignColor@2x.png"
                alt="PTAH LABS CI"
                className="ci-logo-image"
              />
            </div>

            <div className="ci-section-block">
              <h3 className="ci-subtitle">
                <span className="vertical-line"></span> PTAHLABS
              </h3>
              <p className="ci-description">
                기술을 기반으로, 예술을 매개로, 사람과 공간을 연결하며,
                사용자 경험을 우선시하고 관객과의 소통을 통해 새로운 경험을 창조합니다.
              </p>
              <button
                className="btn ci-detail-btn"
                onClick={() => router.push('/ci')}
              >
                CI 자세히 보기
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // CI 전용 페이지용 전체 버전
  return (
    <section id="ci" className="ci-section">
      <div className="container">
        <h2 className="section-title">CI 소개</h2>

        <div className="ci-content">
          <div className="ci-logo">
            <img
              src="/images/logo/2x/SignColor@2x.png"
              alt="PTAH LABS CI"
              className="ci-logo-image"
            />
          </div>

          <div className="ci-section-block">
            <h3 className="ci-subtitle">
              <span className="vertical-line"></span> Vision
            </h3>
            <p className="ci-description">
              기술을 기반으로, 예술을 매개로, 사람과 공간을 연결하며,
              사용자 경험을 우선시하고 관객과의 소통을 통해 새로운 경험을 창조합니다.
            </p>
          </div>

          <div className="ci-section-block">
            <h3 className="ci-subtitle">
              <span className="vertical-line"></span> What We Do
            </h3>
            <p className="ci-description">
              첨단 기술과 예술적 감각의 결합을 통해 모던하면서도 화려한 <span className="highlight">미디어 아트 전시</span>를 구현합니다.
            </p>
            <ul className="ci-list">
              <li><strong>인터랙티브 미디어 아트 개발</strong> - 관객의 참여로 완성되는 살아있는 작품을 만듭니다.</li>
              <li><strong>디지털 전시 시스템 구축</strong> - 알고리즘과 데이터 시각화를 통해 깊이 있는 예술 기반 시스템을 설계합니다.</li>
              <li><strong>실감형 XR/AR 콘텐츠 설계</strong> - 현실과 가상을 넘나드는 경계 없는 경험을 선사합니다.</li>
              <li>데이터 시각화 및 예술기반 시스템 개발</li>
              <li>공간 인터페이스 및 UX 디자인</li>
            </ul>
          </div>

          <div className="ci-section-block">
            <h3 className="ci-subtitle">
              <span className="vertical-line"></span> Our Name
            </h3>
            <p className="ci-description">
              PTAH는 이집트 신화에 등장하는 창조의 신 '프타(Ptah)'에서 따왔습니다.
              프타는 장인과 예술가의 보호신이자 모든 기술의 위대한 발명가로,
              심장(생각)과 혀(말)를 통해 우주와 만물을 창조했다고 전해집니다.
            </p>
            <p className="ci-description">
              멤피스 신화에서 프타의 혀로부터 이름이 불려질 때 세계의 만물이 드러나고 생명을 얻었듯이,
              우리는 <span className="highlight">기술과 예술</span>을 통해 새로운 경험과 가치를 창조합니다.
              <span className="highlight">창조와 예술</span>, 그리고 <span className="highlight">혁신</span>의 정신을 담은 이름입니다.
            </p>
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
              미니멀한 디자인은 예술과 기술의 조화, 그리고 간결한 인터페이스를 의미합니다.
              기술이 억지스럽지 않고 전시장 환경에 자연스럽게 스며들도록 돕습니다.
            </p>

            <div className="color-palette">
              <div className="color-sample primary"></div>
              <div className="color-sample accent"></div>
              <div className="color-sample secondary"></div>
              <div className="color-sample light"></div>
              <div className="color-sample text"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CI;