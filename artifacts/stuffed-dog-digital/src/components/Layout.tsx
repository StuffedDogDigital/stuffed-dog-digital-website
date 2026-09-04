import { useEffect } from "react";
import { useLocation } from "wouter";
import { Spine } from "@/components/Spine";
import { Footer } from "@/components/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  // Scroll to top on route change (unless navigating to an in-page anchor)
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // Give the new page a tick to render before jumping to the anchor
    requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView();
    });
  }, [location]);

  return (
    <div style={{ minWidth: 320, overflowX: "clip" as const, background: "#F2F0E9" }}>
      <Spine />
      <div className="spine-content">
        {children}
        <Footer />
      </div>
    </div>
  );
}
