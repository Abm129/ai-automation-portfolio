import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="p-10">
        <h1 className="text-4xl font-bold">AI Automation Engineer</h1>
        <p className="mt-4 text-gray-400">n8n | AWS | AI Agents</p>
      </section>
    </main>
  )
}