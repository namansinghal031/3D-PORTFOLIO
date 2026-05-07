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
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder</h4>
                <h5>CallHQ.ai</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building CallHQ.ai, a voice AI platform for
              automating customer calls, support, and conversions.
            </p>
          </div> */}
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Adobe</h4>
                <h5>6+ years · Noida</h5>
              </div>
              <h3>2017–24</h3>
            </div>
            <p>
              Senior Lead Software Engineer (Feb 2024 – May 2024). Lead Software
              Engineer (Feb 2021 – Feb 2024). Software Engineer II (Dec 2017 –
              Feb 2021): internationalization, globalization, and localization for
              Adobe Technical Communication Suite; functional and linguistic testing
              strategy; in-house tooling; collaboration with product and engineering
              for high-quality localized releases.
            </p>
          </div> */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Jr. Software Engineer </h4>
                <h5>COGNIZANT · INDIA </h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              As a Jr. Software Engineer at Cognizant, I am responsible for developing and maintaining software applications, collaborating with cross-functional teams to design and implement solutions, and ensuring the delivery of high-quality code. 
              My role involves analyzing user requirements, troubleshooting issues, and continuously improving the performance and functionality of applications to meet business needs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML DEVELOPER INTERN</h4>
                <h5>JDB INFOTECH PVT. LTD · REMOTE</h5>
              </div>
              <h3>June - September, 2023</h3>
            </div>
            <p>
              "Developed and deployed machine learning models for various
              applications, including natural language processing and computer
              vision tasks."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
