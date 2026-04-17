import ContactDetails from "./ContactDetails";
import PageIntro from "../../components/PageIntro";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Serenity Forschen to ask a question, connect, or talk about a project or role.",
};

// Minimal contact page with client-rendered contact details.
export default function ContactPage() {
  return (
    <main className="page-shell">
      <PageIntro
        title="Contact"
        titleId="contact"
        variant="copy"
        body={<ContactDetails />}
      />
    </main>
  );
}
