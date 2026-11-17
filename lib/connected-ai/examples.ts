export const capabilitySources = {
  chatgpt: { title: "ChatGPT Work and connected tools", href: "https://learn.chatgpt.com/docs/get-started-with-work" },
  plugins: { title: "ChatGPT plugins and access", href: "https://learn.chatgpt.com/docs/plugins" },
  claude: { title: "Claude Google Workspace connectors", href: "https://support.claude.com/en/articles/10166901-use-google-workspace-connectors" },
  claudeOffice: { title: "Claude add-ins for Microsoft Word and Excel", href: "https://claude.com/claude-for-microsoft-365" },
  excelRefresh: { title: "Microsoft Excel external data refresh", href: "https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel" },
  pdf: { title: "Adobe Acrobat comments and markup", href: "https://helpx.adobe.com/acrobat/desktop/share-and-review-documents/review-documents/add-comments.html" },
  idml: { title: "Adobe InDesign IDML exchange and review", href: "https://helpx.adobe.com/indesign/desktop/troubleshoot/file-and-output-issues/cant-open-in-previous-versions.html" },
  reports: { title: "HubSpot report and dashboard exports", href: "https://knowledge.hubspot.com/dashboard/email-or-export-reports-and-dashboards" },
} as const;

export type SourceId = keyof typeof capabilitySources;

export const exampleGroups = [
  { id: "creative-production", title: "Creative production", description: "Connect the feedback to the actual file and make the next revision easier to carry out." },
  { id: "marketing-reporting", title: "Marketing & reporting", description: "Bring the numbers and the context together so the next decision has something behind it." },
  { id: "planning-handoffs", title: "Planning & team handoffs", description: "Turn scattered requests, dates, and decisions into a workable plan." },
] as const;

export type ConnectedExample = {
  id: string;
  group: (typeof exampleGroups)[number]["id"];
  title: string;
  ask: string;
  connections: string[];
  route: string;
  steps: [string, string, string];
  output: string;
  humanCheck: string;
  setup: string;
  fallback: string;
  sources: SourceId[];
};

export const connectedExamples: ConnectedExample[] = [
  {
    id: "email-to-pdf-markup", group: "creative-production",
    title: "Turn feedback from an email into a marked-up PDF",
    ask: "Take the feedback in this email thread and mark up the attached brochure PDF so I can make the changes. Flag anything that conflicts or needs clarification.",
    connections: ["Email thread", "Current PDF", "PDF annotation tool"],
    route: "Connected context + file tools",
    steps: [
      "Find the relevant thread and identify which comments belong to this revision. Keep the sender, date, and source wording attached to each request.",
      "Match each request to a page and a specific passage or visual element in the current PDF. Separate exact replacements from subjective direction and conflicting comments.",
      "With a PDF annotation tool, add comments and highlights to a separate copy. Put ambiguous locations in an unresolved list rather than attaching a comment to the wrong place.",
    ],
    output: "A commented PDF copy, plus a short list of unresolved feedback and links back to the source messages.",
    humanCheck: "Confirm the right PDF version, comment placement, and whose feedback has decision authority before editing the design.",
    setup: "Provide the actual PDF and a tool that can write PDF annotations. Reading an email does not necessarily provide access to its attachments; upload or retrieve the file separately when needed.",
    fallback: "Ask for a page-by-page change list with the original wording, requested revision, and source message. Use it to add comments in Acrobat yourself.",
    sources: ["chatgpt", "claude", "pdf"],
  },
  {
    id: "email-to-idml", group: "creative-production",
    title: "Apply approved copy changes to an IDML file",
    ask: "Use the approved copy changes in this email to update a copy of the IDML file. Preserve the styles and give me a change log so I can check it in InDesign.",
    connections: ["Approved email feedback", "IDML export", "Code or file tools", "InDesign"],
    route: "Code-assisted file workflow",
    steps: [
      "Turn the approved feedback into an exact change list: source text, replacement text, and location. Ask about ambiguous wording before changing the file.",
      "In a tool that can inspect and edit IDML, apply the agreed text changes to a separate copy. Preserve the document structure and styles, and log matches that were missing or appeared more than once.",
      "Open the revised copy in InDesign. Check the changed stories, overset text, line breaks, fonts, and links, then export a proof for the human reviewer.",
    ],
    output: "A revised IDML copy when the file tools support it, a change log, and a list of items needing a layout decision.",
    humanCheck: "Approve the wording and inspect the actual InDesign layout. Text replacement alone cannot establish that the pages still work.",
    setup: "IDML is InDesign's XML-based interchange format. This is a proposed code-assisted workflow requiring suitable file tools and InDesign for validation; an email connector alone does not provide those capabilities.",
    fallback: "Have the assistant prepare exact find-and-replace pairs and page or story references, then make the changes in InDesign yourself.",
    sources: ["idml", "chatgpt"],
  },
  {
    id: "feedback-to-revision-log", group: "creative-production",
    title: "Bring scattered review comments into one revision log",
    ask: "Compare the feedback in these emails and review notes with the current proof. Group duplicate requests, show disagreements, and give me one revision list to work from.",
    connections: ["Email", "Review notes", "Current proof"],
    route: "Connected context or supplied files",
    steps: [
      "Gather the named sources for one project and one review round. Preserve source links and distinguish current feedback from older requests.",
      "Group comments by page, asset, or underlying issue. Keep conflicting directions visible and distinguish a preference from an approved change.",
      "Prepare a revision log with the requested change, source, decision needed, and status. Let the decision owner resolve conflicts before production starts.",
    ],
    output: "A consolidated revision log and a short set of questions for the decision owner.",
    humanCheck: "Confirm that the grouping has not erased an important concern, and choose which requests are in scope.",
    setup: "The assistant needs access to the selected threads, notes, and proof. It can organize a log in the conversation or a supported document tool.",
    fallback: "Paste the selected feedback and attach the current proof. A connected mailbox is helpful for retrieval but is not required for a supplied set of comments.",
    sources: ["chatgpt", "claude"],
  },
  {
    id: "campaign-data-to-report", group: "marketing-reporting",
    title: "Build a campaign report with the story behind the numbers",
    ask: "Use this week's campaign report and the launch notes to explain what changed, show the calculations, and suggest the next questions we should investigate.",
    connections: ["Marketing report or CSV", "Campaign brief", "Launch notes", "Spreadsheet tools"],
    route: "Connected reports or exported data",
    steps: [
      "Retrieve the specific report through a supported connector, or supply a CSV or spreadsheet export. Agree on the date range, metric definitions, filters, and comparison period.",
      "Reconcile the figures and calculate changes in a spreadsheet or analysis tool. Use launch notes to identify known changes, and keep explanations separate from what the data demonstrates.",
      "Prepare a concise report with source references, clearly labelled charts when supported, caveats, and the next test. Identify missing data instead of filling it with plausible numbers.",
    ],
    output: "A reviewable campaign summary with calculations, source data, and a focused set of next questions.",
    humanCheck: "Recheck key figures and attribution assumptions. Decide whether the proposed explanation or next test makes sense for the business.",
    setup: "Check which reporting data your marketing connector can actually retrieve. HubSpot supports report exports; an export is a useful starting point when direct access does not cover the required metrics.",
    fallback: "Export the relevant report and attach it with the brief and launch notes. Ask for the calculations alongside the written summary.",
    sources: ["reports", "chatgpt"],
  },
  {
    id: "excel-to-reusable-report", group: "marketing-reporting",
    title: "Build an Excel report you can use again next week",
    ask: "Use Claude in Excel to turn this campaign data into a reusable report. Build formulas, a clear summary, and charts that help me see what changed and where to look next. Make the report update when I add new rows, and help me set up data refresh where the source supports it. Explain how to update it and check the calculations.",
    connections: ["Microsoft Excel", "Claude add-in", "Campaign data", "Data connection or recurring export"],
    route: "An AI assistant inside your spreadsheet",
    steps: [
      "Open the workbook and Claude add-in. Supply the source data and agree on the metrics, comparison periods, and questions the report needs to answer.",
      "Ask Claude to build the report using tables and formulas, with a summary and charts for trends, outliers, and follow-up questions. Have it explain the calculations so you can check them against the source.",
      "Test with a fresh batch of data. Confirm that formulas and charts include the new rows and refresh any queries or pivot tables. Where supported, configure Excel to refresh its data connection on opening the file or at an interval, then document that process.",
    ],
    output: "A reusable report with working calculations, useful visuals, and update instructions. Letting the assistant handle the initial build and repetitive setup can free you to reach the insights and next decisions sooner.",
    humanCheck: "Verify totals, date ranges, and metric definitions. Check that a refresh actually brings in new data, and use your campaign knowledge to decide what the numbers mean.",
    setup: "Use the Claude add-in in Excel with your workbook and source data. Formulas can recalculate as inputs change; automatic external updates require a supported data connection and configured Excel refresh settings. A pasted export needs a new export each cycle.",
    fallback: "Upload the workbook or CSV to an assistant that can create spreadsheet files. Ask for a reusable report and update instructions, then open and test it in Excel.",
    sources: ["claudeOffice", "excelRefresh"],
  },
  {
    id: "content-data-to-refresh-plan", group: "marketing-reporting",
    title: "Turn content performance into a practical refresh list",
    ask: "Compare these page metrics with our content inventory and current offer. Identify the pages worth reviewing first and tell me what evidence supports each recommendation.",
    connections: ["Page performance export", "Content inventory", "Current product or campaign brief"],
    route: "Exported data + document context",
    steps: [
      "Provide page-level metrics for a defined period, canonical URLs, and the current content inventory. Note tracking changes and incomplete measurements.",
      "Match records by URL and flag mismatches. Compare the page's stated purpose with its content and available performance evidence.",
      "Create a shortlist with the proposed edit, reason, source data, owner question, and a way to evaluate the change. Keep publishing as a separate, reviewed step.",
    ],
    output: "A prioritized refresh list tied to real pages and a manageable first batch of edits.",
    humanCheck: "Confirm audience needs and page ownership. A weak metric alone does not explain why a page is underperforming.",
    setup: "Supply page content as well as metrics. A report export can describe performance without containing the page's actual copy or layout.",
    fallback: "Start with five pages, their current copy, and a small metrics export. A small reviewed batch is easier to act on than a whole-site recommendation list.",
    sources: ["reports", "chatgpt"],
  },
  {
    id: "word-to-project-plan", group: "planning-handoffs",
    title: "Build a project plan or fill in a Word template",
    ask: "Use Claude in Word to turn these approved project notes into a plan in our existing template. Fill in the requested sections and tables, including deliverables, owners, milestones, and dependencies. Preserve our styles and flag missing information instead of inventing an answer.",
    connections: ["Microsoft Word", "Claude add-in", "Project notes or brief", "Existing document template"],
    route: "An AI assistant inside your document",
    steps: [
      "Open the Word document and Claude add-in. Provide the approved brief or project notes and point out the template sections, questions, or tables that need input.",
      "Ask Claude to draft the project plan or populate the requested sections using the supplied information. Keep existing heading styles and table structure, and mark unknown owners, dates, or requirements for follow-up.",
      "Review the edits in Word, resolve the missing information with the project team, and refine the plan before sharing it. Reuse the template and instructions for the next project.",
    ],
    output: "A project plan or completed draft template in the document you already use, with open questions clearly marked. Spend less time moving notes into a format and more time shaping a workable plan.",
    humanCheck: "Confirm scope, owners, dates, and dependencies with the people doing the work. Check that every completed field reflects the source material.",
    setup: "Use the Claude add-in in Word with your document and supporting material. It supports drafting in existing templates and reviewable edits. Check add-in access with your organization if it is managed centrally.",
    fallback: "Share the template and notes with an assistant that can work with Word files, or paste its questions and section headings. Review the draft and transfer it into the document yourself.",
    sources: ["claudeOffice"],
  },
  {
    id: "inbox-to-week-plan", group: "planning-handoffs",
    title: "Plan a work week from real commitments",
    ask: "Look at my project emails, calendar, project management system, tickets, and marketing schedule for next week. Help me work through what is a priority, build checklists for the work, and suggest time blocks for design, reviews, and follow-ups. Once we agree on the plan, add the focus blocks to my calendar if the connected tool supports it.",
    connections: ["Email", "Calendar", "Project management", "Ticketing system", "Marketing software"],
    route: "Connected context + priorities, checklists, and calendar blocks",
    steps: [
      "Connect the project management, ticketing, or marketing software where your work is tracked, alongside email and calendar. Name the date range and projects so the assistant can bring together assignments, campaign dates, open tickets, meetings, and deadlines for a fuller picture.",
      "Work through priorities with the assistant using deadlines, impact, dependencies, and effort. Turn larger tasks into checklists and propose focus blocks around real availability. Flag overload, conflicting priorities, and missing estimates instead of assuming everything fits.",
      "Review the proposed week and choose the tradeoffs. Ask the assistant to create the checklists in your task tool and block out time on your calendar where those actions are supported. Approve the changes and check what was created.",
    ],
    output: "A prioritized weekly plan, actionable checklists, suggested calendar blocks, and a list of conflicts or follow-ups. With supported connections, your assistant can also create the agreed checklists and time blocks for you.",
    humanCheck: "Set priorities, validate effort estimates, and approve any calendar changes. Leave space for work that has not arrived yet.",
    setup: "Give the assistant access to the systems that hold your current work so the plan reflects the full picture. Check whether each connection can read assignments, create checklist items, or edit calendar events; those are separate capabilities.",
    fallback: "If you cannot connect the system, share a clear screenshot of your work list with task names, due dates, and statuses visible. Add any deadlines, priorities, or availability missing from the capture. You can also paste your task list or attach exports from your tools. Copy the resulting checklists and time blocks into your tools yourself.",
    sources: ["claude", "chatgpt", "plugins"],
  },
  {
    id: "requests-to-creative-brief", group: "planning-handoffs",
    title: "Turn an email request into a brief the team can use",
    ask: "Pull together this request, the meeting notes, and our brand guidance. Draft a creative brief, show what is still undecided, and prepare the questions we need answered before production.",
    connections: ["Request email", "Meeting notes", "Brand guidance", "Project tracker"],
    route: "Connected context + a reviewed handoff",
    steps: [
      "Gather the selected request, notes, and current brand documents. Identify the actual objective, audience, deliverables, and decision owner wherever the sources establish them.",
      "Draft the brief with links to the supporting material. Separate confirmed requirements from assumptions and ask about the few gaps that prevent production.",
      "Have the requester approve the scope. Turn the agreed deliverables into a proposed task list, and create tracker items only when the tool supports it and you ask for that action.",
    ],
    output: "A draft creative brief, blocking questions, and a task-list proposal with source links.",
    humanCheck: "Confirm the purpose, scope, owners, and dates with the people responsible for the work.",
    setup: "A document connection can supply reference material; a project-tool connection may support task creation. Check both capabilities before promising a completed handoff.",
    fallback: "Supply the selected sources in one conversation and copy the approved brief and task list into your own project tool.",
    sources: ["chatgpt", "plugins", "claude"],
  },
  {
    id: "project-context-to-status", group: "planning-handoffs",
    title: "Prepare a status update without chasing every thread",
    ask: "Review this project's recent emails, decisions, and task updates. Draft a short status report showing completed work, blockers, upcoming reviews, and the decisions I need from stakeholders.",
    connections: ["Project emails", "Decision notes", "Task tracker", "Previous update"],
    route: "Connected context + a draft update",
    steps: [
      "Limit the review to a named project and time period. Gather the source updates and identify the last confirmed status of each deliverable.",
      "Separate completed work from work merely discussed. Highlight conflicting dates or statuses and include links for items needing verification.",
      "Draft the update in the team's existing format. Have the owner check it before sending or posting through any connected communication tool.",
    ],
    output: "A draft stakeholder update with evidence, unresolved conflicts, and clear requests for decisions.",
    humanCheck: "Confirm what is actually complete and choose what the audience needs to know. Review recipients and commitments before sharing.",
    setup: "The assistant needs permission to read the named sources. Drafting an update is useful even when a connection cannot send or post it.",
    fallback: "Paste a small set of project updates and the previous report, then ask for a draft with unknowns clearly marked.",
    sources: ["chatgpt", "claude"],
  },
];
