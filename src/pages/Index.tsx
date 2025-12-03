import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-secondary to-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="animate-fade-in-up">
                <p className="font-body text-accent tracking-widest uppercase text-sm mb-4">
                  Senior Software Engineer
                </p>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-6">
                  John <span className="gold-accent">Doe</span>
                </h1>
                <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  Passionate about building elegant, scalable solutions that make 
                  a difference. With over 8 years of experience in full-stack 
                  development, I transform complex problems into simple, beautiful designs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/resume"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-medium rounded shadow-elegant hover:shadow-lg transition-all duration-300"
                  >
                    View Resume
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-body font-medium rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>

              {/* Profile Image */}
              <div className="animate-fade-in delay-200 flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-navy-light overflow-hidden border-4 border-gold shadow-elegant">
                    <div className="w-full h-full flex items-center justify-center text-primary-foreground">
                      <svg className="w-40 h-40 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-elegant">
                    <span className="font-display text-2xl font-bold text-accent-foreground">8+</span>
                    <span className="font-body text-xs text-accent-foreground/80 ml-1">Years</span>
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
                  I'm a Senior Software Engineer based in San Francisco, California, with a passion 
                  for creating innovative digital solutions. My journey in technology began during 
                  my Computer Science studies at Stanford University, where I discovered my love 
                  for building software that impacts people's lives.
                </p>
                <p className="font-body text-foreground leading-relaxed mb-6">
                  Over the past 8 years, I've had the privilege of working with startups and 
                  Fortune 500 companies alike, leading teams and architecting systems that serve 
                  millions of users. My expertise spans across full-stack development, cloud 
                  architecture, and team leadership.
                </p>
                <p className="font-body text-foreground leading-relaxed">
                  When I'm not coding, you'll find me contributing to open-source projects, 
                  mentoring aspiring developers, or exploring the beautiful hiking trails of 
                  Northern California with my camera.
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
                { number: "8+", label: "Years Experience" },
                { number: "50+", label: "Projects Completed" },
                { number: "30+", label: "Happy Clients" },
                { number: "15+", label: "Awards Won" },
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`text-center animate-fade-in-up delay-${(index + 1) * 100}`}
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

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-4">Let's Work <span className="gold-accent">Together</span></h2>
            <p className="section-subtitle mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-body font-medium rounded shadow-elegant hover:shadow-lg transition-all duration-300"
            >
              Start a Conversation
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
