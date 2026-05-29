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
                <h4>Application Software Engineer</h4>
                <h5>Conneqt Business Solutions Limited</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              1. Wrote complex SQL queries in Oracle SQL to fetch the data, and
              identified critical bugs that were further resolved resulting in
              faster turnaround times for customer queries by 75%. <br />
              2. Developed admin side analytics and reports to get the status of
              the tickets and time for resolution and helped 5 member teams in
              faster resolution with more than 10 tickets refined per day.
              <br />
              3. Enhanced the agent-side ticketing system by developing and
              integrating additional filters, resulting in an 8% increase in
              resolution speed for agents managing customer queries daily.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Bosscoder Academy</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              1. Developed and integrated a feature on the student dashboard to
              track batch history, allowing students to view previously assigned
              batches along with detailed reasons for batch transitions. <br />
              2. Revamped the Admin Panel UI using React and Tailwind CSS,
              improving responsiveness by 40%, reducing load time by 30%, and
              decreasing user-reported bugs by 25%. <br />
              3. Migrated 40+ REST APIs from Flask to Node.js, resulting in a
              20–30% reduction in response time and increased scalability across
              multiple services.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>UrbanHaven</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              1. Built and maintained UrbanHaven website customer-facing
              platform using Next.js, Tailwind CSS, and Firebase, achieving
              responsive UI across all devices and reducing page load time by
              30%. <br />
              2. Developed an internal CRM platform featuring lead management,
              role-based access control (RBAC), and workflow automation,
              streamlining business operations for the sales team. <br />
              3. Integrated third-party services including Meta Ads lead
              workflows and webhook automation, improving lead tracking
              efficiency and platform scalability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
