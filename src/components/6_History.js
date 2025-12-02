const History = () => {
  const historyData = [
    {
      year: '2025',
      events: [
        { month: '01', title: 'PTAHLABS 설립', description: '미디어아트 & 디지털 전시 솔루션 전문 기업 창업' },
        { month: '03', title: '제천 점말동굴유적체험관', description: '체험형 전시 콘텐츠 납품' },
        { month: '04', title: '원주 과학관', description: '비콘 도슨트 시스템 납품' },
        { month: '05', title: '경주 문무왕릉 전시관', description: '인터랙티브 전시 콘텐츠 납품' },
        { month: '06', title: '원주 소금산 전시관', description: '디지털 전시 콘텐츠 납품' },
        { month: '07', title: '부산 민주공원', description: '전시 콘텐츠 납품' },
      ]
    }
  ];

  return (
    <section id="history" className="history-section">
      <div className="container">
        <h2 className="section-title">연혁</h2>

        <div className="history-content">
          <div className="history-intro">
            <p className="history-description">
              <span className="highlight">PTAHLABS</span>는 2025년 설립 이후,
              전국 각지의 박물관, 체험관, 전시관에 인터랙티브 미디어아트와
              디지털 전시 솔루션을 제공하고 있습니다.
            </p>
          </div>

          <div className="history-timeline">
            {historyData.map((yearGroup) => (
              <div key={yearGroup.year} className="history-year-group">
                <div className="history-year">{yearGroup.year}</div>
                <div className="history-events">
                  {yearGroup.events.map((event, index) => (
                    <div key={index} className="history-event">
                      <div className="event-month">{event.month}월</div>
                      <div className="event-content">
                        <h4 className="event-title">{event.title}</h4>
                        <p className="event-description">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
