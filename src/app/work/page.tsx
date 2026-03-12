import { Header } from "@/components/Header";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <ProjectGrid />
      </main>
    </>
  );
}
