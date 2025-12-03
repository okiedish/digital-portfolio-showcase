import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DownloadButton from "@/components/DownloadButton";

const BioData = () => {
  const personalInfo = [
    { label: "Full Name", value: "John Doe" },
    { label: "Date of Birth", value: "January 15, 2002" },
    { label: "Age", value: "22 Years" },
    { label: "Gender", value: "Male" },
    { label: "Nationality", value: "American" },
    { label: "Religion", value: "Christian" },
    { label: "Marital Status", value: "Single" },
    { label: "Blood Group", value: "O+" },
  ];

  const contactInfo = [
    { label: "Email", value: "john.doe@email.com" },
    { label: "Phone", value: "+1 (555) 123-4567" },
    { label: "Address", value: "123 University Ave, San Francisco, CA 94102" },
    { label: "LinkedIn", value: "linkedin.com/in/johndoe" },
    { label: "GitHub", value: "github.com/johndoe" },
  ];

  const familyInfo = [
    { label: "Father's Name", value: "Robert Doe" },
    { label: "Father's Occupation", value: "Business Consultant" },
    { label: "Mother's Name", value: "Sarah Doe" },
    { label: "Mother's Occupation", value: "Teacher" },
  ];

  const physicalInfo = [
    { label: "Height", value: "5'10\" (178 cm)" },
    { label: "Weight", value: "154 lbs (70 kg)" },
    { label: "Eye Color", value: "Brown" },
    { label: "Hair Color", value: "Black" },
  ];

  const interests = [
    "🎸 Playing Guitar",
    "📸 Photography",
    "🎮 Gaming",
    "📚 Reading",
    "🏃 Running",
    "✈️ Traveling",
    "🎬 Movies",
    "🧑‍💻 Coding",
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
                <h1 className="section-title mb-2">Bio <span className="gold-accent">Data</span></h1>
                <p className="section-subtitle">Personal information & details</p>
              </div>
              <div className="animate-fade-in delay-200">
                <DownloadButton targetId="biodata-content" filename="john-doe-biodata" />
              </div>
            </div>
          </div>
        </section>

        {/* Bio Data Content */}
        <section className="px-6">
          <div id="biodata-content" className="max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-lg shadow-card border border-border">
            {/* Header with Photo */}
            <header className="flex flex-col md:flex-row items-center gap-8 border-b-2 border-gold pb-8 mb-8">
              <div className="w-40 h-40 rounded-lg bg-gradient-to-br from-primary to-navy-light overflow-hidden border-4 border-gold shadow-elegant flex-shrink-0">
                <div className="w-full h-full flex items-center justify-center text-primary-foreground">
                  <svg className="w-20 h-20 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-display text-3xl font-bold text-primary mb-2">John Doe</h2>
                <p className="font-body text-lg text-accent mb-2">Computer Science Student</p>
                <p className="font-body text-muted-foreground">Stanford University | Class of 2025</p>
              </div>
            </header>

            {/* Personal Information */}
            <section className="mb-10">
              <h3 className="font-display text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gold"></span>
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {personalInfo.map((item) => (
                  <div key={item.label} className="flex border-b border-border pb-3">
                    <span className="font-body text-muted-foreground w-40 flex-shrink-0">{item.label}:</span>
                    <span className="font-body text-foreground font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-10">
              <h3 className="font-display text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gold"></span>
                Contact Information
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex border-b border-border pb-3">
                    <span className="font-body text-muted-foreground w-40 flex-shrink-0">{item.label}:</span>
                    <span className="font-body text-foreground font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Family Information */}
            <section className="mb-10">
              <h3 className="font-display text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gold"></span>
                Family Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {familyInfo.map((item) => (
                  <div key={item.label} className="flex border-b border-border pb-3">
                    <span className="font-body text-muted-foreground w-40 flex-shrink-0">{item.label}:</span>
                    <span className="font-body text-foreground font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Physical Information */}
            <section className="mb-10">
              <h3 className="font-display text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gold"></span>
                Physical Information
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {physicalInfo.map((item) => (
                  <div key={item.label} className="text-center p-4 bg-secondary rounded-lg">
                    <span className="font-body text-sm text-muted-foreground block mb-1">{item.label}</span>
                    <span className="font-body text-foreground font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Interests & Hobbies */}
            <section>
              <h3 className="font-display text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gold"></span>
                Interests & Hobbies
              </h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-secondary text-secondary-foreground font-body text-sm rounded-full border border-border hover:border-gold transition-colors"
                  >
                    {interest}
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

export default BioData;
