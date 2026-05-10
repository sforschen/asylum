import type { CaseStudyPost } from "../types";
import { siteAssets } from "../../../content/siteAssets";

export const confidentialPerformanceCommunicationsCaseStudy: CaseStudyPost = {
  slug: "confidential-performance-communications",
  title: "Automated & confidential performance notification process",
  category: "Automation & Confidential Communications",
  publishedAt: "2024-04-01",
  readTime: "4 min read",
  summary:
    "Designed a repeatable workflow for secure quarterly bonus communications using Adobe InDesign, Microsoft Power Automate, and Outlook.",
  imageSrc: siteAssets.caseStudies.confidentialPerformanceCommunicationsHero,
  imageAlt: "Person working at a laptop, representing a confidential automated communication workflow",
  portfolioTitle: "Confidential Performance Communications",
  portfolioSectionId: "branding",
  relatedExperience: [{ href: "/experience#xkig", label: "XKIG" }],
  metrics: [
    { label: "Leadership", value: "Cross-functional project leadership" },
    { label: "Confidentiality", value: "Confidential communication handling" },
    { label: "Handoff", value: "Training and operational handoff" },
  ],
  sections: [
    {
      title: "Overview",
      paragraphs: [
        "A quarterly performance-based bonus communication process needed a more secure, consistent, and scalable way to notify eligible field leaders of their results. The process involved sensitive employee information, individualized payout details, supporting documentation, and coordination across multiple departments.",
        "I helped design and implement a structured workflow that brought together leadership, HR, data, operations, and communications into one repeatable process. The final solution used Adobe InDesign, Microsoft Power Automate, and Outlook to generate, organize, validate, and deliver individualized confidential communications.",
      ],
      sectionClassName: "highlight",
    },
    {
      title: "The Challenge",
      paragraphs: [
        "The existing process required multiple moving pieces to come together at the same time: finalized performance data, approved payout information, employee contact details, individualized PDF summaries, leadership alignment, and secure employee communications.",
        "Because the information was confidential and unique to each recipient, the process needed to be accurate, controlled, easy to validate before launch, and repeatable for future quarters.",
      ],
      bullets: [
        "Coordinate performance data, payout details, and employee information across departments.",
        "Ensure each employee received only their own confidential information.",
        "Create individualized PDF summaries in a consistent format.",
        "Validate that every employee record had a matching document before communication was sent.",
        "Reduce manual email preparation and the risk of error.",
        "Build documentation that allowed HR to own the process going forward.",
      ],
    },
    {
      title: "My Role",
      paragraphs: [
        "I led the process design and communication workflow from concept through handoff. This included working with leadership to understand program goals, coordinating with data and HR stakeholders, structuring the source information, creating communication materials, building the automated email process, testing the workflow, troubleshooting errors, and creating a training document for future use.",
        "The work combined project management, technical implementation, document design, internal communications, and cross-functional coordination.",
      ],
      sectionClassName: "highlight-light-green",
    },
    {
      title: "Technology Used",
      paragraphs: [
        "Adobe InDesign was used to create individualized bonus summary documents in a professional, consistent format.",
        "Microsoft Power Automate connected the employee data, document library, validation steps, and email workflow into a repeatable process.",
        "Outlook served as the delivery channel for individualized confidential email communications. Together, these tools transformed a sensitive manual process into a more scalable, structured, and controlled workflow.",
      ],
      bullets: [
        "Adobe InDesign for consistent individualized PDF summaries.",
        "Microsoft Power Automate for validation logic and workflow automation.",
        "Outlook for confidential individualized email delivery.",
      ],
      sectionClassName: "highlight-blue selected-strength-section",
    },
    {
      title: "The Solution",
      paragraphs: [
        "I created an automated communication process that connected employee data, individualized PDF summaries, and email delivery into one controlled workflow.",
        "The system helped turn a sensitive manual communication process into a repeatable workflow with built-in checks and clearer ownership.",
      ],
      bullets: [
        "A structured source list containing employee identifiers, names, email addresses, and communication details.",
        "Individually generated PDF summaries designed through Adobe InDesign.",
        "A standardized document naming convention to match each employee record with the correct PDF.",
        "A Power Automate validation step to confirm required data was present before messages were sent.",
        "Test runs using internal review addresses before live delivery.",
        "Error checking to identify missing documents, incomplete data, or blank records.",
        "Automated Outlook email delivery with individualized attachments.",
        "A final training and handoff document for HR.",
      ],
      sectionClassName: "highlight-white-center",
    },
    {
      title: "Cross-Functional Collaboration",
      paragraphs: [
        "This project required alignment across several departments and stakeholder groups. Leadership helped define the intent and importance of the bonus communication. Data partners supplied and refined the performance and payout information. HR helped confirm employee details and long-term ownership of the process. Communications supported the tone, clarity, and structure of the message itself.",
        "By bringing these groups together, I helped create a process that was technically functional, operationally realistic, and appropriate for a confidential employee communication.",
      ],
    },
    {
      title: "Documentation and Handoff",
      paragraphs: [
        "A key part of the project was making sure the process did not depend on one person long term. I created a training document that outlined the required tools, source files, document preparation steps, validation process, testing recommendations, email workflow, and troubleshooting notes.",
        "The handoff documentation gave HR a clear guide for running the process in future quarters, including how to prepare the data, generate and organize the PDF summaries, validate records, test the communication, and complete the send through the automated workflow.",
      ],
      sectionClassName: "highlight-light-green",
    },
    {
      title: "Results",
      paragraphs: [
        "The new process created a more secure, efficient, and repeatable way to communicate individualized bonus information.",
      ],
      bullets: [
        "Reduced manual email preparation.",
        "Improved accuracy through validation checks.",
        "Created consistent, professionally designed employee summary documents.",
        "Improved coordination between leadership, HR, data, and communications.",
        "Established a repeatable quarterly workflow using Power Automate and Outlook.",
        "Created a documented process that could be handed off to HR.",
        "Better protected confidential employee information.",
      ],
      sectionClassName: "highlight",
    },
    {
      title: "Skills Demonstrated",
      paragraphs: [
        "This case study reflects the intersection of communication strategy, operational documentation, automation, and sensitive employee data handling.",
      ],
      bullets: [
        "Cross-functional project leadership.",
        "Process design and documentation.",
        "Internal communications.",
        "HR and leadership coordination.",
        "Data-driven workflow planning.",
        "Adobe InDesign document production.",
        "Microsoft Power Automate workflow development.",
        "Outlook-based communication delivery.",
        "Automation and validation logic.",
        "Change management.",
        "Confidential communication handling.",
        "Training and operational handoff.",
      ],
    },
  ],
};
