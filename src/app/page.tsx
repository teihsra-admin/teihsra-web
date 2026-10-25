import "./homepage.css";

const productLinks = [
  {
    no: "01",
    name: "Shalya",
    area: "Surgical workflows",
    description:
      "A dedicated direction for operating-theatre teams: coordinating what needs to happen before, during and after surgery.",
    href: "/products/shalya",
  },
  {
    no: "02",
    name: "Nukta",
    area: "Professional surgical records",
    description:
      "A personal case journal and surgical logbook that lets clinicians revisit their operative experience and learning.",
    href: "/products/nukta",
  },
  {
    no: "03",
    name: "Reva",
    area: "Patient continuity",
    description:
      "Exploring clearer, more accessible patient guidance after discharge, with care instructions that people can follow.",
    href: "/products/reva",
  },
] as const;

const documentation = [
  {
    number: "01",
    title: "Capture where care happens",
    description:
      "Dictate or type admission histories, progress notes and significant events without leaving the patient's clinical context.",
  },
  {
    number: "02",
    title: "Keep rounds connected",
    description:
      "Move through ward reviews while each authored note stays attached to the relevant patient and admission.",
  },
  {
    number: "03",
    title: "Document the operation",
    description:
      "Prepare operative and procedure records that remain part of the same longitudinal hospital record.",
  },
  {
    number: "04",
    title: "Bring the stay together",
    description:
      "Assemble a case or discharge summary from clinical documentation, for professional review before finalisation.",
  },
] as const;

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="M4.25 15.75 15.75 4.25M6.75 4.25h9v9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="M3.75 10h12.5m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="te-site" id="top">
      <a href="#main" className="te-skip">Skip to content</a>

      <header className="te-header">
        <div className="te-container te-header-inner">
          <a className="te-brand" href="/" aria-label="TEIHSRA Health Intelligence home">
            <span className="te-brand-mark" aria-hidden="true">T</span>
            <span className="te-brand-type">
              <strong>TEIHSRA</strong>
              <small>HEALTH INTELLIGENCE</small>
            </span>
          </a>

          <nav className="te-nav" aria-label="Main navigation">
            <a href="#anvaya">Anvaya</a>
            <a href="#portfolio">Our products</a>
            <a href="#approach">Approach</a>
            <a href="#evaluate">For hospitals</a>
          </nav>

          <a className="te-header-contact" href="mailto:connect@teihsra.com?subject=TEIHSRA%20Hospital%20Enquiry">
            Contact us <Arrow diagonal />
          </a>
        </div>
      </header>

      <main id="main">
        <section className="te-hero" aria-labelledby="te-hero-title">
          <div className="te-container te-hero-grid">
            <div className="te-hero-copy">
              <div className="te-section-label te-section-label-light">
                <span className="te-label-rule" aria-hidden="true" />
                CLINICALLY GROUNDED HEALTH TECHNOLOGY
              </div>
              <h1 id="te-hero-title">
                Built for the way <span>hospitals actually work.</span>
              </h1>
              <p className="te-hero-lede">
                TEIHSRA develops clinical software around real hospital workflows—not the other way around.
                Our work begins with documentation, where every decision, review and handover needs a dependable record.
              </p>
              <div className="te-actions">
                <a className="te-button te-button-cream" href="#anvaya">
                  Explore Anvaya <Arrow />
                </a>
                <a className="te-text-link te-text-link-light" href="#evaluate">
                  For hospital teams <Arrow diagonal />
                </a>
              </div>
              <div className="te-hero-foot">
                <span>CLINICIAN-REVIEWED</span>
                <span>ADMISSION-CENTRED</span>
                <span>BUILT IN INDIA</span>
              </div>
            </div>

            <div className="te-hero-art">
              <div className="te-illustration-meta">
                <span>THE RECORD, NOT THE REDUNDANCY</span>
                <span>01 / 04</span>
              </div>
              <div className="te-illustration-main">
                <span className="te-illustration-flag">ANVAYA · DOCUMENTATION</span>
                <h2>One admission.<br /><em>A continuous record.</em></h2>
                <p>A note has more value when its context can follow the patient through the stay.</p>
                <div className="te-journey" role="list" aria-label="Illustrative clinical documentation journey">
                  <div className="te-journey-item" role="listitem"><span className="te-journey-node">01</span><div><strong>Capture</strong><small>Speech or typed observation</small></div><span className="te-journey-tag">CLINICIAN</span></div>
                  <div className="te-journey-item" role="listitem"><span className="te-journey-node">02</span><div><strong>Review</strong><small>Check accuracy and clinical meaning</small></div><span className="te-journey-tag">VERIFY</span></div>
                  <div className="te-journey-item" role="listitem"><span className="te-journey-node">03</span><div><strong>Continue</strong><small>Progress notes and procedures</small></div><span className="te-journey-tag">RECORD</span></div>
                  <div className="te-journey-item" role="listitem"><span className="te-journey-node">04</span><div><strong>Summarise</strong><small>Source-linked discharge documentation</small></div><span className="te-journey-tag">REVIEWED</span></div>
                </div>
              </div>
              <div className="te-illustration-foot">
                <span>Illustrative workflow — no patient data</span>
                <span>TEIHSRA / ANVAYA</span>
              </div>
            </div>
          </div>
        </section>

        <section className="te-intro" id="anvaya" aria-labelledby="te-anvaya-title">
          <div className="te-container">
            <div className="te-section-label"><span className="te-label-rule" aria-hidden="true" /> 01 / OUR LEAD PRODUCT</div>
            <div className="te-intro-head">
              <div>
                <div className="te-kicker">ANVAYA <span>BY TEIHSRA</span></div>
                <h2 id="te-anvaya-title">Documentation that <em>keeps its context.</em></h2>
              </div>
              <div className="te-intro-summary">
                <p>Clinical documentation is not a series of unrelated text boxes. Anvaya connects notes, rounds, operations and summaries around the patient&apos;s admission—with clinicians responsible for reviewing what enters the record.</p>
                <a className="te-underline-link" href="https://anvaya.teihsra.com/product.html">
                  Explore Anvaya in detail <Arrow diagonal />
                </a>
              </div>
            </div>

            <div className="te-documentation-list">
              {documentation.map((item) => (
                <article key={item.number} className="te-documentation-item">
                  <span className="te-documentation-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>

            <div className="te-intro-bottom">
              <p>AI can support transcription and drafting. It does not replace the clinician&apos;s judgement, authorship or final verification.</p>
              <a href="https://anvaya.teihsra.com/hospital-evaluation.html" className="te-outline-link">
                How hospitals can evaluate Anvaya <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="te-approach" id="approach" aria-labelledby="te-approach-title">
          <div className="te-container te-approach-grid">
            <div className="te-approach-intro">
              <div className="te-section-label te-section-label-light"><span className="te-label-rule" aria-hidden="true" /> 02 / OUR APPROACH</div>
              <h2 id="te-approach-title">Technology in service of <em>clinical responsibility.</em></h2>
              <p>Good software should make it easier to do the right work, while keeping people accountable for the decisions that matter.</p>
            </div>
            <div className="te-principles">
              <article>
                <span>01</span>
                <div><h3>Keep the clinician in control</h3><p>AI-assisted content is a draft to review, not a substitute for observing, deciding or documenting what actually happened.</p></div>
              </article>
              <article>
                <span>02</span>
                <div><h3>Protect the source of truth</h3><p>Authorship, provenance, corrections and institutional permissions matter as much as the finished document.</p></div>
              </article>
              <article>
                <span>03</span>
                <div><h3>Work alongside existing systems</h3><p>A hospital should be able to improve a clinical workflow without being asked to replace its entire operational software stack.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="te-portfolio" id="portfolio" aria-labelledby="te-portfolio-title">
          <div className="te-container">
            <div className="te-section-label"><span className="te-label-rule" aria-hidden="true" /> 03 / THE WIDER PORTFOLIO</div>
            <div className="te-portfolio-head">
              <h2 id="te-portfolio-title">One philosophy. <em>Different clinical needs.</em></h2>
              <p>Beyond Anvaya, TEIHSRA is developing focused products for surgical teams, professional learning and continuity after discharge.</p>
            </div>
            <div className="te-product-grid">
              {productLinks.map((product) => (
                <a className="te-product-card" href={product.href} key={product.name}>
                  <div className="te-product-card-top"><span>{product.no}</span><span className="te-product-open"><Arrow diagonal /></span></div>
                  <div className="te-product-card-copy">
                    <span className="te-product-area">{product.area}</span>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                  <div className="te-product-card-bottom">Explore product <Arrow /></div>
                </a>
              ))}
            </div>
            <p className="te-portfolio-note">Product features and availability vary by application and deployment. Explore each product for its current direction and status.</p>
          </div>
        </section>

        <section className="te-pilot" id="evaluate" aria-labelledby="te-pilot-title">
          <div className="te-container te-pilot-grid">
            <div className="te-pilot-copy">
              <div className="te-section-label te-section-label-light"><span className="te-label-rule" aria-hidden="true" /> 04 / FOR HOSPITALS</div>
              <h2 id="te-pilot-title">Start with the workflow that needs attention.</h2>
              <p>Considering Anvaya for your institution? We can discuss your documentation process, demonstrate the relevant workflow and define a responsible evaluation before considering rollout.</p>
              <div className="te-actions">
                <a href="mailto:connect@teihsra.com?subject=Anvaya%20Hospital%20Evaluation" className="te-button te-button-cream">Discuss a hospital evaluation <Arrow /></a>
                <a href="https://anvaya.teihsra.com/hospital-evaluation.html" className="te-text-link te-text-link-light">Read the evaluation checklist <Arrow diagonal /></a>
              </div>
              <p className="te-safety-note">Please do not email patient records or identifiable clinical information.</p>
            </div>
            <div className="te-pilot-steps" aria-label="Hospital evaluation process">
              <div><span>01</span><strong>Understand your clinical workflow</strong><p>Identify the documentation problems and the people involved.</p></div>
              <div><span>02</span><strong>Review with demonstration cases</strong><p>Explore capture, verification, records and summaries using synthetic examples.</p></div>
              <div><span>03</span><strong>Agree on evaluation criteria</strong><p>Consider usability, documentation quality, access controls and review workload.</p></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="te-footer">
        <div className="te-container">
          <div className="te-footer-primary">
            <div className="te-footer-identity"><strong>TEIHSRA</strong><span>Technology-Empowered Intelligence for Healthcare Systems, Research and Advancement.</span></div>
            <a href="mailto:connect@teihsra.com" className="te-footer-contact">connect@teihsra.com <Arrow diagonal /></a>
          </div>
          <div className="te-footer-bottom">
            <span>© 2026 TEIHSRA Health Intelligence</span>
            <nav aria-label="Footer navigation">
              <a href="/products/anvaya">Anvaya</a>
              <a href="/products/shalya">Shalya</a>
              <a href="/products/nukta">Nukta</a>
              <a href="/products/reva">Reva</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
