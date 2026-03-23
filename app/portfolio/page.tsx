import effectivePayBadge from "../../content/effective-pay-badge.png";
import grunt from "../../content/grunt.jpg";
import ProjectCard from "../../components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen max-w-6xl mx-auto py-16 px-6">
      <section className="text-center mb-12">
        <h1 className="[font-size:var(--heading-font-size-xl)] [color:var(--clr-green)] font-bold">
          Building Marketing Systems That Scale
        </h1>
        <p className="[font-size:var(--body-font-size-l)] mt-4 text-gray-600">Serenity Forschen</p>
      </section>

      <section>
        <h2 className="[font-size:var(--heading-font-size-l)] font-bold mb-8">Featured Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ProjectCard
            title="XKIG Design System"
            description="Scaling multi-brand governance across organizations."
            imgSrc={effectivePayBadge}
          />
          <ProjectCard
            title="Hubspot Platform"
            description="Built and structured new hubspot build to accomodate 5+ brands."
            imgSrc={grunt}
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
