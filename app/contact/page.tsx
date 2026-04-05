import ContactDetails from "./ContactDetails";
import PageIntro from "../../components/PageIntro";

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
