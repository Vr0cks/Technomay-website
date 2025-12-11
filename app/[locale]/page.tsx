import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";     
import Partners from "@/components/Partners"; 

export default function Home() {
  return (
    <main className="bg-white dark:bg-slate-900 min-h-screen">
      <Hero />
      <Partners /> {/* İş ortakları genelde Hero altında güven verir */}
      <About />
      <Features />
    </main>
  );
}