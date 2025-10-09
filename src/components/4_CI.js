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
                <span className="highlight">관객 참여</span>를 통한 <span className="highlight">인터랙티브 경험</span>과
                사용자 중심의 <span className="highlight">인터페이스 디자인</span>으로 새로운 경험을 창조합니다.
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
              <span className="vertical-line"></span> About Us
            </h3>
            <p className="ci-description">
              PTAHLABS는 <span className="highlight">인터랙티브 미디어아트</span>와 디지털 전시 솔루션 전문 기업입니다.
              박물관, 미술관, 체험관을 위한 첨단 기술 기반 전시 콘텐츠를 기획하고 제작합니다.
              기술과 예술의 융합을 통해 관객이 직접 참여하는 <span className="highlight">몰입형 경험</span>을 창조합니다.
            </p>
            <p className="ci-description">
              우리는 화려한 기술을 다룰 수 있지만, 그것을 절제할 줄도 압니다.
              이 웹사이트의 메인 페이지에 인터랙티브한 3D 효과를 넣은 것은 우리가 추구하는 몰입형 경험을 보여주기 위함이지만,
              나머지 페이지들은 꾸밈을 덜어내고 정보 전달에 집중하도록 설계했습니다.
              <span className="highlight">접근성</span>과 <span className="highlight">사용자 경험</span>을 최우선으로, 필요한 곳에는 화려하게, 필요 없는 곳에는 깔끔하게.
              과하지 않으면서도 기억에 남는 디자인을 추구합니다.
            </p>
          </div>

          <div className="ci-section-block">
            <h3 className="ci-subtitle">
              <span className="vertical-line"></span> Vision
            </h3>
            <p className="ci-description">
              기술을 기반으로, 예술을 매개로, 사람과 공간을 연결하며,
              <span className="highlight">관객 참여</span>를 통한 <span className="highlight">인터랙티브 경험</span>과
              사용자 중심의 <span className="highlight">인터페이스 디자인</span>으로 새로운 경험을 창조합니다.
            </p>
          </div>

          <div className="ci-section-block">
            <h3 className="ci-subtitle">
              <span className="vertical-line"></span> What We Do
            </h3>
            <p className="ci-description">
              박물관 전시, 미술관 전시, 체험관 전시를 위한 첨단 기술과 예술적 감각의 결합을 통해
              <span className="highlight">인터랙티브 아트</span>, <span className="highlight">몰입형 미디어아트</span>, 설치미술 등
              모던하면서도 화려한 체험형 디지털 전시를 구현합니다.
            </p>
            <ul className="ci-list">
              <li>
                <strong>인터랙티브 미디어아트 개발</strong><br />
                터치스크린, 모션 센서, 제스처 인식, 바닥 인터랙션, 프로젝션 맵핑 등을 활용한 참여형 아트 콘텐츠를 제작합니다.
                관객의 움직임과 반응에 실시간으로 반응하는 인터랙티브 디자인, 인터랙티브 설치미술을 구현합니다.
              </li>
              <li>
                <strong>몰입형 전시 콘텐츠 제작</strong><br />
                대형 프로젝션, 멀티스크린, 비디오 아트, 라이트 아트, 사운드 아트를 결합한 몰입형 체험 공간을 설계합니다.
                프로젝션 맵핑, 미디어 파사드, 디지털 사이니지 등 영상, 음향, 조명이 조화를 이루는 익스피리언셜 디자인을 제공합니다.
              </li>
              <li>
                <strong>증강현실(AR) 및 가상현실(VR) 콘텐츠</strong><br />
                AR 글라스, VR 헤드셋, MR(혼합현실), 확장현실(XR) 기술을 활용한 실감형 콘텐츠, 실감 전시를 개발합니다.
                메타버스 전시관, 가상 박물관, VR 체험관 구축이 가능합니다.
              </li>
              <li>
                <strong>디지털 전시 시스템 구축</strong><br />
                터치 키오스크, 무인 안내 키오스크, 비콘 도슨트, 모바일 도슨트, 인터랙티브 포토부스, AI 챗봇 안내 시스템 등
                박물관 및 전시 공간을 위한 맞춤형 디지털 솔루션을 개발합니다.
              </li>
              <li>
                <strong>데이터 시각화 및 정보 디자인</strong><br />
                전시 정보 키오스크, 인포그래픽 시스템, 데이터 시각화 콘텐츠를 제작합니다.
                복잡한 정보를 직관적으로 전달하는 인터페이스 디자인을 구현합니다.
              </li>
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
              저희 CI는 전시공간과 디지털 미디어를 융합을 시각적으로 형상화한 디자인입니다.
            </p>
            <ul className="ci-list">
              <li>
                <strong>직사각형 프레임</strong>은 전시공간과 디지털 모니터를 의미합니다.
                이는 또한 프타 신이 <strong>'만물을 담아내는 그릇'</strong>을 창조했듯이, <strong>'새로운 경험을 담아내는 무한한 공간'</strong>을 상징합니다.
                고정된 경계를 넘어 확장되는 XR(확장현실) 영역으로의 비전을 담고 있습니다.
              </li>
              <li>
                <strong>내부 선 구조</strong>는 디지털 레이어와 미디어 흐름, 알고리즘을 상징합니다.
                이는 프타 신의 <strong>'심장(생각)과 혀(말)를 통한 창조 과정'</strong>처럼, 기술(알고리즘)이 생명력과 이야기의 흐름을 불어넣어
                무형의 가치를 창조하는 예술적 언어를 의미합니다.
              </li>
              <li>
                <strong>점선 있는 정제된 디자인</strong>은 기술 기반 설계 철학을 표현합니다.
                이 점선은 관객의 참여(Input) 없이는 완성되지 않는 <strong>'인터랙티브 경험의 여백'</strong>을 의미하며,
                정체되지 않고 관객의 반응에 따라 끊임없이 변화하고 생명력을 얻는 우리의 작품 철학을 상징합니다.
              </li>
              <li>
                <strong>관객과의 연결 (The Interactive Bridge)</strong>:
                CI 디자인의 전체적인 통일된 구조는 기술, 예술, 관객, 공간이라는 네 가지 핵심 요소가
                유기적으로 결합하여 <strong>새로운 경험으로 연결되는 통로(Bridge)</strong>를 형상화합니다.
              </li>
            </ul>
          </div>

          <div className="ci-section-block">
            <h3 className="ci-subtitle">
              <span className="vertical-line"></span> Color & Style
            </h3>
            <p className="ci-description">
              자연친화적인 카키 그린 컬러는 생명력과 자연을 상징하는 동시에, 첨단 기술에 대한 깊은 신뢰(Reliability)와 지속가능성을 약속합니다. 이는 기술이 억지스럽거나 차갑지 않고, 인간의 경험을 풍부하게 만드는 조화로운 기술(Harmonious Technology)을 지향하는 우리의 태도를 반영합니다.
            </p>
            <p className="ci-description">
              미니멀리즘은 복잡한 기술적 요소들을 뒤로 숨기고, 오직 관객과 콘텐츠가 만나는 최적의 경험에 집중하겠다는 철학입니다. 이는 사용자 중심의 간결하고 직관적인 인터페이스 디자인(User-Centric Interface)을 구현하여, 모두가 쉽고 깊이 있게 전시를 즐기도록 돕습니다.
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