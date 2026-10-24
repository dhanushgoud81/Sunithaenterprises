import { useState, type FormEvent } from "react";
import { type ProductDetail, productsData } from "../data/products";

interface SolutionsHubProps {
  onNavigate: (path: string) => void;
  initialSlug?: string;
}

export default function SolutionsHub({ onNavigate, initialSlug }: SolutionsHubProps) {
  const initialIndex = initialSlug
    ? Math.max(0, productsData.findIndex((p) => p.slug === initialSlug || p.aliases?.includes(initialSlug)))
    : 0;

  const [selectedIndex, setSelectedIndex] = useState<number>(initialIndex >= 0 ? initialIndex : 0);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState<number>(0);
  const [quoteSent, setQuoteSent] = useState<boolean>(false);

  const activeProduct = productsData[selectedIndex] || productsData[0];
  const activeVariant = activeProduct.variants[selectedVariantIdx] || activeProduct.variants[0];

  function handleServiceSelect(index: number) {
    setSelectedIndex(index);
    setSelectedVariantIdx(0);
  }

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setQuoteSent(true);
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Sunitha Enterprises team, I would like to enquire about your ${activeProduct.title} (${activeProduct.subtitle}). Please share specifications and quotation.`
  );

  return (
    <div className="solutions-hub">
      {/* Top Breadcrumb & Hero */}
      <section className="hub-hero">
        <div className="page-shell">
          <div className="product-breadcrumbs">
            <button className="breadcrumb-btn" onClick={() => onNavigate("/")}>
              Home
            </button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Solutions & Divisions</span>
          </div>

          <div className="hub-hero-header">
            <span className="card-tag hub-tag">Sunitha Enterprises · Integrated Engineering</span>
            <h1 className="hub-title">
              Pioneering Industrial &<br />
              <em>Architectural Engineering Solutions</em>
            </h1>
            <p className="hub-subtitle">
              Over four decades of defining structural standards. Explore our six core divisions spanning German
              aluplast® uPVC window & door systems, heavy steel fabrication, turnkey pre-engineered buildings,
              high-performance roofing, ACP facades, and structural glazing.
            </p>

            <div className="hub-stats-strip">
              <div className="hub-stat-item">
                <strong>40+ Yrs</strong>
                <span>Engineering Excellence</span>
              </div>
              <div className="hub-stat-item">
                <strong>6 Divisions</strong>
                <span>Fully Integrated</span>
              </div>
              <div className="hub-stat-item">
                <strong>ISO 9001</strong>
                <span>Certified Manufacturing</span>
              </div>
              <div className="hub-stat-item">
                <strong>500+ Sites</strong>
                <span>Delivered Across India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Split Browser */}
      <section className="hub-browser-section">
        <div className="page-shell hub-browser-layout">
          {/* Left Navigation / Division Selector */}
          <aside className="hub-sidebar" aria-label="Solutions Navigation">
            <div className="hub-sidebar-header">
              <small>OUR 6 CAPABILITIES</small>
              <h3>Select a Division</h3>
            </div>
            <div className="hub-sidebar-list">
              {productsData.map((prod, idx) => {
                const isActive = idx === selectedIndex;
                return (
                  <button
                    key={prod.slug}
                    className={`hub-nav-card ${isActive ? "active-hub-card" : ""}`}
                    onClick={() => handleServiceSelect(idx)}
                  >
                    <div className="hub-nav-idx">0{idx + 1}</div>
                    <div className="hub-nav-text">
                      <h4>{prod.title}</h4>
                      <p>{prod.subtitle}</p>
                    </div>
                    <svg aria-hidden="true" className="hub-nav-arrow" width={18} height={18} viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </button>
                );
              })}
            </div>

            {/* Quick Contact Box in Sidebar */}
            <div className="hub-sidebar-help">
              <div className="help-icon">
                <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h4>Direct Engineering Desk</h4>
              <p>Consult our structural specialists for custom spans, loads, or uPVC specifications.</p>
              <a href="tel:+919866089771" className="hub-help-phone">
                +91 98660 89771
              </a>
              <a
                href={`https://wa.me/919866089771?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="button button-small button-whatsapp"
              >
                Chat on WhatsApp
              </a>
            </div>
          </aside>

          {/* Right Main Showcase Display */}
          <main className="hub-main-display">
            <div className="hub-showcase-card">
              {/* Showcase Banner */}
              <div className="hub-showcase-banner">
                <img src={activeProduct.heroImage} alt={activeProduct.title} />
                <div className="hub-banner-overlay" />
                <div className="hub-banner-content">
                  <span className="card-tag">{activeProduct.tag}</span>
                  <h2>{activeProduct.title}</h2>
                  <p className="hub-banner-sub">{activeProduct.subtitle}</p>
                </div>
              </div>

              {/* Showcase Body */}
              <div className="hub-showcase-body">
                <div className="hub-overview-block">
                  <h3>Division Overview & Capabilities</h3>
                  <p className="lead-p">{activeProduct.overview}</p>
                </div>

                {/* Key Engineering Metrics */}
                <div className="hub-metrics-grid">
                  {activeProduct.capabilities.map((cap) => (
                    <div key={cap.title} className="hub-metric-tile">
                      <span className="hub-metric-stat">{cap.stat}</span>
                      <strong>{cap.title}</strong>
                      <small>{cap.statLabel}</small>
                      <p>{cap.description}</p>
                    </div>
                  ))}
                </div>

                {/* Variant / Model Selector */}
                {activeProduct.variants && activeProduct.variants.length > 0 && (
                  <div className="hub-variants-block">
                    <div className="hub-block-header">
                      <div>
                        <p className="eyebrow">CONFIGURATIONS & SYSTEMS</p>
                        <h3>Available Systems & Models ({activeProduct.variants.length})</h3>
                      </div>
                      <span className="hub-count-pill">Select to preview specs</span>
                    </div>

                    <div className="hub-variant-pills">
                      {activeProduct.variants.map((v, vIdx) => (
                        <button
                          key={v.name}
                          className={`variant-pill-btn ${vIdx === selectedVariantIdx ? "pill-active" : ""}`}
                          onClick={() => setSelectedVariantIdx(vIdx)}
                        >
                          {v.name}
                        </button>
                      ))}
                    </div>

                    {activeVariant && (
                      <div className="hub-variant-preview">
                        <div className="variant-preview-img">
                          <img src={activeVariant.image} alt={activeVariant.name} />
                          <span className="variant-cat-tag">{activeVariant.category}</span>
                        </div>
                        <div className="variant-preview-details">
                          <h4>{activeVariant.name}</h4>
                          <p>{activeVariant.description}</p>

                          <div className="variant-features-list">
                            <strong>Key Engineering Features:</strong>
                            <ul>
                              {activeVariant.features.map((feat, fIdx) => (
                                <li key={fIdx}>
                                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                  {feat}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="variant-specs-row">
                            {activeVariant.specs.map((sp) => (
                              <div key={sp.label} className="variant-mini-spec">
                                <span>{sp.label}</span>
                                <strong>{sp.value}</strong>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Technical Specifications Highlights */}
                <div className="hub-specs-block">
                  <div className="hub-block-header">
                    <div>
                      <p className="eyebrow">QUALITY & STATICS</p>
                      <h3>Technical Specification Summary</h3>
                    </div>
                  </div>

                  <div className="hub-specs-table-wrap">
                    <table className="hub-specs-table">
                      <thead>
                        <tr>
                          <th>Technical Parameter</th>
                          <th>Specification Details</th>
                          <th>Standard / Verification</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activeProduct.technicalSpecs[0]?.items.map((item, i) => (
                          <tr key={i}>
                            <td><strong>{item.parameter}</strong></td>
                            <td>{item.specification}</td>
                            <td><code>{item.testStandard || "ISO / Mill Certified"}</code></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Primary Action Row */}
                <div className="hub-actions-bar">
                  <div className="hub-actions-info">
                    <strong>Need in-depth engineering drawings or architectural CAD blocks?</strong>
                    <p>Visit the dedicated deep-dive technical page with full variants, applications and FAQs.</p>
                  </div>
                  <div className="hub-actions-btns">
                    <button
                      className="button button-dark"
                      onClick={() => onNavigate(`/solutions/${activeProduct.slug}`)}
                    >
                      View Full Division Specs & Drawings
                      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 19 19 5" />
                        <path d="M8 5h11v11" />
                      </svg>
                    </button>
                    <a
                      href={`https://wa.me/919866089771?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noreferrer"
                      className="button button-whatsapp"
                    >
                      WhatsApp Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* Grid of All 6 Solutions Overview */}
      <section className="section hub-all-grid-section">
        <div className="page-shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">COMPLETE DIRECTORY</p>
              <h2>All Six Engineering Divisions</h2>
            </div>
            <p>
              Every division operate under strict ISO certified manufacturing controls at our Maheshwaram Mandal, Ranga
              Reddy production complex.
            </p>
          </div>

          <div className="product-grid">
            {productsData.map((prod, index) => (
              <article
                key={prod.slug}
                className="product-card"
                onClick={() => onNavigate(`/solutions/${prod.slug}`)}
                style={{ cursor: "pointer" }}
              >
                <img src={prod.heroImage} alt={prod.title} />
                <div className="product-card-shade" />
                <span className="card-tag">{prod.tag}</span>
                <div className="product-card-copy">
                  <h3>{prod.title}</h3>
                  <p>{prod.copy}</p>
                  <span className="solution-link">
                    Explore Division Page (0{index + 1})
                    <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 19 19 5" />
                      <path d="M8 5h11v11" />
                    </svg>
                  </span>
                </div>
                <span className="circle-arrow">
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 19 19 5" />
                    <path d="M8 5h11v11" />
                  </svg>
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Quick Quote Form */}
      <section className="section hub-quote-section" id="quote">
        <div className="page-shell contact-grid">
          <div className="contact-copy">
            <p className="eyebrow eyebrow-light">Turnkey Estimates</p>
            <h2>Request an Engineered Proposal</h2>
            <p>
              Our engineering team assesses opening sizes, structural loads, cyclone wind ratings, and architectural
              finishes to return a compliant specification and budgetary quotation within 24 hours.
            </p>
            <div className="contact-methods">
              <a href="tel:+919866089771">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>
                  <small>Call Direct</small>+91 98660 89771
                </span>
              </a>
              <a href="mailto:sales@sunithaenterprises.com">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="1" />
                  <path d="m3 7 9 7 9-7" />
                </svg>
                <span>
                  <small>Email</small>sales@sunithaenterprises.com
                </span>
              </a>
              <a
                href="https://maps.app.goo.gl/8CgULSLTmw5RoYWv7"
                target="_blank"
                rel="noreferrer"
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <span>
                  <small>Plant Location</small>Mankal, Maheshwaram Mandal, Telangana
                </span>
              </a>
            </div>
          </div>

          <div className="form-panel">
            {quoteSent ? (
              <div className="success-state">
                <span className="success-icon-wrap">
                  <svg width={36} height={36} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <p className="eyebrow">Proposal Request Submitted</p>
                <h3>Thank you for consulting Sunitha Enterprises.</h3>
                <p>
                  Our senior structural design engineer will review your project parameters and contact you shortly.
                </p>
                <button className="text-link" onClick={() => setQuoteSent(false)}>
                  Submit another specification request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="form-heading">
                  <span>Fast Project Quotation</span>
                  <small>All fields marked * are required</small>
                </div>
                <label>
                  <span>Full Name *</span>
                  <input required placeholder="Your name or organization" />
                </label>
                <div className="form-row">
                  <label>
                    <span>Phone Number *</span>
                    <input required type="tel" placeholder="+91 98660 89771" />
                  </label>
                  <label>
                    <span>Site Location</span>
                    <input placeholder="City, State" />
                  </label>
                </div>
                <label>
                  <span>Select Primary Service of Interest *</span>
                  <select required defaultValue={activeProduct.title}>
                    {productsData.map((p) => (
                      <option key={p.slug} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  <span>Approximate Dimensions / Project Scope</span>
                  <textarea
                    placeholder="Provide details such as floor area, total square footage, number of openings, structural steel tonnage, or architectural drawings available..."
                    rows={3}
                  />
                </label>
                <label className="consent">
                  <input type="checkbox" required defaultChecked />
                  <span>I authorize Sunitha Enterprises to contact me regarding this quotation inquiry.</span>
                </label>
                <button className="button button-dark form-submit" type="submit">
                  Generate Quotation Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
