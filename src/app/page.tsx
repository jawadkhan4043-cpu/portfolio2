"use client";

import React, { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-white font-sans antialiased selection:bg-[#E2FF54] selection:text-black">
      {/* 1. Sticky Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0C0E]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-2xl font-black tracking-tighter flex items-center gap-1">
            <span className="text-[#E2FF54]">MJA</span>
            <span className="text-white">.</span>
            <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-gray-400 font-mono font-normal">
              Pharm.D × AI Agenting
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400 font-mono">
            <a href="#about" className="hover:text-[#E2FF54] transition-colors">01 // About</a>
            <a href="#experience" className="hover:text-[#E2FF54] transition-colors">02 // Experience</a>
            <a href="#skills" className="hover:text-[#E2FF54] transition-colors">03 // AI & Pharma Stack</a>
            <a href="#projects" className="hover:text-[#E2FF54] transition-colors">04 // Projects & Agents</a>
            <a href="#certificates" className="hover:text-[#E2FF54] transition-colors">05 // Certifications</a>
            <a href="#contact" className="hover:text-[#E2FF54] transition-colors">06 // Contact</a>
          </nav>

          <a
            href="#contact"
            className="bg-[#E2FF54] text-black font-bold px-5 py-2.5 rounded-full text-sm hover:bg-[#d4f242] transition-all transform hover:scale-105"
          >
            HIRE ME
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 space-y-32 py-16">
        {/* 2. Hero Section (Home) */}
        <section className="relative pt-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#E2FF54] text-xs font-mono mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E2FF54] animate-pulse"></span>
            PHARM.D GRADUATE × AI AGENTING & CHATBOT DEVELOPER
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-none uppercase mb-8">
            Muhammad <br />
            <span className="text-[#E2FF54]">Jawad Anwar</span>
          </h1>

          <div className="grid md:grid-cols-3 gap-8 items-end">
            <div className="md:col-span-2 space-y-6">
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                Building <span className="text-[#E2FF54] font-medium">Intelligent Healthcare AI Agents</span>, Medical Chatbots, and Next.js applications. Combining clinical pharmacy expertise from <span className="text-white font-medium">University of Sargodha</span> with cutting-edge <span className="text-white font-medium">AI Agenting, LLM Integration & RAG Systems</span>.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#projects"
                  className="bg-[#E2FF54] text-black font-bold px-8 py-4 rounded-xl hover:bg-[#d4f242] transition-all"
                >
                  Explore AI Projects
                </a>
                <a
                  href="#contact"
                  className="border border-white/20 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/5 transition-all"
                >
                  Let&apos;s Talk
                </a>
              </div>
            </div>

            {/* Resume Quick Stats */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 font-mono text-sm">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">DEGREE:</span>
                <span className="text-[#E2FF54]">Pharm-D (2021-2026)</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">FOCUS:</span>
                <span className="text-white">AI Agenting & Chatbots</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">CGPA:</span>
                <span className="text-white">3.53 / 4.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">LOCATION:</span>
                <span className="text-white">Lahore, Pakistan</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. About & Summary Section */}
        <section id="about" className="scroll-mt-28">
          <div className="text-xs font-mono text-[#E2FF54] mb-2 uppercase tracking-widest">01 // Background</div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 uppercase">Clinical Pharmacy Meets AI Engineering</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 text-[#E2FF54]">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed text-sm mb-6">
                Pharm-D graduate with hands-on clinical pharmacy exposure, including prescription review, medication safety, patient counseling, and therapeutic monitoring. Actively mastering AI Agenting and Chatbot Development to design intelligent decision-support tools for hospitals, clinical workflows, and medical research.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-400">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">Languages: English</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">Urdu</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">Punjabi</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-xs font-mono text-[#E2FF54] mb-1">2021 - 2026</div>
                <h4 className="font-bold text-lg">Doctor of Pharmacy (Pharm-D)</h4>
                <p className="text-gray-400 text-sm">University of Sargodha</p>
                <div className="mt-2 text-xs font-mono text-gray-300">CGPA: 3.53 / 4.00</div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-xs font-mono text-[#E2FF54] mb-1">Completed 2021</div>
                <h4 className="font-bold text-lg">F.Sc. (Pre-Medical)</h4>
                <p className="text-gray-400 text-sm">BHSS Fazilpur (Marks: 1087/1100)</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Experience Section */}
        <section id="experience" className="scroll-mt-28">
          <div className="text-xs font-mono text-[#E2FF54] mb-2 uppercase tracking-widest">02 // Professional Experience</div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 uppercase">Work & Internships</h2>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#E2FF54]/50 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Clinical Pharmacy Intern / Prescription Evaluation Assistant</h3>
                  <p className="text-[#E2FF54] text-sm font-mono">UMDC UOS — Sargodha</p>
                </div>
                <span className="text-xs font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                  08/2025 – 01/2026
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-2 leading-relaxed">
                <li>Assisted in prescription validation, review, and safe medication dispensing.</li>
                <li>Counselled patients on drug dosage adherence and therapeutic safety.</li>
                <li>Performed accurate dosage calculations and supported therapeutic drug monitoring.</li>
                <li>Maintained clinical pharmacy documentation and patient confidentiality.</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#E2FF54]/50 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Marketing & Resource Development Intern</h3>
                  <p className="text-[#E2FF54] text-sm font-mono">Shaukat Khanum Memorial Trust — Sargodha</p>
                </div>
                <span className="text-xs font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                  2025 & 2026
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Managed campus marketing campaigns, organizational coordination, and resource development outreach.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Tech & Pharma Skills Stack */}
        <section id="skills" className="scroll-mt-28">
          <div className="text-xs font-mono text-[#E2FF54] mb-2 uppercase tracking-widest">03 // Technical Stack</div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 uppercase">AI, Tech & Pharma Capabilities</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-6 text-[#E2FF54] font-mono">AI Agenting & Web Development</h3>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "AI Agenting & Chatbots",
                  "Next.js App Router",
                  "TypeScript",
                  "Tailwind CSS",
                  "OpenAI API Integration",
                  "RAG Architecture",
                  "LLM Prompt Engineering",
                  "Python Basics",
                  "React State Management",
                ].map((tech, index) => (
                  <span key={index} className="px-3.5 py-2 rounded-xl bg-[#E2FF54]/10 border border-[#E2FF54]/30 text-[#E2FF54] text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-6 text-[#E2FF54] font-mono">Pharmacy & Clinical Practice</h3>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Prescription Review",
                  "Medication Dispensing",
                  "Patient Counseling",
                  "Drug-Drug Interactions",
                  "ADR Reporting",
                  "Medication Reconciliation",
                  "Clinical Pharmacy",
                  "Pharmacovigilance",
                ].map((skill, index) => (
                  <span key={index} className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-200 text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Projects & Research Section */}
        <section id="projects" className="scroll-mt-28">
          <div className="text-xs font-mono text-[#E2FF54] mb-2 uppercase tracking-widest">04 // Featured Work</div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 uppercase">AI Agents & Clinical Research</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Chatbot Project */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#E2FF54] transition-all group">
              <div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#E2FF54]/10 text-[#E2FF54] mb-4 inline-block">AI Agent / Chatbot</span>
                <h3 className="text-lg font-bold mb-3 group-hover:text-[#E2FF54] transition-colors">Healthcare Decision Support Agent</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  An intelligent AI chatbot designed for drug interaction lookup, clinical safety checks, and patient counseling guidance.
                </p>
              </div>
              <div className="border-t border-white/10 pt-4 text-xs font-mono text-gray-400">
                Next.js + LLM API + Tailwind
              </div>
            </div>

            {/* Research Project 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#E2FF54] transition-all group">
              <div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#E2FF54]/10 text-[#E2FF54] mb-4 inline-block">Clinical Research</span>
                <h3 className="text-lg font-bold mb-3 group-hover:text-[#E2FF54] transition-colors">Stressors & BP Control in Hypertension</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  Assessment of Psychological Stressors Affecting Blood Pressure Control in Hypertensive Patients (Supervisor: Dr. Hafiz Rashid Hussain).
                </p>
              </div>
              <div className="border-t border-white/10 pt-4 text-xs font-mono text-gray-400">
                University of Sargodha Research
              </div>
            </div>

            {/* Research Project 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#E2FF54] transition-all group">
              <div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#E2FF54]/10 text-[#E2FF54] mb-4 inline-block">Pharmaceutics</span>
                <h3 className="text-lg font-bold mb-3 group-hover:text-[#E2FF54] transition-colors">Clonazepam FDTs Formulation</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  Preparation and evaluation of Clonazepam FDTs using direct compression, solid dispersion, and inclusion complexation.
                </p>
              </div>
              <div className="border-t border-white/10 pt-4 text-xs font-mono text-gray-400">
                Formulation & Lab Evaluation
              </div>
            </div>
          </div>
        </section>

        {/* 7. Certificates Section */}
        <section id="certificates" className="scroll-mt-28">
          <div className="text-xs font-mono text-[#E2FF54] mb-2 uppercase tracking-widest">05 // Achievements</div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 uppercase">Certifications & Training</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "AI Agenting & Chatbot Development Course", issuer: "Currently Enrolled" },
              { title: "Strategic Vaccine Procurement", issuer: "UNICEF" },
              { title: "Education in Emergencies: Global Course", issuer: "UNICEF" },
              { title: "Sustainable & Quality Infrastructure Beyond COVID-19", issuer: "ADB Institute" },
              { title: "Addressing Gender Gaps in Immunization", issuer: "ADB Institute" },
              { title: "Research Arena Training", issuer: "University of Sargodha" },
              { title: "Drug Designing & Molecular Docking Workshops", issuer: "UOS Workshops" },
              { title: "1st Position Interdepartmental Photography Competition", issuer: "UOS" },
            ].map((cert, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-sm text-white">{cert.title}</h4>
                  <p className="text-xs font-mono text-gray-400">{cert.issuer}</p>
                </div>
                <span className="text-[#E2FF54] font-mono text-xs">✓ Verified</span>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Contact Form Section */}
        <section id="contact" className="scroll-mt-28">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="max-w-2xl">
              <div className="text-xs font-mono text-[#E2FF54] mb-2 uppercase tracking-widest">06 // Contact</div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 uppercase">Let&apos;s Build Together</h2>
              <p className="text-gray-400 text-sm mb-8">
                Available for Hospital Pharmacist roles, Clinical AI projects, and AI Chatbot development opportunities.
              </p>

              {submitted ? (
                <div className="p-4 bg-[#E2FF54]/20 border border-[#E2FF54] text-[#E2FF54] rounded-xl font-mono text-sm">
                  ✓ Message sent successfully! I will get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E2FF54] transition-all text-sm"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E2FF54] transition-all text-sm"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E2FF54] transition-all text-sm"
                  />
                  <textarea
                    rows={4}
                    placeholder="Your Message..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E2FF54] transition-all text-sm"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full md:w-auto bg-[#E2FF54] text-black font-bold px-8 py-4 rounded-xl hover:bg-[#d4f242] transition-all text-sm"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-xs font-mono text-gray-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            © {new Date().getFullYear()} Muhammad Jawad Anwar | Pharm-D × AI Agent Developer
          </div>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/muhammad-jawad-anwar-40020a391" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:jawadkhan4043@gmail.com" className="hover:text-[#E2FF54] transition-colors">Email</a>
            <span className="text-gray-400">Lahore, Pakistan</span>
          </div>
        </div>
      </footer>
    </div>
  );
}