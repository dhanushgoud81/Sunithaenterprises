import { useState, useEffect, type FormEvent, type ReactNode } from "react";
import { productsData } from "./data/products";
import ProductPage from "./components/ProductPage";
import SolutionsHub from "./components/SolutionsHub";

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

function Brand({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <a
      className="brand"
      href="/"
      onClick={(e) => {
        e.preventDefault();
        onNavigate("/");
      }}
      aria-label="Srikala Projects Home"
    >
      <span className="brand-mark"><span /></span>
      <span><strong>SRIKALA PROJECTS</strong><small>ENGINEERING & uPVC SYSTEMS</small></span>
    </a>
  );
}

function Header({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  function handleNavClick(path: string) {
    setOpen(false);
    setProductsOpen(false);
    onNavigate(path);
  }

  return (
    <>
      {/* Top Industrial Info Bar */}
      <div className="top-info-bar">
        <div className="page-shell top-info-inner">
          <div className="top-info-left">
            <span>🏭 Mankal Industrial Area, Ranga Reddy, Telangana</span>
            <span className="top-sep">|</span>
            <span>⭐ Over 40 Years of Engineering Integrity</span>
          </div>
          <div className="top-info-right">
            <a href="tel:+919866089771">📞 +91 98660 89771</a>
            <span className="top-sep">|</span>
            <a href="mailto:sales@srikalaprojects.com">✉️ sales@srikalaprojects.com</a>
            <span className="top-sep">|</span>
            <a
              href="https://m.indiamart.com/srikalaprojects/"
              target="_blank"
              rel="noreferrer"
              className="indiamart-badge"
            >
              IndiaMART Verified
            </a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <Brand onNavigate={onNavigate} />
          <nav className="desktop-nav" aria-label="Main navigation">
            <a
              className="nav-item nav-highlight"
              href="/solutions"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("/solutions");
              }}
            >
              Solutions
            </a>
            <button
              className="nav-item"
              onClick={() => setProductsOpen(!productsOpen)}
              aria-expanded={productsOpen}
            >
              Divisions <Icon name="chevron" size={15} />
            </button>
            <a
              className="nav-item"
              href="/#why"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("/#why");
              }}
            >
              About
            </a>
            <a
              className="nav-item"
              href="/#process"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("/#process");
              }}
            >
              Process
            </a>
            <a
              className="nav-item"
              href="/#projects"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("/#projects");
              }}
            >
              Projects
            </a>
            <a
              className="nav-item"
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("/#contact");
              }}
            >
              Contact
            </a>
          </nav>
          <a
            className="button button-small desktop-quote"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("/#contact");
            }}
          >
            Get a quote <Icon name="arrow" size={16} />
          </a>
          <button
            className="icon-button menu-button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Icon name="menu" />
          </button>
        </div>

        {productsOpen && (
          <div className="product-menu">
            <div className="product-menu-inner">
              <div className="product-menu-header-col">
                <p className="eyebrow">Engineering Divisions</p>
                <h3>Six core capabilities. One unified standard.</h3>
                <a
                  href="/solutions"
                  className="solutions-hub-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("/solutions");
                  }}
                >
                  Browse Full Solutions Catalog →
                </a>
              </div>
              <div className="product-menu-items-grid">
                {productsData.map((item, index) => (
                  <a
                    href={`/solutions/${item.slug}`}
                    key={item.slug}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(`/solutions/${item.slug}`);
                    }}
                  >
                    <span>0{index + 1}</span>
                    <div className="p-menu-text">
                      <strong>{item.title}</strong>
                      <small>{item.subtitle}</small>
                    </div>
                    <Icon name="arrow" size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <div className={`mobile-drawer ${open ? "drawer-open" : ""}`} aria-hidden={!open}>
        <div className="drawer-top">
          <Brand onNavigate={onNavigate} />
          <button className="icon-button" onClick={() => setOpen(false)} aria-label="Close menu">
            <Icon name="close" />
          </button>
        </div>
        <nav>
          <a
            href="/solutions"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("/solutions");
            }}
            style={{ fontWeight: "700", color: "var(--accent)" }}
          >
            <span>★</span>All Solutions Hub<Icon name="arrow" />
          </a>
          <a
            href="/#products"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("/#products");
            }}
          >
            <span>01</span>Overview Directory<Icon name="arrow" />
          </a>
          {productsData.map((p, idx) => (
            <a
              key={p.slug}
              href={`/solutions/${p.slug}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(`/solutions/${p.slug}`);
              }}
              style={{ fontSize: "18px", padding: "10px 0" }}
            >
              <span>0{idx + 1}</span>{p.title}<Icon name="arrow" size={18} />
            </a>
          ))}
          <a
            href="/#why"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("/#why");
            }}
          >
            <span>07</span>About Srikala<Icon name="arrow" />
          </a>
          <a
            href="/#process"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("/#process");
            }}
          >
            <span>08</span>Process<Icon name="arrow" />
          </a>
          <a
            href="/#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("/#contact");
            }}
          >
            <span>09</span>Contact & Plant Location<Icon name="arrow" />
          </a>
        </nav>
        <a
          className="button button-light"
          href="/#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("/#contact");
          }}
        >
          Request Proposal <Icon name="arrow" />
        </a>
      </div>
    </>
  );
}

function Hero({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <section className="hero" id="top">
      <img className="hero-image" src={images.hero} alt="Precision industrial steel fabrication and architectural facade" />
      <div className="hero-overlay" />
      <div className="hero-content page-shell">
        <div className="hero-copy">
          <p className="eyebrow eyebrow-light"><span /> Heavy Steel Fabrication · Turnkey PEB · German aluplast® uPVC</p>
          <h1>BUILDING THE FUTURE.<br /><em>Engineered with Precision.</em></h1>
          <p className="hero-description">
            Over 40 years of engineering integrity in heavy steel fabrication, pre-engineered buildings (PEB),
            advanced industrial roofing, and luxury German aluplast® uPVC window & door systems.
          </p>
          <div className="button-row">
            <a
              className="button button-light"
              href="/solutions"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("/solutions");
              }}
            >
              Explore All Solutions <Icon name="arrow" />
            </a>
            <a
              className="text-link text-link-light"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Request a quote <Icon name="arrow" size={17} />
            </a>
          </div>
        </div>
        <div className="hero-note">
          <span className="hero-note-line" />
          <div><small>ISO Certified Facility</small><p>Turnkey design, fabrication<br />to final site erection</p></div>
        </div>
        <div className="hero-index"><span>01</span><div><i /><i /><i /></div><span>06</span></div>
      </div>
    </section>
  );
}

function Products({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <section className="section page-shell" id="products">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Our Solutions</p>
          <h2>Six engineering divisions.<br /><em>One trusted partner.</em></h2>
        </div>
        <div>
          <p>
            Explore our complete portfolio of heavy structural steel, pre-engineered building systems, and
            luxury architectural building envelopes—each delivered with ISO 9001 rigour.
          </p>
        </div>
      </div>
      <div className="product-grid">
        {productsData.map((category) => (
          <a
            className="product-card"
            href={`/solutions/${category.slug}`}
            id={category.slug}
            key={category.slug}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(`/solutions/${category.slug}`);
            }}
          >
            <img src={category.heroImage} alt={category.title} />
            <div className="product-card-shade" />
            <span className="card-tag">{category.tag}</span>
            <div className="product-card-copy">
              <h3>{category.title}</h3>
              <p>{category.copy}</p>
              <span className="solution-link">
                View Dedicated Page & Specs <Icon name="arrow" size={16} />
              </span>
            </div>
            <span className="circle-arrow"><Icon name="arrow" /></span>
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
          <p className="eyebrow eyebrow-light">German Engineering & Heavy Statics</p>
          <h2>Performance is in<br /><em>the details.</em></h2>
          <p>
            Every assembly is manufactured to exacting tolerances—from CNC plasma profiled heavy plate connections
            and robotic SAW submerged arc welds to German aluplast® multi-chambered uPVC profiles and acoustic DGU glazing.
          </p>
          <a className="text-link text-link-light" href="#contact">
            Consult our engineering desk <Icon name="arrow" size={17} />
          </a>
        </div>
        <div className="window-visual" aria-label="Technical illustration of precision structural assembly">
          <div className="window-frame">
            <div className="window-glass"><div className="window-reflection" /></div>
            <div className="window-handle" />
          </div>
          <div className="tech-label tech-one"><span>01</span><i />Galvanized box steel reinforcement</div>
          <div className="tech-label tech-two"><span>02</span><i />Thermal & acoustic multi-chamber</div>
          <div className="tech-label tech-three"><span>03</span><i />Certified AWS D1.1 welded statics</div>
        </div>
        <div className="spec-strip">
          <div><strong>Multi-Chamber</strong><span>German aluplast® profiles</span></div>
          <div><strong>AWS D1.1</strong><span>Certified structural welding</span></div>
          <div><strong>IS 2062 / E350</strong><span>High-tensile structural steel</span></div>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {
    icon: "shield" as IconName,
    title: "Quality Assurance",
    copy: "ISO 9001 certified manufacturing with rigorous Ultrasonic Testing (UT) and 100% NDT inspection protocols.",
  },
  {
    icon: "layers" as IconName,
    title: "Tested Durability",
    copy: "Corrosion-resistant Galvalume, certified hot-dip galvanization, and UV-stabilized German tropicalized compounds.",
  },
  {
    icon: "sun" as IconName,
    title: "Innovation Driven",
    copy: "Continuous R&D in structural engineering, tapered PEB column statics, and thermal acoustic envelope efficiency.",
  },
  {
    icon: "ruler" as IconName,
    title: "Timely Delivery",
    copy: "Integrated in-house CNC cutting, automated fabrication bays, and lean logistics for on-schedule site completion.",
  },
];

function WhyUs() {
  return (
    <section className="section why-section" id="why">
      <div className="page-shell">
        <div className="section-heading centered-heading">
          <p className="eyebrow">The Srikala Standard</p>
          <h2>Pioneering Industrial<br /><em>Engineering Solutions.</em></h2>
          <p className="about-lead">
            For over four decades, Srikala Projects has stood at the vanguard of heavy steel fabrication,
            pre-engineered structural frames, and luxury uPVC window systems. Our manufacturing plant in Mankal,
            Maheshwaram Mandal, Ranga Reddy operates under strict ISO certification, using automated robotic workflows to
            turn architectural and structural concepts into timeless landmarks.
          </p>
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
  { name: "Heavy Industrial PEB Warehouse", type: "Pre-Engineered Buildings", location: "Hyderabad, Telangana", image: images.projectOne },
  { name: "Luxury Villa Panoramic Glazing", type: "aluplast® uPVC Systems", location: "Jubilee Hills, Hyderabad", image: images.projectTwo },
  { name: "Commercial IT Park Facade", type: "Structural Glazing & ACP", location: "HITEC City, Hyderabad", image: images.projectThree },
];

function Projects() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Pre-Engineered Buildings", "aluplast® uPVC Systems", "Structural Glazing & ACP"];
  const visible = filter === "All" ? projects : projects.filter((project) => project.type === filter);
  return (
    <section className="section projects-section" id="projects">
      <div className="page-shell">
        <div className="section-heading projects-heading">
          <div><p className="eyebrow eyebrow-light">Project Portfolio</p><h2>Engineered structures<br /><em>built to endure.</em></h2></div>
          <div className="filter-row">
            {filters.map((item) => (
              <button
                className={filter === item ? "filter-active" : ""}
                onClick={() => setFilter(item)}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="project-grid">
          {visible.map((project, index) => (
            <article className={`project-card project-${index + 1}`} key={project.name}>
              <img src={project.image} alt={`${project.name} structural engineering project`} />
              <div className="project-shade" />
              <div className="project-info"><p>{project.type} · {project.location}</p><h3>{project.name}</h3></div>
              <span className="circle-arrow circle-arrow-light"><Icon name="arrow" /></span>
            </article>
          ))}
        </div>
        <p className="concept-note">Representative installation photography across our Telangana and South India projects.</p>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["01", "Technical Consultation", "Comprehensive review of structural drawings, loads, spans, and architectural design intent."],
    ["02", "Engineering & Statics", "STAAD.Pro analysis, connection detailing, wind code compliance, and 3D fabrication BIM models."],
    ["03", "Precision Manufacturing", "CNC cutting, robotic SAW welding, multi-chamber uPVC fusion, and automated paint bays."],
    ["04", "Quality & NDT Inspection", "Ultrasonic weld inspection, DFT measurement, water-penetration testing, and pre-assembly."],
    ["05", "Turnkey Site Erection", "On-schedule transport, crane rigging, high-tensile bolt torquing, and final structural sign-off."],
  ];
  return (
    <section className="section process-section" id="process">
      <div className="page-shell">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">From Blueprint to Erection</p><h2>A rigorous process.<br /><em>End to end.</em></h2></div>
          <p>One unified engineering organization, one clear delivery journey—from initial feasibility to final site handover.</p>
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
  ["What divisions and services are handled in-house by Srikala Projects?", "Srikala Projects manufactures German aluplast® uPVC window & door systems, heavy structural steel fabrication, turnkey pre-engineered buildings (PEB), standing seam & sandwich roofing, ACP facade cladding, and structural glazing."],
  ["Where is the manufacturing plant located?", "Our primary manufacturing facility is located Near Mankal Kaman, Sry No.319/A/1B/1C, Mankal, Tukkuguda, Maheshwaram Mandal, Ranga Reddy District, Telangana - 501359."],
  ["What quality standards and certifications do you maintain?", "Our processes adhere to ISO 9001 standards, AWS D1.1 structural welding qualifications, ASTM / IS material testing protocols, and German DIN standards for aluplast® uPVC profile compounding."],
  ["How do we request a site visit or quotation?", "You can contact our sales and engineering desk directly via phone (+91 98660 89771), email (sales@srikalaprojects.com), or submit the project specification form on this website."],
];

function FAQ() {
  const [active, setActive] = useState(0);
  return (
    <section className="section faq-section">
      <div className="page-shell faq-grid">
        <div><p className="eyebrow">Frequently asked</p><h2>Good questions.<br /><em>Clear answers.</em></h2><p className="faq-intro">Need something more specific? Our engineering desk is available to assist with custom statics or quotes.</p></div>
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
          <h2>Let’s build space<br /><em>for something enduring.</em></h2>
          <p>
            Consult our structural engineers and uPVC specialists. We will help formulate the right specification,
            structural load calculations, and itemized budgetary quotation.
          </p>
          <div className="contact-methods">
            <a href="tel:+919866089771">
              <Icon name="phone" />
              <span><small>Call our engineering desk</small>+91 98660 89771</span>
            </a>
            <a href="mailto:sales@srikalaprojects.com">
              <Icon name="mail" />
              <span><small>Email sales & estimations</small>sales@srikalaprojects.com</span>
            </a>
            <a
              href="https://maps.app.goo.gl/8CgULSLTmw5RoYWv7"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="ruler" />
              <span><small>Plant Location</small>Mankal, Maheshwaram Mandal, Telangana - 501359</span>
            </a>
            <a
              href="https://m.indiamart.com/srikalaprojects/"
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--accent)", fontSize: "14px", marginTop: "4px" }}
            >
              <span>View IndiaMART Profile & Catalog →</span>
            </a>
          </div>
        </div>
        <div className="form-panel">
          {status === "success" ? (
            <div className="success-state">
              <span><Icon name="check" size={32} /></span>
              <p className="eyebrow">Enquiry received</p>
              <h3>Thank you for consulting Srikala Projects.</h3>
              <p>Our engineering team has received your details and will formulate a technical proposal shortly.</p>
              <button className="text-link" onClick={() => setStatus("idle")}>
                Send another enquiry <Icon name="arrow" size={17} />
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="form-heading"><span>Project enquiry</span><small>All fields marked * are required</small></div>
              <label><span>Full name *</span><input required placeholder="Your name or company" /></label>
              <div className="form-row">
                <label><span>Phone number *</span><input required type="tel" placeholder="+91 98660 89771" /></label>
                <label><span>Project location</span><input placeholder="City, State" /></label>
              </div>
              <label>
                <span>Product / service of interest *</span>
                <select required defaultValue="">
                  <option value="" disabled>Select an option</option>
                  <option>uPVC Windows & Doors (aluplast®)</option>
                  <option>Heavy Steel Fabrication</option>
                  <option>Pre-Engineered Buildings (PEB)</option>
                  <option>Roofing Systems</option>
                  <option>ACP Cladding Systems</option>
                  <option>Structural Glazing</option>
                </select>
              </label>
              <label>
                <span>Tell us about your project</span>
                <textarea placeholder="Approximate dimensions, tonnage, drawings or requirement scope…" rows={3} />
              </label>
              <label className="consent">
                <input type="checkbox" required defaultChecked />
                <span>I agree to be contacted about this enquiry and accept the privacy notice.</span>
              </label>
              <button className="button button-dark form-submit" type="submit">
                Request a consultation <Icon name="arrow" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <footer>
      <div className="page-shell">
        <div className="footer-main">
          <div>
            <Brand onNavigate={onNavigate} />
            <p style={{ marginTop: "12px", lineHeight: "1.6" }}>
              Four decades of defining industrial standards through precision, structural integrity, and
              German-engineered aluplast® uPVC systems.
            </p>
            <p style={{ fontSize: "13px", color: "var(--muted)", marginTop: "10px" }}>
              📍 Near Mankal Kaman, Sry No.319/A/1B/1C, Mankal, Tukkuguda, Maheshwaram Mandal, Ranga Reddy, Telangana - 501359
            </p>
            <div style={{ marginTop: "12px", display: "flex", gap: "12px" }}>
              <a
                href="https://m.indiamart.com/srikalaprojects/"
                target="_blank"
                rel="noreferrer"
                className="footer-badge"
              >
                IndiaMART TrustSeal
              </a>
              <a
                href="https://maps.app.goo.gl/8CgULSLTmw5RoYWv7"
                target="_blank"
                rel="noreferrer"
                className="footer-badge"
              >
                Google Maps
              </a>
            </div>
          </div>
          <div>
            <h4>Explore</h4>
            <a href="/solutions" onClick={(e) => { e.preventDefault(); onNavigate("/solutions"); }}>Solutions Hub</a>
            <a href="/#products" onClick={(e) => { e.preventDefault(); onNavigate("/#products"); }}>All Divisions</a>
            <a href="/#process" onClick={(e) => { e.preventDefault(); onNavigate("/#process"); }}>Process</a>
            <a href="/#projects" onClick={(e) => { e.preventDefault(); onNavigate("/#projects"); }}>Projects</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="/#why" onClick={(e) => { e.preventDefault(); onNavigate("/#why"); }}>About Us</a>
            <a href="/#contact" onClick={(e) => { e.preventDefault(); onNavigate("/#contact"); }}>Contact</a>
            <a href="/#contact" onClick={(e) => { e.preventDefault(); onNavigate("/#contact"); }}>Get a quote</a>
            <a href="tel:+919866089771">+91 98660 89771</a>
            <a href="mailto:sales@srikalaprojects.com">sales@srikalaprojects.com</a>
          </div>
          <div>
            <h4>Core Solutions</h4>
            {productsData.map((p) => (
              <a
                key={p.slug}
                href={`/solutions/${p.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/solutions/${p.slug}`);
                }}
              >
                {p.title}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Srikala Projects. Engineered to Last.</span>
          <span>Privacy Policy · Terms of Service · Compliance</span>
          <span>Mankal, Maheshwaram Mandal, Ranga Reddy, Telangana</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    return window.location.pathname || "/";
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname || "/");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function navigate(path: string) {
    if (path.includes("#")) {
      const [routePath, hash] = path.split("#");
      const targetRoute = routePath || "/";
      if (targetRoute !== currentRoute) {
        window.history.pushState({}, "", path);
        setCurrentRoute(targetRoute);
        setTimeout(() => {
          const el = document.getElementById(hash);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        window.history.pushState({}, "", path);
        const el = document.getElementById(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    window.history.pushState({}, "", path);
    setCurrentRoute(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Check if we are viewing the Solutions Hub or a specific product solution page
  let isSolutionsHub = false;
  let selectedProduct = null;

  if (currentRoute === "/solutions" || currentRoute === "/solutions/") {
    isSolutionsHub = true;
  } else if (currentRoute.startsWith("/solutions/")) {
    const rawSlug = currentRoute.replace("/solutions/", "").replace(/\/$/, "");
    if (!rawSlug) {
      isSolutionsHub = true;
    } else {
      selectedProduct = productsData.find(
        (p) => p.slug === rawSlug || p.aliases?.includes(rawSlug)
      );
      if (!selectedProduct) {
        isSolutionsHub = true;
      }
    }
  }

  return (
    <div className="app">
      <Header onNavigate={navigate} />
      <main>
        {selectedProduct ? (
          <ProductPage product={selectedProduct} onNavigate={navigate} />
        ) : isSolutionsHub ? (
          <SolutionsHub onNavigate={navigate} />
        ) : (
          <>
            <Hero onNavigate={navigate} />
            <Products onNavigate={navigate} />
            <Engineering />
            <WhyUs />
            <Projects />
            <Process />
            <FAQ />
            <Contact />
          </>
        )}
      </main>
      <Footer onNavigate={navigate} />

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/919866089771?text=Hello%20Srikala%20Projects,%20I%20would%20like%20to%20enquire%20about%20your%20services."
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat with Srikala Projects on WhatsApp"
      >
        <svg width={26} height={26} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.56 0 8.27 3.71 8.27 8.24 0 4.53-3.71 8.24-8.27 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.53 3.71-8.24 8.27-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.45 1.03 2.61.13.17 1.77 2.71 4.3 3.8.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z" />
        </svg>
        <span className="floating-tooltip">Chat with us on WhatsApp</span>
      </a>
    </div>
  );
}
