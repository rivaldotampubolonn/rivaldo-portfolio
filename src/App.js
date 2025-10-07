import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Shield,
  Code,
  Trophy,
  BookOpen,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const skills = {
    programming: ['Python', 'C', 'C++', 'JavaScript', 'Java'],
    cybersecurity: ['Wireshark', 'Burp Suite', 'SQLMap', 'Nmap'],
    systems: ['Windows', 'Kali Linux'],
    web: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    database: ['MySQL', 'PostgreSQL'],
    tools: ['Git', 'GitHub']
  };

  const projects = [
    {
      title: "Electq - PC Builder Web App",
      date: "December 2024",
      description: "A web-based tool designed to help users build custom PC setups based on their performance needs, budget, and preferences.",
      technologies: ["Python", "Tailwind CSS", "HTML"],
      role: "Led development and implemented approximately 70% of the application's functionality",
      highlights: [
        "Integrated component recommendations with marketplace links",
        "Backend functionality and integration",
        "Achieved 70% of planned features"
      ]
    },
    {
      title: "Cybersecurity CTF Challenges (Team-Based)",
      date: "2024",
      description: "Represented university in an international Capture The Flag (CTF) competition",
      technologies: ["Burp Suite", "Nmap", "Linux CLI"],
      role: "Team strategist and penetration testing specialist",
      highlights: [
        "Developed team-based strategy",
        "Collaborated using Discord and shared recon tools",
        "Practiced under timed pressure scenarios"
      ]
    }
  ];

  const achievements = [
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "2025",
      type: "certification"
    },
    {
      title: "University CTF Binary Badlands",
      issuer: "Hack The Box",
      date: "2024",
      type: "competition",
      rank: "Ranked 588/1128"
    },
    {
      title: "CTF Cyber Strike 1.0 Tournament",
      issuer: "SATSIBER TNI",
      date: "2024",
      type: "competition"
    }
  ];

  return (
    <>
      {/* --- CSS in-JS (embedded) --- */}
      <style>{`
        /* reset básico */
        * { margin:0; padding:0; box-sizing:border-box; }
        html, body, #root { height:100%; }

        .portfolio {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a, #4c1d95, #0f172a);
          color: #fff;
          font-family: sans-serif;
        }
        /* NAV */
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          transition: background 0.3s, backdrop-filter 0.3s;
          display: flex;
          justify-content: center;
        }
        nav.transparent { background: transparent; }
        nav.solid {
          background: rgba(15,23,42,0.95);
          backdrop-filter: blur(8px);
        }
        .nav-container {
          width: 100%;
          max-width: 1120px;
          padding: 0 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 64px;
        }
        .logo { font-weight: bold; font-size: 1.25rem; background: linear-gradient(90deg,#2dd4bf,#9333ea); background-clip: text; color: transparent; }
        .nav-links { display: flex; gap: 2rem; }
        .nav-links button {
          background: none; border: none; cursor: pointer;
          font-size: 1rem; color: #d1d5db;
          text-transform: capitalize;
          transition: color .2s;
        }
        .nav-links button.active,
        .nav-links button:hover { color: #22d3ee; }
        .mobile-toggle { display: none; background: none; border: none; cursor: pointer; color: #fff; }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .mobile-toggle { display: block; }
          .mobile-menu {
            background: rgba(15,23,42,0.95);
            backdrop-filter: blur(8px);
          }
          .mobile-menu button {
            width:100%; text-align:left; padding:8px 12px;
            background:none; border:none; color:#d1d5db;
            text-transform: capitalize;
          }
          .mobile-menu button:hover { color:#22d3ee; }
        }

        /* HERO */
        .hero {
          padding-top: 64px;
          min-height: calc(100vh - 64px);
          position: relative;
          text-align: center;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute; inset:0;
          background: linear-gradient(90deg, rgba(34,211,238,0.1), rgba(147,51,234,0.1), rgba(236,72,153,0.1));
          animation: pulse 4s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,100% { opacity: .1; }
          50% { opacity: .3; }
        }
        .hero-content { position: relative; z-index:10; max-width: 800px; margin: 0 auto; padding: 0 16px; }
        .avatar {
          width: 192px; height: 192px; margin: 0 auto 32px;
          border-radius: 50%; background: linear-gradient(135deg,#2dd4bf,#9333ea);
          display:flex; align-items:center; justify-content:center;
          font-size: 3rem; font-weight:bold; box-shadow: 0 10px 15px rgba(0,0,0,0.5);
        }
        .hero h1 {
          font-size: 3rem; font-weight:bold;
          background: linear-gradient(90deg,#2dd4bf,#9333ea,#ec4899);
          background-clip: text; color: transparent;
          margin-bottom:16px;
        }
        .hero p.lead { font-size:1.25rem; color:#d1d5db; margin-bottom:24px; }
        .hero p.desc { font-size:1.125rem; color:#9ca3af; margin:0 auto 32px; max-width:720px; }
        .hero .buttons { display:flex; flex-wrap:wrap; gap:16px; justify-content:center; }
        .btn-primary, .btn-secondary {
          padding:12px 32px; border-radius:9999px;
          font-weight:600; cursor:pointer; transition: transform .2s, background .2s;
        }
        .btn-primary {
          background: linear-gradient(90deg,#22d3ee,#9333ea);
          border: none; color:#fff;
        }
        .btn-primary:hover { transform: scale(1.05); }
        .btn-secondary {
          background: transparent; border:2px solid #22d3ee; color:#22d3ee;
        }
        .btn-secondary:hover {
          background:#22d3ee; color:#0f172a;
        }
        .scroll-down {
          position:absolute; bottom:32px; left:50%; transform: translateX(-50%);
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%,100% { transform: translate(-50%,0); }
          50% { transform: translate(-50%,-10px); }
        }

        /* SECTIONS */
        section { padding: 80px 0; }
        .bg-light { background: rgba(71,85,105,0.3); }
        .container { max-width:1120px; margin:0 auto; padding:0 16px; }
        h2.section-title {
          font-size:2.5rem; font-weight:bold;
          text-align:center; margin-bottom:48px;
          background: linear-gradient(90deg,#22d3ee,#9333ea);
          background-clip: text; color: transparent;
        }

        /* About */
        .about .grid { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; }
        .about p { font-size:1.125rem; color:#d1d5db; line-height:1.6; margin-bottom:24px; }
        .about .facts { background: linear-gradient(135deg,#334155,#1e293b); padding:32px; border-radius:16px; box-shadow: 0 10px 15px rgba(0,0,0,0.5); }
        .facts h3 { font-size:1.5rem; font-weight:bold; margin-bottom:16px; color:#22d3ee; }
        .facts .item { display:flex; align-items:center; gap:12px; margin-bottom:12px; color:#cbd5e1; }

        /* Skills */
        .skills .grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:32px; }
        .skill-card {
          background: linear-gradient(135deg,#334155,#1e293b);
          padding:24px; border-radius:16px; box-shadow:0 10px 15px rgba(0,0,0,0.5);
          transition: transform .2s, box-shadow .2s;
        }
        .skill-card:hover { transform: scale(1.05); box-shadow:0 10px 30px rgba(34,211,238,0.2); }
        .skill-card h3 { font-size:1.25rem; font-weight:bold; margin-bottom:16px; color:#22d3ee; text-transform:capitalize; }
        .skill-card .tags { display:flex; flex-wrap:wrap; gap:8px; }
        .skill-card .tags span {
          padding:4px 12px; border-radius:9999px; font-size:.875rem;
          background: rgba(34,211,238,0.2); border:1px solid rgba(34,211,238,0.3);
        }

        /* Projects */
        .projects .grid { display:grid; grid-template-columns:1fr 1fr; gap:32px; }
        .project-card {
          background: linear-gradient(135deg,#334155,#1e293b);
          padding:32px; border-radius:16px; box-shadow:0 10px 15px rgba(0,0,0,0.5);
          transition: transform .2s, box-shadow .2s;
        }
        .project-card:hover { transform: scale(1.05); box-shadow:0 10px 30px rgba(34,211,238,0.2); }
        .project-card .header { display:flex; justify-content:space-between; align-items:start; margin-bottom:16px; }
        .project-card .header h3 { font-size:1.5rem; color:#22d3ee; }
        .project-card .header .date { font-size:.875rem; background:#475569; padding:4px 12px; border-radius:9999px; color:#cbd5e1; }
        .project-card p { color:#cbd5e1; margin-bottom:16px; line-height:1.6; }
        .project-card h4 { font-size:1.125rem; font-weight:600; color:#a78bfa; margin-bottom:8px; }
        .project-card ul { list-style:none; margin-bottom:16px; }
        .project-card ul li { display:flex; align-items:flex-start; gap:8px; margin-bottom:4px; color:#cbd5e1; }
        .project-card .tech { display:flex; flex-wrap:wrap; gap:8px; }
        .project-card .tech span {
          padding:4px 12px; border-radius:9999px; font-size:.875rem;
          background: rgba(34,211,238,0.2); border:1px solid rgba(34,211,238,0.3);
        }

        /* Achievements */
        .achievements .grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:32px; }
        .ach-card {
          background: linear-gradient(135deg,#334155,#1e293b);
          padding:24px; border-radius:16px; box-shadow:0 10px 15px rgba(0,0,0,0.5);
          transition: transform .2s, box-shadow .2s;
        }
        .ach-card:hover { transform: scale(1.05); box-shadow:0 10px 30px rgba(34,211,238,0.2); }
        .ach-card .top { display:flex; align-items:center; gap:12px; margin-bottom:16px; }
        .ach-card .icon {
          width:48px; height:48px; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
        }
        .ach-card .icon.cert { background: rgba(16,185,129,0.2); color:#10b981; }
        .ach-card .icon.comp { background: rgba(168,85,247,0.2); color:#a855f7; }
        .ach-card .top h3 { font-size:1.25rem; color:#22d3ee; }
        .ach-card .top p { color:#cbd5e1; }
        .ach-card .bottom { display:flex; justify-content:space-between; align-items:center; }
        .ach-card .bottom .date { font-size:.875rem; color:#cbd5e1; }
        .ach-card .bottom .rank {
          font-size:.875rem; padding:4px 12px; border-radius:9999px;
          background: rgba(34,211,238,0.2); border:1px solid rgba(34,211,238,0.3);
        }

        /* Contact */
        .contact .grid { display:grid; grid-template-columns:1fr 1fr; gap:32px; }
        .contact-card {
          background: linear-gradient(135deg,#334155,#1e293b);
          padding:32px; border-radius:16px; box-shadow:0 10px 15px rgba(0,0,0,0.5);
        }
        .contact-card h3 { font-size:1.5rem; font-weight:600; color:#22d3ee; margin-bottom:24px; }
        .contact-card a, .contact-card div {
          display:flex; align-items:center; gap:12px; margin-bottom:16px;
          color:#cbd5e1; text-decoration:none;
        }
        .contact-card a:hover { color:#22d3ee; }

        /* Footer */
        footer {
          background: #0f172a; padding:32px 0; border-top:1px solid #334155;
        }
        footer p { text-align:center; color:#9ca3af; }
      `}</style>

      <div className="portfolio">
        {/* Navigation */}
        <nav className={scrollY > 50 ? 'solid' : 'transparent'}>
          <div className="nav-container">
            <div className="logo">Rivaldo Tampubolon</div>
            <div className="nav-links">
              {['about', 'skills', 'projects', 'achievements', 'contact'].map(sec => (
                <button
                  key={sec}
                  onClick={() => scrollToSection(sec)}
                  className={activeSection === sec ? 'active' : ''}
                >
                  {sec}
                </button>
              ))}
            </div>
            <button
              className="mobile-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="mobile-menu">
              {['about', 'skills', 'projects', 'achievements', 'contact'].map(sec => (
                <button key={sec} onClick={() => scrollToSection(sec)}>
                  {sec}
                </button>
              ))}
            </div>
          )}
        </nav>

        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <div className="avatar">RJT</div>
            <h1>Rivaldo Juanda Tampubolon</h1>
            <p className="lead">Computer Science Student | Cybersecurity Enthusiast</p>
            <p className="desc">
              5th Semester Computer Science student at Universitas Sumatera Utara with a strong passion for cybersecurity. 
              My goal is to become a cybersecurity professional who can contribute to strengthening Indonesia's digital resilience.
            </p>
            <div className="buttons">
              <button className="btn-primary" onClick={() => scrollToSection('projects')}>
                View My Work
              </button>
              <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
            </div>
          </div>
          <div className="scroll-down">
            <ChevronDown size={32} />
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-light about">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="grid">
              <div>
                <p>I am a fifth-semester Computer Science student at Universitas Sumatera Utara with a strong interest in cybersecurity. My curiosity in this field began with online content, news, and dramas that showcased real-world cyber challenges.</p>
                <p>Over time, I began exploring cybersecurity through courses, competitions, and hands-on projects. My career goal is to become a cybersecurity professional who can contribute to strengthening Indonesia's digital resilience while collaborating on an international level.</p>
                <div className="flex facts">
                  <div className="item">
                    <BookOpen size={20} /><span>GPA: 3.84/4.00</span>
                  </div>
                  <div className="item">
                    <Shield size={20} /><span>Cybersecurity Focus</span>
                  </div>
                </div>
              </div>
              <div className="facts">
                <h3>Quick Facts</h3>
                <div className="item"><MapPin size={18} /><span>Pematangsiantar, Sumatera Utara</span></div>
                <div className="item"><BookOpen size={18} /><span>Universitas Sumatera Utara</span></div>
                <div className="item"><Code size={18} /><span>Computer Science Student</span></div>
                <div className="item"><Shield size={18} /><span>Cybersecurity Enthusiast</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="skills">
          <div className="container">
            <h2 className="section-title">Technical Skills</h2>
            <div className="grid">
              {Object.entries(skills).map(([cat, list]) => (
                <div key={cat} className="skill-card">
                  <h3>{cat}</h3>
                  <div className="tags">
                    {list.map(s => <span key={s}>{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="bg-light projects">
          <div className="container">
            <h2 className="section-title">Project Showcase</h2>
            <div className="grid">
              {projects.map((p,i) => (
                <div key={i} className="project-card">
                  <div className="header">
                    <h3>{p.title}</h3>
                    <span className="date">{p.date}</span>
                  </div>
                  <p>{p.description}</p>
                  <h4>My Role:</h4>
                  <p>{p.role}</p>
                  <h4>Key Highlights:</h4>
                  <ul>{p.highlights.map((h,j) => <li key={j}><span>•</span>{h}</li>)}</ul>
                  <div className="tech">{p.technologies.map(t => <span key={t}>{t}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="achievements">
          <div className="container">
            <h2 className="section-title">Achievements & Certifications</h2>
            <div className="grid">
              {achievements.map((a,i) => (
                <div key={i} className="ach-card">
                  <div className="top">
                    <div className={`icon ${a.type==='certification'?'cert':'comp'}`}>
                      {a.type==='certification' ? <BookOpen size={24}/> : <Trophy size={24}/>}
                    </div>
                    <div>
                      <h3>{a.title}</h3>
                      <p>{a.issuer}</p>
                    </div>
                  </div>
                  <div className="bottom">
                    <span className="date">{a.date}</span>
                    {a.rank && <span className="rank">{a.rank}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-light contact">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <p style={{ textAlign: 'center', color:'#d1d5db', marginBottom: '32px' }}>
              I'm always open to discussing new opportunities, collaborations, or just chatting about cybersecurity and technology.
              Feel free to reach out!
            </p>
            <div className="grid">
              <div className="contact-card">
                <h3>Contact Information</h3>
                <a href="mailto:rivaldotampubolonn@gmail.com"><Mail size={20}/><span>rivaldotampubolonn@gmail.com</span></a>
                <a href="tel:+6281370507422"><Phone size={20}/><span>+62-813-7050-7422</span></a>
                <div><MapPin size={20}/><span>Pematangsiantar, Sumatera Utara</span></div>
              </div>
              <div className="contact-card">
                <h3>Social Links</h3>
                <a href="https://id.linkedin.com/in/rivaldojuandatampubolon" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20}/><span>LinkedIn Profile</span><ExternalLink size={16}/>
                </a>
                <a href="https://github.com/rivaldotampubolonn" target="_blank" rel="noopener noreferrer">
                  <Github size={20}/><span>GitHub Profile</span><ExternalLink size={16}/>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <p>© 2025 Rivaldo Juanda Tampubolon. Built with passion for cybersecurity and technology.</p>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;
