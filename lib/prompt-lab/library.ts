import { prompts, type PromptDefinition } from "./prompts";
import { simpleTasks, type TaskDefinition } from "./tasks";

export type LibraryEntry = PromptDefinition | TaskDefinition;
export type WorkTier = "all" | "task" | "prompt";

export const libraryEntries: LibraryEntry[] = [...simpleTasks, ...prompts];

export function isSimpleTask(entry: LibraryEntry): entry is TaskDefinition {
  return entry.kind === "task";
}

export function getLibraryEntry(slug: string) {
  return libraryEntries.find((entry) => entry.slug === slug);
}

export function getTierLabel(entry: LibraryEntry) {
  return isSimpleTask(entry) ? "Simple task" : "Strategic prompt";
}

export type WorkflowDefinition = {
  id: string;
  title: string;
  description: string;
  outcome: string;
  steps: { slug: string; handoff: string }[];
};

export const promptWorkflows: WorkflowDefinition[] = [
  {
    id: "image-production", title: "From approved images to delivery-ready assets",
    description: "Set the creative direction, produce focal-point crops, and check the exports before handoff.",
    outcome: "An approved set of image variants, a specification report, and a searchable asset inventory.",
    steps: [
      { slug: "creative-brief-to-production-plan", handoff: "Approve the asset list, target sizes, creative intent, output names, and review owner. Use these as the resizing task's requirements." },
      { slug: "resize-images-focal-point", handoff: "Review the crop previews and focal points. Pass approved exports and the original size/format requirements to the delivery check." },
      { slug: "image-delivery-check", handoff: "Resolve failed or missing variants and visually approve the final set. Give the verified file listing and approval record to the inventory task." },
      { slug: "create-asset-inventory", handoff: "Spot-check paths and attach the verified inventory to the production handoff. Keep the approval record with the delivered assets." },
    ],
  },
  {
    id: "file-organization", title: "From a messy folder to an agreed file system",
    description: "Inspect the actual files, choose naming rules with the team, and plan a small migration pilot.",
    outcome: "A reviewed inventory, agreed naming convention, proposed folder map, and production plan for a pilot. File changes are a separate step.",
    steps: [
      { slug: "create-asset-inventory", handoff: "Check the inventory's coverage and exclusions. Pass the verified paths and the team's search habits to the folder audit." },
      { slug: "audit-file-organization", handoff: "Review observed problems, collisions, and link risks. Give actual filename examples and the proposed rules to the naming-system prompt." },
      { slug: "asset-naming-system", handoff: "Agree on a convention with the people who use it. Carry approved rules, protected links, and the proposed mapping into a pilot brief." },
      { slug: "creative-brief-to-production-plan", handoff: "Assign the pilot owner, backup/recovery approach, link checks, and review gate. Authorize actual renames or moves separately after reviewing the plan." },
    ],
  },
  {
    id: "campaign", title: "From insight to campaign",
    description: "Bring real research, choose a message, and produce channel copy from an approved direction.",
    outcome: "A reviewed campaign direction, channel-ready copy variants, and a focused learning plan.",
    steps: [
      { slug: "user-research-synthesis", handoff: "Validate themes against the notes. Bring supported observations and open questions into the message map." },
      { slug: "message-map", handoff: "Approve claims and proof points. Use the agreed message and evidence gaps to shape campaign options." },
      { slug: "campaign-strategy", handoff: "Choose the angle and channel plan. Have a person draft and approve core copy, then supply it with locked wording and channel limits to the formatting task." },
      { slug: "format-approved-copy", handoff: "Approve variants against the source and destination requirements. After your team runs the campaign, bring measured results and tracking limitations to the performance review." },
      { slug: "performance-review", handoff: "Validate calculations, choose the next test, and record what the team learned for the next campaign." },
    ],
  },
  {
    id: "creative", title: "From idea to creative direction",
    description: "Explore a direction, make creative decisions, and turn approved images into useful variants.",
    outcome: "A human-selected direction and reviewed image variants for its first production test.",
    steps: [
      { slug: "project-intake", handoff: "Confirm the goal, scope, and decision owner. Bring the agreed brief and your own visual references to art direction." },
      { slug: "art-direction-routes", handoff: "Sketch or prototype the routes yourself and choose a direction. Share that real draft and the intent you want to preserve for critique." },
      { slug: "design-critique", handoff: "Choose which feedback supports the brief. Gather stakeholder comments and use the synthesis prompt to resolve conflicts." },
      { slug: "creative-feedback-synthesis", handoff: "Approve the revised direction and choose actual images. Supply focal-point requirements and target dimensions to the resizing task." },
      { slug: "resize-images-focal-point", handoff: "Visually approve crops and exact export sizes before adding the variants to your production files." },
    ],
  },
  {
    id: "website", title: "From visitor need to a clearer website",
    description: "Plan a useful page, prepare image descriptions, and check the implemented experience.",
    outcome: "A reviewed page structure, contextual image descriptions, and a task-based usability test plan.",
    steps: [
      { slug: "user-research-synthesis", handoff: "Validate the visitor needs against real notes. Use the supported tasks to organize the content map." },
      { slug: "website-content-map", handoff: "Review labels and groupings with visitors. Take the agreed page purpose and key tasks into the landing-page outline." },
      { slug: "landing-page-outline", handoff: "Write and review the page copy, then choose actual images. Supply their purpose and adjacent text to the alt-text task." },
      { slug: "draft-image-alt-text", handoff: "Check the descriptions against the images. Bring approved drafts, headings, links, and form instructions to the content review." },
      { slug: "accessible-content-review", handoff: "Implement and validate the edits with appropriate accessibility checks. Supply actual screens, task steps, and observed problems to the journey review." },
      { slug: "ux-review", handoff: "Test the proposed improvements with real visitors and decide which changes to keep." },
    ],
  },
  {
    id: "team", title: "From request to a healthier workflow",
    description: "Clarify the work, make capacity tradeoffs, and prepare approved copy within a shared process.",
    outcome: "An agreed scope and review process, controlled production variants, and a small improvement experiment.",
    steps: [
      { slug: "project-intake", handoff: "Confirm the request and known decisions. Give the agreed deliverables and real availability to capacity planning." },
      { slug: "creative-capacity-plan", handoff: "Have the priority owner choose a feasible option. Carry the scope, people, and timing into the review-process discussion." },
      { slug: "review-and-approval-workflow", handoff: "Agree on reviewers and a final decision owner. Once the team has approved source copy, supply locked text and format limits for production variants." },
      { slug: "format-approved-copy", handoff: "Check the changes and counts, then use the agreed approval process. Collect observations from the actual project for the retrospective." },
      { slug: "creative-retrospective", handoff: "Choose a small improvement with an owner and a review date for the next project." },
    ],
  },
];

export function getWorkflow(id: string) {
  return promptWorkflows.find((workflow) => workflow.id === id);
}
