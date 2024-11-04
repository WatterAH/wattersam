import About from "@/components/About/About";
import Contact from "@/components/About/Contact";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <div className="min-h-screen text-white font-sans bg-gradient-to-br from-[#101010] to-[#1a1a1a]">
      <Header />
      <main className="max-w-4xl mx-auto p-6 space-y-12">
        <About />
        <Skills />
        <Projects />
      </main>
      <footer className="bg-[#202020] text-center p-6 mt-12">
        <p className="text-[#feca57]">
          &copy; 2024 Samuel Tlahuel. Todos los derechos reservados.
        </p>
        <div className="flex justify-center">
          <Contact />
        </div>
      </footer>
    </div>
  );
}
