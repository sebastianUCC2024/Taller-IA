"use client";

import { useEffect, useState } from "react";

const content = {
  en: {
    navArchive: "Archive",
    navPersonnel: "Personnel",
    navUnit01: "Unit-01",
    navManifesto: "Manifesto",
    projectE: "Project-E 2024",
    initiate: "Initiate",
    kaworuTitle1: "First",
    kaworuTitle2: "Impression of",
    kaworuTitle3: "KAWORU",
    kaworuTitle4: "NAGISA",
    file7677: "File #7677",
    eoe: "THE END OF EVANGELION",
    kaworuQuote: "...and then the angel came to realize...",
    sephirotic: "Sephirotic System",
    hip: "Human Instrumentality Project",
    nge1: "Neon Genesis",
    nge2: "Evangelion",
    times: "TIMES",
    vol: "VOL. 01 ISSUE 12",
    news1: "The First Junior High School in Tokyo-3 has been secured. Students are advised to follow evacuation procedures immediately.",
    news2: "ANGEL ATTACK IN PROGRESS. LEVEL 1 ALERT ISSUED BY NERV.",
    asukaTitle: "ASUKA",
    pilot02: "PILOT 02",
    nerv: "NERV",
    nervQuote: "God's in his heaven. All's right with the world.",
    accessFiles: "Access Classified Files",
    beautifulBoy: '"A Beautiful Boy..."',
    ep12: 'Episode 12: She said, "Don\'t make others suffer for your personal hatred."',
    personnelTitle: "Personnel Information",
    name: "Name:",
    rank: "Rank:",
    status: "Status:",
    active: "ACTIVE",
    asukaDesc: "Selected as the 'Second Child' by the Marduk Institute. Highly gifted in synch rates.",
    rei00: "REI-00",
    reiName1: "REI",
    reiName2: "AYANAMI",
    reiDesc: "The First Child. Pilot of Unit-00. Records indicate anomalous synchronization patterns.",
    reiBg: "REI",
    manifestoTitle: "MANIFESTO",
    manifestoDesc: "Humanity faces the ultimate trial. The third impact is imminent. Are you prepared to lose your physical form?",
    initiateContact: "Initiate Contact",
    emergency: "EMERGENCY",
    systemOnline: "SYSTEM ONLINE",
    projectEvangelion: "Project Evangelion",
    navControl: "Navigation Control",
    legal: "Legal",
    contact: "Contact",
    twitter: "Twitter",
    github: "GitHub"
  },
  es: {
    navArchive: "Archivo",
    navPersonnel: "Personal",
    navUnit01: "Unidad-01",
    navManifesto: "Manifesto",
    projectE: "Proyecto-E 2024",
    initiate: "Iniciar",
    kaworuTitle1: "Primera",
    kaworuTitle2: "Impresión de",
    kaworuTitle3: "KAWORU",
    kaworuTitle4: "NAGISA",
    file7677: "Archivo #7677",
    eoe: "THE END OF EVANGELION",
    kaworuQuote: "...y entonces el ángel se dio cuenta...",
    sephirotic: "Sistema Sefirótico",
    hip: "Proyecto de Instrumentalidad Humana",
    nge1: "Neon Genesis",
    nge2: "Evangelion",
    times: "TIMES",
    vol: "VOL. 01 EDICIÓN 12",
    news1: "La Primera Escuela Secundaria de Tokyo-3 ha sido asegurada. Se recomienda a los estudiantes seguir los procedimientos de evacuación de inmediato.",
    news2: "ATAQUE DE ÁNGEL EN CURSO. ALERTA NIVEL 1 EMITIDA POR NERV.",
    asukaTitle: "ASUKA",
    pilot02: "PILOTO 02",
    nerv: "NERV",
    nervQuote: "Dios está en su cielo. Todo está bien en el mundo.",
    accessFiles: "Acceder a Archivos Clasificados",
    beautifulBoy: '"Un Chico Hermoso..."',
    ep12: 'Episodio 12: Ella dijo, "No hagas sufrir a otros por tu odio personal."',
    personnelTitle: "Información del Personal",
    name: "Nombre:",
    rank: "Rango:",
    status: "Estado:",
    active: "ACTIVO",
    asukaDesc: "Seleccionada como la 'Segunda Elegida' por el Instituto Marduk. Altamente dotada en tasas de sincronización.",
    rei00: "REI-00",
    reiName1: "REI",
    reiName2: "AYANAMI",
    reiDesc: "La Primera Elegida. Piloto de la Unidad-00. Los registros indican patrones de sincronización anómalos.",
    reiBg: "REI",
    manifestoTitle: "MANIFIESTO",
    manifestoDesc: "La humanidad se enfrenta a la prueba definitiva. El tercer impacto es inminente. ¿Estás preparado para perder tu forma física?",
    initiateContact: "Iniciar Contacto",
    emergency: "EMERGENCIA",
    systemOnline: "SISTEMA EN LÍNEA",
    projectEvangelion: "Proyecto Evangelion",
    navControl: "Control de Navegación",
    legal: "Legal",
    contact: "Contacto",
    twitter: "Twitter",
    github: "GitHub"
  }
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [lang, setLang] = useState<"es" | "en">("es");

  const t = content[lang];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["archive", "unit-01", "personnel", "manifesto"];
      let current = "";
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 350) {
            current = section;
          }
        }
      }
      
      if (window.scrollY < 100) {
        current = "";
      }
      
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -100;
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="grain-overlay pointer-events-none z-50"></div>
      <div className="scanlines pointer-events-none z-50"></div>

      {/* BEGIN: MainHeader */}
      <header className="fixed top-0 left-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-white/10 transition-all">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a 
              onClick={(e) => scrollTo(e, "top")} 
              className="text-xl font-black tracking-tighter uppercase brutalist-font cursor-pointer hover:text-red-500 transition-colors"
            >
              EVANGELION
            </a>
            <div className="hidden md:flex gap-6 text-[10px] uppercase tracking-widest text-gray-400">
              <a 
                onClick={(e) => scrollTo(e, "archive")}
                className={`cursor-pointer transition-colors pb-1 border-b-2 ${activeSection === 'archive' ? 'text-white border-red-600' : 'border-transparent hover:text-white'}`}
              >
                {t.navArchive}
              </a>
              <a 
                onClick={(e) => scrollTo(e, "personnel")}
                className={`cursor-pointer transition-colors pb-1 border-b-2 ${activeSection === 'personnel' ? 'text-white border-red-600' : 'border-transparent hover:text-white'}`}
              >
                {t.navPersonnel}
              </a>
              <a 
                onClick={(e) => scrollTo(e, "unit-01")}
                className={`cursor-pointer transition-colors pb-1 border-b-2 ${activeSection === 'unit-01' ? 'text-white border-red-600' : 'border-transparent hover:text-white'}`}
              >
                {t.navUnit01}
              </a>
              <a 
                onClick={(e) => scrollTo(e, "manifesto")}
                className={`cursor-pointer transition-colors pb-1 border-b-2 ${activeSection === 'manifesto' ? 'text-white border-red-600' : 'border-transparent hover:text-white'}`}
              >
                {t.navManifesto}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors bg-white/5 px-2 py-1 border border-white/10 hover:border-white/30"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest hidden sm:inline">{t.projectE}</span>
            <button className="bg-white text-black px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              {t.initiate}
            </button>
          </div>
        </nav>
      </header>
      {/* END: MainHeader */}

      {/* BEGIN: MainContent */}
      {/* Flex-grow ensures this area takes all remaining space, pushing the footer down naturally */}
      <main className="flex-grow relative pt-32 pb-24 px-4 md:px-8 max-w-[1200px] w-full mx-auto">
        {/* Dense Collage Grid */}
        <div id="archive" className="grid grid-cols-12 gap-4 auto-rows-auto">
          {/* Top Left: Kaworu Section */}
          <div className="col-span-12 md:col-span-4 collage-card bg-black border border-white/20 p-4 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-black leading-none brutalist-font">{t.kaworuTitle1}<br />{t.kaworuTitle2}<br />{t.kaworuTitle3}<br />{t.kaworuTitle4}</h2>
              <span className="text-[8px] border border-white/30 px-1 py-0.5 uppercase">{t.file7677}</span>
            </div>
            <div className="aspect-[3/4] bg-neutral-900 relative overflow-hidden group">
              <img alt="Kaworu Nagisa" className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 transition-all duration-700" src="https://cdn.myanimelist.net/images/characters/3/175413.jpg" />
              <div className="absolute bottom-2 left-2 text-[10px] font-bold bg-black px-2 py-1">{t.eoe}</div>
            </div>
            <p className="text-[9px] leading-relaxed text-gray-400 uppercase tracking-tighter">{t.kaworuQuote}</p>
          </div>

          {/* Top Center: Tree of Life / Kabbalah */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
            <div className="collage-card border border-white/20 p-6 flex flex-col items-center justify-center min-h-[300px] bg-neutral-950 relative overflow-hidden group">
              <div className="absolute inset-0 w-full h-full z-0 p-4">
                <img alt="Sephirotic Tree" className="w-full h-full object-cover opacity-30 mix-blend-screen group-hover:opacity-60 transition-opacity duration-700" src="https://cdn.myanimelist.net/images/anime/4/11131l.jpg" />
              </div>
              <div className="w-full h-full border-2 border-white/10 p-4 flex items-center justify-center relative z-10 bg-black/40 backdrop-blur-[2px]">
                <div className="text-center">
                  <div className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 text-white">{t.sephirotic}</div>
                  <div className="w-px h-24 bg-gradient-to-b from-white to-transparent mx-auto"></div>
                </div>
              </div>
              <div className="mt-4 text-[8px] text-center uppercase tracking-widest text-gray-400 relative z-10">{t.hip}</div>
            </div>

            {/* Mid-Center: Shinji Scene */}
            <div className="collage-card border border-white/20 overflow-hidden relative group">
              <img alt="Manga Panel" className="w-full grayscale brightness-50 group-hover:brightness-100 transition-all duration-700" src="https://cdn.myanimelist.net/images/anime/12/39305l.jpg" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/10 transition-colors duration-700">
                <h3 className="text-2xl font-black brutalist-font uppercase tracking-tighter text-center">{t.nge1}<br />{t.nge2}</h3>
              </div>
            </div>
          </div>

          {/* Top Right: Newspaper & Asuka */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
            {/* Newspaper Clippings */}
            <div className="collage-card bg-neutral-100 text-black p-4 relative overflow-hidden group">
              <img alt="Tokyo-3 Attack" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale mix-blend-multiply group-hover:opacity-40 transition-opacity duration-500" src="https://cdn.myanimelist.net/images/anime/12/11089l.jpg" />
              <div className="relative z-10">
                <div className="border-b border-black pb-2 mb-2 flex justify-between items-end">
                  <h4 className="text-2xl font-black brutalist-font">{t.times}</h4>
                  <span className="text-[8px] font-bold bg-black text-white px-1 py-0.5">{t.vol}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-[7px] leading-none uppercase font-semibold">{t.news1}</div>
                  <div className="text-[7px] leading-none uppercase font-black bg-red-600/20 p-1">{t.news2}</div>
                </div>
              </div>
            </div>

            {/* Asuka Panel */}
            <div className="collage-card border-brutalist relative aspect-square overflow-hidden group">
              <img alt="Asuka" className="w-full h-full object-cover brightness-90 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://cdn.myanimelist.net/images/characters/12/79465.jpg" />
              <div className="absolute top-0 right-0 h-full w-12 bg-white flex items-center justify-center mix-blend-screen">
                <span className="vertical-text text-black font-black text-xl brutalist-font tracking-tighter">{t.asukaTitle}</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="text-[10px] bg-red-600 text-white px-2 py-1 font-bold tracking-widest">{t.pilot02}</div>
              </div>
            </div>
          </div>

          {/* Middle: NERV Large Banner */}
          <div className="col-span-12 md:col-span-8 collage-card bg-neutral-950 border border-white/10 p-8 flex items-center justify-between group overflow-hidden relative">
            <img alt="NERV Base Background" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale brightness-50 group-hover:scale-105 group-hover:opacity-40 transition-all duration-[2s]" src="https://cdn.myanimelist.net/images/anime/1080/97658l.jpg" />
            <div className="z-10 relative pointer-events-none">
              <h2 className="text-7xl font-black brutalist-font tracking-tighter leading-none text-white drop-shadow-lg">{t.nerv}</h2>
              <p className="text-xs mt-4 max-w-md text-gray-300 uppercase tracking-widest font-bold bg-black/50 p-2 border-l-2 border-red-600 backdrop-blur-sm">{t.nervQuote}</p>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-30 group-hover:opacity-80 transition-opacity duration-700 z-10 pointer-events-none">
              <img alt="NERV Logo Pattern" className="w-64 rotate-12 drop-shadow-[0_0_15px_rgba(255,0,0,0.3)] object-cover mix-blend-screen" src="https://cdn.myanimelist.net/images/anime/13/83080l.jpg" />
            </div>
            <div className="hidden md:block z-10 relative">
              <button className="border-2 border-white/50 px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all bg-black/40 backdrop-blur-md">
                {t.accessFiles}
              </button>
            </div>
          </div>

          {/* Right Middle: Unit-01 Profile */}
          <div id="unit-01" className="col-span-12 md:col-span-4 collage-card border border-white/20 p-4 bg-black relative scroll-mt-32">
            <div className="aspect-[3/5] relative bg-neutral-900 border border-white/10 group overflow-hidden">
              <img alt="Unit-01" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s]" src="https://cdn.myanimelist.net/images/anime/12/21418l.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h3 className="text-lg font-bold brutalist-font italic text-white drop-shadow-md">{t.beautifulBoy}</h3>
                <div className="h-px bg-white/30 my-2"></div>
                <p className="text-[8px] uppercase tracking-widest text-gray-300">{t.ep12}</p>
              </div>
            </div>
          </div>

          {/* Bottom Personnel Section */}
          <div id="personnel" className="col-span-12 md:col-span-4 flex flex-col gap-4 scroll-mt-32">
            <div className="collage-card bg-neutral-950 border border-white/20 p-4 relative overflow-hidden group">
              <img alt="Tech Texture" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay group-hover:opacity-20 transition-opacity" src="https://cdn.myanimelist.net/images/anime/3/9715l.jpg" />
              <div className="relative z-10">
                <h5 className="text-xs font-bold uppercase tracking-widest border-b border-white/20 pb-2 mb-4">{t.personnelTitle}</h5>
                <div className="flex gap-4 items-start">
                  <div className="w-20 h-20 bg-neutral-800 border border-white/10 shrink-0 overflow-hidden relative">
                    <img alt="Profile" className="w-full h-full object-cover grayscale contrast-125" src="https://cdn.myanimelist.net/images/characters/12/79465.jpg" />
                    <div className="absolute inset-0 border border-red-600/30"></div>
                  </div>
                  <div className="text-[8px] uppercase space-y-1">
                    <p><span className="text-gray-500">{t.name}</span> ASUKA LANGLEY SORYU</p>
                    <p><span className="text-gray-500">{t.rank}</span> {t.pilot02}</p>
                    <p><span className="text-gray-500">{t.status}</span> <span className="text-green-500 font-bold">{t.active}</span></p>
                    <p className="text-[7px] leading-tight mt-2 text-gray-400 bg-white/5 p-1">{t.asukaDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="collage-card grid grid-cols-2 gap-2">
              <div className="aspect-square bg-neutral-900 border border-white/10 overflow-hidden relative group">
                <img alt="Panel" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-700" src="https://cdn.myanimelist.net/images/anime/8/20600l.jpg" />
                <div className="absolute top-1 left-1 bg-black/60 text-white text-[8px] px-1 font-bold">DATA_01</div>
              </div>
              <div className="aspect-square bg-neutral-900 border border-white/10 overflow-hidden relative group">
                <img alt="Panel" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-700" src="https://cdn.myanimelist.net/images/anime/7/74975l.jpg" />
                <div className="absolute top-1 left-1 bg-black/60 text-white text-[8px] px-1 font-bold">DATA_02</div>
              </div>
            </div>
          </div>

          {/* Bottom Rei Section */}
          <div className="col-span-12 md:col-span-5 collage-card bg-black border border-white/20 p-6 flex gap-6 relative overflow-hidden group">
            <img alt="Evangelion Texture" className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:opacity-30 transition-opacity duration-700" src="https://cdn.myanimelist.net/images/anime/5/41855l.jpg" />
            <div className="w-1/2 relative z-10">
              <div className="relative group/rei">
                <img alt="Rei" className="w-full border border-white/20 grayscale brightness-110 group-hover/rei:grayscale-0 group-hover/rei:border-blue-500/50 transition-all duration-500" src="https://cdn.myanimelist.net/images/characters/11/314932.jpg" />
                <div className="absolute top-2 left-2 bg-white text-black px-2 py-0.5 text-[10px] font-black brutalist-font shadow-md">{t.rei00}</div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-between relative z-10">
              <div className="space-y-4">
                <h2 className="text-4xl font-black brutalist-font leading-none uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">{t.reiName1}<br />{t.reiName2}</h2>
                <p className="text-[9px] uppercase tracking-tighter text-gray-400 bg-black/40 p-2 border-l border-white/20 backdrop-blur-sm">{t.reiDesc}</p>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
                <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
              </div>
            </div>
            <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
              <span className="vertical-text text-6xl font-black brutalist-font text-white">{t.reiBg}</span>
            </div>
          </div>

          {/* Final Footer Block */}
          <div id="manifesto" className="col-span-12 md:col-span-3 collage-card bg-white text-black p-6 flex flex-col justify-between min-h-[300px] relative overflow-hidden group scroll-mt-32">
            <img alt="Third Impact" className="absolute inset-0 w-full h-full object-cover opacity-[0.08] grayscale group-hover:opacity-20 transition-opacity duration-700" src="https://cdn.myanimelist.net/images/anime/12/21419l.jpg" />
            <div className="relative z-10">
              <h6 className="text-sm font-black brutalist-font uppercase tracking-tighter">{t.nge1}<br />{t.nge2}</h6>
              <div className="w-full h-px bg-black my-4"></div>
              <p className="text-[9px] font-bold uppercase leading-tight bg-white/80 p-1">{t.manifestoDesc}</p>
            </div>
            <div className="space-y-4 relative z-10">
              <div className="text-3xl font-black brutalist-font text-red-600 group-hover:tracking-widest transition-all duration-500">{t.manifestoTitle}</div>
              <button className="w-full bg-black text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all shadow-lg border border-transparent hover:border-black">
                {t.initiateContact}
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* END: MainContent */}

      {/* BEGIN: Footer */}
      <footer className="mt-auto border-t border-white/10 py-12 px-6 md:px-10 bg-black relative overflow-hidden w-full z-10">
        <img alt="Footer Texture" className="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none" src="https://cdn.myanimelist.net/images/anime/12/23255l.jpg" />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 relative z-10">
          
          {/* Left: Status Indicators */}
          <div className="flex flex-col gap-3 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.5em] w-full lg:w-1/3 text-left">
            <div className="flex items-center gap-3"><span className="w-2 h-2 bg-red-600 animate-pulse"></span> {t.emergency}</div>
            <div className="flex items-center gap-3"><span className="w-2 h-2 bg-white"></span> {t.systemOnline}</div>
          </div>

          {/* Center: Primary Branding */}
          <div className="text-center w-full lg:w-1/3">
            <h2 className="text-sm md:text-base uppercase tracking-[0.4em] font-black brutalist-font text-white">
              {t.projectEvangelion}
            </h2>
          </div>

          {/* Right: Navigation Controls & Links */}
          <div className="flex flex-col items-end gap-6 w-full lg:w-1/3">
            <div className="flex gap-4 items-center">
              <span className="text-[8px] md:text-[10px] brutalist-font font-bold uppercase tracking-widest text-white/50">
                {t.navControl}
              </span>
              <div className="flex gap-2">
                <button 
                  onClick={(e) => scrollTo(e as any, "top")} 
                  className="w-10 h-10 border border-white/20 flex items-center justify-center bg-black/80 hover:bg-white hover:text-black transition-colors"
                >
                  ↑
                </button>
                <button 
                  onClick={(e) => scrollTo(e as any, "manifesto")}
                  className="w-10 h-10 border border-white/20 flex items-center justify-center bg-black/80 hover:bg-white hover:text-black transition-colors"
                >
                  ↓
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-end gap-6 text-[10px] font-black uppercase brutalist-font">
              <a className="hover:text-red-500 transition-colors" href="#">{t.legal}</a>
              <a className="hover:text-red-500 transition-colors" href="#">{t.contact}</a>
              <a className="hover:text-red-500 transition-colors" href="#">{t.twitter}</a>
              <a className="hover:text-red-500 transition-colors" href="#">{t.github}</a>
            </div>
          </div>

        </div>
      </footer>
      {/* END: Footer */}
    </div>
  );
}
