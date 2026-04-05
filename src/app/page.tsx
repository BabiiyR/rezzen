'use client';

import { useState } from "react";
import Image from "next/image";
import { MoveRight, Globe, Code2, Cpu, ArrowDown, Mail, Database, Terminal } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Ícones Técnicos Coloridos
import { SiDocker, SiPostgresql, SiGo, SiPython, SiReact, SiVite, SiTailwindcss, SiFirebase, SiHtml5, SiCss } from "react-icons/si";

// Definição das Variantes de Animação com Tipagem explícita para o TypeScript
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const languages = {
  en: {
    hero: { prefix: "Delicate", arch: "Architecture.", eng: "Intense Engineering." },
    manifesto: {
      title: "The Engineering Manifesto",
      text: "Graduate in Computer Engineering from UNIVESP, I architect ecosystems where Intense Engineering meets Delicate Architecture. From Go backends to Dockerized infrastructures, every line is designed for high-end performance and elite impact."
    },
    arsenal: {
      title: "The Lab: Our Arsenal",
      sirius: "CRM Veterinary Medicine. Redefining Customer Relationship Management through high-fidelity UX and robust systems.",
      bunny: "FinTech infrastructure lab. Exploring the intersection of banking security, PostgreSQL precision, and elite user-centric design."
    },
    tech: "Elite Tech Stack",
    process: {
      title: "Consultive Process",
      s1: "Audit & UX Diagnose",
      s2: "Scalable Architecture (Go/Node)",
      s3: "Dockerized Deployment"
    },
    contact: "Initiate Architecture"
  },
  pt: {
    hero: { prefix: "Arquitetura", arch: "Delicada.", eng: "Engenharia Intensa." },
    manifesto: {
      title: "Manifesto de Engenharia",
      text: "Graduada em Engenharia da Computação pela UNIVESP, arquitetamos ecossistemas onde a Engenharia Intensa encontra a Arquitetura Delicada. De backends em Go a infraestruturas Dockerizadas, cada linha é projetada para performance de luxo e impacto de elite."
    },
    arsenal: {
      title: "O Lab: Nosso Arsenal",
      sirius: "CRM Veterinário. Redefinindo a gestão de relacionamento com o cliente através de UX de alta fidelidade e sistemas robustos.",
      bunny: "Laboratório de infraestrutura FinTech. Explorando a intersecção entre segurança bancária, precisão PostgreSQL e design centrado no usuário."
    },
    tech: "Stack Tecnológico de Elite",
    process: {
      title: "Processo Consultivo",
      s1: "Auditoria e Diagnose UX",
      s2: "Arquitetura Escalável (Go/Node)",
      s3: "Deploy Dockerizado"
    },
    contact: "Iniciar Arquitetura"
  }
};

export default function Home() {
  const [lang, setLang] = useState('pt');
  const c = languages[lang as keyof typeof languages];

  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-transparent text-black selection:bg-gold-muted/30 antialiased overflow-x-hidden">
      
      {/* Seletor de Idioma Fixo */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="fixed top-8 right-8 z-50 select-none"
      >
        <div className="glass-card flex items-center gap-1.5 p-1 rounded-full text-[10px] font-bold uppercase border-white/20 shadow-lg bg-white/10 backdrop-blur-xl">
          <Globe size={14} className="ml-2 mr-1 opacity-50" />
          <button onClick={() => setLang('en')} className={`px-4 py-2 rounded-full transition-all duration-300 ${lang === 'en' ? 'bg-white text-black shadow-sm' : 'opacity-40 hover:opacity-100'}`}>EN</button>
          <button onClick={() => setLang('pt')} className={`px-4 py-2 rounded-full transition-all duration-300 ${lang === 'pt' ? 'bg-white text-black shadow-sm' : 'opacity-40 hover:opacity-100'}`}>PT</button>
        </div>
      </motion.nav>

      {/* SECTION 1: HERO */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="h-screen w-full flex flex-col items-center justify-center text-center px-6 relative"
      >
        <motion.div variants={itemVariants} className="glass-card w-44 h-44 rounded-[4rem] mb-12 flex items-center justify-center relative overflow-hidden group shadow-2xl border-white/40">
          <div className="relative w-full h-full mix-blend-multiply p-6">
            <Image src="/assets/rezzenicon.png" alt="Rezzen" fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-1000" priority />
          </div>
        </motion.div>

        <motion.h1 
          variants={itemVariants} 
          className="text-6xl md:text-[90px] font-extralight tracking-tighter leading-[0.85] mb-10"
        >
          {c.hero.prefix} <span className="text-gold-metallic italic">{c.hero.arch}</span> <br />
          <span className="font-normal">{c.hero.eng}</span>
        </motion.h1>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 opacity-30"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.section>

      {/* SECTION 2: MANIFESTO */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
        className="py-32 px-6 max-w-4xl text-center flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6 opacity-40">
          <Terminal size={20} />
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold">{c.manifesto.title}</span>
        </motion.div>
        <motion.p variants={itemVariants} className="text-2xl md:text-4xl font-light leading-relaxed tracking-tight text-black/80 italic">
          "{c.manifesto.text}"
        </motion.p>
      </motion.section>

      {/* SECTION 3: ARSENAL */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-32 px-6 w-full max-w-6xl"
      >
        <motion.h2 variants={itemVariants} className="text-[10px] uppercase tracking-[0.5em] font-bold mb-20 opacity-40 text-center">{c.arsenal.title}</motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10, rotateX: 2, rotateY: -2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="glass-card p-10 rounded-[3rem] group hover:bg-white/30 transition-all duration-700 border-white/40 shadow-xl overflow-hidden relative"
          >
            {/* CORREÇÃO: Tailwind v4 bg-linear-to-br */}
            <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10">
              <div className="relative w-24 h-24 mb-8 mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <Image src="/assets/project-sirius-light.png" alt="Project Sirius" fill className="object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tighter">Project Sirius</h3>
              <p className="text-black/50 font-light leading-relaxed mb-8">{c.arsenal.sirius}</p>
              <div className="flex gap-2 flex-wrap text-black/60">
                 <span className="px-3 py-1 bg-black/5 rounded-full text-[8px] font-bold uppercase tracking-widest">CRM</span>
                 <span className="px-3 py-1 bg-black/5 rounded-full text-[8px] font-bold uppercase tracking-widest">Veterinary</span>
                 <span className="px-3 py-1 bg-black/5 rounded-full text-[8px] font-bold uppercase tracking-widest">PostgreSQL</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10, rotateX: -2, rotateY: 2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="glass-card p-10 rounded-[3rem] group hover:bg-white/30 transition-all duration-700 border-white/40 shadow-xl overflow-hidden relative"
          >
            {/* CORREÇÃO: Tailwind v4 bg-linear-to-br */}
            <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10">
              <div className="relative w-24 h-24 mb-8 mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity">
                 <Image src="/assets/bunnyops.png" alt="BunnyOps" fill className="object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tighter">BunnyOps</h3>
              <p className="text-black/50 font-light leading-relaxed mb-8">{c.arsenal.bunny}</p>
              <div className="flex gap-2 flex-wrap text-black/60">
                 <span className="px-3 py-1 bg-black/5 rounded-full text-[8px] font-bold uppercase tracking-widest">FinTech</span>
                 <span className="px-3 py-1 bg-black/5 rounded-full text-[8px] font-bold uppercase tracking-widest">Firebase</span>
                 <span className="px-3 py-1 bg-black/5 rounded-full text-[8px] font-bold uppercase tracking-widest">Python</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 4: ELITE STACK */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
        className="py-32 px-6 w-full bg-white/5 border-y border-white/10 backdrop-blur-sm relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 relative z-10">
          <motion.div variants={itemVariants}>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-10 opacity-40">{c.tech}</h4>
            <div className="grid grid-cols-4 gap-x-6 gap-y-10 text-black/70 group">
              {[SiDocker, SiPostgresql, SiGo, SiPython, SiReact, SiVite, SiTailwindcss, SiFirebase].map((Icon, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.15, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="flex flex-col items-center gap-2 group-hover:opacity-30 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <Icon size={30} className={
                    i === 0 ? "text-[#2496ED]" :
                    i === 1 ? "text-[#336791]" :
                    i === 2 ? "text-[#00ADD8]" :
                    i === 3 ? "text-[#3776AB]" :
                    i === 4 ? "text-[#61DAFB]" :
                    i === 5 ? "text-[#646CFF]" :
                    i === 6 ? "text-[#06B6D4]" :
                    "text-[#FFCA28]"
                  }/>
                  <span className="text-[8px] tracking-widest font-bold">
                    {Icon.name.replace('Si', '').toUpperCase()}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-10 opacity-40">{c.process.title}</h4>
            <ul className="space-y-6">
              {[c.process.s1, c.process.s2, c.process.s3].map((step, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <span className="text-gold-metallic font-bold text-lg opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                  <span className="text-lg font-light tracking-tight">{step}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 5: CONTACT & FOOTER */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={containerVariants}
        className="py-40 flex flex-col items-center"
      >
        <motion.a 
          variants={itemVariants}
          href="mailto:babiiyr@outlook.com" 
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(166, 139, 91, 0.15)" }}
          className="btn-clean-glass text-black group transition-all"
        >
          <Mail size={16} className="opacity-40" />
          {c.contact}
          <MoveRight size={16} className="opacity-40 group-hover:translate-x-2 transition-transform" />
        </motion.a>
      </motion.section>

      <footer className="py-20 flex flex-col items-center opacity-30 gap-6">
        <div className="h-10 w-px bg-black" />
        <p className="text-[9px] uppercase tracking-[0.8em] font-bold italic text-center px-6">
          Rezzen &copy; 2026 | Bárbara Rezende Computer Engineering | High-End Systems
        </p>
      </footer>
    </main>
  );
}