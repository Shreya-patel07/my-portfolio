import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Github,
  GraduationCap,
  Laptop,
  Linkedin,
  Mail,
  Network,
  Phone,
  Send,
  ServerCog,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";

const ReactLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" {...props}>
    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const JavaLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 192.756 192.756" {...props}>
    <g fillRule="evenodd" clipRule="evenodd">
      <path d="M80.372 101.729s-4.604 2.679 3.28 3.584c9.554 1.091 14.434.934 24.959-1.057 0 0 2.771 1.735 6.639 3.236-23.601 10.113-53.413-.585-34.878-5.763zM77.487 88.532s-5.165 3.823 2.726 4.639c10.206 1.054 18.262 1.14 32.211-1.544 0 0 1.926 1.955 4.957 3.023-28.531 8.345-60.307.657-39.894-6.118z" fill="#3174b9"/>
      <path d="M101.797 66.143c5.818 6.697-1.525 12.72-1.525 12.72s14.766-7.621 7.984-17.168c-6.332-8.899-11.189-13.32 15.102-28.566-.001-.001-41.27 10.303-21.561 33.014z" fill="#ca3132"/>
      <path d="M133.01 111.491s3.408 2.81-3.754 4.983c-13.619 4.125-56.694 5.369-68.659.164-4.298-1.872 3.766-4.467 6.303-5.015 2.646-.572 4.156-.468 4.156-.468-4.783-3.368-30.916 6.615-13.272 9.479 48.112 7.801 87.704-3.512 75.226-9.143zM82.587 74.857s-21.908 5.205-7.757 7.097c5.977.799 17.883.615 28.982-.316 9.068-.761 18.17-2.389 18.17-2.389s-3.195 1.371-5.51 2.949c-22.251 5.853-65.229 3.127-52.855-2.856 10.462-5.061 18.97-4.485 18.97-4.485zM121.891 96.824c22.617-11.75 12.16-23.044 4.859-21.522-1.785.373-2.586.695-2.586.695s.666-1.042 1.932-1.49c14.441-5.075 25.545 14.972-4.656 22.911-.001 0 .347-.314.451-.594z" fill="#3174b9"/>
      <path d="M108.256 8.504s12.523 12.531-11.881 31.794c-19.571 15.458-4.462 24.269-.006 34.34-11.426-10.307-19.807-19.382-14.185-27.826 8.254-12.395 31.125-18.406 26.072-38.308z" fill="#ca3132"/>
      <path d="M84.812 128.674c21.706 1.388 55.045-.771 55.836-11.044 0 0-1.518 3.894-17.941 6.983-18.529 3.488-41.386 3.082-54.938.845 0 0 2.777 2.298 17.043 3.216z" fill="#3174b9"/>
      <path d="M139.645 147.096h-.66v-.37h1.781v.37h-.66v1.848h-.461v-1.848zm3.554.092h-.008l-.656 1.755h-.301l-.652-1.755h-.008v1.755h-.438v-2.218h.643l.604 1.569.604-1.569h.637v2.218h-.424v-1.755h-.001zM81.255 167.921c-2.047 1.774-4.211 2.772-6.154 2.772-2.768 0-4.27-1.663-4.27-4.324 0-2.881 1.608-4.989 8.044-4.989h2.379v6.541h.001zm5.65 6.374v-19.732c0-5.043-2.876-8.371-9.809-8.371-4.045 0-7.591.999-10.474 2.272l.83 3.495c2.271-.834 5.207-1.607 8.089-1.607 3.994 0 5.713 1.607 5.713 4.934v2.495h-1.996c-9.702 0-14.08 3.764-14.08 9.423 0 4.876 2.885 7.648 8.316 7.648 3.491 0 6.099-1.441 8.534-3.55l.443 2.993h4.434zM105.762 174.295h-7.045l-8.483-27.601h6.154l5.265 16.961 1.172 5.096c2.656-7.371 4.541-14.854 5.484-22.057h5.984c-1.602 9.088-4.488 19.066-8.531 27.601zM132.799 167.921c-2.053 1.774-4.217 2.772-6.156 2.772-2.768 0-4.268-1.663-4.268-4.324 0-2.881 1.609-4.989 8.041-4.989h2.383v6.541zm5.652 6.374v-19.732c0-5.043-2.885-8.371-9.811-8.371-4.049 0-7.594.999-10.477 2.272l.83 3.495c2.271-.834 5.213-1.607 8.096-1.607 3.988 0 5.709 1.607 5.709 4.934v2.495h-1.996c-9.703 0-14.078 3.764-14.078 9.423 0 4.876 2.879 7.648 8.311 7.648 3.494 0 6.098-1.441 8.539-3.55l.445 2.993h4.432zM58.983 178.985c-1.61 2.353-4.214 4.216-7.061 5.267l-2.79-3.286c2.169-1.113 4.027-2.91 4.892-4.582.745-1.49 1.056-3.406 1.056-7.992v-31.515h6.005v31.08c0 6.134-.49 8.613-2.102 11.028z" fill="#ca3132"/>
    </g>
  </svg>
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shreya Patel | Full-Stack Developer & Network Engineer" },
      {
        name: "description",
        content:
          "Portfolio for Shreya Patel, a full-stack developer and network engineer specializing in Java, React, .NET, LAN/WAN, and network security.",
      },
      { property: "og:title", content: "Shreya Patel | Full-Stack Developer & Network Engineer" },
      {
        property: "og:description",
        content:
          "Explore Shreya Patel's development, infrastructure, services, projects, and contact details.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = ["Home", "About", "Skills", "Portfolio", "Contact"];

type SkillGroup = {
  title: string;
  icon: any;
  description?: string;
  items: string[];
};

const skills: SkillGroup[] = [
  {
    title: "Backend Technologies",
    icon: JavaLogo,
    description: "Developed scalable backend architectures and RESTful APIs using Java to support enterprise applications.",
    items: ["Java"],
  },
  {
    title: "Frontend Technologies",
    icon: ReactLogo,
    description: "Built dynamic, responsive user interfaces and reusable component libraries using React for modern web applications.",
    items: ["React"],
  },
  {
    title: "Frameworks & Architectures",
    icon: ServerCog,
    items: ["Spring Boot", "Spring MVC", "JDBC", "Hibernate ORM", "Microservices"],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    items: ["SQL", "MySQL", "PostgreSQL", "Git", "GitHub", "Postman"],
  },
  {
    title: "Networking & Security",
    icon: ShieldCheck,
    items: ["OSI model", "TCP/IP", "DHCP", "LAN/WAN", "Firewalls", "VPNs"],
  },
];

const experience = [
  {
    company: "Aditech Infotech Pvt.Ltd.",
    location: "Ahmedabad",
    role: "Software Developer & Support Engineer",
    period: "Aug 2024 - Dec 2024",
    details:
      "• Maintained web applications using ASP.NET (C#) and MySQL Server Database while providing ongoing technical support.",
  },
  {
    company: "Ishan Technologies",
    location: "",
    role: "Network Engineer",
    period: "November 2025 - Present",
    details:
      "• Managed enterprise LAN/WAN networks and core TCP/IP routing to ensure reliable infrastructure connectivity.\n• Resolved user-facing network issues, addressing connectivity, DHCP, firewalls, and secure VPN access.\n• Troubleshot website issues to maintain optimal performance.",
  },
];

const education = [
  "BCA — President Institute of Computer Application, Gujarat University, Ahmedabad (2022–2025) | CGPA: 7.77",
  "HSC — Shree Hirpara Vidhyalay (2022) | Percentage: 79%, Percentile: 89",
  "SSC — Shree Kanya Vidhyalay (2020) | Percentage: 75%, Percentile: 84",
];

const projects = [
  {
    name: "Bugsens",
    type: "AI-Powered Developer Workspace",
    liveLink: "https://bugsens-app.vercel.app/",
    stack: "React.js, Java, Spring Boot",
    detail:
      "A full-stack, AI-driven workspace enhancing developer productivity with multi-modal debugging tools and secure user authentication.",
  },
  {
    name: "CO2 Marketplace",
    type: "Web Application",
    liveLink: "https://co2marketplace.vercel.app/",
    stack: "React.js, Tailwind CSS",
    detail:
      "A modern platform for tracking and managing carbon footprints, promoting environmental sustainability through an intuitive marketplace interface.",
  },
  {
    name: "E-Commerce Platform",
    type: "Full-Stack Application",
    githubLink: "https://github.com/Shreya-patel07/ecom-platform",
    stack: "Spring Boot, PostgreSQL, React.js",
    detail:
      "A comprehensive e-commerce platform featuring scalable backend infrastructure, robust APIs, structured data handling, and secure operations.",
  },
  {
    name: "Car Rental System",
    type: "Desktop Application",
    githubLink: "https://github.com/Shreya-patel07/car-rental-system",
    stack: "Java",
    detail:
      "A desktop system with admin and user roles for vehicle management, bookings, automated reports, and billing.",
  },
];

function Index() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "02212f3d-98a9-470d-96c9-605e3cb0989c");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSent(true);
        event.currentTarget.reset();
        setTimeout(() => setSent(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <nav className="section-shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 sm:flex sm:items-center sm:justify-between">
          <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="Shreya Patel home">
            <span className="grid size-10 shrink-0 place-items-center rounded-md bg-primary font-display text-base font-bold text-primary-foreground shadow-glow">
              SP
            </span>
            <span className="truncate font-display text-sm font-semibold text-foreground sm:text-base">
              Shreya Patel
            </span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-secondary hover:text-foreground" asChild>
              <a href="https://github.com/Shreya-patel07" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="size-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-secondary hover:text-foreground" asChild>
              <a href="https://www.linkedin.com/in/shreya-patel-785931315" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="size-4" />
              </a>
            </Button>
            <Button variant="glass" size="sm" asChild>
              <a href="mailto:shreyaghadiya07@gmail.com" aria-label="Email Shreya Patel">
                <Mail className="size-4" />
                <span className="hidden sm:inline">Email</span>
              </a>
            </Button>
          </div>
        </nav>
      </header>

      <section id="home" className="tech-grid relative min-h-[92vh] pt-28">
        <div className="section-shell grid items-center gap-12 pb-20 pt-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.8fr)] lg:pt-16">
          <div className="reveal-up max-w-4xl">

            <h1 className="font-display text-3xl font-bold leading-snug text-gradient-3d sm:text-4xl lg:text-5xl">
              Full-Stack Developer & Network Engineer
            </h1>
            <div className="mt-6 text-lg text-muted-foreground sm:text-xl">
              <p>
                I design and develop scalable and high-performance digital solutions to meet the needs of modern businesses.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="hero" size="lg" asChild>
                <a href="#portfolio">
                  View My Work
                  <ArrowRight />
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>

          <div className="reveal-up mx-auto w-full max-w-sm lg:justify-self-end">
            <div className="glass-panel relative overflow-hidden rounded-lg p-5">
              <div className="aspect-[4/5] rounded-xl border border-border bg-transparent p-5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
                <div className="flex h-full w-full overflow-hidden rounded-lg border border-primary/20 shadow-sm">
                  <img src="/profile.png" alt="Shreya Patel" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell py-20">
        <SectionHeading eyebrow="About Me" title="Education and experience shaped across software and networks" />
        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          <div className="space-y-5">
            {experience.map((item) => (
              <article key={item.company} className="glass-panel panel-3d-hover rounded-lg p-6">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="min-w-0">
                    <p className="font-display text-xl font-bold text-foreground">{item.company}</p>
                    <p className="mt-1 text-sm font-semibold text-primary">{item.role}</p>
                  </div>
                  <BriefcaseBusiness className="size-6 shrink-0 text-accent" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {[item.location, item.period].filter(Boolean).join(" | ")}
                </p>
                <div className="mt-4 space-y-2">
                  {item.details.split("\n").map((line, i) => (
                    <p key={i} className="leading-7 text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="glass-panel panel-3d-hover rounded-lg p-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="size-7 text-primary" />
              <h3 className="font-display text-2xl font-bold text-foreground">Education</h3>
            </div>
            <div className="mt-6 space-y-4">
              {education.map((item) => (
                <div key={item} className="rounded-md border border-border bg-secondary p-4">
                  <p className="leading-7 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-surface py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="Skills" title="Tools and technologies I enjoy working with" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.title} className="glass-panel panel-3d-hover rounded-xl p-7">
                  <Icon className="size-16 text-primary" />
                  <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
                    {group.title}
                  </h3>
                  {group.description && (
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {group.description}
                    </p>
                  )}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-border bg-secondary px-3 py-2 text-sm font-medium text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-surface py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="Portfolio" title="Notable projects across full-stack and desktop systems" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="glass-panel panel-3d-hover flex flex-col justify-between rounded-lg p-6 transition-transform">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-display text-xl font-bold text-foreground">{project.name}</p>
                      <p className="mt-1 text-sm font-semibold text-primary">{project.type}</p>
                    </div>
                    <Network className="size-6 shrink-0 text-accent" />
                  </div>
                  <p className="mt-4 rounded-md bg-code px-3 py-2 font-mono text-sm text-code-foreground w-fit">
                    {project.stack}
                  </p>
                  <p className="mt-4 leading-7 text-muted-foreground">{project.detail}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.liveLink && (
                    <Button asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        Live Demo
                        <ArrowRight className="ml-2 size-4" />
                      </a>
                    </Button>
                  )}
                  {project.downloadLink && (
                    <Button asChild>
                      <a href={project.downloadLink} target="_blank" rel="noopener noreferrer">
                        Download App
                        <Laptop className="ml-2 size-4" />
                      </a>
                    </Button>
                  )}
                  {project.videoLink && (
                    <Button variant="secondary" asChild>
                      <a href={project.videoLink} target="_blank" rel="noopener noreferrer">
                        Watch Demo
                      </a>
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button variant={project.liveLink || project.downloadLink ? "outline" : "default"} asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 size-4" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell py-20">
        <SectionHeading eyebrow="Contact" title="Let’s discuss a secure, modern web solution" />
        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="space-y-4">
            <a href="tel:+919904974612" className="glass-panel panel-3d-hover flex items-center gap-4 rounded-lg p-5">
              <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
                <Phone className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-muted-foreground">Phone</span>
                <span className="block truncate font-semibold text-foreground">+91 99049 74612</span>
              </span>
            </a>
            <a
              href="mailto:shreyaghadiya07@gmail.com"
              className="glass-panel panel-3d-hover flex items-center gap-4 rounded-lg p-5"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
                <Mail className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-muted-foreground">Email</span>
                <span className="block truncate font-semibold text-foreground">shreyaghadiya07@gmail.com</span>
              </span>
            </a>
            <a
              href="https://github.com/Shreya-patel07"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel panel-3d-hover flex items-center gap-4 rounded-lg p-5"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
                <Github className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-muted-foreground">GitHub</span>
                <span className="block truncate font-semibold text-foreground">github.com/Shreya-patel07</span>
              </span>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel panel-3d-hover rounded-lg p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-foreground">Name</span>
                <input
                  name="name"
                  required
                  className="h-11 w-full rounded-md border border-input bg-background px-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="Your name"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-foreground">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="h-11 w-full rounded-md border border-input bg-background px-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-4 block space-y-2">
              <span className="text-sm font-semibold text-foreground">Message</span>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full resize-none rounded-md border border-input bg-background px-3 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="Tell me about your project or role"
              />
            </label>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" variant="hero" size="lg">
                Send Message
                <Send />
              </Button>
              {sent ? <p className="text-sm font-medium text-success">Message sent successfully!</p> : null}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-normal text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
