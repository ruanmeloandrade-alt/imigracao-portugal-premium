import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Briefcase, CheckCircle2, FileText, MessageCircle, Scale, ShieldCheck, Users } from "lucide-react";
import "./styles.css";

const site = {
  name: "Barbara Felipe",
  role: "Advogada de Imigracao em Portugal",
  cedula: "67769L",
  city: "Lisboa, Portugal",
  email: "barbarafelipe-67769L@adv.oa.pt",
  phone: "+351 937 004 025",
  whatsapp: "https://wa.me/351937004025?text=Ol%C3%A1%20Dra.%20B%C3%A1rbara%2C%20gostaria%20de%20falar%20sobre%20o%20meu%20processo%20de%20imigra%C3%A7%C3%A3o%20em%20Portugal.",
  booking: "https://wa.me/351937004025?text=Ol%C3%A1%20Dra.%20B%C3%A1rbara%2C%20gostaria%20de%20agendar%20uma%20consulta.",
};

const services = ["Vistos", "Autorizacao de residencia", "Nacionalidade portuguesa", "Reagrupamento familiar", "Regularizacao", "Defesa migratoria", "Acoes judiciais", "Planejamento migratorio"];
const stats = [["+10", "Anos na advocacia"], ["+2.000", "Processos acompanhados"], ["Lisboa", "Atendimento em Portugal"]];
const steps = ["Analise inicial", "Estrategia juridica", "Organizacao documental", "Protocolo do processo", "Acompanhamento continuo", "Atualizacoes e suporte"];

function App() {
  return (
    <main>
      <section className="hero" id="inicio">
        <nav><strong>{site.name}</strong><a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></nav>
        <div className="heroGrid">
          <div>
            <p className="eyebrow"><ShieldCheck size={16} /> Imigracao para Portugal</p>
            <h1>Imigracao para Portugal com <em>estrategia</em>, seguranca juridica e acompanhamento proximo.</h1>
            <p className="lead">Mais do que processos, cada atendimento representa a vida de alguem recomecando em outro pais.</p>
            <div className="actions">
              <a className="button primary" href={site.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={20} /> Falar no WhatsApp</a>
              <a className="button secondary" href={site.booking} target="_blank" rel="noreferrer">Agendar consulta</a>
            </div>
            <dl className="stats">{stats.map(([value,label]) => <div key={label}><dt>{value}</dt><dd>{label}</dd></div>)}</dl>
          </div>
          <aside className="portraitCard">
            <div className="portrait">BF</div>
            <h2>{site.name}</h2>
            <p>{site.role}</p>
            <ul>
              <li><CheckCircle2 size={18} /> Cedula {site.cedula}</li>
              <li><CheckCircle2 size={18} /> {site.city}</li>
              <li><CheckCircle2 size={18} /> Atendimento online e presencial em Lisboa</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section about">
        <p className="eyebrow">Sobre</p>
        <h2>Advocacia tecnica, com a sensibilidade de quem tambem e imigrante.</h2>
        <p>Em 2021, Barbara Felipe mudou-se para Portugal com o objetivo de atuar na area da imigracao e ajudar outras pessoas a passarem por esse processo de forma segura e transparente.</p>
        <p>Desde entao, ja acompanhou mais de 2.000 processos, com foco em reduzir inseguranca, atrasos e erros que afetam diretamente a vida cotidiana de quem decide recomecar.</p>
      </section>

      <section className="section services">
        <div><p className="eyebrow">Servicos</p><h2>Atuacao completa em Direito Internacional Privado.</h2></div>
        <div className="grid">{services.map((service, index) => <article key={service}><span>{String(index + 1).padStart(2, "0")}</span><h3>{service}</h3></article>)}</div>
      </section>

      <section className="section pillars">
        <article><Scale /><h3>Estrategia juridica</h3><p>Analise tecnica para evitar atrasos, prejuizos e decisoes equivocadas.</p></article>
        <article><FileText /><h3>Transparencia</h3><p>Riscos, prazos e custos explicados de forma clara desde o primeiro contato.</p></article>
        <article><Users /><h3>Suporte proximo</h3><p>Equipe disponivel para esclarecimentos em todas as fases do processo.</p></article>
        <article><Briefcase /><h3>Visao de longo prazo</h3><p>Decisoes pensando em renovacoes, reagrupamento e nacionalidade no futuro.</p></article>
      </section>

      <section className="section process"><p className="eyebrow">Atendimento</p><h2>Uma jornada de seis etapas.</h2><ol>{steps.map((step) => <li key={step}>{step}</li>)}</ol></section>

      <section className="section cta"><p className="eyebrow">Proximo passo</p><h2>O seu processo em Portugal merece seguranca juridica.</h2><p>Tomar decisoes corretas no inicio evita atrasos, prejuizos e problemas futuros na regularizacao.</p><a className="button primary" href={site.whatsapp} target="_blank" rel="noreferrer">Consultar no WhatsApp <ArrowUpRight size={18} /></a></section>

      <footer><strong>{site.name}</strong><span>{site.email}</span><span>{site.phone}</span></footer>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<React.StrictMode><App /></React.StrictMode>);
