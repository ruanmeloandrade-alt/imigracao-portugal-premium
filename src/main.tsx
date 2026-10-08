import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, BookOpen, CheckCircle2, FileText, Globe2, Landmark, Menu, MessageCircle, Scale, ShieldCheck, Users, X } from 'lucide-react';
import './styles.css';

type Lang = 'pt' | 'en' | 'es';
const SITE = { name: 'Barbara Felipe', role: 'Advogada de Imigracao em Portugal', cedula: '67769L', city: 'Lisboa, Portugal', email: 'barbarafelipe-67769L@adv.oa.pt', phone: '+351 937 004 025', wa: '351937004025' };

const copy = {
  pt: {
    nav: ['Sobre', 'Servicos', 'Depoimentos', 'Atendimento', 'FAQ', 'Contato'],
    hero: ['Imigracao para Portugal', 'Imigracao para Portugal com estrategia, seguranca juridica e acompanhamento proximo.', 'Mais do que processos, cada atendimento representa a vida de alguem recomecando em outro pais.', 'Falar no WhatsApp', 'Agendar consulta'],
    stats: ['+10 anos na advocacia', '+2.000 processos acompanhados', 'Lisboa · Portugal'],
    aboutTitle: 'Advocacia tecnica, com a sensibilidade de quem tambem e imigrante.',
    about: ['Ha mais de 10 anos iniciou a carreira em advocacia no Brasil, com base tecnica em escritorio de grande relevancia e atendimento a empresas nacionais e multinacionais.', 'Em 2021 mudou-se para Portugal com o objetivo claro de atuar em imigracao e ajudar pessoas a passarem por esse processo com seguranca e transparencia.', 'Por tambem ser imigrante, entende a incerteza, os atrasos burocraticos e o impacto do processo na vida pessoal e profissional.'],
    servicesTitle: 'Atuacao completa em Direito Internacional Privado, com foco em imigracao para Portugal.',
    servicesLead: 'Acompanhamento desde a primeira analise ate a finalizacao do processo, com riscos, prazos e proximos passos claros.',
    diffTitle: 'Uma advocacia construida para reduzir a inseguranca de quem recomeca.',
    processTitle: 'Uma jornada de seis etapas, do primeiro contato a sua nova vida em Portugal.',
    faqTitle: 'Respostas claras antes mesmo da primeira conversa.',
    ctaTitle: 'O seu processo em Portugal merece seguranca juridica e acompanhamento estrategico.',
    ctaLead: 'Tomar decisoes corretas no inicio evita atrasos, prejuizos e problemas futuros na sua regularizacao.',
  },
  en: {
    nav: ['About', 'Services', 'Testimonials', 'Process', 'FAQ', 'Contact'],
    hero: ['Immigration to Portugal', 'Immigration to Portugal with strategy, legal security and close guidance.', 'More than cases, each client represents someone starting a new life in another country.', 'Chat on WhatsApp', 'Book consultation'],
    stats: ['+10 years practicing law', '+2,000 cases handled', 'Lisbon · Portugal'],
    aboutTitle: 'Technical legal practice with the sensitivity of someone who is also an immigrant.',
    about: ['Barbara Felipe began her legal career in Brazil, advising large companies and multinationals.', 'In 2021, she moved to Portugal to practice immigration law and help others navigate the process safely and transparently.', 'As an immigrant herself, she understands uncertainty, bureaucracy and how immigration affects personal and professional life.'],
    servicesTitle: 'Full Private International Law practice, focused on immigration to Portugal.',
    servicesLead: 'Support from the first assessment to the end of your case, with clear risks, deadlines and next steps.',
    diffTitle: 'A law practice built to reduce the uncertainty of starting over.',
    processTitle: 'A six-step journey, from first contact to your new life in Portugal.',
    faqTitle: 'Clear answers before our first conversation.',
    ctaTitle: 'Your process in Portugal deserves legal security and strategic guidance.',
    ctaLead: 'Making the right decisions early prevents delays, losses and future problems with your status.',
  },
  es: {
    nav: ['Acerca', 'Servicios', 'Testimonios', 'Proceso', 'FAQ', 'Contacto'],
    hero: ['Inmigracion a Portugal', 'Inmigracion a Portugal con estrategia, seguridad juridica y acompanamiento cercano.', 'Mas que procesos, cada caso representa la vida de alguien que recomienza en otro pais.', 'Hablar por WhatsApp', 'Agendar consulta'],
    stats: ['+10 anos en abogacia', '+2.000 procesos acompanados', 'Lisboa · Portugal'],
    aboutTitle: 'Abogacia tecnica, con la sensibilidad de quien tambien es inmigrante.',
    about: ['Barbara Felipe inicio su carrera juridica en Brasil, asesorando grandes empresas y multinacionales.', 'En 2021 se mudo a Portugal para actuar en inmigracion y ayudar a otras personas con seguridad y transparencia.', 'Como inmigrante, entiende la incertidumbre, la burocracia y el impacto del proceso en la vida personal y profesional.'],
    servicesTitle: 'Actuacion completa en Derecho Internacional Privado, con foco en inmigracion a Portugal.',
    servicesLead: 'Acompanamiento desde el primer analisis hasta la finalizacion, con riesgos, plazos y proximos pasos claros.',
    diffTitle: 'Una abogacia construida para reducir la inseguridad de quien recomienza.',
    processTitle: 'Un camino de seis etapas, del primer contacto a su nueva vida en Portugal.',
    faqTitle: 'Respuestas claras antes de la primera conversacion.',
    ctaTitle: 'Su proceso en Portugal merece seguridad juridica y acompanamiento estrategico.',
    ctaLead: 'Tomar decisiones correctas al inicio evita retrasos y problemas futuros.',
  },
};

const services = {
  pt: ['Vistos|D7, D8 nomada digital, D2 empreendedor, estudo, trabalho e reunificacao.', 'Autorizacao de residencia|Pedido, instrucao e acompanhamento na AIMA.', 'Nacionalidade portuguesa|Elegibilidade por residencia, casamento, ascendencia ou sefardismo.', 'Reagrupamento familiar|Planejamento para conjuge, filhos e ascendentes.', 'Regularizacao|Via mais segura para regularizar estatuto migratorio.', 'Defesa migratoria|Expulsao, indeferimentos e recursos administrativos.', 'Acoes judiciais|Intimacoes, acoes administrativas e medidas cautelares.', 'Planejamento migratorio|Visto, cronograma, documentacao e estrutura antes da mudanca.'],
  en: ['Visas|D7, D8 digital nomad, D2 entrepreneur, study, work and reunification.', 'Residence permit|Application, preparation and AIMA appointment support.', 'Portuguese citizenship|Eligibility through residence, marriage, ancestry or Sephardic origin.', 'Family reunification|Planning for spouses, children and parents.', 'Regularization|Safest path to regularize immigration status.', 'Immigration defense|Expulsion, denials and administrative appeals.', 'Court actions|Injunctions, administrative actions and interim measures.', 'Immigration planning|Visa, timeline, documents and structure before moving.'],
  es: ['Visados|D7, D8 nomada digital, D2 emprendedor, estudio, trabajo y reunificacion.', 'Autorizacion de residencia|Solicitud, preparacion y acompanamiento en AIMA.', 'Nacionalidad portuguesa|Elegibilidad por residencia, matrimonio, ascendencia o sefardismo.', 'Reagrupacion familiar|Planificacion para conyuge, hijos y ascendientes.', 'Regularizacion|Via mas segura para regularizar estatus migratorio.', 'Defensa migratoria|Expulsion, denegaciones y recursos administrativos.', 'Acciones judiciales|Intimaciones, acciones administrativas y medidas cautelares.', 'Planificacion migratoria|Visado, cronograma, documentos y estructura antes de mudarse.'],
};

const testimonials = [
  ['Anali Alencar', 'Nacionalidade portuguesa', 'Estou muito satisfeita com o meu processo, fui muito bem amparada e com tudo resolvido em tempo.'],
  ['Gabriel Oliveira', 'Nacionalidade portuguesa', 'A Dra. Barbara foi sempre muito atenta aos prazos e esse cuidado fez muita diferenca.'],
  ['Victor Brito', 'Autorizacao de residencia', 'Profissional extremamente competente, dedicada e atenta aos detalhes.'],
  ['Lais Silva', 'Autorizacao de residencia', 'Tudo foi rapido, claro e organizado, muito alem do que eu imaginava.'],
];

const process = ['Analise inicial', 'Estrategia juridica', 'Organizacao documental', 'Protocolo do processo', 'Acompanhamento continuo', 'Atualizacoes e suporte'];
const faqs = [
  ['Como funciona o atendimento online?', 'O atendimento e remoto, por mensagens, videochamadas ou e-mail, com proposta juridica clara apos a analise inicial.'],
  ['Como sei que e seguro contratar a distancia?', `A Dra. Barbara e inscrita na Ordem dos Advogados de Portugal sob a cedula ${SITE.cedula}. Contratos, recibos e canais oficiais formalizam a relacao profissional.`],
  ['E possivel consulta presencial?', 'Sim, desde que seja em Lisboa, mediante agendamento.'],
  ['O processo tem garantia de resultado?', 'Por principio etico, advogados nao podem garantir resultado. O compromisso e tecnica, transparencia e acompanhamento proximo.'],
  ['Posso resolver estando fora de Portugal?', 'Sim. Muitos processos podem ser iniciados ou conduzidos com o cliente fora de Portugal.'],
];

function wa(text: string) { return `https://wa.me/${SITE.wa}?text=${encodeURIComponent(text)}`; }
function split(v: string) { const [title, desc] = v.split('|'); return { title, desc }; }

function App() {
  const [lang, setLang] = useState<Lang>('pt');
  const [menu, setMenu] = useState(false);
  const t = copy[lang];
  const items = services[lang].map(split);
  return <><header><a className="brand" href="#inicio"><span>BF</span><strong>{SITE.name}</strong><small>{SITE.role}</small></a><nav>{t.nav.map((n, i) => <a href={`#${['sobre','servicos','depoimentos','atendimento','faq','contato'][i]}`} key={n}>{n}</a>)}</nav><div><select value={lang} onChange={(e) => setLang(e.target.value as Lang)}><option value="pt">PT</option><option value="en">EN</option><option value="es">ES</option></select><a className="primary small" href={wa(t.hero[1])} target="_blank"><MessageCircle size={16} /></a><button className="menu" onClick={() => setMenu(true)}><Menu /></button></div>{menu && <aside className="drawer"><button onClick={() => setMenu(false)}><X /></button>{t.nav.map((n, i) => <a onClick={() => setMenu(false)} href={`#${['sobre','servicos','depoimentos','atendimento','faq','contato'][i]}`} key={n}>{n}</a>)}</aside>}</header><main><section className="hero" id="inicio"><div><p className="eyebrow"><ShieldCheck />{t.hero[0]}</p><h1>{t.hero[1]}</h1><p>{t.hero[2]}</p><div className="actions"><a className="primary" href={wa(t.hero[1])} target="_blank"><MessageCircle />{t.hero[3]}<ArrowUpRight /></a><a className="secondary" href={wa('Gostaria de agendar uma consulta.')} target="_blank">{t.hero[4]}</a></div></div><div className="portrait"><div>BF</div><h2>{SITE.name}</h2><p>{SITE.role}</p><span>Cedula {SITE.cedula}</span></div><div className="stats">{t.stats.map((s) => <strong key={s}>{s}</strong>)}</div></section><section id="sobre" className="section split"><div><Label text="Sobre" icon={<Scale />} /><h2>{t.aboutTitle}</h2>{t.about.map((p) => <p key={p}>{p}</p>)}</div><ol>{['2014','2021','2021-hoje','Hoje'].map((y, i) => <li key={y}><span>{y}</span>{['Carreira iniciada no Brasil','Mudanca para Portugal','Mais de 2.000 processos','Atendimento online em Lisboa'][i]}</li>)}</ol></section><section id="servicos" className="section alt"><Label text="Servicos" icon={<Briefcase />} /><h2>{t.servicesTitle}</h2><p className="lead">{t.servicesLead}</p><div className="grid">{items.map((item, i) => { const Icon = [FileText, Globe2, Landmark, Users, ShieldCheck, Scale, BookOpen, CheckCircle2][i]; return <article key={item.title}><Icon /><span>{String(i + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.desc}</p></article>; })}</div></section><section className="section"><Label text="Diferenciais" icon={<ShieldCheck />} /><h2>{t.diffTitle}</h2><div className="cards">{['Atendimento humanizado','Transparencia total','Estrategia juridica','Explicacao clara','Suporte durante o processo','Visao de longo prazo'].map((d) => <article key={d}><h3>{d}</h3><p>Clareza, responsabilidade e acompanhamento proximo em cada fase do processo.</p></article>)}</div></section><section id="depoimentos" className="section alt"><Label text="Depoimentos" icon={<MessageCircle />} /><h2>Quem foi acompanhado de perto fala sobre clareza, organizacao e seguranca.</h2><div className="cards testimonials">{testimonials.map((it) => <article key={it[0]}><p>“{it[2]}”</p><strong>{it[0]}</strong><small>{it[1]}</small></article>)}</div></section><section id="atendimento" className="section split"><div><Label text="Atendimento" icon={<FileText />} /><h2>{t.processTitle}</h2><p>Atendimento majoritariamente online, em Portugal e no exterior.</p></div><div className="process">{process.map((p, i) => <article key={p}><span>{i + 1}</span><h3>{p}</h3><p>Etapa acompanhada com orientacao clara e documentacao organizada.</p></article>)}</div></section><section id="faq" className="section alt"><Label text="FAQ" icon={<Globe2 />} /><h2>{t.faqTitle}</h2><div className="faq">{faqs.map((f) => <details key={f[0]}><summary>{f[0]}</summary><p>{f[1]}</p></details>)}</div></section><section className="cta" id="contato"><p className="eyebrow">Proximo passo</p><h2>{t.ctaTitle}</h2><p>{t.ctaLead}</p><a className="primary" href={wa(t.ctaTitle)} target="_blank"><MessageCircle />WhatsApp</a></section></main><footer><strong>{SITE.name}</strong><span>{SITE.city}</span><a href={`mailto:${SITE.email}`}>{SITE.email}</a><a href={`https://wa.me/${SITE.wa}`} target="_blank">{SITE.phone}</a></footer></>;
}

function Label({ text, icon }: { text: string; icon: React.ReactNode }) { return <p className="eyebrow label">{icon}{text}</p>; }

createRoot(document.getElementById('root')!).render(<App />);
