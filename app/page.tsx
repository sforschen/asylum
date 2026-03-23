import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen max-w-6xl mx-auto py-16 px-6">
      <section className="text-center mb-12">
        <h1 className="text-6xl font-bold tracking-tight">
          Building Marketing Systems That Scale
        </h1>
        <p className="text-xl mt-4 text-gray-600">Serenity Forschen</p>
      </section>

      <section>
        <h2 className="text-4xl font-bold mb-8">Featured Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="XKIG Design System"
            description="Scaling multi-brand governance across organizations."
          />
          <ProjectCard
            title="Hubspot Platform"
            description="Built and structured new hubspot build to accomodate 5+ brands."
          />
        </div>
      </section>

    </main>
  );
}
