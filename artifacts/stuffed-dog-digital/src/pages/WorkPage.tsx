import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import ckysLogo from "@/assets/ckys-badge-white.svg";
import outbackPool from "@/assets/outback-pool.jpg";
import outbackGarage from "@/assets/outback-garage.jpg";
import outbackFathersDay from "@/assets/outback-fathersday.jpg";
import outbackTent from "@/assets/outback-tent.jpg";
import { useReveal } from "@/hooks/useReveal";

const C = {
  espresso: "#F2F0E9",
  linen:    "#000000",
  amber:    "#1E5F4A",
  terra:    "#1E5F4A",
  stone:    "#6C7075",
  clay:     "#3A3A3A",
};

const display: React.CSSProperties = {
  fontFamily: "'Archivo Black', sans-serif",
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "-0.01em",
  lineHeight: 1.02,
  margin: 0,
};

type Case = {
  n: string;
  slug: string;
  client: string;
  tag: string;
  services: string;
  videos: { id: string; title: string }[];
  images?: { src: string; alt: string }[];
  brand?: { bg: string; logo: string; link?: { label: string; href: string } };
  challenge: string;
  solution: string;
  impact: string;
};

const CASES: Case[] = [
  {
    n: "01",
    slug: "outback-concrete",
    client: "Outback Concrete Coatings",
    tag: "Home services",
    services: "Fractional CMO · Brand · Web · Campaigns",
    videos: [],
    images: [
      { src: outbackPool, alt: "Outback poolside coating campaign creative" },
      { src: outbackGarage, alt: "Outback garage floor campaign creative" },
      { src: outbackFathersDay, alt: "Outback Father's Day social campaign" },
      { src: outbackTent, alt: "Outback branded event tent and banner system" },
    ],
    challenge: "A premium concrete-coating team doing transformative work, ready for a brand that stood out as much as the finished floors.",
    solution: "A full fractional CMO engagement: bold campaign creative, social advertising, a conversion-focused website, and a branded event presence. One system built to turn great floors into great leads.",
    impact: "A brand presence that wins local trust at first glance and turns great work into steady inquiries.",
  },
  {
    n: "02",
    slug: "northeast-plumbing",
    client: "Northeast Plumbing",
    tag: "Local business",
    services: "Branding · Web · SEO",
    videos: [{ id: "1171865001", title: "Northeast Plumbing" }],
    challenge: "A trusted name across Greater Cleveland, ready for a digital presence that matched its hard-earned reputation.",
    solution: "Full brand rebuild with custom mascot, redesigned WordPress site, and suburb-level SEO landing pages targeting high-intent searches across Greater Cleveland.",
    impact: "Modern brand, conversion-ready site, and a long-term SEO framework for sustained growth.",
  },
  {
    n: "03",
    slug: "glenbrook",
    client: "Glenbrook Racquet Sports",
    tag: "Sports facility",
    services: "Brand Consolidation · Web · Paid Media",
    videos: [{ id: "1034278561", title: "Glenbrook Racquet Sports" }],
    challenge: "Three thriving clubs spanning tennis, paddle, and pickleball, growing fast with an exciting Florida expansion on the horizon.",
    solution: "Agency of record: unified all clubs under one brand, launched GlenbrookSports.com, and led the Boynton Beach pre-launch with investor presentations, founding member campaigns, and targeted paid media.",
    impact: "Consistent, elevated brand from Illinois to Florida, built for scale.",
  },
  {
    n: "04",
    slug: "iron-sleek",
    client: "Iron Sleek",
    tag: "Product",
    services: "Video · Brand Identity · Social",
    videos: [
      { id: "1139208481", title: "Iron Sleek: Brand Film" },
      { id: "1139209741", title: "Iron Sleek: Drop-In Rink" },
      { id: "1139210246", title: "Iron Sleek: DIY Story" },
    ],
    challenge: "A beloved product with a great story to tell: the winters families remember, built in their own backyard.",
    solution: "Three-video campaign suite: hero brand film, Drop-In Rink™ comparison vs. EZ Ice, and an emotional DIY story. Paired with a refined sub-brand visual identity.",
    impact: "Unified voice now anchoring full Facebook and Instagram strategy, improving brand perception and supporting seasonal sales.",
  },
  {
    n: "05",
    slug: "st-thomas",
    client: "University of St. Thomas Football",
    tag: "College athletics",
    services: "Brand · Content · Social Media",
    videos: [
      { id: "878118196", title: "UST Football" },
      { id: "811153953", title: "UST Football: Recruiting" },
    ],
    challenge: "Rising to NCAA Division I was a historic moment that called for a brand presence built for the national stage.",
    solution: "High-impact visuals, game day graphics, recruiting content, and targeted social campaigns designed to build affinity and amplify reach.",
    impact: "We built the visual identity, gameday content and helped carry the amazing Tommie story to a national stage.",
  },
  {
    n: "06",
    slug: "kentucky-christian",
    client: "Kentucky Christian University",
    tag: "Athletics dept.",
    services: "Brand Identity · Web Design",
    videos: [{ id: "851439727", title: "KCU Athletics" }],
    challenge: "A proud athletics department ready to unite every team under one banner for recruits, parents, alumni, and fans.",
    solution: "Redesigned the full athletics website and created a department-wide brand identity system with unified visual language for all sports.",
    impact: "Raised professionalism across the department, strengthened recruiting, and laid the foundation for future growth.",
  },
  {
    n: "07",
    slug: "ck-youth-sports",
    client: "CK Youth Sports",
    tag: "Youth sports",
    services: "Brand · Web · Communications",
    videos: [],
    brand: {
      bg: "#152A52",
      logo: ckysLogo,
      link: { label: "View the brand guidelines we built →", href: "https://ck-youth-sports-brand-guidelines.replit.app/ckys/" },
    },
    challenge: "A rapidly growing multi-sport organization ready for a brand and digital ecosystem that could grow right along with it.",
    solution: "Complete foundation: brand identity rooted in family and community, custom WordPress site with registration and TeamSnap, plus a full communications strategy including press templates and sponsorship messaging.",
    impact: "Transformed a local sports program into a recognized youth athletics organization positioned to expand reach and attract sponsors.",
  },
];

function Video({ id, title }: { id: string; title: string }) {
  return (
    <div style={{ position: "relative", paddingTop: "56.25%", background: "#0D0A07" }}>
      <iframe
        src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&dnt=1`}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </div>
  );
}

export default function WorkPage() {
  const ref = useReveal();

  return (
    <Layout>
      <div ref={ref}>
        {/* Hero */}
        <section style={{ background: C.espresso, color: C.linen, padding: "clamp(120px,20vh,200px) clamp(20px,5vw,72px) clamp(70px,10vh,120px)" }}>
          <div style={{ maxWidth: 1100 }}>
            <p data-reveal style={{ fontWeight: 800, fontSize: 12, letterSpacing: "0.24em", textTransform: "uppercase", color: C.amber, margin: "0 0 20px" }}>
              Our clients &nbsp;·&nbsp; Case studies
            </p>
            <h1 data-reveal style={{ ...display, fontSize: "clamp(44px,6.5vw,96px)" }}>
              Work we're<br /><span style={{ color: "#0A6CFF" }}>proud of.</span>
            </h1>
            <p data-reveal style={{ maxWidth: 620, fontSize: "clamp(16px,1.4vw,19px)", lineHeight: 1.75, color: C.stone, margin: "36px 0 0" }}>
              From Division I athletics to neighborhood businesses, every project gets
              the same standard: work that people actually feel.
            </p>
          </div>
        </section>

        {/* Case studies */}
        {CASES.map((c, i) => {
          const dark = i % 2 === 0;
          return (
            <section key={c.n} id={c.slug} style={{
              background: dark ? "#FFFFFF" : "#F2F0E9",
              color: "#000000",
              padding: "clamp(80px,12vh,140px) clamp(20px,5vw,72px)",
              borderTop: "1px solid rgba(0,0,0,0.08)",
            }}>
              <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <div data-reveal style={{ display: "flex", alignItems: "baseline", gap: 20, flexWrap: "wrap", marginBottom: 10 }}>
                  <span style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontWeight: 800, fontSize: "clamp(28px,3vw,44px)",
                    color: dark ? C.amber : C.terra,
                  }}>{c.n}</span>
                  <h2 style={{ ...display, fontSize: "clamp(28px,3.6vw,52px)" }}>{c.client}</h2>
                </div>
                <p data-reveal style={{
                  fontWeight: 800, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase",
                  color: dark ? C.stone : C.clay, margin: "0 0 40px",
                }}>
                  {c.tag} &nbsp;·&nbsp; {c.services}
                </p>

                {c.brand && (
                  <div data-reveal style={{ marginBottom: 48 }}>
                    <div style={{
                      background: c.brand.bg,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      padding: "clamp(48px,8vw,90px) 24px",
                    }}>
                      <img src={c.brand.logo} alt={`${c.client} brand identity`} style={{ width: "min(320px,60%)", height: "auto" }} />
                    </div>
                    {c.brand.link && (
                      <a
                        href={c.brand.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-block", marginTop: 18, fontWeight: 700, fontSize: 14,
                          letterSpacing: "0.08em", textTransform: "uppercase", color: "#000000",
                          textDecoration: "none", borderBottom: "2px solid #19E6E6", paddingBottom: 3,
                        }}
                      >
                        {c.brand.link.label}
                      </a>
                    )}
                  </div>
                )}

                {c.images && (
                  <div data-reveal style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
                    maxWidth: 900,
                    gap: 20,
                    marginBottom: 48,
                  }}>
                    {c.images.map(img => (
                      <img key={img.src} src={img.src} alt={img.alt} loading="lazy"
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", aspectRatio: "1 / 1" }} />
                    ))}
                  </div>
                )}

                {c.videos.length > 0 && (
                  <div data-reveal style={{
                    display: "grid",
                    gridTemplateColumns: c.videos.length > 1 ? "repeat(auto-fit, minmax(280px, 1fr))" : "1fr",
                    gap: 20,
                    marginBottom: 48,
                  }}>
                    {c.videos.map(v => <Video key={v.id} {...v} />)}
                  </div>
                )}

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32 }}>
                  {[
                    ["Challenge", c.challenge],
                    ["Solution", c.solution],
                    ["Impact", c.impact],
                  ].map(([t, body]) => (
                    <div key={t} data-reveal>
                      <h3 style={{
                        fontWeight: 800, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase",
                        color: dark ? C.amber : C.terra, margin: "0 0 12px",
                      }}>{t}</h3>
                      <p style={{ margin: 0, lineHeight: 1.75, fontSize: 15, color: dark ? C.stone : "#3A3A3A" }}>{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section style={{ background: "#1E5F4A", color: C.linen, padding: "clamp(80px,12vh,140px) clamp(20px,5vw,72px)", textAlign: "center" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 data-reveal style={{ ...display, fontSize: "clamp(30px,4vw,54px)", marginBottom: 32 }}>
              Your story could be next.
            </h2>
            <Link
              data-reveal
              href="/contact"
              style={{
                display: "inline-block",
                background: C.espresso,
                color: C.linen,
                padding: "16px 40px",
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Start Something
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
