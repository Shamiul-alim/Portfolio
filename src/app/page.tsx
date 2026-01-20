import MainContent from "@/components/main/MainContent";
import Sidebar from "@/components/sidebar/Sidebar";

export default function page() {
  return (
    <main className="relative min-h-dvh">
      
      <div className="absolute inset-0 bg-[#0f172a]" />

      <div className="relative mx-auto flex min-h-dvh max-w-7xl px-6 py-24 md:px-10">
        {/* Fixed left */}
        <aside className="hidden w-[33rem] shrink-0 md:block">
          <div className="sticky top-24">
            <Sidebar />
          </div>
        </aside>

        {/* Scrollable right */}
        <section className="w-full md:pl-12">
          {/* mobile header */}
          <div className="mb-10 md:hidden">
            <Sidebar compact />
          </div>
          <MainContent />
        </section>
      </div>
    </main>
  );
}
