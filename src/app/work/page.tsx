import { Header } from "@/components/Header";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-zinc-950 pt-24">
        <ProjectGrid />
      </main>
    </>
  );
}
