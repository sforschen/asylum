import type { Metadata } from "next";
import Link from "next/link";

import FileManagementResourceBuilder from "./FileManagementResourceBuilder";
import { siteDocuments } from "../../../content/siteDocuments";

export const metadata: Metadata = {
  title: "File & Asset Management Resource",
  description:
    "A fillable resource for creating a practical file and folder system, with downloadable setup guides, folder maps, and file index templates.",
};

export default function FileManagementSystemResourcePage() {
  return (
    <main className="page-shell">
      <section className="page-container page-intro resource-hero">
        <div className="resource-hero-copy">
          <p className="page-kicker">File &amp; asset management resource</p>
          <h1>Build a basic file and folder system</h1>
          <p className="page-lead">
            Answer a few practical questions, then download starter resources you can use to set up a shared file
            system, document naming rules, and begin tracking reusable assets.
          </p>
          <div className="resource-hero-actions">
            <Link className="button secondary" href="/blog/file-management-systems">
              Read the Case Study
            </Link>
            <a className="button secondary" href={siteDocuments.caseStudies.fileManagementSystems} download>
              Download the Original PDF
            </a>
          </div>
        </div>

        <div className="resource-hero-panel">
          <h2>What this creates</h2>
          <ul>
            <li>An AI refinement prompt for improving the structure</li>
            <li>A Word or TXT guide with the folder map and naming rules</li>
            <li>A reusable asset index CSV</li>
            <li>A setup script for creating folders locally</li>
          </ul>
        </div>
      </section>

      <FileManagementResourceBuilder />
    </main>
  );
}
