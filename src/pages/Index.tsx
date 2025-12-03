import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TypingAnimation from "@/components/TypingAnimation";

const Index = () => {
  const roles = ["Computer Science Student", "Web Developer", "Problem Solver", "Tech Enthusiast"];

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="animate-fade-in-up">
                <p className="font-body text-accent tracking-widest uppercase text-sm mb-4">
                  Welcome to my portfolio
                </p>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-4">
                  Hi, I'm <span className="gold-accent">John</span>
                </h1>
                <div className="font-display text-2xl md:text-3xl text-navy-light mb-6 h-10">
                  <TypingAnimation words={roles} />
                </div>
                <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  A passionate Computer Science student at Stanford University, 
                  dedicated to building innovative solutions and learning cutting-edge 
                  technologies. Currently seeking internship opportunities.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/resume"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-medium rounded shadow-elegant hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    View Resume
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    to="/biodata"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gold text-gold font-body font-medium rounded hover:bg-gold hover:text-accent-foreground transition-all duration-300"
                  >
                    View Bio Data
                  </Link>
                </div>
              </div>

              {/* Profile Image */}
              <div className="animate-fade-in delay-200 flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-navy-light overflow-hidden border-4 border-gold shadow-elegant animate-float">
                    <div className="w-full h-full flex items-center justify-center text-primary-foreground">
                      <svg className="w-40 h-40 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-elegant">
                    <span className="font-display text-xl font-bold text-accent-foreground">3.9</span>
                    <span className="font-body text-xs text-accent-foreground/80 ml-1">GPA</span>
                  </div>
                  {/* Floating badges */}
                  <div className="absolute -left-4 top-1/4 px-3 py-1 bg-card rounded-full shadow-card border border-border text-sm font-body animate-bounce-slow">
                    💻 Coder
                  </div>
                  <div className="absolute -right-8 top-1/3 px-3 py-1 bg-card rounded-full shadow-card border border-border text-sm font-body animate-bounce-slow delay-300">
                    🎓 Student
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="section-title">About <span className="gold-accent">Me</span></h2>
              <p className="section-subtitle">A brief introduction</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-card rounded-lg p-8 shadow-card border border-border animate-fade-in-up delay-100">
                <p className="font-body text-foreground leading-relaxed mb-6">
                  I'm a third-year Computer Science student at Stanford University with a passion 
                  for technology and innovation. My journey in programming began in high school 
                  when I built my first website, and since then, I've been continuously learning 
                  and expanding my skillset.
                </p>
                <p className="font-body text-foreground leading-relaxed mb-6">
                  Currently maintaining a 3.9 GPA, I specialize in full-stack web development, 
                  data structures, and algorithms. I'm actively involved in the Computer Science 
                  Club and have participated in multiple hackathons, winning awards for innovative 
                  solutions.
                </p>
                <p className="font-body text-foreground leading-relaxed">
                  When I'm not coding, you'll find me playing guitar, capturing moments through 
                  photography, or exploring new hiking trails. I believe in continuous learning 
                  and am always excited to take on new challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-20 px-6 bg-primary">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "3.9", label: "GPA" },
                { number: "15+", label: "Projects Completed" },
                { number: "5+", label: "Hackathons" },
                { number: "3", label: "Awards Won" },
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="font-display text-4xl md:text-5xl font-bold text-gold mb-2">
                    {stat.number}
                  </p>
                  <p className="font-body text-primary-foreground/80 text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Preview */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Featured <span className="gold-accent">Projects</span></h2>
              <p className="section-subtitle">Some of my recent work</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "E-Commerce Platform",
                  tech: "React, Node.js, MongoDB",
                  desc: "Full-stack online store with payment integration",
                },
                {
                  title: "AI Chatbot",
                  tech: "Python, TensorFlow, NLP",
                  desc: "Intelligent conversational assistant using ML",
                },
                {
                  title: "Task Manager App",
                  tech: "React Native, Firebase",
                  desc: "Cross-platform productivity application",
                },
              ].map((project, index) => (
                <div
                  key={project.title}
                  className="group bg-card p-6 rounded-lg border border-border hover:border-gold hover:shadow-elegant transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                    <svg className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary mb-2">{project.title}</h3>
                  <p className="font-body text-sm text-accent mb-2">{project.tech}</p>
                  <p className="font-body text-muted-foreground text-sm">{project.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-4">Let's <span className="gold-accent">Connect</span></h2>
            <p className="section-subtitle mb-8 max-w-2xl mx-auto">
              I'm always open to discussing internship opportunities, collaborations, 
              or just having a chat about technology and innovation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-body font-medium rounded shadow-elegant hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;
