/* =============================================================
   SMR Lab — Home Page
   Design: Futuristic Tech Lab — dark slate, cyan/violet accents
   Sections: Nav, Hero, About, Research, Publications, News,
             Projects, Team, Contact, Footer
   ============================================================= */

import { useState, useEffect } from "react";
import {
  Menu, X, ExternalLink, Mail, MapPin, ChevronRight,
  BookOpen, FlaskConical, Users, Cpu, Waves, Layers, Zap,
  Award, Newspaper, FolderOpen, Calendar, Tag, ArrowRight,
  Clock, CheckCircle2, CircleDot,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "News", href: "#news" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const RESEARCH_AREAS = [
  {
    icon: Waves,
    title: "Acoustic-Based Condition Monitoring",
    description: "Non-invasive fault detection using spatially distributed microphone arrays and advanced signal processing. Our MCAFF framework achieves 90% F1-score in robotic condition classification.",
    tags: ["Acoustic Sensing", "STFT", "Feature Fusion"],
    color: "cyan",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663301075415/ExQsXSZtEAEfrYBFTdbjsq/smr-research-acoustic-dAbzXKsLyJfh6TvSQwrfxR.webp",
  },
  {
    icon: Layers,
    title: "Additive Manufacturing & Defect Detection",
    description: "AI-driven porosity prediction and defect detection in metal additive manufacturing using transfer learning and phased array ultrasound testing (PAUT).",
    tags: ["Wire-Arc AM", "PAUT", "Transfer Learning"],
    color: "violet",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663301075415/ExQsXSZtEAEfrYBFTdbjsq/smr-additive-mfg-F8EkgwybWz3sfyZiFPWCig.webp",
  },
  {
    icon: Cpu,
    title: "Machine Learning for Smart Manufacturing",
    description: "Deep learning, tensor decomposition, and multi-source transfer learning for fault diagnosis in rotating machinery and industrial systems.",
    tags: ["CNN", "MPCA", "GAN"],
    color: "cyan",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663301075415/ExQsXSZtEAEfrYBFTdbjsq/smr-ml-visualization-agVhnVZQsGqqFMaZZaUuUE.webp",
  },
  {
    icon: Zap,
    title: "Predictive Maintenance in Robotics",
    description: "Proactive maintenance strategies for high-speed robot-based manufacturing systems, reducing downtime and extending equipment lifespan through data-driven insights.",
    tags: ["RBM", "Industry 4.0", "PHM"],
    color: "violet",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663301075415/ExQsXSZtEAEfrYBFTdbjsq/smr-hero-bg-VrXimcDmVKN2px5fEXwu99.webp",
  },
];

const PROJECTS = [
  {
    title: "MCAFF: Multichannel Acoustic Feature Fusion for Robotic Predictive Maintenance",
    status: "active",
    period: "2025 – Present",
    description: "Development of a non-invasive acoustic sensing framework for classifying operating conditions of high-speed FANUC robotic arms. The MCAFF approach integrates spatially distributed microphones with STFT-based feature fusion and CNN classification, achieving a 15% improvement over single-sensor baselines.",
    highlights: [
      "FANUC M-1iA/0.5A robot at 200, 500, and 1000 mm/s",
      "Dual-channel condenser microphone array at 44.1 kHz",
      "Average F1-score: 0.9008 ± 0.0212",
      "Published at IEOM 2026, Milwaukee, WI",
    ],
    tags: ["Acoustic Sensing", "CNN", "Robotics", "IEOM 2026"],
    color: "cyan",
  },
  {
    title: "Defect Detection in Wire-Arc Additive Manufacturing via Multi-Directional PAUT",
    status: "active",
    period: "2024 – Present",
    description: "Investigation of phased array ultrasound testing (PAUT) combined with multi-directional scanning for enhanced internal defect detection in wire-arc additively manufactured metal components. The fusion approach significantly improves defect visualization accuracy.",
    highlights: [
      "Wire-arc additive manufacturing (WAAM) samples",
      "Multi-directional PAUT scanning fusion",
      "Collaboration with ASME IMECE 2025 team",
      "Published at ASME IMECE 2025, Memphis, TN",
    ],
    tags: ["Additive Manufacturing", "PAUT", "NDT", "ASME 2025"],
    color: "violet",
  },
  {
    title: "Data-Scarce Compound Fault Diagnosis Using CycleGAN Augmentation",
    status: "active",
    period: "2025 – Present",
    description: "A data-driven framework for diagnosing compound faults in rotating machinery under severe data imbalance conditions. The approach combines multi-sensor spectral fusion with CycleGAN-based synthetic data augmentation to overcome the scarcity of labeled fault data in real industrial environments.",
    highlights: [
      "CycleGAN for synthetic compound fault generation",
      "Multi-sensor spectral fusion strategy",
      "Targets data-scarce industrial environments",
      "Preprint available (2026)",
    ],
    tags: ["GAN", "Fault Diagnosis", "Sensor Fusion", "Data Augmentation"],
    color: "cyan",
  },
  {
    title: "Transfer Learning for Process Defect Identification in Additive Manufacturing",
    status: "completed",
    period: "2021 – 2023",
    description: "Development of intelligent transfer machine learning methods for rapid porosity prediction in metal additive manufacturing under varying process conditions. The approach transfers knowledge from existing process conditions to new target conditions with limited labeled data.",
    highlights: [
      "Thermal-defect relationship modeling",
      "Sparse labeled data regime",
      "Published in JMSE (2023)",
      "Ph.D. dissertation research at Mississippi State University",
    ],
    tags: ["Transfer Learning", "Additive Manufacturing", "Porosity", "JMSE 2023"],
    color: "violet",
  },
];

const NEWS_ITEMS = [
  {
    date: "June 2026",
    type: "publication",
    title: "IEOM 2026 Paper Accepted",
    body: "Our paper \"Multichannel Acoustic Feature Fusion for Predictive Maintenance in High-Speed Robotic Manufacturing\" has been accepted at the 11th North American IEOM Conference in Milwaukee, Wisconsin (June 9–11, 2026). Congratulations to Md Omar Al Javed on his first conference publication!",
    tags: ["Publication", "IEOM 2026"],
  },
  {
    date: "April 2026",
    type: "preprint",
    title: "New Preprint: CycleGAN-Based Compound Fault Diagnosis",
    body: "A new preprint titled \"Data-Scarce Compound Fault Diagnosis in Rotating Machinery Using Multi-Sensor Spectral Fusion and CycleGAN-Based Data Augmentation\" is now available. This work addresses compound fault diagnosis under severe data imbalance in industrial settings.",
    tags: ["Preprint", "Fault Diagnosis"],
  },
  {
    date: "November 2025",
    type: "publication",
    title: "ASME IMECE 2025 Paper Published",
    body: "Our paper on enhancing defect detection accuracy in wire-arc additive manufactured samples through multi-directional PAUT scanning fusion was presented at ASME IMECE 2025 in Memphis, TN.",
    tags: ["Publication", "ASME 2025", "Additive Mfg"],
  },
  {
    date: "August 2024",
    type: "publication",
    title: "Journal Paper in IJAMT",
    body: "Our paper \"Enhancing the Accuracy of Machinery Fault Diagnosis Through Fault Source Isolation of Complex Mixture of Industrial Sound Signals\" was published in the International Journal of Advanced Manufacturing Technology (vol. 133).",
    tags: ["Journal", "IJAMT", "Acoustics"],
  },
  {
    date: "November 2024",
    type: "publication",
    title: "PHM Society Conference Paper",
    body: "Presented \"Frequency Domain Tensor-Based 1D-CNN and Multilinear PCA for Machinery Fault Detection\" at the Annual Conference of the PHM Society 2024.",
    tags: ["Conference", "PHM Society"],
  },
  {
    date: "Fall 2024",
    type: "milestone",
    title: "Dr. Senanayaka Joins Tennessee Tech",
    body: "Dr. Ayantha Senanayaka joined Tennessee Technological University as an Assistant Professor in the Department of Manufacturing and Engineering Technology, establishing the Smart Manufacturing and Robotics (SMR) Lab.",
    tags: ["Milestone", "Lab Launch"],
  },
];

const PUBLICATIONS = [
  {
    year: "2026",
    title: "Multichannel Acoustic Feature Fusion for Predictive Maintenance in High-Speed Robotic Manufacturing",
    authors: "Md Omar Al Javed, Ayantha Senanayaka",
    venue: "11th North American IEOM Conference, Milwaukee, WI, USA",
    tags: ["Conference", "Robotics", "Acoustic"],
    type: "conference",
  },
  {
    year: "2026",
    title: "Data-Scarce Compound Fault Diagnosis in Rotating Machinery Using Multi-Sensor Spectral Fusion and CycleGAN-Based Data Augmentation",
    authors: "A. Senanayaka, S. Mun, A. Al Mamun, N. Lee",
    venue: "Preprint, 2026",
    tags: ["Preprint", "Fault Diagnosis", "GAN"],
    type: "preprint",
  },
  {
    year: "2025",
    title: "Enhancing Defect Detection Accuracy in Wire-Arc Additive Manufactured Samples Through Fusion of Multi-Directional Scanning With PAUT",
    authors: "N. Lee, A. Senanayaka, J. Storey, M. Murphy, et al.",
    venue: "ASME IMECE 2025, Memphis, TN, USA",
    tags: ["Conference", "Additive Mfg", "NDT"],
    type: "conference",
  },
  {
    year: "2024",
    title: "Enhancing the Accuracy of Machinery Fault Diagnosis Through Fault Source Isolation of Complex Mixture of Industrial Sound Signals",
    authors: "A. Senanayaka, P. Lee, N. Lee, C. Dickerson, A. Netchaev, S. Mun",
    venue: "International Journal of Advanced Manufacturing Technology, vol. 133",
    tags: ["Journal", "Fault Diagnosis", "Acoustics"],
    type: "journal",
    doi: "https://doi.org/10.1007/s00170-024-13835-4",
  },
  {
    year: "2024",
    title: "Frequency Domain Tensor-Based 1D-CNN and Multilinear PCA for Machinery Fault Detection",
    authors: "A. Senanayaka, Q. Lee, N. Liu, S. Mun, A. Amirlatifi, et al.",
    venue: "Annual Conference of the PHM Society, vol. 16",
    tags: ["Conference", "CNN", "MPCA"],
    type: "conference",
  },
  {
    year: "2023",
    title: "Multi-Channel Sensor Fusion for Real-Time Bearing Fault Diagnosis by Frequency-Domain Multilinear PCA",
    authors: "A. Al Mamun, M. M. Bappy, A. Senanayaka, J. Li, Z. Jiang, Z. Tian, et al.",
    venue: "International Journal of Advanced Manufacturing Technology, vol. 124, pp. 1321–1334",
    tags: ["Journal", "Sensor Fusion", "Bearing"],
    type: "journal",
    doi: "https://doi.org/10.1007/s00170-022-10525-4",
  },
  {
    year: "2023",
    title: "Understanding the Effects of Process Conditions on Thermal–Defect Relationship: A Transfer Machine Learning Approach",
    authors: "A. Senanayaka, W. Tian, T. C. Falls, L. Bian",
    venue: "Journal of Manufacturing Science and Engineering, vol. 145(7), 071010",
    tags: ["Journal", "Transfer Learning", "AM"],
    type: "journal",
    doi: "https://doi.org/10.1115/1.4056768",
  },
  {
    year: "2022",
    title: "Similarity-Based Multi-Source Transfer Learning Approach for Time Series Classification",
    authors: "A. Senanayaka, A. Al Mamun, G. Bond, W. Tian, H. Wang, S. Fuller, T. C. Falls, et al.",
    venue: "International Journal of Prognostics and Health Management, vol. 13(2)",
    tags: ["Journal", "Transfer Learning", "PHM"],
    type: "journal",
  },
];

const TEAM_MEMBERS = [
  {
    name: "Dr. Ayantha Senanayaka",
    role: "Principal Investigator",
    title: "Assistant Professor",
    dept: "Manufacturing and Engineering Technology",
    email: "asenanayaka@tntech.edu",
    bio: "Dr. Senanayaka's research focuses on smart manufacturing, predictive maintenance, additive manufacturing, and machine learning. He holds a Ph.D. and has published in top journals including IJAMT and JMSE. Before joining TTU, he was a Postdoctoral Associate at the Center for Advanced Vehicular Systems, Mississippi State University.",
    tags: ["Smart Manufacturing", "Predictive Maintenance", "ML"],
    photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663301075415/maieRBsufHpjNXhH.jpg",
    isPI: true,
    links: {
      scholar: "https://scholar.google.com/citations?user=GBPas3kAAAAJ&hl=en",
      linkedin: "https://www.linkedin.com/in/ayantha-senanayaka-3080a2269/",
    },
  },
  {
    name: "Md Omar Al Javed",
    role: "Graduate Researcher",
    title: "Ph.D. Student",
    dept: "Mechanical Engineering",
    email: "mjaved42@tntech.edu",
    bio: "Research focus on multichannel acoustic feature fusion for predictive maintenance in high-speed robotic manufacturing systems. Co-author of the MCAFF paper presented at IEOM 2026. Interested in acoustic signal processing, deep learning, and industrial robotics.",
    tags: ["Acoustic Sensing", "Robotics", "CNN"],
    photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663301075415/nsYSkhOxwzdWXnAi.jpg",
    isPI: false,
    links: {
      scholar: "https://scholar.google.com/citations?user=AADnnxMAAAAJ&hl=en",
      linkedin: "https://www.linkedin.com/in/omar-al-javed/",
    },
  },
  {
    name: "Matthew Taylor",
    role: "Undergraduate Researcher",
    title: "B.S. Student",
    dept: "Manufacturing and Engineering Technology",
    email: "mataylor47@tntech.edu",
    bio: "Undergraduate researcher contributing to smart manufacturing and robotics projects in the SMR Lab. Gaining hands-on experience in manufacturing processes, sensor integration, and experimental research methodologies.",
    tags: ["Smart Manufacturing", "Robotics", "Manufacturing Technology"],
    photo: null,
    isPI: false,
    links: {},
  },
];

const STATS = [
  { value: "13+", label: "Publications", icon: BookOpen },
  { value: "99+", label: "Citations", icon: Award },
  { value: "4", label: "Research Areas", icon: FlaskConical },
  { value: "3+", label: "Lab Members", icon: Users },
];

// ─── Components ──────────────────────────────────────────────────────────────

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["home", "about", "research", "projects", "publications", "news", "team", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-16">
        <a href="#home" onClick={() => handleNavClick("#home")} className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-md bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
            <Cpu className="w-4 h-4 text-primary" />
          </div>
          <div>
            <div className="font-display font-bold text-sm text-foreground leading-none">SMR Lab</div>
            <div className="font-mono-label text-[10px] text-muted-foreground leading-none mt-0.5">Tennessee Tech</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`nav-link-underline px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                active === link.href.replace("#", "")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="mailto:asenanayaka@tntech.edu"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary/10 border border-primary/30 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            Contact PI
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass-nav border-t border-border">
          <nav className="container py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="mailto:asenanayaka@tntech.edu"
              className="mt-2 flex items-center gap-2 px-3 py-2.5 rounded-md bg-primary/10 border border-primary/30 text-primary text-sm font-medium"
            >
              <Mail className="w-3.5 h-3.5" />
              Contact PI
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663301075415/ExQsXSZtEAEfrYBFTdbjsq/smr-hero-bg-VrXimcDmVKN2px5fEXwu99.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative container pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="section-label mb-4 animate-fade-in" style={{ animationDelay: "0ms" }}>
            Tennessee Technological University · Cookeville, TN
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "80ms" }}>
            <span className="text-foreground">Smart Manufacturing</span>
            <br />
            <span className="gradient-text-cyan">&amp; Robotics Lab</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: "160ms" }}>
            Advancing the frontier of intelligent manufacturing through acoustic sensing,
            machine learning, and data-driven predictive maintenance for next-generation
            robotic systems.
          </p>
          <div className="flex flex-wrap gap-2 mb-10 animate-fade-in-up" style={{ animationDelay: "240ms" }}>
            {["Predictive Maintenance", "Acoustic Sensing", "Additive Manufacturing", "Deep Learning", "Robotics"].map((tag) => (
              <span key={tag} className="tag-cyan">{tag}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "320ms" }}>
            <button
              onClick={() => document.getElementById("research")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors glow-cyan"
            >
              Explore Research <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => document.getElementById("publications")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              <BookOpen className="w-4 h-4" /> Publications
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          {STATS.map(({ value, label, icon: Icon }) => (
            <div key={label} className="bg-card/60 backdrop-blur-sm border border-border rounded-lg p-4 text-center">
              <Icon className="w-4 h-4 text-primary mx-auto mb-2" />
              <div className="font-display text-2xl font-bold text-foreground">{value}</div>
              <div className="font-mono-label text-[11px] text-muted-foreground mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label mb-4">About the Lab</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Bridging AI and<br /><span className="gradient-text-cyan">Manufacturing</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The Smart Manufacturing and Robotics (SMR) Lab at Tennessee Technological University
              is dedicated to developing intelligent, data-driven solutions for modern industrial
              challenges. Our research sits at the intersection of artificial intelligence,
              signal processing, and advanced manufacturing.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Led by Dr. Ayantha Senanayaka, the lab focuses on non-invasive condition monitoring,
              predictive maintenance, and defect detection — reducing downtime and improving
              reliability in robotic and additive manufacturing systems. We collaborate with
              industry partners and national laboratories to translate research into real-world impact.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Department", value: "Manufacturing & Engineering Technology" },
                { label: "University", value: "Tennessee Technological University" },
                { label: "Location", value: "Cookeville, TN, USA" },
                { label: "Focus", value: "Smart Manufacturing & AI" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-card border border-border rounded-lg p-4">
                  <div className="font-mono-label text-[10px] text-muted-foreground mb-1">{label}</div>
                  <div className="text-sm font-medium text-foreground">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-xl overflow-hidden border border-border">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663301075415/ExQsXSZtEAEfrYBFTdbjsq/smr-lab-banner-S6zMUXbfb7jfhBy6UrmWxA.webp"
                alt="SMR Lab at Tennessee Tech"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="tag-cyan">SMR Lab · Tennessee Tech</span>
              </div>
            </div>
            <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 -z-10 blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ResearchSection() {
  return (
    <section id="research" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-label mb-4">Research Areas</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="gradient-text-cyan">Focus Areas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The SMR Lab conducts research across four interconnected domains, all aimed at
            making manufacturing systems smarter, more reliable, and more efficient.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {RESEARCH_AREAS.map((area, i) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="card-hover group relative rounded-xl border border-border bg-card overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={area.image} alt={area.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-lg flex items-center justify-center ${area.color === "cyan" ? "bg-primary/20 border border-primary/40" : "bg-accent/20 border border-accent/40"}`}>
                    <Icon className={`w-5 h-5 ${area.color === "cyan" ? "text-primary" : "text-accent-foreground"}`} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span key={tag} className={area.color === "cyan" ? "tag-cyan" : "tag-violet"}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${area.color === "cyan" ? "ring-1 ring-primary/40" : "ring-1 ring-accent/40"}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-label mb-4">Research Projects</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Active &amp; Completed <span className="gradient-text-cyan">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A detailed look at the ongoing and completed research projects in the SMR Lab,
            including objectives, methodologies, and key outcomes.
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className="card-hover group bg-card border border-border rounded-xl overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${project.color === "cyan" ? "bg-primary/15 border border-primary/30" : "bg-accent/15 border border-accent/30"}`}>
                      <FolderOpen className={`w-5 h-5 ${project.color === "cyan" ? "text-primary" : "text-purple-400"}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {project.status === "active" ? (
                          <span className="flex items-center gap-1 text-xs font-mono-label text-emerald-400">
                            <CircleDot className="w-3 h-3 animate-pulse-glow" /> Active
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-xs font-mono-label text-muted-foreground">
                            <CheckCircle2 className="w-3 h-3" /> Completed
                          </span>
                        )}
                        <span className="text-muted-foreground/50">·</span>
                        <span className="flex items-center gap-1 text-xs font-mono-label text-muted-foreground">
                          <Clock className="w-3 h-3" /> {project.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>

                {/* Highlights */}
                <div className="grid sm:grid-cols-2 gap-2 mb-5">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${project.color === "cyan" ? "text-primary" : "text-purple-400"}`} />
                      {h}
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className={project.color === "cyan" ? "tag-cyan" : "tag-violet"}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PublicationsSection() {
  const [filter, setFilter] = useState<"all" | "journal" | "conference" | "preprint">("all");
  const filtered = PUBLICATIONS.filter((p) => filter === "all" || p.type === filter);

  return (
    <section id="publications" className="py-24">
      <div className="container">
        <div className="text-center mb-12">
          <div className="section-label mb-4">Selected Publications</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Research <span className="gradient-text-cyan">Output</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Peer-reviewed journal articles, conference papers, and preprints from the SMR Lab.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {(["all", "journal", "conference", "preprint"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors capitalize ${filter === f ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-white/5"}`}
            >
              {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {filtered.map((pub, i) => (
            <div key={i} className="card-hover group bg-card border border-border rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  <span className="font-mono-label text-xs text-primary bg-primary/10 border border-primary/30 px-2 py-1 rounded">{pub.year}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">{pub.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{pub.authors}</p>
                  <p className="text-sm text-muted-foreground/70 italic mb-3">{pub.venue}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {pub.tags.map((tag) => <span key={tag} className="tag-muted">{tag}</span>)}
                    {pub.doi && (
                      <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-primary hover:underline ml-auto">
                        DOI <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://scholar.google.com/citations?user=GBPas3kAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 transition-colors"
          >
            View All on Google Scholar <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

const NEWS_TYPE_STYLES: Record<string, string> = {
  publication: "tag-cyan",
  preprint: "tag-violet",
  milestone: "tag-muted",
};

function NewsSection() {
  return (
    <section id="news" className="py-24 bg-card/30">
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-label mb-4">Lab Updates</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            News &amp; <span className="gradient-text-cyan">Highlights</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Recent publications, milestones, and announcements from the SMR Lab.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {NEWS_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className="relative pl-14 animate-fade-in-up"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-3 top-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    item.type === "publication"
                      ? "border-primary bg-primary/20"
                      : item.type === "preprint"
                      ? "border-purple-400 bg-purple-400/20"
                      : "border-muted-foreground bg-muted"
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      item.type === "publication" ? "bg-primary" : item.type === "preprint" ? "bg-purple-400" : "bg-muted-foreground"
                    }`} />
                  </div>

                  {/* Card */}
                  <div className="card-hover bg-card border border-border rounded-xl p-5">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="flex items-center gap-1.5 font-mono-label text-[11px] text-muted-foreground">
                        <Calendar className="w-3 h-3" /> {item.date}
                      </span>
                      {item.tags.map((tag) => (
                        <span key={tag} className={NEWS_TYPE_STYLES[item.type] || "tag-muted"}>{tag}</span>
                      ))}
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section id="team" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-label mb-4">Lab Members</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="gradient-text-cyan">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Meet the researchers driving innovation at the SMR Lab.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member, i) => (
            <div
              key={member.name}
              className={`card-hover group bg-card border rounded-xl p-8 animate-fade-in-up ${member.isPI ? "border-primary/40" : "border-border"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Avatar */}
              <div className="mb-6">
                {member.photo ? (
                  <div className={`w-24 h-24 rounded-full overflow-hidden border-2 ${member.isPI ? "border-primary/60" : "border-border"}`}>
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top" />
                  </div>
                ) : (
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl font-display font-bold ${member.isPI ? "bg-primary/20 border-2 border-primary/50 text-primary" : "bg-accent/20 border-2 border-accent/30 text-accent-foreground"}`}>
                    {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                )}
              </div>

              <span className="tag-cyan mb-3 inline-block">{member.role}</span>

              <h3 className="font-display text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-primary font-medium mb-1">{member.title}</p>
              <p className="text-xs text-muted-foreground mb-4">{member.dept}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{member.bio}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {member.tags.map((tag) => <span key={tag} className="tag-muted">{tag}</span>)}
              </div>

              <div className="flex flex-col gap-2">
                <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" /> {member.email}
                </a>
                {member.links.scholar && (
                  <a href={member.links.scholar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <BookOpen className="w-4 h-4" /> Google Scholar
                  </a>
                )}
                {member.links.linkedin && (
                  <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" /> LinkedIn
                  </a>
                )}

              </div>
            </div>
          ))}
        </div>

        {/* Join us */}
        <div className="mt-16 max-w-2xl mx-auto text-center bg-card border border-primary/20 rounded-xl p-10">
          <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">Join the SMR Lab</h3>
          <p className="text-muted-foreground mb-6">
            We are actively recruiting motivated graduate and undergraduate students interested
            in smart manufacturing, robotics, and AI. If you are passionate about cutting-edge
            research, we would love to hear from you.
          </p>
          <a
            href="mailto:asenanayaka@tntech.edu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            <Mail className="w-4 h-4" /> Contact Dr. Senanayaka
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-label mb-4">Get in Touch</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact <span className="gradient-text-cyan">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Whether you are a prospective student, collaborator, or industry partner,
            we welcome your inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold text-foreground">Contact Information</h3>
            {[
              { icon: Mail, label: "Email", value: "asenanayaka@tntech.edu", href: "mailto:asenanayaka@tntech.edu" },
              { icon: MapPin, label: "Address", value: "Department of Manufacturing and Engineering Technology\nTennessee Technological University\n1 William L Jones Dr, Cookeville, TN 38505", href: "https://maps.google.com/?q=Tennessee+Technological+University+Cookeville+TN" },
              { icon: ExternalLink, label: "University Profile", value: "tntech.edu — Faculty Directory", href: "https://www.tntech.edu/directory/engineering/faculty/ayantha-senanayaka.php" },
              { icon: BookOpen, label: "Google Scholar", value: "Ayantha Senanayaka — 99+ Citations", href: "https://scholar.google.com/citations?user=GBPas3kAAAAJ&hl=en" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/40 transition-colors group">
                <div className="w-10 h-10 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-mono-label text-[10px] text-muted-foreground mb-1">{label}</div>
                  <div className="text-sm text-foreground group-hover:text-primary transition-colors whitespace-pre-line">{value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Send a Message</h3>
            <p className="text-sm text-muted-foreground mb-6">Fill out the form below and we will get back to you as soon as possible.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = new FormData(form);
                window.location.href = `mailto:asenanayaka@tntech.edu?subject=${encodeURIComponent(data.get("subject") as string)}&body=${encodeURIComponent(`Name: ${data.get("name")}\n\n${data.get("message")}`)}`;
              }}
              className="space-y-4"
            >
              <div>
                <label className="font-mono-label text-[10px] text-muted-foreground block mb-1.5">YOUR NAME</label>
                <input name="name" required placeholder="John Doe" className="w-full bg-input border border-border rounded-md px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors" />
              </div>
              <div>
                <label className="font-mono-label text-[10px] text-muted-foreground block mb-1.5">SUBJECT</label>
                <input name="subject" required placeholder="Research Inquiry / Collaboration / Admissions" className="w-full bg-input border border-border rounded-md px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors" />
              </div>
              <div>
                <label className="font-mono-label text-[10px] text-muted-foreground block mb-1.5">MESSAGE</label>
                <textarea name="message" required rows={5} placeholder="Tell us about your interest or inquiry..." className="w-full bg-input border border-border rounded-md px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 active:scale-[0.98] transition-all">
                <Mail className="w-4 h-4" /> Send via Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-primary/20 border border-primary/40 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="font-display font-bold text-sm text-foreground">SMR Lab</div>
              <div className="font-mono-label text-[10px] text-muted-foreground">Smart Manufacturing &amp; Robotics</div>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => { const id = link.href.replace("#", ""); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="text-xs text-muted-foreground text-center md:text-right">
            <div>© {new Date().getFullYear()} SMR Lab · Tennessee Tech University</div>
            <div className="mt-1">Department of Manufacturing &amp; Engineering Technology</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <ProjectsSection />
      <PublicationsSection />
      <NewsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
