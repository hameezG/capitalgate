import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight, BadgeCheck, Building2, CheckCircle2, ChevronRight, Globe2,
  Mail, MapPin, Menu, MessageCircle, Phone, Search, ShieldCheck, Sparkles, X
} from 'lucide-react';
import './styles.css';

const properties = [
  { title: 'The Grand Residences', location: 'DHA Phase II, Islamabad', type: 'Ready home', tag: 'High demand', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Overseas Prime Plot', location: 'Capital Smart City', type: '1 Kanal plot', tag: 'CDA-approved', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Blue Area Retail', location: 'Central Islamabad', type: 'Commercial', tag: 'Yield focused', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85' }
];

function App() {
  const [view, setView] = useState('home');
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigate = (next) => {
    setView(next);
    setMenu(false);
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = [['home', 'Home'], ['about', 'Our approach'], ['sourcing', 'How it works'], ['guide', 'Insights'], ['contact', 'Contact']];

  return <div className="app">
    <header className={`nav ${scrolled || view !== 'home' ? 'nav-solid' : ''}`}>
      <button className="brand" onClick={() => navigate('home')} aria-label="Capital Gate home">
        <span className="brand-mark">CG</span><span>CAPITAL <b>GATE</b></span>
      </button>
      <nav className="desktop-nav">{links.map(([key, label]) => <button key={key} className={view === key ? 'active' : ''} onClick={() => navigate(key)}>{label}</button>)}</nav>
      <a className="nav-cta" href="https://wa.me/447700900077" target="_blank" rel="noreferrer"><MessageCircle size={16}/> WhatsApp us</a>
      <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X/> : <Menu/>}</button>
      {menu && <nav className="mobile-nav">{links.map(([key, label]) => <button key={key} onClick={() => navigate(key)}>{label}</button>)}<a href="https://wa.me/447700900077">Chat on WhatsApp <ArrowUpRight size={16}/></a></nav>}
    </header>

    <main>
      {view === 'home' && <Home navigate={navigate}/>}
      {view === 'about' && <About navigate={navigate}/>}
      {view === 'sourcing' && <Sourcing navigate={navigate}/>}
      {view === 'guide' && <Guide navigate={navigate}/>}
      {view === 'contact' && <Contact submitted={submitted} setSubmitted={setSubmitted}/>}
    </main>

    <footer>
      <div className="footer-grid">
        <div><button className="brand footer-brand" onClick={() => navigate('home')}><span className="brand-mark">CG</span><span>CAPITAL <b>GATE</b></span></button><p className="muted">A more certain way to invest in Islamabad. Curated property, rigorous diligence, and representation you can trust.</p></div>
        <div><h4>Explore</h4>{links.slice(1).map(([key, label]) => <button className="footer-link" key={key} onClick={() => navigate(key)}>{label}</button>)}</div>
        <div><h4>UK desk</h4><p>+44 7700 900077</p><p>inquiries@capitalgate.com</p><p className="muted">Mon–Fri · 9am–6pm GMT</p></div>
        <div><h4>Islamabad office</h4><p>F-8 Markaz, Islamabad</p><p>Pakistan</p><p className="muted">By appointment</p></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Capital Gate Consultancy</span><span>Private property advisory · Not financial advice</span></div>
    </footer>
  </div>;
}

const Eyebrow = ({children}) => <span className="eyebrow">{children}</span>;
const Button = ({children, onClick, ghost = false}) => <button className={`button ${ghost ? 'button-ghost' : ''}`} onClick={onClick}>{children}<ArrowUpRight size={17}/></button>;

function Home({navigate}) {
  return <><section className="hero"><div className="hero-image"/><div className="hero-content"><Eyebrow>Private property advisory · Islamabad</Eyebrow><h1>Invest in a place<br/><em>you can believe in.</em></h1><p>For overseas Pakistanis, property should feel like a confident decision—not a leap of faith. We source, verify, and represent every investment with care.</p><div className="hero-actions"><Button onClick={() => navigate('contact')}>Book a private consultation</Button><Button ghost onClick={() => navigate('sourcing')}>Explore our process</Button></div><div className="hero-proof"><span><ShieldCheck size={18}/> Legally vetted</span><span><Globe2 size={18}/> UK & Pakistan based</span></div></div><div className="hero-stat"><strong>01</strong><span>One trusted partner<br/>from search to keys</span></div></section>
    <section className="trust-strip"><span>Trusted by overseas families</span><div><span>Due diligence first</span><span>Local expertise</span><span>Clear communication</span></div></section>
    <section className="section intro"><div><Eyebrow>Why Capital Gate</Eyebrow><h2>A better standard<br/>for buying back home.</h2></div><div className="intro-copy"><p className="lead">Distance should never mean compromise. We combine local intelligence with the clarity and discipline expected by investors in the UK.</p><p>Our portfolio is intentionally small. Every opportunity earns its place through title checks, developer research, physical inspections, and a clear view of the numbers.</p><Button ghost onClick={() => navigate('about')}>Meet the firm</Button></div></section>
    <section className="dark-section"><div className="section section-header"><div><Eyebrow>The Capital Gate standard</Eyebrow><h2>Considered, not crowded.</h2></div><p>Three principles guide every recommendation we make.</p></div><div className="principles"><Principle icon={<ShieldCheck/>} title="Vetted with intent">We investigate the legal standing, ownership, approvals, and track record behind every opportunity.</Principle><Principle icon={<Search/>} title="Sourced for you">Your goals come first. We search beyond the obvious to find the right fit for your budget and timeline.</Principle><Principle icon={<Building2/>} title="Managed end to end">From the first call to transfer and beyond, your investment has one accountable partner.</Principle></div></section>
    <section className="section"><div className="section-header"><div><Eyebrow>A considered portfolio</Eyebrow><h2>Opportunities worth<br/>looking closer at.</h2></div><Button ghost onClick={() => navigate('contact')}>Request availability</Button></div><div className="property-grid">{properties.map(p => <article className="property" key={p.title}><div className="property-image"><img src={p.image} alt={p.title}/><span><CheckCircle2 size={14}/> {p.tag}</span></div><div className="property-info"><div><span className="type">{p.type}</span><h3>{p.title}</h3><p><MapPin size={15}/> {p.location}</p></div><ChevronRight className="property-arrow"/></div></article>)}</div></section>
    <section className="cta-panel"><div><Eyebrow>Your next chapter starts here</Eyebrow><h2>Ready to make a<br/><em>more certain move?</em></h2></div><Button onClick={() => navigate('contact')}>Start a conversation</Button></section>
  </>;
}

function Principle({icon, title, children}) { return <div className="principle"><div className="icon-box">{icon}</div><h3>{title}</h3><p>{children}</p></div> }
function PageHero({eyebrow, title, children}) { return <section className="page-hero"><div><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{children}</p></div></section> }
function About({navigate}) { return <><PageHero eyebrow="Our approach" title={<>Trust is built<br/><em>in the details.</em></>}>Capital Gate exists for people who want to invest in Pakistan with the same confidence they expect at home.</PageHero><section className="section split"><div><Eyebrow>A different kind of firm</Eyebrow><h2>Quality over<br/>quantity. Always.</h2></div><div className="copy"><p className="lead">We are not a listing portal. We are a private property consultancy built around a simple promise: only recommend what we would be comfortable putting in front of our own family.</p><p>That means fewer listings, deeper checks, and honest conversations about risk, timing, and return. Our UK-facing service and Islamabad-based team keep the whole journey joined up.</p><div className="check-list"><p><BadgeCheck/> Physical inspections before presentation</p><p><BadgeCheck/> Title and approval checks with legal partners</p><p><BadgeCheck/> Clear reporting in your time zone</p></div><Button onClick={() => navigate('contact')}>Talk to an advisor</Button></div></section><section className="quote-section"><blockquote>“The goal is not to make property feel exciting. It is to make it feel certain.”</blockquote><span>— The Capital Gate principle</span></section></> }
function Sourcing({navigate}) { const steps = [['01','The brief','A private call to understand your budget, timeline, family needs, and investment goals.'],['02','The search','Our local team filters the market, calling on trusted networks and verified developers.'],['03','The proof','You receive a focused shortlist with live walkthroughs, comparable data, and clear next steps.'],['04','The diligence','Legal, approval, ownership, and developer checks happen before you commit funds.'],['05','The handover','We coordinate the acquisition and remain your local partner after completion.']]; return <><PageHero eyebrow="How it works" title={<>A clear path from<br/><em>interest to ownership.</em></>}>Long-distance investing becomes simpler when every step has an owner. Here is how we make it feel manageable.</PageHero><section className="section process"><div className="process-intro"><Eyebrow>The sourcing journey</Eyebrow><h2>Five steps.<br/>No guesswork.</h2><p>We keep you informed, protected, and in control from the first conversation.</p></div><div className="steps">{steps.map(([n,t,d]) => <div className="step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div></section><section className="dark-section mini-cta"><Eyebrow>Have a brief in mind?</Eyebrow><h2>Tell us what you are<br/><em>looking for.</em></h2><Button onClick={() => navigate('contact')}>Share your brief</Button></section></> }
function Guide({navigate}) { return <><PageHero eyebrow="The overseas guide · 2026" title={<>A little more clarity<br/><em>goes a long way.</em></>}>Practical context for overseas buyers navigating Pakistan’s property market, from accounts and taxes to the risks worth avoiding.</PageHero><section className="section guide-grid">{[['01','Funding your purchase','Roshan Digital Accounts can provide a clear, documented route for eligible overseas Pakistanis. Always confirm current terms with your bank and professional advisors.'],['02','The diligence checklist','Approvals, title, possession, developer history, and transfer process should all be checked before any money moves.'],['03','The file trap','A file is not the same as an allotted plot. We prioritise documented ownership and clear possession over speculative promises.'],['04','Plan for the long term','The strongest property decisions start with your actual use case—home, income, or long-term capital—not a headline return.']].map(([n,t,d]) => <article className="guide-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><a onClick={() => navigate('contact')}>Ask us about this <ArrowUpRight size={15}/></a></article>)}</section></> }
function Contact({submitted, setSubmitted}) { return <><PageHero eyebrow="Start a conversation" title={<>Your investment journey<br/><em>starts with a question.</em></>}>Tell us what you are considering. No pressure, no obligation—just a useful first conversation with someone who understands both sides of the distance.</PageHero><section className="section contact-grid"><div className="contact-details"><Eyebrow>Speak with the team</Eyebrow><h2>We make time<br/>for good questions.</h2><p>Our advisors work around UK hours and can meet over Zoom, WhatsApp, or phone.</p><div className="contact-item"><Phone/><div><strong>+44 7700 900077</strong><span>Mon–Fri · 9am–6pm GMT</span></div></div><div className="contact-item"><Mail/><div><strong>inquiries@capitalgate.com</strong><span>We reply within one working day</span></div></div><div className="contact-item"><MapPin/><div><strong>F-8 Markaz, Islamabad</strong><span>Visits by appointment</span></div></div></div><form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}><h3>Request a private consultation</h3>{submitted ? <div className="success"><CheckCircle2 size={30}/><h3>Thank you. We’ll be in touch.</h3><p>Your note has been received. A member of our team will contact you shortly.</p></div> : <><label>Your name<input required placeholder="e.g. Ayesha Khan"/></label><div className="form-row"><label>Email address<input required type="email" placeholder="you@example.com"/></label><label>Phone / WhatsApp<input required placeholder="+44 ..."/></label></div><label>What can we help with?<select><option>Buying a home</option><option>Investment property</option><option>Bespoke sourcing</option><option>Portfolio sale</option></select></label><label>Tell us a little more<textarea rows="4" placeholder="Budget, preferred area, timeline..."/></label><button className="button" type="submit">Send enquiry <ArrowUpRight size={17}/></button></>}</form></section></> }

createRoot(document.getElementById('root')).render(<App />);
