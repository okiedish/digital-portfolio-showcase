import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Skills = () => {
  const technicalSkills = [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "React/Next.js", level: 92 },
    { name: "Node.js/Express", level: 90 },
    { name: "Python", level: 85 },
    { name: "AWS/Cloud Services", level: 88 },
    { name: "PostgreSQL/MongoDB", level: 87 },
    { name: "Docker/Kubernetes", level: 82 },
    { name: "GraphQL", level: 80 },
  ];

  const softSkills = [
    "Team Leadership",
    "Project Management",
    "Agile/Scrum",
    "Communication",
    "Problem Solving",
    "Mentoring",
    "Strategic Planning",
    "Client Relations",
  ];

  const tools = [
    { name: "VS Code", icon: "💻" },
    { name: "Git/GitHub", icon: "🔀" },
    { name: "Jira", icon: "📋" },
    { name: "Figma", icon: "🎨" },
    { name: "Postman", icon: "📮" },
    { name: "Slack", icon: "💬" },
    { name: "Jenkins", icon: "⚙️" },
    { name: "Terraform", icon: "🏗️" },
  ];

  const languages = [
    { name: "English", level: "Native" },
    { name: "Spanish", level: "Professional" },
    { name: "French", level: "Conversational" },
  ];

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen pt-24 pb-20">
        {/* Header */}
        <section className="px-6 pb-12">
          <div className="max-w-6xl mx-auto text-center animate-fade-in-up">
            <h1 className="section-title mb-2">My <span className="gold-accent">Skills</span></h1>
            <p className="section-subtitle max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and professional capabilities
            </p>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-2xl font-semibold text-primary mb-8 flex items-center gap-3">
              <span className="w-12 h-0.5 bg-gold"></span>
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`animate-fade-in-up bg-card p-6 rounded-lg shadow-card border border-border hover:border-gold transition-colors`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-body font-medium text-foreground">{skill.name}</h3>
                    <span className="font-display text-lg font-semibold text-accent">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Soft Skills & Tools Grid */}
        <section className="px-6 pb-16 bg-secondary py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Soft Skills */}
              <div className="animate-fade-in-up">
                <h2 className="font-display text-2xl font-semibold text-primary mb-8 flex items-center gap-3">
                  <span className="w-12 h-0.5 bg-gold"></span>
                  Soft Skills
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <div 
                      key={skill}
                      className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-gold hover:shadow-card transition-all"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold"></span>
                      <span className="font-body text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Technologies */}
              <div className="animate-fade-in-up delay-200">
                <h2 className="font-display text-2xl font-semibold text-primary mb-8 flex items-center gap-3">
                  <span className="w-12 h-0.5 bg-gold"></span>
                  Tools & Technologies
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {tools.map((tool, index) => (
                    <div 
                      key={tool.name}
                      className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-gold hover:shadow-card transition-all"
                    >
                      <span className="text-xl">{tool.icon}</span>
                      <span className="font-body text-foreground">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-semibold text-primary mb-8 flex items-center gap-3 justify-center">
              <span className="w-12 h-0.5 bg-gold"></span>
              Languages
              <span className="w-12 h-0.5 bg-gold"></span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {languages.map((lang, index) => (
                <div 
                  key={lang.name}
                  className="text-center p-6 bg-card rounded-lg shadow-card border border-border hover:border-gold transition-colors min-w-[150px] animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="font-display text-xl font-semibold text-primary mb-2">{lang.name}</h3>
                  <span className="inline-block px-3 py-1 bg-secondary text-accent font-body text-sm rounded">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Highlights */}
        <section className="px-6 py-16 bg-primary">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-2xl font-semibold text-primary-foreground mb-12 text-center">
              Key Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🚀",
                  title: "40% Latency Reduction",
                  description: "Optimized database queries and implemented caching strategies",
                },
                {
                  icon: "👥",
                  title: "Team of 8 Engineers",
                  description: "Successfully led development teams in agile environment",
                },
                {
                  icon: "📈",
                  title: "2M+ Daily Users",
                  description: "Built APIs serving millions of active users daily",
                },
              ].map((highlight, index) => (
                <div 
                  key={highlight.title}
                  className="text-center p-8 bg-primary-foreground/5 rounded-lg border border-primary-foreground/20 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-4xl mb-4 block">{highlight.icon}</span>
                  <h3 className="font-display text-xl font-semibold text-gold mb-2">
                    {highlight.title}
                  </h3>
                  <p className="font-body text-primary-foreground/80 text-sm">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Skills;
