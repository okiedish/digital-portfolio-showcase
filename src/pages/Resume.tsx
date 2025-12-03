import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DownloadButton from "@/components/DownloadButton";

const Resume = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2021 - Present",
      description: [
        "Lead a team of 8 engineers in developing scalable microservices architecture",
        "Reduced system latency by 40% through optimization of database queries and caching strategies",
        "Implemented CI/CD pipelines that decreased deployment time by 60%",
        "Mentored junior developers and conducted code reviews to maintain code quality",
      ],
    },
    {
      title: "Software Engineer",
      company: "Digital Solutions Corp",
      location: "San Jose, CA",
      period: "2018 - 2021",
      description: [
        "Developed RESTful APIs serving 2M+ daily active users",
        "Built real-time data processing pipelines using Apache Kafka",
        "Collaborated with product teams to deliver features on time",
        "Wrote comprehensive unit and integration tests achieving 90% coverage",
      ],
    },
    {
      title: "Junior Developer",
      company: "StartUp Labs",
      location: "Palo Alto, CA",
      period: "2016 - 2018",
      description: [
        "Created responsive web applications using React and Node.js",
        "Participated in agile ceremonies and sprint planning",
        "Integrated third-party APIs for payment and analytics",
        "Contributed to documentation and knowledge base",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2014 - 2016",
      details: "Specialized in Distributed Systems and Machine Learning. GPA: 3.9/4.0",
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2010 - 2014",
      details: "Dean's List all semesters. Minor in Mathematics. GPA: 3.8/4.0",
    },
  ];

  const certifications = [
    "AWS Solutions Architect Professional",
    "Google Cloud Professional Data Engineer",
    "Certified Kubernetes Administrator (CKA)",
    "MongoDB Certified Developer",
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
                <p className="section-subtitle">Professional experience & education</p>
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
              <p className="font-body text-lg text-accent mb-4">Senior Software Engineer</p>
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

            {/* Professional Summary */}
            <section className="mb-10">
              <h3 className="font-display text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gold"></span>
                Professional Summary
              </h3>
              <p className="font-body text-foreground leading-relaxed">
                Results-driven Senior Software Engineer with 8+ years of experience in designing, 
                developing, and deploying scalable software solutions. Proven track record of 
                leading cross-functional teams and delivering high-quality products that drive 
                business growth. Expert in full-stack development, cloud architecture, and agile 
                methodologies.
              </p>
            </section>

            {/* Work Experience */}
            <section className="mb-10">
              <h3 className="font-display text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gold"></span>
                Work Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <article key={index} className="relative pl-6 border-l-2 border-border hover:border-gold transition-colors">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gold border-4 border-card"></div>
                    <div className="mb-2">
                      <h4 className="font-display text-lg font-semibold text-foreground">{exp.title}</h4>
                      <p className="font-body text-accent font-medium">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-body mt-1">
                        <span>{exp.location}</span>
                        <span className="text-gold">{exp.period}</span>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-1 font-body text-foreground text-sm">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
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
                  </article>
                ))}
              </div>
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
