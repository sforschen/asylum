import PageIntro from "../../components/PageIntro";

export const metadata = {
  title: "Privacy",
  description:
    "Privacy statement for Serenity Forschen covering contact information, communication use, and basic site analytics.",
};

export default function PrivacyPage() {
  return (
    <main className="page-shell">
      <PageIntro
        title="Privacy Statement"
        titleId="privacy"
        variant="copy"
        body={
          <p>
            This portfolio website may collect personal information you choose to provide, such as your name, email
            address, and message content submitted through contact forms or other communications. Any information
            collected is used solely for responding to inquiries, professional communication, and maintaining or
            improving the website. Personal information is not sold or shared with third parties for marketing
            purposes. Basic website analytics or hosting tools may collect non-personal technical data, such as
            browser type or pages visited, to help monitor site performance and usability.
          </p>
        }
      />
    </main>
  );
}
