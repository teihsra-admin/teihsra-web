"use client";

import { useEffect, useState } from "react";

const PRODUCTS = [
  {
    name: "Anvaya",
    subtitle: "Clinical Documentation Intelligence",
    line: "Say it once. Let the record remember.",
    href: "/products/anvaya",
    accent: "rose",
  },
  {
    name: "Shalya",
    subtitle: "Surgical Workflow Intelligence",
    line: "The operating room, finally in one flow.",
    href: "/products/shalya",
    accent: "sage",
  },
  {
    name: "Nukta",
    subtitle: "Personal Surgical Intelligence",
    line: "Your cases should teach you twice.",
    href: "/products/nukta",
    accent: "plum",
  },
  {
    name: "Reva",
    subtitle: "Patient Guidance & Care Continuity",
    line: "Care should remain clear after discharge.",
    href: "/products/reva",
    accent: "brass",
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

function Spark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.8c.8 4.2 2.9 6.3 7.1 7.1-4.2.8-6.3 2.9-7.1 7.1-.8-4.2-2.9-6.3-7.1-7.1 4.2-.8 6.3-2.9 7.1-7.1Z" fill="currentColor" />
      <path d="M18.2 15.7c.35 1.8 1.25 2.7 3.05 3.05-1.8.35-2.7 1.25-3.05 3.05-.35-1.8-1.25-2.7-3.05-3.05 1.8-.35 2.7-1.25 3.05-3.05Z" fill="currentColor" opacity=".45" />
    </svg>
  );
}

export default function HomePage() {
  const [activeProduct, setActiveProduct] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("revealed")),
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="teihsra-home">
      <div className="noise" aria-hidden="true" />

      <header className="topbar">
        <a href="#top" className="brand" aria-label="TEIHSRA home">
          <BrandMark />
          <span>
            <b>TEIHSRA</b>
            <small>Health Intelligence</small>
          </span>
        </a>

        <nav>
          <a href="#products">Products</a>
          <a href="#sankalan">Sankalan</a>
          <a href="#principles">Approach</a>
          <a href="#pilots">Pilots</a>
        </nav>

        <a className="quiet-cta" href="mailto:hello@teihsra.com?subject=TEIHSRA%20Partnership">
          Talk to us
          <Arrow />
        </a>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy" data-reveal>
          <span className="eyebrow">Technology-Empowered Intelligence for Healthcare Systems, Research and Advancement</span>
          <h1>
            Intelligence for
            <br />
            <em>the clinical journey.</em>
          </h1>
          <p className="lede">
            TEIHSRA builds clinical technology around the way care actually happens—documentation, surgery, professional growth and patient continuity—without forcing healthcare into generic software patterns.
          </p>

          <div className="hero-actions">
            <a className="main-cta" href="#products">
              Explore the ecosystem
              <span><Arrow /></span>
            </a>
            <a className="secondary-link" href="mailto:hello@teihsra.com?subject=TEIHSRA%20Partnership">
              Discuss a hospital pilot
              <span>↗</span>
            </a>
          </div>

          <div className="hero-proof">
            <span>Clinical workflow first</span>
            <span>AI as an enabling layer</span>
            <span>Built for configurable deployment</span>
          </div>
        </div>

        <div className="hero-system" data-reveal>
          <div className="system-core">
            <small>TEIHSRA ECOSYSTEM</small>
            <h2>One clinical journey.<br />Different intelligences.</h2>
            <p>Products can stand alone—or connect through a shared event and identity foundation.</p>
          </div>

          <div className="orbit orbit-1" />
          <div className="orbit orbit-2" />

          {PRODUCTS.map((product, i) => (
            <button
              key={product.name}
              className={`product-node node-${i} ${activeProduct === i ? "active" : ""}`}
              onClick={() => setActiveProduct(i)}
            >
              <span>{product.name}</span>
              <small>{product.subtitle}</small>
            </button>
          ))}

          <div className="active-product">
            <span className={`product-glow ${PRODUCTS[activeProduct].accent}`} />
            <small>SELECTED</small>
            <h3>{PRODUCTS[activeProduct].name}</h3>
            <p>{PRODUCTS[activeProduct].line}</p>
            <a href={PRODUCTS[activeProduct].href}>Open product <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-label" data-reveal>
          <span>WHY TEIHSRA</span>
          <i />
        </div>
        <div className="manifesto-grid">
          <h2 data-reveal>
            Healthcare does not need
            <br />
            <em>more software-shaped problems.</em>
          </h2>
          <div data-reveal>
            <p>
              Clinical work is temporal, collaborative, role-dependent and full of context. We design around those realities first.
            </p>
            <p>
              The result is software that behaves less like a database interface and more like an extension of clinical work.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="products-section">
        <div className="products-head" data-reveal>
          <span className="section-label">01 / PRODUCTS</span>
          <h2>
            Four products.
            <br />
            <em>One connected philosophy.</em>
          </h2>
        </div>

        <div className="product-grid">
          {PRODUCTS.map((product, index) => (
            <a key={product.name} href={product.href} className={`product-card ${product.accent}`} data-reveal>
              <div className="product-card-top">
                <span>0{index + 1}</span>
                <small>{product.subtitle}</small>
              </div>
              <h3>{product.name}</h3>
              <p>{product.line}</p>
              <div className="product-card-footer">
                <span>Explore</span>
                <Arrow />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="journey-section">
        <div className="journey-copy" data-reveal>
          <span className="section-label">02 / THE JOURNEY</span>
          <h2>
            From bedside
            <br />
            <em>to home.</em>
          </h2>
          <p>
            The ecosystem is designed around continuity—not four isolated applications.
          </p>
        </div>

        <div className="journey-flow" data-reveal>
          <article>
            <span>01</span>
            <small>DOCUMENT</small>
            <h3>Anvaya</h3>
            <p>Capture and verify the clinical record.</p>
          </article>
          <i />
          <article>
            <span>02</span>
            <small>OPERATE</small>
            <h3>Shalya</h3>
            <p>Coordinate the surgical case and theatre workflow.</p>
          </article>
          <i />
          <article>
            <span>03</span>
            <small>GROW</small>
            <h3>Nukta</h3>
            <p>Carry surgical experience forward as personal intelligence.</p>
          </article>
          <i />
          <article>
            <span>04</span>
            <small>CONTINUE</small>
            <h3>Reva</h3>
            <p>Keep patient guidance clear after discharge.</p>
          </article>
        </div>
      </section>

      <section id="sankalan" className="sankalan-section">
        <div className="sankalan-copy" data-reveal>
          <span className="section-label">03 / SANKALAN</span>
          <h2>
            One place to
            <br />
            <em>bring the ecosystem together.</em>
          </h2>
          <p>
            Sankalan is the deployment and commercial layer above TEIHSRA’s hospital-facing products—designed so hospitals can start simply and configure deeply as their needs evolve.
          </p>
        </div>

        <div className="launchpad" data-reveal>
          <div className="launchpad-head">
            <div>
              <small>SANKALAN LAUNCHPAD</small>
              <h3>Hospital Scaffold</h3>
            </div>
            <span>Ready to configure</span>
          </div>

          <div className="launchpad-grid">
            {[
              ["Hospital", "Identity, structure, teams"],
              ["Anvaya", "Documentation"],
              ["Shalya", "Surgical workflow"],
              ["Reva", "Patient continuity"],
              ["Nukta Link", "Free institutional link"],
              ["Access Pass", "Bundle & capabilities"],
            ].map(([title, desc], index) => (
              <button key={title} className={index === 0 ? "active" : ""}>
                <b>{title}</b>
                <small>{desc}</small>
              </button>
            ))}
          </div>

          <div className="launchpad-footer">
            <span><Spark />Quick Launch available</span>
            <span>Guided → Custom, same Scaffold</span>
            <button>Explore Sankalan <Arrow /></button>
          </div>
        </div>
      </section>

      <section id="principles" className="principles-section">
        <div className="principles-head" data-reveal>
          <span className="section-label">04 / OUR APPROACH</span>
          <h2>
            What we refuse
            <br />
            <em>to compromise.</em>
          </h2>
        </div>

        <div className="principles-grid">
          <article data-reveal>
            <span>01</span>
            <h3>Workflow before interface</h3>
            <p>We start with how clinical work actually happens, then build the interface around that sequence.</p>
          </article>
          <article data-reveal>
            <span>02</span>
            <h3>Integrity beneath flexibility</h3>
            <p>Hospitals can configure deeply at the workflow edge while authorship, provenance and audit integrity remain protected.</p>
          </article>
          <article data-reveal>
            <span>03</span>
            <h3>AI with purpose</h3>
            <p>AI is used where it reduces friction, structures information or surfaces useful context—not as decoration.</p>
          </article>
        </div>
      </section>

      <section className="india-section">
        <div className="india-copy" data-reveal>
          <span className="section-label">05 / BUILT FOR REAL CLINICAL CONTEXT</span>
          <h2>
            Designed for
            <br />
            <em>the realities of Indian healthcare.</em>
          </h2>
        </div>

        <div className="india-points" data-reveal>
          <article>
            <b>Mobile at the bedside</b>
            <span>Clinical capture should work where clinicians actually are.</span>
          </article>
          <article>
            <b>Multilingual by design</b>
            <span>Patient-facing communication can adapt to local language without weakening the clinical record.</span>
          </article>
          <article>
            <b>HMIS coexistence first</b>
            <span>TEIHSRA products are designed to complement existing systems before demanding replacement.</span>
          </article>
          <article>
            <b>Remote deployment</b>
            <span>Launchpad is designed so configuration and launch can increasingly happen without on-site engineering.</span>
          </article>
        </div>
      </section>

      <section id="pilots" className="pilots-section">
        <div className="pilots-panel" data-reveal>
          <div>
            <small>PRIVATE HOSPITAL PILOTS</small>
            <h2>Start with one department.</h2>
            <p>
              We are preparing focused pilots with hospitals that want to improve a real clinical workflow without committing to a hospital-wide transformation project on day one.
            </p>
          </div>

          <div className="pilot-steps">
            <article><span>01</span><b>Choose the workflow</b><small>One department. One clear problem.</small></article>
            <article><span>02</span><b>Configure remotely</b><small>Launch Partner + Sankalan Launchpad.</small></article>
            <article><span>03</span><b>Test safely</b><small>Synthetic workflow preview before go-live.</small></article>
            <article><span>04</span><b>Measure the result</b><small>Adoption, time saved and workflow outcomes.</small></article>
          </div>

          <a href="mailto:hello@teihsra.com?subject=TEIHSRA%20Private%20Hospital%20Pilot">
            Discuss a pilot
            <Arrow />
          </a>
        </div>
      </section>

      <section className="closing">
        <div className="closing-lines" aria-hidden="true">
          <i /><i /><i />
        </div>
        <div data-reveal>
          <span>TEIHSRA HEALTH INTELLIGENCE</span>
          <h2>
            Better clinical systems
            <br />
            <em>begin with better clinical thinking.</em>
          </h2>
          <p>
            We are building a healthcare technology company around that idea.
          </p>
          <a href="mailto:hello@teihsra.com?subject=TEIHSRA%20Conversation">
            Start a conversation
            <Arrow />
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="brand footer-brand">
          <BrandMark />
          <span><b>TEIHSRA</b><small>Health Intelligence</small></span>
        </div>

        <div className="footer-links">
          <a href="/products/anvaya">Anvaya</a>
          <a href="/products/shalya">Shalya</a>
          <a href="/products/nukta">Nukta</a>
          <a href="/products/reva">Reva</a>
          <a href="mailto:hello@teihsra.com">Contact</a>
        </div>

        <div className="footer-note">
          <span>Clinical technology, designed around care</span>
          <span>Private pilot development</span>
        </div>
      </footer>

      <style jsx global>{`
        :root{
          --paper:#f5f0e7;
          --paper2:#fbf8f2;
          --ink:#20241f;
          --muted:#6f756f;
          --line:rgba(32,36,31,.12);
          --rose:#aa625c;
          --rose-soft:#ead2cd;
          --sage:#7f927a;
          --sage-soft:#e1e7dc;
          --brass:#b48c4d;
          --brass-soft:#eadfc5;
          --plum:#69596b;
          --plum-soft:#e4dce5;
        }

        *{box-sizing:border-box}
        html{scroll-behavior:smooth;background:var(--paper)}
        body{margin:0;background:var(--paper);color:var(--ink)}
        body,button,input,textarea{font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
        a{color:inherit;text-decoration:none}
        button{font:inherit;color:inherit;-webkit-tap-highlight-color:transparent}
        svg{display:block}

        .teihsra-home{
          position:relative;
          overflow:hidden;
          background:
            radial-gradient(circle at 82% 7%, rgba(180,140,77,.07), transparent 28rem),
            radial-gradient(circle at 12% 24%, rgba(127,146,122,.06), transparent 28rem),
            var(--paper);
        }

        .noise{
          position:fixed;inset:0;pointer-events:none;z-index:50;opacity:.13;mix-blend-mode:multiply;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.10'/%3E%3C/svg%3E");
        }

        [data-reveal]{opacity:0;transform:translateY(26px);transition:opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)}
        [data-reveal].revealed{opacity:1;transform:none}

        .topbar{
          width:min(1420px,calc(100% - 56px));margin:0 auto;min-height:76px;
          display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:30px;position:relative;z-index:20;
        }

        .brand{display:inline-flex;align-items:center;gap:11px;width:max-content}
        .brand>span:last-child{display:grid;gap:1px}
        .brand b{font-family:Georgia,"Times New Roman",serif;font-size:22px;font-weight:400;letter-spacing:.02em}
        .brand small{font-size:7px;letter-spacing:.12em;text-transform:uppercase;color:#8d918c}

        .brand-mark{position:relative;width:28px;height:28px;display:block}
        .brand-mark i{position:absolute;width:7px;height:7px;border-radius:50%}
        .brand-mark i:nth-child(1){left:1px;top:10px;background:var(--rose)}
        .brand-mark i:nth-child(2){right:2px;top:2px;background:var(--sage)}
        .brand-mark i:nth-child(3){right:2px;bottom:2px;background:var(--brass)}
        .brand-mark::before,.brand-mark::after{content:"";position:absolute;left:6px;top:13px;width:18px;height:1px;background:rgba(32,36,31,.35);transform-origin:left center}
        .brand-mark::before{transform:rotate(-31deg)}
        .brand-mark::after{transform:rotate(31deg)}

        .topbar nav{display:flex;gap:28px;font-size:11px;color:#5d635d}
        .topbar nav a{position:relative;padding:8px 0}
        .topbar nav a::after{content:"";position:absolute;left:0;right:100%;bottom:3px;height:1px;background:var(--ink);transition:right .25s ease}
        .topbar nav a:hover::after{right:0}

        .quiet-cta{
          justify-self:end;display:inline-flex;align-items:center;gap:11px;padding:10px 13px 10px 17px;border:1px solid var(--line);
          border-radius:999px;background:rgba(251,248,242,.65);backdrop-filter:blur(12px);font-size:10px;transition:.22s ease;
        }
        .quiet-cta:hover{transform:translateY(-2px);background:#fffdf8}
        .quiet-cta svg{width:16px}

        .hero{
          width:min(1420px,calc(100% - 56px));margin:0 auto;min-height:860px;padding:100px 0 120px;
          display:grid;grid-template-columns:.9fr 1.1fr;gap:60px;align-items:center;position:relative;
        }

        .eyebrow,.section-label{font-size:8px;letter-spacing:.18em;text-transform:uppercase;color:#7f847e}
        .hero h1,.manifesto-grid h2,.products-head h2,.journey-copy h2,.sankalan-copy h2,.principles-head h2,.india-copy h2,.closing h2{
          font-family:Georgia,"Times New Roman",serif;font-weight:400;letter-spacing:-.055em;margin:0;
        }
        .hero h1{font-size:clamp(68px,6.4vw,110px);line-height:.9;margin-top:26px}
        em{color:var(--plum);font-weight:400}
        .lede{max-width:620px;margin:38px 0 0;font-size:18px;line-height:1.65;color:#595f59}

        .hero-actions{display:flex;align-items:center;gap:28px;margin-top:36px}
        .main-cta{
          min-height:54px;display:inline-flex;align-items:center;gap:15px;padding:8px 8px 8px 20px;border-radius:999px;
          background:var(--ink);color:#fffaf1;font-size:11px;box-shadow:0 18px 38px rgba(32,36,31,.15);transition:.22s ease;
        }
        .main-cta:hover{transform:translateY(-3px)}
        .main-cta>span{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:#fffaf1;color:var(--ink)}
        .main-cta svg{width:16px}
        .secondary-link{font-size:11px;display:inline-flex;gap:9px;align-items:center;color:#5f655f}
        .secondary-link span{transition:.2s ease}
        .secondary-link:hover span{transform:translate(3px,-3px)}

        .hero-proof{display:flex;flex-wrap:wrap;gap:8px;margin-top:52px}
        .hero-proof span{padding:7px 10px;border:1px solid var(--line);border-radius:999px;font-size:8px;color:#737973;background:rgba(251,248,242,.55)}

        .hero-system{min-height:680px;position:relative;display:grid;place-items:center}
        .system-core{
          width:330px;height:330px;border-radius:50%;background:#fffdf9;border:1px solid var(--line);box-shadow:0 30px 80px rgba(55,48,40,.11);
          display:grid;place-content:center;text-align:center;padding:42px;position:relative;z-index:5;
        }
        .system-core small,.launchpad-head small,.pilots-panel small{font-size:7px;letter-spacing:.15em;color:#959a94}
        .system-core h2{font-family:Georgia,"Times New Roman",serif;font-size:28px;line-height:1.05;font-weight:400;letter-spacing:-.04em;margin:12px 0}
        .system-core p{margin:0;font-size:8px;line-height:1.55;color:#7b817b}

        .orbit{position:absolute;border:1px solid rgba(32,36,31,.09);border-radius:50%}
        .orbit-1{width:500px;height:500px}
        .orbit-2{width:650px;height:650px;border-style:dashed;opacity:.65}

        .product-node{
          position:absolute;width:160px;min-height:70px;border:1px solid var(--line);background:#fbf8f2;border-radius:17px;
          padding:12px;text-align:left;display:grid;gap:4px;cursor:pointer;z-index:7;box-shadow:0 12px 28px rgba(55,48,40,.07);transition:.22s ease;
        }
        .product-node:hover,.product-node.active{transform:translateY(-5px);background:#fffdf9}
        .product-node span{font-family:Georgia,"Times New Roman",serif;font-size:18px}
        .product-node small{font-size:6px;line-height:1.35;color:#8d928c}
        .node-0{top:52px;left:50%;transform:translateX(-50%)}
        .node-0:hover,.node-0.active{transform:translateX(-50%) translateY(-5px)}
        .node-1{right:4px;top:46%}
        .node-2{bottom:32px;left:50%;transform:translateX(-50%)}
        .node-2:hover,.node-2.active{transform:translateX(-50%) translateY(-5px)}
        .node-3{left:4px;top:46%}

        .active-product{
          position:absolute;z-index:8;right:-10px;bottom:38px;width:260px;border:1px solid var(--line);background:#fffdf9;border-radius:20px;
          padding:18px;box-shadow:0 18px 42px rgba(55,48,40,.10);overflow:hidden;
        }
        .active-product>small{font-size:6px;letter-spacing:.14em;color:#969b95}
        .active-product h3{font-family:Georgia,"Times New Roman",serif;font-size:25px;font-weight:400;margin:7px 0 7px}
        .active-product p{font-size:8px;line-height:1.5;color:#777d77;margin:0}
        .active-product a{display:inline-flex;gap:8px;align-items:center;margin-top:14px;font-size:7px}
        .active-product a svg{width:13px}
        .product-glow{position:absolute;width:120px;height:120px;border-radius:50%;right:-45px;top:-45px;opacity:.12}
        .product-glow.rose{background:var(--rose)} .product-glow.sage{background:var(--sage)} .product-glow.plum{background:var(--plum)} .product-glow.brass{background:var(--brass)}

        .manifesto{
          width:min(1420px,calc(100% - 56px));margin:0 auto;padding:120px 0 150px;border-top:1px solid var(--line);
        }
        .manifesto-label{display:grid;grid-template-columns:auto 1fr;gap:17px;align-items:center}
        .manifesto-label span{font-size:8px;letter-spacing:.16em;color:#838882}
        .manifesto-label i{height:1px;background:var(--line)}
        .manifesto-grid{margin-top:48px;display:grid;grid-template-columns:1.2fr .8fr;gap:80px}
        .manifesto-grid h2{font-size:clamp(52px,5.2vw,85px);line-height:.95}
        .manifesto-grid>div p{margin:0 0 18px;color:#606660;font-size:14px;line-height:1.75}

        .products-section,.journey-section,.sankalan-section,.principles-section,.india-section,.pilots-section{
          padding:150px max(28px,calc((100vw - 1420px) / 2));
        }

        .products-section{background:#ebe2d5}
        .products-head{display:grid;grid-template-columns:.42fr 1fr;gap:70px}
        .products-head h2,.journey-copy h2,.sankalan-copy h2,.principles-head h2,.india-copy h2{font-size:clamp(48px,4.8vw,78px);line-height:.98}
        .product-grid{margin-top:75px;display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
        .product-card{
          min-height:360px;border:1px solid var(--line);background:#fffdf9;border-radius:26px;padding:27px;display:flex;flex-direction:column;
          position:relative;overflow:hidden;transition:.25s ease;
        }
        .product-card:hover{transform:translateY(-6px);box-shadow:0 24px 54px rgba(55,48,40,.09)}
        .product-card::after{content:"";position:absolute;width:240px;height:240px;border-radius:50%;right:-110px;top:-110px;opacity:.12}
        .product-card.rose::after{background:var(--rose)}
        .product-card.sage::after{background:var(--sage)}
        .product-card.plum::after{background:var(--plum)}
        .product-card.brass::after{background:var(--brass)}
        .product-card-top{display:flex;justify-content:space-between;gap:20px;position:relative;z-index:2}
        .product-card-top span{font-family:Georgia,"Times New Roman",serif;color:#a0a49f;font-size:13px}
        .product-card-top small{font-size:7px;color:#8f948e}
        .product-card h3{font-family:Georgia,"Times New Roman",serif;font-size:48px;font-weight:400;letter-spacing:-.045em;margin:105px 0 10px;position:relative;z-index:2}
        .product-card p{margin:0;color:#6f756f;font-size:11px;position:relative;z-index:2}
        .product-card-footer{margin-top:auto;padding-top:25px;border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;font-size:8px;position:relative;z-index:2}
        .product-card-footer svg{width:14px}

        .journey-section{background:#f7f3eb;display:grid;grid-template-columns:.55fr 1.45fr;gap:80px;align-items:center}
        .journey-copy p,.sankalan-copy p,.india-copy p{margin:24px 0 0;color:#626862;font-size:13px;line-height:1.7;max-width:520px}
        .journey-flow{display:flex;align-items:center;gap:9px}
        .journey-flow article{flex:1;min-height:260px;border:1px solid var(--line);border-radius:20px;padding:20px;background:#fffdf9}
        .journey-flow article>span{font-family:Georgia,"Times New Roman",serif;color:#a0a49f;font-size:12px}
        .journey-flow small{display:block;margin-top:70px;font-size:6px;letter-spacing:.14em;color:#969b95}
        .journey-flow h3{font-family:Georgia,"Times New Roman",serif;font-size:28px;font-weight:400;margin:7px 0 8px}
        .journey-flow p{margin:0;color:#777d77;font-size:8px;line-height:1.55}
        .journey-flow>i{width:18px;height:1px;background:var(--line);flex:none}

        .sankalan-section{background:#e8ded1;display:grid;grid-template-columns:.7fr 1.3fr;gap:75px;align-items:center}
        .launchpad{border:1px solid var(--line);background:#fffdf9;border-radius:28px;padding:28px;box-shadow:0 28px 72px rgba(55,48,40,.09)}
        .launchpad-head{display:flex;justify-content:space-between;gap:20px;align-items:flex-start}
        .launchpad-head h3{font-family:Georgia,"Times New Roman",serif;font-size:31px;font-weight:400;margin:5px 0 0;letter-spacing:-.04em}
        .launchpad-head>span{padding:7px 9px;border-radius:999px;background:#f0ede6;font-size:7px;color:#7b807a}
        .launchpad-grid{margin-top:38px;display:grid;grid-template-columns:repeat(3,1fr);gap:9px}
        .launchpad-grid button{min-height:100px;border:1px solid var(--line);border-radius:15px;background:#faf7f0;padding:13px;text-align:left;display:grid;align-content:end;gap:4px;transition:.2s ease}
        .launchpad-grid button:hover{transform:translateY(-3px)}
        .launchpad-grid button.active{background:var(--sage-soft)}
        .launchpad-grid b{font-size:9px}
        .launchpad-grid small{font-size:6px;color:#929792}
        .launchpad-footer{margin-top:22px;padding-top:18px;border-top:1px solid var(--line);display:flex;gap:18px;align-items:center;flex-wrap:wrap}
        .launchpad-footer span{display:inline-flex;align-items:center;gap:7px;font-size:7px;color:#777d77}
        .launchpad-footer span svg{width:13px;color:var(--brass)}
        .launchpad-footer button{margin-left:auto;border:0;border-radius:999px;background:var(--ink);color:#fffaf2;padding:10px 12px;display:inline-flex;gap:8px;align-items:center;font-size:7px}
        .launchpad-footer button svg{width:13px}

        .principles-section{background:#fffaf2}
        .principles-head{display:grid;grid-template-columns:.42fr 1fr;gap:70px}
        .principles-grid{margin-top:75px;display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
        .principles-grid article{min-height:290px;border:1px solid var(--line);border-radius:20px;background:#fbf8f2;padding:25px;transition:.2s ease}
        .principles-grid article:hover{transform:translateY(-5px)}
        .principles-grid article>span{font-family:Georgia,"Times New Roman",serif;color:var(--rose);font-size:13px}
        .principles-grid h3{font-family:Georgia,"Times New Roman",serif;font-size:29px;font-weight:400;margin:76px 0 10px;letter-spacing:-.035em}
        .principles-grid p{margin:0;color:#777d77;font-size:9px;line-height:1.65}

        .india-section{background:#efe7db;display:grid;grid-template-columns:.65fr 1.35fr;gap:75px;align-items:center}
        .india-points{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
        .india-points article{min-height:160px;border:1px solid var(--line);border-radius:17px;background:rgba(255,253,249,.65);padding:18px;display:flex;flex-direction:column;justify-content:flex-end}
        .india-points b{font-family:Georgia,"Times New Roman",serif;font-size:20px;font-weight:400}
        .india-points span{margin-top:8px;font-size:8px;line-height:1.55;color:#777d77}

        .pilots-section{background:#f7f3eb}
        .pilots-panel{border:1px solid var(--line);border-radius:30px;background:#20241f;color:#fffaf2;padding:42px;position:relative;overflow:hidden}
        .pilots-panel::before{content:"";position:absolute;width:500px;height:500px;border-radius:50%;right:-230px;top:-260px;background:radial-gradient(circle,rgba(180,140,77,.18),transparent 65%)}
        .pilots-panel>div:first-child{max-width:720px}
        .pilots-panel h2{font-family:Georgia,"Times New Roman",serif;font-size:58px;font-weight:400;letter-spacing:-.05em;margin:10px 0 14px}
        .pilots-panel p{margin:0;color:rgba(255,255,255,.58);font-size:12px;line-height:1.7}
        .pilot-steps{margin-top:55px;display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
        .pilot-steps article{min-height:170px;border:1px solid rgba(255,255,255,.10);border-radius:16px;padding:16px;display:flex;flex-direction:column;justify-content:flex-end;background:rgba(255,255,255,.03)}
        .pilot-steps article>span{font-family:Georgia,"Times New Roman",serif;color:rgba(255,255,255,.35);font-size:12px;margin-bottom:auto}
        .pilot-steps b{font-size:9px}
        .pilot-steps small{margin-top:5px;color:rgba(255,255,255,.43);font-size:7px;line-height:1.45}
        .pilots-panel>a{display:inline-flex;align-items:center;gap:10px;margin-top:28px;border-radius:999px;background:#fffaf2;color:var(--ink);padding:11px 13px;font-size:8px}
        .pilots-panel>a svg{width:14px}

        .closing{
          min-height:660px;padding:120px 28px;background:#efe4d7;display:grid;place-items:center;text-align:center;position:relative;overflow:hidden;
        }
        .closing>div:not(.closing-lines){position:relative;z-index:2;max-width:930px}
        .closing>div>span{font-size:8px;letter-spacing:.17em;color:#7c7a73}
        .closing h2{font-size:clamp(58px,6.2vw,96px);line-height:.94;margin-top:23px}
        .closing p{max-width:650px;margin:29px auto 0;color:#62635e;font-size:13px;line-height:1.7}
        .closing a{display:inline-flex;align-items:center;gap:14px;margin-top:36px;border-radius:999px;background:var(--ink);color:#fffaf2;padding:14px 17px;font-size:9px;box-shadow:0 18px 40px rgba(32,36,31,.14);transition:.2s ease}
        .closing a:hover{transform:translateY(-3px)}
        .closing svg{width:15px}
        .closing-lines{position:absolute;inset:0;pointer-events:none}
        .closing-lines i{position:absolute;border:1px solid rgba(32,36,31,.08);border-radius:50%;left:50%;top:50%;transform:translate(-50%,-50%)}
        .closing-lines i:nth-child(1){width:720px;height:720px}
        .closing-lines i:nth-child(2){width:940px;height:940px}
        .closing-lines i:nth-child(3){width:1180px;height:1180px;border-style:dashed;opacity:.65}

        .footer{
          padding:34px max(28px,calc((100vw - 1420px) / 2));background:#20241f;color:rgba(255,255,255,.8);
          display:grid;grid-template-columns:1fr auto 1fr;gap:30px;align-items:center;
        }
        .footer-brand .brand-mark::before,.footer-brand .brand-mark::after{background:rgba(255,255,255,.35)}
        .footer-brand small{color:rgba(255,255,255,.4)}
        .footer-links{display:flex;gap:18px;flex-wrap:wrap;font-size:8px;color:rgba(255,255,255,.5)}
        .footer-links a:hover{color:#fff}
        .footer-note{justify-self:end;text-align:right;display:grid;gap:3px;font-size:7px;color:rgba(255,255,255,.38)}

        @media(max-width:1120px){
          .topbar{grid-template-columns:1fr auto}
          .topbar nav{display:none}
          .hero,.journey-section,.sankalan-section,.india-section{grid-template-columns:1fr}
          .hero{padding-top:70px}
          .hero-system{width:min(760px,100%);margin:0 auto}
          .manifesto-grid{grid-template-columns:1fr;gap:40px}
          .products-head,.principles-head{grid-template-columns:1fr;gap:18px}
          .journey-section,.sankalan-section,.india-section{gap:70px}
          .journey-flow{display:grid;grid-template-columns:repeat(2,1fr)}
          .journey-flow>i{display:none}
          .pilot-steps{grid-template-columns:repeat(2,1fr)}
          .footer{grid-template-columns:1fr auto}
          .footer-note{display:none}
        }

        @media(max-width:760px){
          .topbar,.hero,.manifesto{width:min(100% - 32px,1420px)}
          .quiet-cta{padding:9px 11px}
          .quiet-cta svg{display:none}
          .hero{min-height:auto;padding:68px 0 95px}
          .hero h1{font-size:clamp(58px,15vw,82px)}
          .lede{font-size:16px}
          .hero-actions{flex-direction:column;align-items:flex-start;gap:18px}

          .hero-system{min-height:720px;margin-top:10px}
          .system-core{width:270px;height:270px;padding:34px}
          .orbit-1{width:400px;height:400px}
          .orbit-2{width:540px;height:540px}
          .product-node{width:135px}
          .node-1{right:-10px}
          .node-3{left:-10px}
          .active-product{right:0;bottom:0;width:230px}

          .manifesto{padding:90px 0 100px}
          .manifesto-grid h2{font-size:48px}
          .products-section,.journey-section,.sankalan-section,.principles-section,.india-section,.pilots-section{padding-top:100px;padding-bottom:100px}
          .products-head h2,.journey-copy h2,.sankalan-copy h2,.principles-head h2,.india-copy h2{font-size:48px}

          .product-grid{grid-template-columns:1fr}
          .product-card{min-height:310px}
          .journey-flow{grid-template-columns:1fr}
          .launchpad-grid{grid-template-columns:repeat(2,1fr)}
          .launchpad-footer button{margin-left:0}
          .principles-grid{grid-template-columns:1fr}
          .principles-grid h3{margin-top:48px}
          .india-points{grid-template-columns:1fr}
          .pilot-steps{grid-template-columns:1fr}
          .pilots-panel{padding:26px}
          .pilots-panel h2{font-size:44px}

          .footer{grid-template-columns:1fr}
          .footer-links{flex-wrap:wrap}
        }

        @media(prefers-reduced-motion:reduce){
          *{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}
          [data-reveal]{opacity:1!important;transform:none!important}
        }
      `}</style>
    </main>
  );
}
