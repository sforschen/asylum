import ContactDetails from "./ContactDetails";
import Image from "next/image";
import { siteAssets } from "../../content/siteAssets";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Serenity Forschen to ask a question, connect, or talk about a project or role.",
};

// Contact page with client-rendered contact details.
export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="page-container page-copy contact-page">
        <h1 id="contact">Contact</h1>
        <div className="contact-layout">
          <div className="contact-image">
            <Image
              src={siteAssets.about.portrait}
              alt="Serenity Forschen portrait"
              width={750}
              height={750}
              sizes="(min-width: 900px) 33vw, 70vw"
              priority
            />
          </div>
          <ContactDetails />
        </div>
      </section>
    </main>
  );
}
