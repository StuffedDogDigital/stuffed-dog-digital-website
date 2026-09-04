import { Layout } from "@/components/Layout";

const C = {
  espresso: "#F2F0E9",
  linen:    "#000000",
  amber:    "#1E5F4A",
  stone:    "#6C7075",
};

const h2: React.CSSProperties = {
  fontFamily: "'Archivo Black', sans-serif",
  fontWeight: 800,
  textTransform: "uppercase",
  fontSize: 20,
  letterSpacing: "0.02em",
  color: C.linen,
  margin: "48px 0 16px",
};

const p: React.CSSProperties = {
  margin: "0 0 16px",
  lineHeight: 1.8,
  fontSize: 15,
  color: C.stone,
};

export default function Privacy() {
  return (
    <Layout>
      <section style={{ background: C.espresso, color: C.linen, padding: "clamp(120px,18vh,180px) clamp(20px,5vw,72px) clamp(80px,12vh,140px)" }}>
        <div style={{ maxWidth: 780 }}>
          <p style={{ fontWeight: 800, fontSize: 12, letterSpacing: "0.24em", textTransform: "uppercase", color: C.amber, margin: "0 0 20px" }}>
            Legal
          </p>
          <h1 style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontWeight: 800, textTransform: "uppercase",
            fontSize: "clamp(36px,5vw,64px)", lineHeight: 1.05, margin: "0 0 12px",
          }}>
            Privacy Policy
          </h1>
          <p style={{ ...p, fontSize: 13 }}>Last updated: August 3, 2026</p>

          <h2 style={h2}>Who we are</h2>
          <p style={p}>
            Stuffed Dog Digital ("we," "us," or "our") is an independent creative and
            digital agency operating from Phoenix, Arizona and Chicago, Illinois. This
            policy explains what information we collect through stuffeddogdigital.com,
            how we use it, and the choices you have.
          </p>

          <h2 style={h2}>Information we collect</h2>
          <p style={p}>
            <strong style={{ color: C.linen }}>Information you provide.</strong> When you contact us by email or
            through a form on this site, we receive the information you choose to share,
            such as your name, email address, company, and the details of your inquiry.
          </p>
          <p style={p}>
            <strong style={{ color: C.linen }}>Information collected automatically.</strong> Like most websites, our
            hosting and analytics providers may automatically log standard technical data
            such as IP address, browser type, device type, pages visited, and referring
            URLs. We use this data in aggregate to understand how the site is used and to
            keep it secure.
          </p>
          <p style={p}>
            <strong style={{ color: C.linen }}>Embedded content.</strong> Portions of this site embed video hosted by
            Vimeo. When you view a page with embedded video, Vimeo may collect data as
            described in its own privacy policy. We configure embeds with "Do Not Track"
            parameters where available.
          </p>

          <h2 style={h2}>How we use information</h2>
          <p style={p}>We use the information we collect to:</p>
          <p style={p}>
            • Respond to your inquiries and communicate about potential or ongoing work<br />
            • Operate, maintain, and improve this website<br />
            • Protect the security and integrity of our site and services<br />
            • Comply with legal obligations
          </p>
          <p style={p}>
            We do not sell your personal information. We do not share it with third
            parties except for service providers who help us operate this site (such as
            hosting and email providers), and only as needed for those purposes.
          </p>

          <h2 style={h2}>Cookies</h2>
          <p style={p}>
            This site may use a small number of cookies or similar technologies for
            essential functionality and basic analytics. You can control cookies through
            your browser settings; disabling them may affect some site features.
          </p>

          <h2 style={h2}>Data retention</h2>
          <p style={p}>
            We keep correspondence and inquiry information only as long as needed to
            respond to you, maintain our business records, or meet legal requirements.
          </p>

          <h2 style={h2}>Your rights</h2>
          <p style={p}>
            Depending on where you live, you may have rights to access, correct, or
            delete personal information we hold about you. To make a request, email us at{" "}
            <a href="mailto:hello@stuffeddogdigital.com" style={{ color: C.amber, textDecoration: "none" }}>
              hello@stuffeddogdigital.com
            </a>{" "}
            and we'll respond promptly.
          </p>

          <h2 style={h2}>Children's privacy</h2>
          <p style={p}>
            This site is not directed at children under 13, and we do not knowingly
            collect personal information from them.
          </p>

          <h2 style={h2}>Changes to this policy</h2>
          <p style={p}>
            We may update this policy from time to time. When we do, we'll revise the
            "Last updated" date above. Continued use of the site after changes means you
            accept the updated policy.
          </p>

          <h2 style={h2}>Contact</h2>
          <p style={p}>
            Questions about this policy or your data? Reach us at{" "}
            <a href="mailto:hello@stuffeddogdigital.com" style={{ color: C.amber, textDecoration: "none" }}>
              hello@stuffeddogdigital.com
            </a>.
          </p>
        </div>
      </section>
    </Layout>
  );
}
