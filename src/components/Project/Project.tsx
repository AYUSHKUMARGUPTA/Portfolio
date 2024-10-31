import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.png'
// import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>Work Experience</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            {/* <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>{" "}
              </div>
            </header> */}
            <div className="body">
              <h3>Epicor Software</h3>
              {/* <p> */}
              <ul>
                <li>
                  Enhanced and scaled Bistrack ERP software for building
                  supplies, focusing on Inventory & Warehouse Management,
                  Mobility, and E-Commerce, driving improvements in system
                  performance.
                </li>
                <li>
                  Created and rolled out SmartView, a fully customized Business
                  Intelligence Module allowing operators to track, view and
                  modify individual entries, orders and produc ̰ts based on user
                  preference, significantly enhancing flexibility and user
                  experience.
                </li>
                <li>
                  Built and deployed a global grid component using Epicor Design
                  System, optimizing grid features and minimizing code
                  duplication across the platform.
                </li>
              </ul>
              {/* </p> */}
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>Angular 14/15</li> <li>IIS</li> <li>Docker</li> <li>C#</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            {/* <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/CodeVinayak/AI-Chatbot-Assistant"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />{" "}
                </a>
                <a
                  href="https://ai-chatbot-t8fn.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header> */}
            <div className="body">
              <h3>Symphony Ai</h3>
              <ul>
                <li>
                  Developed the front-end architecture for MOM 360, a cloud and
                  on-premises MES/MOM platform, achieving a 70% increase in
                  operational efficiency by implementing multi-plant views and
                  real-time monitoring.
                </li>
                <li>
                  Formulated advanced front-end solutions for client IT teams,
                  enabling effective enterprise asset management and digital
                  manufacturing, thereby improving decision-making and
                  oversight.
                </li>
                <li>
                  Enhanced code quality, achieving 65% coverage, while
                  overseeing deployment and authentication processes to ensure
                  seamless integration across cloud and on-prem environments.
                </li>
                <li>
                  Introduced comprehensive monitoring systems to maintain
                  consistent system performance, providing actionable insights
                  for real-time optimization and troubleshooting.
                </li>
              </ul>
              {/* <p>
                Developed an interactive chatbot application using Streamlit,
                OpenAI's GPT-3.5-turbo language model, and PyPDF2 for PDF text
                extraction, enabling users to ask context-based questions on
                uploaded PDFs and general queries.
              </p> */}
            </div>
            <footer>
              <ul className="tech-list">
                <li>Angular 14/15</li>
                <li>Docker</li>
                <li>Fusion Auth</li>
                <li>Nginx</li>
                <li>PrimeNG</li>
              </ul>
              <ul className="tech-list">
                <li>Infragistics UI</li>
                <li>GraphQL</li>
                <li>Prometheus</li>
                <li>Grafana</li>
                <li>Kibana</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            {/* <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/CodeVinayak/Jupyter-Notebook/tree/main/Credit%20Risk%20Analysis"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://github.com/CodeVinayak/Jupyter-Notebook/blob/main/Credit%20Risk%20Analysis/Credit_Risk_Analysis.ipynb"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header> */}
            <div className="body">
              <h3>Appiness Interactive Ltd</h3>
              <ul>
                <li>
                  Led the development of an advanced meeting management platform
                  and image processing solution, improving UX and functionality,
                  and increasing user engagement by 20%.
                </li>
                <li>
                  Built two essential modules enabling users to extract, crop,
                  and edit images to create advertisements, cutting content
                  creation time by 45%.
                </li>
                <li>
                  Refined content-sharing workflows by designing intuitive,
                  user-friendly templates, leading to a 30% rise in
                  platform-wide image sharing.
                </li>
                <li></li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Angular 8</li>
                <li>Material UI</li>
                <li>D3.js</li>
                <li>Bootstrap</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            {/* <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/CodeVinayak/MediBook-Medical-Appointment-Scheduler-with-Health-History"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://medibook.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header> */}
            <div className="body">
              <h3>Ernst & Young GDS LLP</h3>
              <ul>
                <li>
                  Designed and implemented scalable web solutions for AIG
                  Insurance, employing reusable modules and lazy loading
                  techniques, reducing load times by 75% and enhancing user
                  experience.
                </li>
                <li>
                  Optimized tax filing workflows within the MDG Portal by
                  integrating Power BI reports and Single Sign-On (SSO),
                  reducing login-related issues by 85% and improving data
                  accessibility.
                </li>
                <li>
                  Devised a comprehensive solution to manage entity
                  appointments, ownership, and shares, serving 130 clients
                  within a year, improving governance accuracy and efficiency.
                </li>
                <li>
                  Simplified compensation and hike calculation processes for the
                  EY Talent Team by developing a custom portal, cutting manual
                  effort by 40% and expediting Senior Leadership Team (SLT)
                  recommendation workflows.
                </li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Angular 8</li>
                <li>Kendo UI</li>
                <li>.Net API</li>
                <li>MS Power BI</li>
              </ul>
              <ul className="tech-list">
                <li>MS Power Apps</li>
                <li>MS Power Virtual Agent</li>
                <li>MS SharePoint</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
