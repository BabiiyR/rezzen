'use client';

import { useState } from "react";
import Image from "next/image";
import { MoveRight, Globe, ArrowDown, Mail, Terminal } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Ícones Técnicos Coloridos
import { 
  SiDocker, SiPostgresql, SiGo, SiPython, 
  SiReact, SiVite, SiTailwindcss, SiFirebase 
} from "react-icons/si";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const languages = {
  en: {
    hero: { prefix: "Delicate", arch: "Architecture.", eng: "Intense Engineering." },
    manifesto: {
      title: "The Engineering Manifesto",
      text: "At Rezzen, engineering is a competitive advantage. We architect ecosystems where performance, aesthetics, and scalability coexist without compromise. We build systems that sustain companies that cannot fail."
    },
    arsenalTitle: "The Lab: Our Arsenal",
    techTitle: "Elite Tech Stack",
    processTitle: "Consultive Process",
    steps: ["Audit & UX Diagnose", "Scalable Architecture (Go/Node)", "Dockerized Deployment"],
    contact: "Initiate Architecture",
    projects: [
      {
        title: "Project Sirius",
        subtitle: "Veterinary CRM Ecosystem",
        description: "Redefining medical relationship management through high-fidelity UX and a robust system designed for professional clinical scale.",
        tech: ["CRM", "Firebase", "PostgreSQL"],
        img: "/assets/project-sirius-light.png"
      },
      {
        title: "BunnyOps",
        subtitle: "Financial Operations & Automation",
        description: "Streamlining complex financial workflows through intelligent automation and real-time data visualization, focusing on banking security.",
        tech: ["FinTech", "Firebase", "Security"],
        img: "/assets/bunnyops.png"
      }
    ]
  },
  pt: {
    hero: { prefix: "Arquitetura", arch: "Delicada.", eng: "Engenharia Intensa." },
    manifesto: {
      title: "Manifesto de Engenharia",
      text: "Na Rezzen, engenharia não é commodity. É vantagem competitiva. Criamos ecossistemas onde performance, estética e escalabilidade coexistem sem concessões. Construímos sistemas que sustentam empresas que não podem falhar."
    },
    arsenalTitle: "O Lab: Nosso Arsenal",
    techTitle: "Stack Tecnológico de Elite",
    processTitle: "Processo Consultivo",
    steps: ["Auditoria e Diagnose UX", "Arquitetura Escalável (Go/Node)", "Deploy Dockerizado"],
    contact: "Iniciar Arquitetura",
    projects: [
      {
        title: "Project Sirius",
        subtitle: "Ecossistema de CRM Veterinário",
        description: "Redefinindo a gestão de relacionamento e histórico clínico através de uma UX de alta fidelidade e sistema robusto para escala profissional.",
        tech: ["CRM", "Firebase", "PostgreSQL"],
        img: "/assets/project-sirius-light.png"
      },
      {
        title: "BunnyOps",
        subtitle: "Operações Financeiras & Automação",
        description: "Otimizando fluxos financeiros complexos através de automação inteligente e visualização de dados em tempo real com foco em segurança.",
        tech: ["FinTech", "Firebase", "Segurança"],
        img: "/assets/bunnyops.png"
      }
    ]
  }
};

export default function Home() {
  const [lang, setLang] = useState('pt');
  const c = languages[lang as keyof typeof languages];

  const eliteStack = [
    { icon: SiDocker, name: "DOCKER", color: "text-[#2496ED]" },
    { icon: SiPostgresql, name: "POSTGRES", color: "text-[#336791]" },
    { icon: SiGo, name: "GO", color: "text-[#00ADD8]" },
    { icon: SiPython, name: "PYTHON", color: "text-[#3776AB]" },
    { icon: SiReact, name: "REACT", color: "text-[#61DAFB]" },
    { icon: SiVite, name: "VITE", color: "text-[#646CFF]" },
    { icon: SiTailwindcss, name: "TAILWIND", color: "text-[#06B6D4]" },
    { icon: SiFirebase, name: "FIREBASE", color: "text-[#FFCA28]" },
  ];

  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-transparent text-black selection:bg-gold-muted/30 antialiased overflow-x-hidden">
      
      <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="fixed top-8 right-8 z-50">
        <div className="flex items-center gap-1.5 p-1 rounded-full text-[10px] font-bold uppercase border border-black/10 shadow-lg bg-white/10 backdrop-blur-xl">
          <Globe size={14} className="ml-2 mr-1 opacity-50" />
          <button onClick={() => setLang('en')} className={`px-4 py-2 rounded-full transition-all ${lang === 'en' ? 'bg-white text-black' : 'opacity-40'}`}>EN</button>
          <button onClick={() => setLang('pt')} className={`px-4 py-2 rounded-full transition-all ${lang === 'pt' ? 'bg-white text-black' : 'opacity-40'}`}>PT</button>
        </div>
      </motion.nav>

      <motion.section variants={containerVariants} initial="hidden" animate="visible" className="h-screen w-full flex flex-col items-center justify-center text-center relative">
        <motion.div variants={itemVariants} className="w-44 h-44 rounded-[4rem] mb-12 flex items-center justify-center relative shadow-2xl border border-white/40 bg-white/20 backdrop-blur-md">
          <Image src="/assets/rezzenicon.png" alt="Rezzen" fill className="object-contain p-8" priority />
        </motion.div>
        <motion.h1 variants={itemVariants} className="text-6xl md:text-[90px] font-extralight tracking-tighter leading-[0.85] mb-10">
          {c.hero.prefix} <span className="italic font-serif text-gold-metallic">{c.hero.arch}</span> <br />
          <span className="font-normal">{c.hero.eng}</span>
        </motion.h1>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="py-32 px-6 max-w-4xl text-center flex flex-col items-center">
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6 opacity-40">
          <Terminal size={20} />
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold">{c.manifesto.title}</span>
        </motion.div>
        <motion.p variants={itemVariants} className="text-2xl md:text-4xl font-light italic">"{c.manifesto.text}"</motion.p>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="py-32 px-6 w-full max-w-6xl">
        <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-20 opacity-40 text-center">{c.arsenalTitle}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {c.projects.map((project, idx) => (
            <motion.div key={idx} variants={itemVariants} whileHover={{ y: -10 }} className="p-10 rounded-[3rem] bg-white/20 border border-white/40 shadow-xl relative overflow-hidden group">
              <div className="relative w-24 h-24 mb-8 mix-blend-multiply opacity-80">
                <Image src={project.img} alt={project.title} fill className="object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-xs font-bold text-gold-metallic uppercase tracking-widest mb-4">{project.subtitle}</p>
              <p className="text-black/50 font-light mb-8">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-black/5 rounded-full text-[8px] font-bold uppercase tracking-widest">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" variants={containerVariants} className="py-32 px-6 w-full bg-white/5 border-y border-black/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <motion.div variants={itemVariants}>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-10 opacity-40">{c.techTitle}</h4>
            <div className="grid grid-cols-4 gap-10 group">
              {eliteStack.map((tech, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group-hover:opacity-30 hover:opacity-100 transition-opacity">
                  <tech.icon size={30} className={tech.color}/>
                  <span className="text-[8px] font-bold">{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-10 opacity-40">{c.processTitle}</h4>
            <ul className="space-y-6">
              {c.steps.map((step, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="font-bold opacity-20">0{i+1}</span>
                  <span className="text-lg font-light">{step}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <footer className="py-40 flex flex-col items-center">
        <motion.a variants={itemVariants} href="mailto:rezzen.engineering@gmail.com" className="flex items-center gap-4 px-10 py-5 rounded-full border border-black/10 bg-white/20 backdrop-blur-md font-bold uppercase tracking-widest text-[10px]">
          <Mail size={16} className="opacity-40" /> {c.contact} <MoveRight size={16} className="opacity-40" />
        </motion.a>
        <p className="mt-20 text-[9px] uppercase tracking-[0.8em] font-bold opacity-30 text-center">
          Rezzen &copy; 2026 | Bárbara Rezende Computer Engineering
        </p>
      </footer>
    </main>
  );
}