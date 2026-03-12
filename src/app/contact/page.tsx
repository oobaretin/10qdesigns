import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-zinc-950 pt-24">
        <Contact />
      </main>
    </>
  );
}
