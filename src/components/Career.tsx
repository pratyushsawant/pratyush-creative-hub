import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Engineering Intern</h4>
                <h5>Micron Computers · Mumbai, India</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Diagnosed and resolved hardware/software integration issues, improving
              reliability by 45%. Customized and assembled 28 PCs, boosting deployment
              efficiency by 30% and extending lifespan by 2.5 years.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Intern</h4>
                <h5>Ericsson · Stockholm, Sweden</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built React/Node.js network monitoring dashboard reducing incident
              response time by 35% across 50+ base stations. Optimized 5G packet
              processing algorithms in C++ improving throughput by 28% for 2M+
              daily users.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Quality Assurance Tester</h4>
                <h5>Rockstar Games · Leeds, England</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Tested GTA VI builds across 100+ hours, logging 50+ bugs across
              gameplay, UI, and open-world systems. Collaborated with dev teams
              to reproduce, document, and validate bug fixes, improving build
              stability by 30%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Learning Assistant</h4>
                <h5>STEP Learning · Lubbock, TX</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Providing individualized academic support, reinforcing mastery of
              algorithms, problem-solving, and quantitative reasoning. Facilitating
              peer learning by simplifying complex computational concepts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student Assistant</h4>
                <h5>TTU Housing · Lubbock, TX</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Automated operations using SQL-based data tracking systems, reducing
              package distribution errors by 61%. Analyzed operational data to identify
              workflow bottlenecks and optimize resource allocation through digital tool
              integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
