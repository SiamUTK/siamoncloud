// @ts-nocheck
import {
  HomeCTA,
  HomeFooter,
  HomeHero,
  HomeServices,
  HomeWhyUs,
} from "@/components/home/sections";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.15),transparent_50%)]" />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-[50vh] bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_50%)]" />

      <div className="relative z-10">
        <Navbar />

        <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-8 sm:px-10">
          <main>
            <HomeHero />
            <HomeServices />
            <HomeWhyUs />
            <HomeCTA />
          </main>
        </div>

        <HomeFooter />
      </div>
    </div>
  );
}
