import { Header } from "@/components/Header";
import { Services } from "@/components/Services";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-zinc-950 pt-24">
        <Services />
      </main>
    </>
  );
}
