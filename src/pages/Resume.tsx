import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DownloadButton from "@/components/DownloadButton";

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2022 - 2026 (Expected)",
      details: "GPA: 3.9/4.0 | Dean's List all semesters | Minor in Mathematics",
      courses: ["Data Structures & Algorithms", "Machine Learning", "Database Systems", "Web Development", "Computer Networks"],
    },
    {
      degree: "High School Diploma",
      school: "Lincoln High School",
      location: "San Francisco, CA",
      period: "2018 - 2022",
      details: "Valedictorian | GPA: 4.0/4.0 | National Honor Society",
      courses: ["AP Computer Science", "AP Calculus BC", "AP Physics"],
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      tech: "React, Node.js, MongoDB, Stripe",
      period: "2024",
      description: [
        "Built a full-stack e-commerce website with user authentication and payment processing",
        "Implemented responsive design using Tailwind CSS for optimal mobile experience",
        "Integrated Stripe API for secure payment handling",
        "Deployed on AWS with CI/CD pipeline using GitHub Actions",
      ],
    },
    {
      title: "AI-Powered Study Assistant",
      tech: "Python, TensorFlow, Flask, React",
      period: "2024",
      description: [
        "Developed an NLP-based chatbot to help students with homework questions",
        "Trained custom model on educational datasets achieving 85% accuracy",
        "Created intuitive frontend interface for seamless user interaction",
        "Won 2nd place at Stanford Hackathon 2024",
      ],
    },
    {
      title: "Campus Event Finder",
      tech: "React Native, Firebase, Google Maps API",
      period: "2023",
      description: [
        "Created cross-platform mobile app for discovering campus events",
        "Implemented real-time notifications and event reminders",
        "Integrated Google Maps for event location and navigation",
        "Over 500 active users within the university",
      ],
    },
  ];

  const achievements = [
    "Dean's List - All Semesters (2022-Present)",
    "Stanford Hackathon 2024 - 2nd Place",
    "Google Code Jam 2023 - Round 2 Qualifier",
    "ACM ICPC Regional - Honorable Mention",
    "National Merit Scholar Finalist",
  ];

  const extracurriculars = [
    {
      role: "Vice President",
      org: "Stanford Computer Science Club",
      period: "2023 - Present",
      desc: "Organize workshops, hackathons, and tech talks for 200+ members",
    },
    {
      role: "Teaching Assistant",
      org: "CS 101: Introduction to Programming",
      period: "2023 - Present",
      desc: "Assist professor in grading and conducting office hours for 150 students",
    },
    {
      role: "Volunteer Developer",
      org: "Code for America",
      period: "2022 - Present",
      desc: "Contribute to open-source civic technology projects",
    },
  ];

  const certifications = [
    "AWS Certified Cloud Practitioner",
    "Google IT Support Professional Certificate",
    "Meta Front-End Developer Certificate",
    "freeCodeCamp Full Stack Development",
  ];

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen pt-24 pb-20">
        {/* Header */}
        <section className="px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="animate-fade-in-up">
                <h1 className="section-title mb-2">My <span className="gold-accent">Resume</span></h1>
                <p className="section-subtitle">Education, projects & achievements</p>
              </div>
              <div className="animate-fade-in delay-200">
                <DownloadButton targetId="resume-content" filename="john-doe-resume" />
              </div>
            </div>
          </div>
        </section>

        {/* Resume Content */}
        <section className="px-6">
          <div id="resume-content" className="max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-lg shadow-card border border-border">
            {/* Resume Header */}
            <header className="text-center border-b-2 border-gold pb-8 mb-8">
              <h2 className="font-display text-4xl font-bold text-primary mb-2">John Doe</h2>
              <p className="font-body text-lg text-accent mb-4">Computer Science Student</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground font-body">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  john.doe@email.com
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (555) 123-4567
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  San Francisco, CA
                </span>
              </div>
            </header>

            {/* Objective */}
            <section className="mb-10">
              <h3 className="font-display text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gold"></span>
                Objective
              </h3>
              <p className="font-body text-foreground leading-relaxed">
                Motivated Computer Science student seeking a software engineering internship where 
                I can apply my programming skills, contribute to meaningful projects, and gain 
                hands-on experience in a collaborative environment. Passionate about web development, 
                machine learning, and creating user-centric solutions.
              </p>
            </section>

            {/* Education */}
            <section className="mb-10">
              <h3 className="font-display text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gold"></span>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <article key={index} className="relative pl-6 border-l-2 border-border hover:border-gold transition-colors">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gold border-4 border-card"></div>
                    <h4 className="font-display text-lg font-semibold text-foreground">{edu.degree}</h4>
                    <p className="font-body text-accent font-medium">{edu.school}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-body mt-1">
                      <span>{edu.location}</span>
                      <span className="text-gold">{edu.period}</span>
                    </div>
                    <p className="font-body text-foreground text-sm mt-2">{edu.details}</p>
                    <div className="mt-2">
                      <p className="font-body text-sm text-muted-foreground">Relevant Courses:</p>
                      <p className="font-body text-sm text-foreground">{edu.courses.join(" • ")}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section className="mb-10">
              <h3 className="font-display text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gold"></span>
                Projects
              </h3>
              <div className="space-y-8">
                {projects.map((project, index) => (
                  <article key={index} className="relative pl-6 border-l-2 border-border hover:border-gold transition-colors">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gold border-4 border-card"></div>
                    <div className="mb-2">
                      <h4 className="font-display text-lg font-semibold text-foreground">{project.title}</h4>
                      <p className="font-body text-accent font-medium text-sm">{project.tech}</p>
                      <span className="text-sm text-gold font-body">{project.period}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 font-body text-foreground text-sm">
                      {project.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            {/* Extracurricular Activities */}
            <section className="mb-10">
              <h3 className="font-display text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gold"></span>
                Extracurricular Activities
              </h3>
              <div className="space-y-4">
                {extracurriculars.map((activity, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 p-4 bg-secondary rounded-lg">
                    <div className="flex-grow">
                      <h4 className="font-body font-semibold text-foreground">{activity.role}</h4>
                      <p className="font-body text-accent text-sm">{activity.org}</p>
                      <p className="font-body text-muted-foreground text-sm">{activity.desc}</p>
                    </div>
                    <span className="font-body text-sm text-gold whitespace-nowrap">{activity.period}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section className="mb-10">
              <h3 className="font-display text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gold"></span>
                Achievements & Awards
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center gap-2 font-body text-foreground text-sm">
                    <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </section>

            {/* Certifications */}
            <section>
              <h3 className="font-display text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gold"></span>
                Certifications
              </h3>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-secondary text-secondary-foreground font-body text-sm rounded border border-border"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Resume;
