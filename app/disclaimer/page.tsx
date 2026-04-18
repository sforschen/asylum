import PageIntro from "../../components/PageIntro";

export const metadata = {
  title: "Disclaimer",
  description:
    "Portfolio disclaimer for Serenity Forschen covering project context, brand ownership, and professional contribution.",
};

export default function DisclaimerPage() {
  return (
    <main className="page-shell">
      <PageIntro
        title="Portfolio Disclaimer"
        titleId="disclaimer"
        variant="copy"
        body={
          <p>
            The work featured in this portfolio was created as part of my employment with current and former employers
            and was publicly available at the time of my involvement. I do not claim ownership of any company brands,
            proprietary content, or final project assets shown. This portfolio is intended only to highlight my
            professional contributions, including my role in the design and development of these materials.
          </p>
        }
      />
    </main>
  );
}
