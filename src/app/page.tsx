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

// Definição das Variantes de Animação
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
      text: "At Rezzen, engineering is a competitive advantage. We architect ecosystems where performance, aesthetics, and scalability coexist without compromise. From Go backends to Dockerized infrastructures, every layer is designed for high-end impact. We don't build common software; we build systems that sustain companies that cannot fail."
    },
    arsenal: {
      title: "The Lab: Our Arsenal",
      sirius: "The Veterinarian's Cockpit. A high-performance management ecosystem redefining clinical precision through high-fidelity UX and robust data-driven architecture.",
      bunny: "FinTech Infrastructure Lab. Exploring the intersection of banking security and smart automation to accelerate financial operations with absolute transparency."
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
      text: "Na Rezzen, engenharia não é commodity. É vantagem competitiva. Criamos ecossistemas onde performance, estética e escalabilidade coexistem sem concessões. De backends em Go a infraestruturas containerizadas, cada camada é projetada com rigor técnico e intenção estratégica. Cada sistema que construímos nasce com um objetivo claro: operar sob pressão, escalar sem fricção e sustentar empresas que não podem falhar."
    },
    arsenal: {
      title: "O Lab: Nosso Arsenal",
      sirius: "O Cockpit do Veterinário. Um ecossistema de gestão de alta performance que redefine a precisão clínica através de UX de alta fidelidade e arquitetura robusta baseada em dados.",
      bunny: "Laboratório de Infraestrutura FinTech. Explorando a intersecção entre segurança bancária e automação inteligente para acelerar operações financeiras com transparência total."
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
      
      {/* Seletor de Idioma Fixo */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="fixed top-8 right-8 z-50 select-none"
      >
        <div className="flex items-center gap-1.5 p-1 rounded-full text-[10px] font-bold uppercase border border-black/10 shadow-lg bg-white/10 backdrop-blur-xl">
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
        <motion.div variants={itemVariants} className="w-44 h-44 rounded-[4rem] mb-12 flex items-center justify-center relative overflow-hidden group shadow-2xl border border-white/40 bg-white/20 backdrop-blur-md">
          <div className="relative w-full h-full p-6">
            <Image src="/assets/rezzenicon.png" alt="Rezzen" fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-1000" priority />
          </div>
        </motion.div>

        <motion.h1 
          variants={itemVariants} 
          className="text-6xl md:text-[90px] font-extralight tracking-tighter leading-[0.85] mb-10"
        >
          {c.hero.prefix} <span className="italic font-serif text-gold-metallic">{c.hero.arch}</span> <br />
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
            whileHover={{ y: -10, scale: 1.02 }}
            className="p-10 rounded-[3rem] group bg-white/20 hover:bg-white/40 transition-all duration-700 border border-white/40 shadow-xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="relative w-24 h-24 mb-8 mix-blend-multiply opacity-80">
                 <Image src="/assets/project-sirius-light.png" alt="Project Sirius" fill className="object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tighter">Project Sirius</h3>
              <p className="text-black/50 font-light leading-relaxed mb-8">{c.arsenal.sirius}</p>
              <div className="flex gap-2 flex-wrap text-black/60">
                 <span className="px-3 py-1 bg-black/5 rounded-full text-[8px] font-bold uppercase tracking-widest">Management Cockpit</span>
                 <span className="px-3 py-1 bg-black/5 rounded-full text-[8px] font-bold uppercase tracking-widest">Veterinary</span>
                 <span className="px-3 py-1 bg-black/5 rounded-full text-[8px] font-bold uppercase tracking-widest">Data-Driven</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="p-10 rounded-[3rem] group bg-white/20 hover:bg-white/40 transition-all duration-700 border border-white/40 shadow-xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="relative w-24 h-24 mb-8 mix-blend-multiply opacity-80">
                 <Image src="/assets/bunnyops.png" alt="BunnyOps" fill className="object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tighter">BunnyOps</h3>
              <p className="text-black/50 font-light leading-relaxed mb-8">{c.arsenal.bunny}</p>
              <div className="flex gap-2 flex-wrap text-black/60">
                 <span className="px-3 py-1 bg-black/5 rounded-full text-[8px] font-bold uppercase tracking-widest">FinTech</span>
                 <span className="px-3 py-1 bg-black/5 rounded-full text-[8px] font-bold uppercase tracking-widest">Automation</span>
                 <span className="px-3 py-1 bg-black/5 rounded-full text-[8px] font-bold uppercase tracking-widest">Security</span>
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
        className="py-32 px-6 w-full bg-white/5 border-y border-black/5 backdrop-blur-sm relative"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 relative z-10">
          <motion.div variants={itemVariants}>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-10 opacity-40">{c.tech}</h4>
            <div className="grid grid-cols-4 gap-x-6 gap-y-10 text-black/70 group">
              {eliteStack.map((tech, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.15, y: -5 }}
                  className="flex flex-col items-center gap-2 group-hover:opacity-30 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <tech.icon size={30} className={tech.color}/>
                  <span className="text-[8px] tracking-widest font-bold">
                    {tech.name}
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
                  <span className="font-bold text-lg opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</span>
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
          href="mailto:rezzen.engineering@gmail.com" 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 px-10 py-5 rounded-full border border-black/10 bg-white/20 backdrop-blur-md text-black group transition-all font-bold uppercase tracking-widest text-[10px]"
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