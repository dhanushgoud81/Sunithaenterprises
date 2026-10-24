import { useState, type FormEvent } from "react";
import { type ProductDetail, productsData } from "../data/products";

interface ProductPageProps {
  product: ProductDetail;
  onNavigate: (path: string) => void;
}

export default function ProductPage({ product, onNavigate }: ProductPageProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "variants" | "applications">("overview");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [quoteSent, setQuoteSent] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<string>(product.variants[0]?.name || "");

  const otherProducts = productsData.filter((p) => p.slug !== product.slug);

  function handleQuoteSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setQuoteSent(true);
  }

  return (
    <article className="product-page">
      {/* Product Hero */}
      <section className="product-hero">
        <img className="product-hero-bg" src={product.heroImage} alt={product.title} />
        <div className="product-hero-overlay" />
        <div className="page-shell product-hero-content">
          <div className="product-breadcrumbs">
            <button className="breadcrumb-btn" onClick={() => onNavigate("/")}>
              Home
            </button>
            <span className="breadcrumb-sep">/</span>
            <button className="breadcrumb-btn" onClick={() => onNavigate("/solutions")}>
              Solutions
            </button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{product.title}</span>
          </div>

          <div className="product-hero-header">
            <span className="card-tag product-hero-tag">{product.tag}</span>
            <h1 className="product-hero-title">
              {product.title}
              <br />
              <em>{product.subtitle}</em>
            </h1>
            <p className="product-hero-desc">{product.copy}</p>

            <div className="product-hero-actions">
              <a href="#quote-section" className="button button-light">
                Request Specification Quote
                <svg aria-hidden="true" className="icon" width={17} height={17} viewBox="0 0 24 24">
                  <path d="M5 19 19 5" />
                  <path d="M8 5h11v11" />
                </svg>
              </a>
              <a href="#variants" className="button button-transparent" onClick={() => setActiveTab("variants")}>
                Browse Systems & Models
              </a>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="product-metrics-grid">
            {product.capabilities.map((cap) => (
              <div key={cap.title} className="product-metric-card">
                <strong className="metric-stat">{cap.stat}</strong>
                <span className="metric-label">{cap.statLabel}</span>
                <p className="metric-desc">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Tab Navigation */}
      <nav className="product-tabs-bar" aria-label="Product details sections">
        <div className="page-shell product-tabs-inner">
          <div className="tab-buttons">
            <button
              className={`tab-btn ${activeTab === "overview" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview & Capabilities
            </button>
            <button
              className={`tab-btn ${activeTab === "variants" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("variants")}
            >
              Models & Systems ({product.variants.length})
            </button>
            <button
              className={`tab-btn ${activeTab === "specs" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("specs")}
            >
              Technical Specifications
            </button>
            <button
              className={`tab-btn ${activeTab === "applications" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("applications")}
            >
              Applications & Sectors
            </button>
          </div>
          <a href="#quote-section" className="button button-small button-dark tab-quote-btn">
            Inquire for this system
          </a>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="page-shell product-main-layout">
        {/* TAB: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="tab-pane">
            <div className="product-overview-section">
              <div className="split-heading">
                <div>
                  <p className="eyebrow">Engineering Rigour</p>
                  <h2>
                    Precision manufactured.<br />
                    <em>Built to perform.</em>
                  </h2>
                </div>
                <div>
                  <p className="lead-paragraph">{product.overview}</p>
                </div>
              </div>

              {/* Engineering Highlights 4-col */}
              <div className="capabilities-grid">
                {product.capabilities.map((cap, idx) => (
                  <div key={cap.title} className="capability-item">
                    <span className="capability-index">0{idx + 1}</span>
                    <h3>{cap.title}</h3>
                    <p>{cap.description}</p>
                    <div className="cap-highlight-box">
                      <span className="cap-stat-value">{cap.stat}</span>
                      <span className="cap-stat-name">{cap.statLabel}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Production Process Pipeline */}
              <div className="product-process-wrapper">
                <div className="section-heading">
                  <p className="eyebrow">Execution Workflow</p>
                  <h2>End-to-End Quality Protocol</h2>
                </div>
                <div className="product-pipeline-list">
                  {product.processSteps.map((step) => (
                    <div key={step.step} className="pipeline-item">
                      <div className="pipeline-badge">{step.step}</div>
                      <div className="pipeline-content">
                        <h4>{step.title}</h4>
                        <p>{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB: VARIANTS */}
        {activeTab === "variants" && (
          <div className="tab-pane" id="variants">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Product Configurations</p>
                <h2>
                  Available Systems &<br />
                  <em>Architectural Profiles</em>
                </h2>
              </div>
              <p>
                Explore standardized series and custom-engineered options manufactured to match your architectural requirements.
              </p>
            </div>

            <div className="variants-grid">
              {product.variants.map((v) => (
                <div key={v.name} className="variant-card">
                  <div className="variant-img-wrap">
                    <img src={v.image} alt={v.name} />
                    <span className="variant-tag">{v.category}</span>
                  </div>
                  <div className="variant-body">
                    <h3>{v.name}</h3>
                    <p className="variant-desc">{v.description}</p>

                    <div className="variant-specs-table">
                      {v.specs.map((s) => (
                        <div key={s.label} className="spec-row">
                          <span className="spec-label">{s.label}</span>
                          <strong className="spec-val">{s.value}</strong>
                        </div>
                      ))}
                    </div>

                    <div className="variant-features-list">
                      <span className="feature-title">Key Architectural Features:</span>
                      <ul>
                        {v.features.map((feat) => (
                          <li key={feat}>
                            <svg className="check-icon" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="#quote-section"
                      className="button button-small button-dark variant-btn"
                      onClick={() => setSelectedVariant(v.name)}
                    >
                      Configure & Inquire
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: SPECS */}
        {activeTab === "specs" && (
          <div className="tab-pane">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Technical Dossier</p>
                <h2>
                  Verified Performance &<br />
                  <em>Material Standards</em>
                </h2>
              </div>
              <p>
                Comprehensive mechanical properties, testing standards, and compliance certifications for engineers and specifiers.
              </p>
            </div>

            <div className="specs-tables-container">
              {product.technicalSpecs.map((cat) => (
                <div key={cat.category} className="spec-category-group">
                  <div className="spec-category-header">
                    <h3>{cat.category}</h3>
                  </div>
                  <div className="spec-table-responsive">
                    <table className="tech-table">
                      <thead>
                        <tr>
                          <th>Parameter</th>
                          <th>Specification & Threshold</th>
                          <th>Verification / Test Code</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cat.items.map((item) => (
                          <tr key={item.parameter}>
                            <td className="param-cell">{item.parameter}</td>
                            <td className="spec-cell">{item.specification}</td>
                            <td className="standard-cell">{item.testStandard || "In-house QA"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: APPLICATIONS */}
        {activeTab === "applications" && (
          <div className="tab-pane">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Field Deployments</p>
                <h2>
                  Selected Applications &<br />
                  <em>Architectural Sectors</em>
                </h2>
              </div>
              <p>
                Engineered for commercial towers, heavy industry, healthcare complexes, and luxury private residences across diverse climates.
              </p>
            </div>

            <div className="applications-grid">
              {product.applications.map((app) => (
                <article key={app.title} className="application-card">
                  <div className="app-img-wrap">
                    <img src={app.image} alt={app.title} />
                    <span className="app-sector-tag">{app.sector}</span>
                  </div>
                  <div className="app-content">
                    <h3>{app.title}</h3>
                    <p>{app.description}</p>
                    <a href="#quote-section" className="text-link" onClick={() => setSelectedVariant(app.title)}>
                      Request Project Consultation
                      <svg className="icon" width={15} height={15} viewBox="0 0 24 24">
                        <path d="M5 19 19 5" />
                        <path d="M8 5h11v11" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Product FAQs */}
        <section className="product-faq-block">
          <div className="faq-grid">
            <div>
              <p className="eyebrow">Technical Inquiries</p>
              <h2>
                Frequently Asked<br />
                <em>Questions</em>
              </h2>
              <p className="faq-intro">
                Have custom architectural drawings or special structural parameters? Speak with our technical engineering desk.
              </p>
            </div>
            <div className="accordion">
              {product.faqs.map((faq, index) => (
                <article key={faq.question} className={`faq-item ${activeFaq === index ? "faq-open" : ""}`}>
                  <button onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
                    <span>0{index + 1}</span>
                    <strong>{faq.question}</strong>
                    <span className="faq-toggle-icon">{activeFaq === index ? "−" : "+"}</span>
                  </button>
                  <div>
                    <p>{faq.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Product-Specific Quote Section */}
        <section className="product-quote-section" id="quote-section">
          <div className="contact-grid">
            <div className="contact-copy">
              <p className="eyebrow eyebrow-light">Project Consultation</p>
              <h2>
                Request a Proposal for<br />
                <em>{product.title}</em>
              </h2>
              <p>
                Provide opening schedules, architectural specifications, or tentative site dimensions. Our technical estimator will formulate an itemized bill of quantities (BOQ).
              </p>
              <div className="contact-methods">
                <a href="tel:+919866089771">
                  <span className="method-icon">📞</span>
                  <span>
                    <small>Direct Technical Line</small>+91 98660 89771
                  </span>
                </a>
                <a href="mailto:sales@sunithaenterprises.com">
                  <span className="method-icon">✉️</span>
                  <span>
                    <small>Engineering Desk</small>sales@sunithaenterprises.com
                  </span>
                </a>
              </div>
            </div>

            <div className="form-panel">
              {quoteSent ? (
                <div className="success-state">
                  <span className="success-check">✓</span>
                  <p className="eyebrow">Consultation Request Sent</p>
                  <h3>Thank you for specifying {product.title}.</h3>
                  <p>Our engineering team has received your inquiry. We will contact you with product cut-sheets, sample profiles, and estimated BOQ timelines.</p>
                  <button className="text-link" onClick={() => setQuoteSent(false)}>
                    Submit another specification enquiry →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit}>
                  <div className="form-heading">
                    <span>{product.title} Proposal</span>
                    <small>* Required</small>
                  </div>

                  <label>
                    <span>Full Name / Architectural Firm *</span>
                    <input required placeholder="Your name or practice name" />
                  </label>

                  <div className="form-row">
                    <label>
                      <span>Phone Number *</span>
                      <input required type="tel" placeholder="+91" />
                    </label>
                    <label>
                      <span>Project Location (City / State) *</span>
                      <input required placeholder="e.g. Hyderabad / Bengaluru" />
                    </label>
                  </div>

                  <div className="form-row">
                    <label>
                      <span>Selected System Variant</span>
                      <select
                        value={selectedVariant}
                        onChange={(e) => setSelectedVariant(e.target.value)}
                      >
                        <option value="">General {product.title}</option>
                        {product.variants.map((v) => (
                          <option key={v.name} value={v.name}>
                            {v.name}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label>
                      <span>Approximate Scope / Area</span>
                      <input placeholder="e.g. 5,000 sq.ft / 45 openings" />
                    </label>
                  </div>

                  <label>
                    <span>Project Details & Specifications</span>
                    <textarea
                      rows={3}
                      placeholder={`Tell us about structural loads, wind ratings, glass build-up, or design preferences for ${product.title}...`}
                    />
                  </label>

                  <label className="consent">
                    <input type="checkbox" required />
                    <span>I request technical support and CAD drawings for this system.</span>
                  </label>

                  <button className="button button-dark form-submit" type="submit">
                    Send Specification Request
                    <svg className="icon" width={17} height={17} viewBox="0 0 24 24">
                      <path d="M5 19 19 5" />
                      <path d="M8 5h11v11" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Explore Other Solutions Section */}
        <section className="other-solutions-section">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Complementary Capabilities</p>
              <h2>Explore Other Systems</h2>
            </div>
            <button className="button button-transparent" onClick={() => onNavigate("/")}>
              View All 6 Solutions →
            </button>
          </div>

          <div className="other-solutions-grid">
            {otherProducts.slice(0, 3).map((item) => (
              <div
                key={item.slug}
                className="other-solution-card"
                onClick={() => onNavigate(`/solutions/${item.slug}`)}
              >
                <div className="other-card-img">
                  <img src={item.heroImage} alt={item.title} />
                  <span className="card-tag">{item.tag}</span>
                </div>
                <div className="other-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <span className="text-link">
                    Explore Solution
                    <svg className="icon" width={15} height={15} viewBox="0 0 24 24">
                      <path d="M5 19 19 5" />
                      <path d="M8 5h11v11" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
