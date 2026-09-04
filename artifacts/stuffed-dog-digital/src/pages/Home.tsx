import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { TheStory } from "@/components/TheStory";
import { Work } from "@/components/Work";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Manifesto } from "@/components/Manifesto";
import { ScrollFilm } from "@/components/ScrollFilm";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TheStory />
      <Work />
      <WhatWeDo />
      <Manifesto />
      <ScrollFilm />
      <FinalCTA />
    </Layout>
  );
}
