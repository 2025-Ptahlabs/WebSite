const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>

        <div className="contact-content text-center">
          <h3 className="contact-subtitle">프로젝트 의뢰 및 협업 문의</h3>

          <p className="contact-description">
            이메일 문의 시 아래 내용을 포함해주시면<br />
            빠른 상담이 가능합니다:
          </p>

          <ul className="contact-info-list">
            <li>프로젝트 종류 (웹/앱/전시 콘텐츠 등)</li>
            <li>예산 및 일정</li>
            <li>간단한 프로젝트 설명</li>
          </ul>

          <p className="contact-email">ptahlabs@naver.com</p>
          <p className="contact-address">경기도 용인시 기흥구 강남동로 6 (그랜드프라자) 501-623호</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;