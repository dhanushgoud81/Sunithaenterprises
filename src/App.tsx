import { useState, type FormEvent, type ReactNode } from "react";

const images = {
  hero: "https://images.unsplash.com/photo-1748063578185-3d68121b11ff?auto=format&fit=crop&w=2000&q=90",
  upvc: "https://images.unsplash.com/photo-1717386255767-52643970d483?auto=format&fit=crop&w=1200&q=85",
  fabrication: "https://images.unsplash.com/photo-1598302936625-6075fbd98dd7?auto=format&fit=crop&w=1200&q=85",
  peb: "https://images.unsplash.com/photo-1694885169342-909981fb408a?auto=format&fit=crop&w=1200&q=85",
  roofing: "https://images.unsplash.com/photo-1602193230480-7840a38eb0c3?auto=format&fit=crop&w=1200&q=85",
  acp: "https://images.unsplash.com/photo-1642887534384-81c81882dd1a?auto=format&fit=crop&w=1200&q=85",
  glazing: "https://images.unsplash.com/photo-1523477593243-78bbf626fd3b?auto=format&fit=crop&w=1200&q=85",
  projectOne: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1600&q=85",
  projectTwo: "https://images.unsplash.com/photo-1707189856923-46dd41ea2bdc?auto=format&fit=crop&w=1400&q=85",
  projectThree: "https://images.unsplash.com/photo-1523477593243-78bbf626fd3b?auto=format&fit=crop&w=1400&q=85",
};

type IconName =
  | "arrow"
  | "menu"
  | "close"
  | "chevron"
  | "plus"
  | "check"
  | "shield"
  | "sun"
  | "layers"
  | "ruler"
  | "phone"
  | "mail";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M5 19 19 5" /><path d="M8 5h11v11" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 17h16" /></>,
    close: <><path d="m5 5 14 14" /><path d="m19 5-14 14" /></>,
    chevron: <path d="m7 10 5 5 5-5" />,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    shield: <><path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-5" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" /></>,
    layers: <><path d="m12 3-9 5 9 5 9-5-9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 16 9 5 9-5" /></>,
    ruler: <><path d="m4 16 12-12 4 4L8 20H4v-4Z" /><path d="m13 7 2 2M10 10l2 2M7 13l2 2" /></>,
    phone: <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-1-2 2c-4-1.5-7.5-5-9-9l2-2-1-4Z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 7 9 7 9-7" /></>,
  };
  return (
    <svg aria-hidden="true" className="icon" width={size} height={size} viewBox="0 0 24 24">
      {paths[name]}
    </svg>
  );
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Aperture home">
      <span className="brand-mark"><span /></span>
      <span><strong>APERTURE</strong><small>ARCHITECTURAL SYSTEMS</small></span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            <button className="nav-item" onClick={() => setProductsOpen(!productsOpen)}>
              Products <Icon name="chevron" size={15} />
            </button>
            <a className="nav-item" href="#process">Services</a>
            <a className="nav-item" href="#projects">Projects</a>
            <a className="nav-item" href="#why">About</a>
            <a className="nav-item" href="#contact">Contact</a>
          </nav>
          <a className="button button-small desktop-quote" href="#contact">Get a quote <Icon name="arrow" size={16} /></a>
          <button className="icon-button menu-button" onClick={() => setOpen(true)} aria-label="Open menu">
            <Icon name="menu" />
          </button>
        </div>
        {productsOpen && (
          <div className="product-menu">
            <div className="product-menu-inner">
              <div>
                <p className="eyebrow">Product collections</p>
                <h3>Systems for every opening.</h3>
              </div>
              {["uPVC Manufacturing", "Heavy Fabrication", "PEB Solutions", "Roofing Systems", "ACP Cladding", "Structural Glazing"].map((item, index) => (
                <a href="#products" key={item} onClick={() => setProductsOpen(false)}>
                  <span>0{index + 1}</span>{item}<Icon name="arrow" size={17} />
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
      <div className={`mobile-drawer ${open ? "drawer-open" : ""}`} aria-hidden={!open}>
        <div className="drawer-top"><Brand /><button className="icon-button" onClick={() => setOpen(false)} aria-label="Close menu"><Icon name="close" /></button></div>
        <nav>
          {["Products", "Services", "Projects", "About", "Contact"].map((item, index) => (
            <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item}<Icon name="arrow" /></a>
          ))}
        </nav>
        <a className="button button-light" href="#contact" onClick={() => setOpen(false)}>Start your project <Icon name="arrow" /></a>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero-image" src={images.hero} alt="Contemporary home with expansive architectural glazing at dusk" />
      <div className="hero-overlay" />
      <div className="hero-content page-shell">
        <div className="hero-copy">
          <p className="eyebrow eyebrow-light"><span /> Manufacturing · Fabrication · Building systems</p>
          <h1>Built with precision.<br /><em>Shaped for progress.</em></h1>
          <p className="hero-description">Integrated manufacturing, structural and building-envelope solutions for ambitious industrial, commercial and architectural projects.</p>
          <div className="button-row">
            <a className="button button-light" href="#products">Explore products <Icon name="arrow" /></a>
            <a className="text-link text-link-light" href="#contact">Request a quote <Icon name="arrow" size={17} /></a>
          </div>
        </div>
        <div className="hero-note">
          <span className="hero-note-line" />
          <div><small>Integrated capability</small><p>From fabrication<br />to final installation</p></div>
        </div>
        <div className="hero-index"><span>01</span><div><i /><i /><i /></div><span>03</span></div>
      </div>
    </section>
  );
}

const categories = [
  { title: "uPVC Manufacturing", copy: "Precision-manufactured uPVC window and door systems built for reliable performance.", image: images.upvc, tag: "01 / Manufacturing", slug: "upvc-manufacturing" },
  { title: "Heavy Fabrication", copy: "Engineered steel fabrication for demanding industrial and structural applications.", image: images.fabrication, tag: "02 / Fabrication", slug: "heavy-fabrication" },
  { title: "PEB Solutions", copy: "Efficient pre-engineered building systems designed for scale, speed and durability.", image: images.peb, tag: "03 / PEB", slug: "peb-solutions" },
  { title: "Roofing Systems", copy: "High-performance roofing assemblies for industrial, commercial and institutional projects.", image: images.roofing, tag: "04 / Roofing", slug: "roofing-systems" },
  { title: "ACP Cladding", copy: "Contemporary aluminium composite façades with precise detailing and lasting finishes.", image: images.acp, tag: "05 / Cladding", slug: "acp-cladding" },
  { title: "Structural Glazing", copy: "Integrated glazing systems that bring transparency, performance and architectural clarity.", image: images.glazing, tag: "06 / Glazing", slug: "structural-glazing" },
];

function Products() {
  return (
    <section className="section page-shell" id="products">
      <div className="section-heading split-heading">
        <div><p className="eyebrow">Our Solutions</p><h2>Six capabilities.<br /><em>One trusted partner.</em></h2></div>
        <div><p>Explore our complete portfolio of manufacturing, structural and building-envelope solutions—each delivered with equal focus and technical rigour.</p></div>
      </div>
      <div className="product-grid">
        {categories.map((category) => (
          <a className="product-card" href={`/solutions/${category.slug}`} id={category.slug} key={category.title}>
            <img src={category.image} alt="" />
            <div className="product-card-shade" />
            <span className="card-tag">{category.tag}</span>
            <div className="product-card-copy">
              <h3>{category.title}</h3><p>{category.copy}</p>
              <span className="solution-link">Explore Solution <Icon name="arrow" size={16} /></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Engineering() {
  return (
    <section className="engineering">
      <div className="page-shell engineering-grid">
        <div className="engineering-copy">
          <p className="eyebrow eyebrow-light">Built differently</p>
          <h2>Performance is in<br /><em>the details.</em></h2>
          <p>Every component works as one—from reinforced profiles and precision hardware to glazing and compression seals.</p>
          <a className="text-link text-link-light" href="#contact">Explore our engineering <Icon name="arrow" size={17} /></a>
        </div>
        <div className="window-visual" aria-label="Technical illustration of a window system">
          <div className="window-frame">
            <div className="window-glass"><div className="window-reflection" /></div>
            <div className="window-handle" />
          </div>
          <div className="tech-label tech-one"><span>01</span><i />Reinforced profile</div>
          <div className="tech-label tech-two"><span>02</span><i />Double glazing</div>
          <div className="tech-label tech-three"><span>03</span><i />Secure hardware</div>
        </div>
        <div className="spec-strip">
          <div><strong>Multi-chamber</strong><span>Profile construction</span></div>
          <div><strong>Custom</strong><span>Glass configurations</span></div>
          <div><strong>Multi-point</strong><span>Security hardware</span></div>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  { icon: "ruler" as IconName, title: "Made to measure", copy: "Every system is considered for your opening, context and design intent." },
  { icon: "layers" as IconName, title: "Material quality", copy: "Carefully selected profiles, glass and hardware for dependable daily use." },
  { icon: "sun" as IconName, title: "Comfort considered", copy: "Glazing and sealing options designed around light, sound and changing weather." },
  { icon: "shield" as IconName, title: "Secure by design", copy: "Robust frames and multi-point hardware options for added peace of mind." },
];

function WhyUs() {
  return (
    <section className="section why-section" id="why">
      <div className="page-shell">
        <div className="section-heading centered-heading">
          <p className="eyebrow">The Aperture standard</p>
          <h2>Made for the way<br /><em>you want to live.</em></h2>
        </div>
        <div className="benefit-grid">
          {benefits.map((benefit, index) => (
            <article className="benefit-card" key={benefit.title}>
              <span className="benefit-number">0{index + 1}</span>
              <div className="benefit-icon"><Icon name={benefit.icon} size={25} /></div>
              <h3>{benefit.title}</h3><p>{benefit.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  { name: "Courtyard House", type: "Residential", location: "Bengaluru", image: images.projectOne },
  { name: "Horizon Villa", type: "Villas", location: "Hyderabad", image: images.projectTwo },
  { name: "The Glass Office", type: "Commercial", location: "Chennai", image: images.projectThree },
];

function Projects() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Residential", "Villas", "Commercial"];
  const visible = filter === "All" ? projects : projects.filter((project) => project.type === filter);
  return (
    <section className="section projects-section" id="projects">
      <div className="page-shell">
        <div className="section-heading projects-heading">
          <div><p className="eyebrow eyebrow-light">Selected applications</p><h2>Spaces transformed<br /><em>by light.</em></h2></div>
          <div className="filter-row">
            {filters.map((item) => <button className={filter === item ? "filter-active" : ""} onClick={() => setFilter(item)} key={item}>{item}</button>)}
          </div>
        </div>
        <div className="project-grid">
          {visible.map((project, index) => (
            <article className={`project-card project-${index + 1}`} key={project.name}>
              <img src={project.image} alt={`${project.name} architectural project`} />
              <div className="project-shade" />
              <div className="project-info"><p>{project.type} · {project.location}</p><h3>{project.name}</h3></div>
              <span className="circle-arrow circle-arrow-light"><Icon name="arrow" /></span>
            </article>
          ))}
        </div>
        <p className="concept-note">Project imagery is representative and shown for design concept purposes.</p>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["01", "Consult", "We understand your space, priorities and architectural intent."],
    ["02", "Measure", "Our team assesses the site and captures accurate opening details."],
    ["03", "Design", "Choose configurations, finishes, glass and hardware."],
    ["04", "Make", "Your systems are produced and quality checked to specification."],
    ["05", "Install", "Careful fitting, alignment, sealing and final inspection."],
  ];
  return (
    <section className="section process-section" id="process">
      <div className="page-shell">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">From idea to installation</p><h2>A considered process.<br /><em>End to end.</em></h2></div>
          <p>One team, one clear journey—from the first conversation to the finishing detail.</p>
        </div>
        <div className="process-list">
          {steps.map(([number, title, copy]) => (
            <article className="process-item" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><Icon name="arrow" /></article>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  ["How do I choose the right window or door system?", "We begin with your opening size, desired operation, architectural style, location and performance priorities. A consultation helps narrow the most suitable options."],
  ["Can systems be customised to my project?", "Yes. Available options can include frame colour, glass type, opening configuration, hardware and mesh, subject to the selected product system."],
  ["What happens during a site visit?", "Our team reviews access, checks the opening condition and records the dimensions needed to prepare an accurate proposal."],
  ["Do you provide installation and after-sales support?", "Installation and support availability are confirmed as part of your quotation, based on project location and scope."],
];

function FAQ() {
  const [active, setActive] = useState(0);
  return (
    <section className="section faq-section">
      <div className="page-shell faq-grid">
        <div><p className="eyebrow">Frequently asked</p><h2>Good questions.<br /><em>Clear answers.</em></h2><p className="faq-intro">Need something more specific? Our team can help with your product or project enquiry.</p></div>
        <div className="accordion">
          {faqs.map(([question, answer], index) => (
            <article className={`faq-item ${active === index ? "faq-open" : ""}`} key={question}>
              <button onClick={() => setActive(active === index ? -1 : index)}><span>0{index + 1}</span><strong>{question}</strong><Icon name={active === index ? "close" : "plus"} size={19} /></button>
              <div><p>{answer}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("success");
  }
  return (
    <section className="contact-section" id="contact">
      <div className="page-shell contact-grid">
        <div className="contact-copy">
          <p className="eyebrow eyebrow-light">Start a conversation</p>
          <h2>Let’s make space<br /><em>for something better.</em></h2>
          <p>Tell us a little about your project. We’ll help you find the right architectural system and next step.</p>
          <div className="contact-methods">
            <a href="tel:+910000000000"><Icon name="phone" /><span><small>Call our team</small>+91 00000 00000</span></a>
            <a href="mailto:hello@aperture.example"><Icon name="mail" /><span><small>Email us</small>hello@aperture.example</span></a>
          </div>
        </div>
        <div className="form-panel">
          {status === "success" ? (
            <div className="success-state"><span><Icon name="check" size={32} /></span><p className="eyebrow">Enquiry received</p><h3>Thank you for getting in touch.</h3><p>This prototype has captured the success state. In a live experience, the team would follow up shortly.</p><button className="text-link" onClick={() => setStatus("idle")}>Send another enquiry <Icon name="arrow" size={17} /></button></div>
          ) : (
            <form onSubmit={submit}>
              <div className="form-heading"><span>Project enquiry</span><small>All fields marked * are required</small></div>
              <label><span>Full name *</span><input required placeholder="Your name" /></label>
              <div className="form-row">
                <label><span>Phone number *</span><input required type="tel" placeholder="+91" /></label>
                <label><span>Project location</span><input placeholder="City" /></label>
              </div>
              <label><span>Product / service of interest *</span><select required defaultValue=""><option value="" disabled>Select an option</option><option>uPVC Manufacturing</option><option>Heavy Fabrication</option><option>PEB Solutions</option><option>Roofing Systems</option><option>ACP Cladding</option><option>Structural Glazing</option></select></label>
              <label><span>Tell us about your project</span><textarea placeholder="Project type, approximate requirements or anything else useful…" rows={3} /></label>
              <label className="consent"><input type="checkbox" required /><span>I agree to be contacted about this enquiry and accept the privacy notice.</span></label>
              <button className="button button-dark form-submit" type="submit">Request a consultation <Icon name="arrow" /></button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="page-shell">
        <div className="footer-main">
          <div><Brand /><p>Precision window, door and architectural systems for contemporary spaces.</p></div>
          <div><h4>Explore</h4><a href="#products">Products</a><a href="#process">Services</a><a href="#projects">Projects</a></div>
          <div><h4>Company</h4><a href="#why">About</a><a href="#contact">Contact</a><a href="#contact">Get a quote</a></div>
          <div><h4>Core solutions</h4><a href="#upvc-manufacturing">uPVC Manufacturing</a><a href="#heavy-fabrication">Heavy Fabrication</a><a href="#peb-solutions">PEB Solutions</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Aperture Architectural Systems</span><span>Privacy · Terms</span><span>Concept website — catalogue pending confirmation</span></div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <Header />
      <main><Hero /><Products /><Engineering /><WhyUs /><Projects /><Process /><FAQ /><Contact /></main>
      <Footer />
    </div>
  );
}
