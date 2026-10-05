import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <>
      {/* HERO */}
      <section id="center" className="hero-section">
        <nav className="navbar">
          <a href="#center" className="nav-name">
            ET
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#activities">Activities</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">
              COMPUTER SCIENCE • BUSINESS • TECHNOLOGY
            </p>

            <h1>Ermal Thaqi</h1>

            <h2>
              Computer Science Student at the University of Maryland
            </h2>

            <p className="hero-description">
              I am a Computer Science student at the University of Maryland
              with experience in software development, IT support,
              high-performance computing, climate research, finance, and
              leadership.
            </p>

            <div className="hero-buttons">
              <a className="primary-button" href="#experience">
                View My Experience
              </a>

              <a
                className="secondary-button"
                href="https://www.linkedin.com/in/ermal-thaqi"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                className="secondary-button"
                href="mailto:ermalthaqi28@gmail.com"
              >
                Email Me
              </a>
            </div>
          </div>

          <div className="hero">
            <img
              src={heroImg}
              className="base"
              alt="Portfolio graphic"
            />
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      {/* ABOUT */}
      <section id="about" className="portfolio-section">
        <div className="section-heading">
          <p className="section-number">01</p>

          <div>
            <h2>About Me</h2>
            <p>A little about who I am</p>
          </div>
        </div>

        <div className="about-simple">
          <p>
            I'm a Computer Science student at the University of Maryland with a
            minor in Business. My interests sit at the intersection of software
            development, technology, research, and business. I've gained
            experience through IT support at Terrapin Tech, high-performance
            computing and climate research at UMD, software development through
            App Dev Club, and previous roles in finance, leadership, and
            technology. I enjoy building things, solving technical problems,
            learning new technologies, and working on projects that create a
            real impact.
          </p>
        </div>
      </section>

      <div className="ticks"></div>

      {/* EXPERIENCE */}
      <section id="experience" className="portfolio-section">
        <div className="section-heading">
          <p className="section-number">02</p>

          <div>
            <h2>Professional Experience</h2>
            <p>Where I've worked and what I've accomplished</p>
          </div>
        </div>

        <div className="experience-list">

          {/* TERRAPIN TECH */}
          <article className="experience-card featured-card">
            <div className="experience-header">
              <div>
                <span className="card-label">CURRENT</span>
                <h3>Terrapin Tech</h3>
                <h4>IT Support Technician</h4>
              </div>

              <div className="experience-meta">
                <span>College Park, MD</span>
                <span>May 2026 – Present</span>
              </div>
            </div>

            <ul>
              <li>
                Achieved a 100% resolution rate for 60+ weekly technical
                issues by leveraging advanced diagnostics for Wi-Fi, Duo MFA,
                and hardware troubleshooting.
              </li>

              <li>
                Streamlined repeat issue handling by implementing standardized
                ticketing workflows and security protocols within a team of 5.
              </li>

              <li>
                Restored network connectivity by validating BIOS and Windows
                updates and removing conflicting software, resolving 500+
                tickets and improving user productivity.
              </li>
            </ul>

            <div className="experience-tags">
              <span>IT Support</span>
              <span>Windows</span>
              <span>Troubleshooting</span>
              <span>Duo MFA</span>
              <span>Networking</span>
            </div>
          </article>

          {/* RESEARCH */}
          <article className="experience-card">
            <div className="experience-header">
              <div>
                <span className="card-label">CURRENT</span>
                <h3>University of Maryland</h3>
                <h4>Undergraduate Student Researcher</h4>
              </div>

              <div className="experience-meta">
                <span>College Park, MD</span>
                <span>Aug 2025 – Present</span>
              </div>
            </div>

            <ul>
              <li>
                Conducted Arctic climate modeling and HPC-based data analysis
                to study polar climate patterns and trends.
              </li>

              <li>
                Used Python, Bash, and model output to process and analyze
                large complex climate datasets.
              </li>

              <li>
                Gained experience with Linux, job scheduling, and HPC research
                workflows in high-performance computing environments.
              </li>
            </ul>

            <div className="experience-tags">
              <span>Python</span>
              <span>Bash</span>
              <span>Linux</span>
              <span>HPC</span>
              <span>Climate Modeling</span>
            </div>
          </article>

          {/* GUILFORD */}
          <article className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Guilford Hall Brewery</h3>
                <h4>Finance Apprentice</h4>
              </div>

              <div className="experience-meta">
                <span>Baltimore, MD</span>
                <span>Sep 2024 – Aug 2025</span>
              </div>
            </div>

            <ul>
              <li>
                Reduced food and supply costs by comparing prices across 7
                vendors and optimizing weekly purchasing decisions for a
                $10,000 budget.
              </li>

              <li>
                Processed 1,000+ invoices and reimbursements while maintaining
                financial records and payment tracking.
              </li>

              <li>
                Audited kitchen payroll records and managed $60,000+ in weekly
                payroll operations to maintain accuracy.
              </li>
            </ul>

            <div className="experience-tags">
              <span>Finance</span>
              <span>Excel</span>
              <span>Payroll</span>
              <span>Invoices</span>
              <span>Budgeting</span>
            </div>
          </article>

          {/* DUNKIN */}
          <article className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Dunkin</h3>
                <h4>Shift Leader</h4>
              </div>

              <div className="experience-meta">
                <span>Gambrills, MD</span>
                <span>May 2023 – Aug 2025</span>
              </div>
            </div>

            <ul>
              <li>
                Trained new employees and improved workflow efficiency across
                shifts by reinforcing procedures and supporting daily store
                operations.
              </li>

              <li>
                Managed daily operations for a team of 30+ employees in a
                high-volume store while maintaining efficiency and customer
                satisfaction.
              </li>
            </ul>

            <div className="experience-tags">
              <span>Leadership</span>
              <span>Training</span>
              <span>Operations</span>
              <span>Customer Service</span>
            </div>
          </article>

          {/* DALY */}
          <article className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Daly Computers</h3>
                <h4>IT Intern</h4>
              </div>

              <div className="experience-meta">
                <span>Rosedale, MD</span>
                <span>June 2024 – Aug 2024</span>
              </div>
            </div>

            <ul>
              <li>
                Tested, diagnosed, and verified 1,000+ computer systems for
                operational readiness by troubleshooting hardware issues and
                running performance checks.
              </li>

              <li>
                Organized, cleaned, and inspected large batches of devices to
                improve inventory tracking and device condition.
              </li>

              <li>
                Assisted with device setup, software installation, and basic
                technical support to prepare systems for deployment and daily
                use.
              </li>
            </ul>

            <div className="experience-tags">
              <span>Hardware</span>
              <span>Software Installation</span>
              <span>Diagnostics</span>
              <span>IT Support</span>
            </div>
          </article>
        </div>
      </section>

      <div className="ticks"></div>

      {/* PROJECTS */}
      <section id="projects" className="portfolio-section">
        <div className="section-heading">
          <p className="section-number">03</p>

          <div>
            <h2>Projects</h2>
            <p>Things I've built</p>
          </div>
        </div>

        <div className="project-grid">
          <article className="project-card">
            <div className="project-top">
              <span className="project-number">01</span>
              <span className="project-date">Dec 2025 – Present</span>
            </div>

            <h3>Internship Tracker</h3>

            <p className="project-tech">
              Java • HTML • CSS
            </p>

            <p>
              Built backend logic in Java to store internship application
              data, update statuses, and manage deadline tracking.
            </p>

            <p>
              Implemented features to add, edit, and filter applications using
              structured program logic and organized data handling.
            </p>

            <div className="experience-tags">
              <span>Java</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Data Handling</span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-top">
              <span className="project-number">02</span>
              <span className="project-date">Sep 2024 – Aug 2025</span>
            </div>

            <h3>Price Sheet Tracker</h3>

            <p className="project-tech">
              Python • Excel
            </p>

            <p>
              Built an Excel and Python price sheet tracker to compare 7
              vendors, monitor weekly price changes, and support a $10,000+
              purchasing budget.
            </p>

            <p>
              Standardized vendor price comparisons to make purchasing
              decisions faster, cleaner, and easier to review each week.
            </p>

            <div className="experience-tags">
              <span>Python</span>
              <span>Excel</span>
              <span>Automation</span>
              <span>Financial Analysis</span>
            </div>
          </article>
        </div>
      </section>

      <div className="ticks"></div>

      {/* ACTIVITIES */}
      <section id="activities" className="portfolio-section">
        <div className="section-heading">
          <p className="section-number">04</p>

          <div>
            <h2>Leadership & Activities</h2>
            <p>Campus involvement and community impact</p>
          </div>
        </div>

        <div className="experience-list">
          <article className="experience-card featured-card">
            <div className="experience-header">
              <div>
                <span className="card-label">CURRENT</span>
                <h3>App Dev Club</h3>
                <h4>Software Developer</h4>
              </div>

              <div className="experience-meta">
                <span>Sep 2026 – Present</span>
              </div>
            </div>

            <ul>
              <li>
                Collaborated with student developers to design and build
                software projects using JavaScript, HTML, CSS, and Git.
              </li>

              <li>
                Completed an App Dev Bootcamp focused on software development
                fundamentals, hands-on coding, debugging, Git workflows, and
                web application development.
              </li>

              <li>
                Participated in technical meetings, code reviews, and project
                planning while strengthening problem-solving, version control,
                and team collaboration.
              </li>
            </ul>

            <div className="experience-tags">
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Git</span>
              <span>Team Development</span>
            </div>
          </article>

          <article className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Key Club</h3>
                <h4>Co-Founder & President</h4>
              </div>

              <div className="experience-meta">
                <span>Feb 2024 – May 2025</span>
              </div>
            </div>

            <ul>
              <li>
                Grew club membership to 120+ students by organizing weekly
                meetings, implementing leadership initiatives, and developing
                structured programming that increased engagement and
                participation.
              </li>

              <li>
                Led community service and fundraising initiatives supporting
                1,500+ families through food pantry events and donation drives
                while managing event logistics and service opportunities.
              </li>
            </ul>

            <div className="experience-tags">
              <span>Leadership</span>
              <span>Community Service</span>
              <span>Event Planning</span>
              <span>Team Management</span>
            </div>
          </article>
        </div>
      </section>

      <div className="ticks"></div>

      {/* SKILLS */}
      <section id="skills" className="portfolio-section">
        <div className="section-heading">
          <p className="section-number">05</p>

          <div>
            <h2>Skills</h2>
            <p>Technologies and tools I work with</p>
          </div>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <span className="card-label">PROGRAMMING</span>
            <h3>Languages</h3>

            <div className="skill-list">
              <span>Java</span>
              <span>Python</span>
              <span>C</span>
              <span>JavaScript</span>
              <span>HTML/CSS</span>
              <span>Bash</span>
            </div>
          </div>

          <div className="skill-card">
            <span className="card-label">TECHNICAL</span>
            <h3>Development & Systems</h3>

            <div className="skill-list">
              <span>Git</span>
              <span>Linux</span>
              <span>Data Structures</span>
              <span>OOP</span>
              <span>Debugging</span>
              <span>Software Testing</span>
              <span>HPC</span>
              <span>Windows Troubleshooting</span>
            </div>
          </div>

          <div className="skill-card">
            <span className="card-label">BUSINESS</span>
            <h3>Business & Tools</h3>

            <div className="skill-list">
              <span>Financial Analysis</span>
              <span>Excel</span>
              <span>Microsoft Office</span>
              <span>Payroll Processing</span>
              <span>Invoice Processing</span>
              <span>Team Leadership</span>
            </div>
          </div>
        </div>

        {/* TECHNOLOGIES */}
        <div className="tech-banner">
          <p>TECHNOLOGIES I WORK WITH</p>

          <div className="tech-row">
            <span>Java</span>
            <span>Python</span>
            <span>C</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Git</span>
            <span>Linux</span>
            <span>Bash</span>
            <span>HPC</span>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <p className="eyebrow">LET'S CONNECT</p>

        <h2>Let's build something.</h2>

        <p>
          I'm always interested in opportunities involving software
          engineering, technology, IT, research, and business.
        </p>

        <div className="contact-buttons">
          <a
            className="primary-button"
            href="mailto:ermalthaqi28@gmail.com"
          >
            Email Me
          </a>

          <a
            className="secondary-button"
            href="https://www.linkedin.com/in/ermal-thaqi"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <p>Designed & built by Ermal Thaqi</p>
        <a href="#center">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App