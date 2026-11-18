This is a [Next.js](https://nextjs.org) portfolio site for Serenity Forschen.

## Local Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Helpful commands:

```bash
npm run lint
npm run build
```

## AI resources

`/ai` is the main-navigation hub for Prompt Lab and Connected AI for Creatives.
The AI navigation item stays active across both resource sections.

## Prompt Lab

The AI work library lives at `/resources/prompt-lab` (`/prompt-lab` redirects there), with three tiers:
simple tasks that can be reused as skills, strategic prompts, and workflows that combine them.
Each task or prompt has a statically generated detail page with a ready-to-use prompt or browser-based instruction builder.
All seven simple tasks use a three-step guide beside a ready-to-use prompt, with optional skill setup in a collapsed disclosure.
Transcription, folder organization, and asset inventories need no form input. Image resizing asks only for sizes
and export formats; delivery checks ask for specs; alt text asks for page context; copy formatting asks for
formats and limits. Visitors provide their actual source material in their AI tool and can edit the copied
prompt for more advanced requirements.
All 25 strategic prompts also use a three-step guide and one task-specific prompt, with a single field for
goals and requirements. Optional calendar pickers appear only for production, campaign, editorial, email,
intake, approval, and capacity planning. Typography also retains editable starter content and customization
tips. Visitors upload, link, or paste source material directly in their AI assistant; they do not repeat it
in separate source, audience, voice, or constraint fields on this site.
Workflows have dedicated pages with ordered steps, human checks, and explicit handoffs.
Search, tier/category/workflow filters, examples, copying, TXT downloads, and instruction-only `SKILL.md`
exports run without an AI API or database. The website does not inspect visitors' files or execute the tasks.
Project entries stay in component state; they are not saved across visits or passed to external AI tools.

The website accessibility audit prompt in Web & UX defaults to WCAG 2.2 Level AA. It requests findings
by page and section with evidence, criterion references, priority, specific fixes, and retest steps,
and keeps unverified findings and untested coverage explicit. The AI assistant using the prompt needs
access to the actual website or supplied evidence; Prompt Lab itself does not scan websites.

- Edit strategic prompts and categories in `lib/prompt-lab/prompts.ts`, simple tasks in `lib/prompt-lab/tasks.ts`,
  and combined workflow steps in `lib/prompt-lab/library.ts`.
- Skill exports contain reusable procedures, capability requirements, and human review steps, not the visitor's
  current project entries. Installation guidance links to the official skill documentation.
- Keep each prompt's source requirements, human contribution, and review checklist specific to the task.
- Shared prompt assembly and filtering live in `lib/prompt-lab/prompt-utils.ts`.
- Templates are starter resources. Review their content and try representative tasks in your chosen AI tool before describing them as tested.
- Run `npm run test:prompt-lab` to check generation, tier filters, skill exports, and workflow handoffs.

## Connected AI for Creatives

`/resources/connected-ai` is a practical guide to connecting email, creative files, reports, and planning tools.
Ten examples cover PDF markup, code-assisted IDML revisions, consolidated feedback, campaign reporting,
reusable Excel reports, content refreshes, Word project plans and templates, weekly planning, creative briefs,
and project updates. Each has an output, human review,
setup requirements, fallback, and links to official capability documentation.

Edit the examples and references in `lib/connected-ai/examples.ts`. The page uses native disclosure elements
for handoff details and the existing shared content and CTA sections. It does not connect visitor accounts or
perform the example workflows. References were checked on November 17, 2026 and should be reviewed as tools change.

## Deploying to Vercel

This repo is ready to deploy on Vercel as a standard Next.js project.

1. Push the repo to GitHub.
2. Sign in to [Vercel](https://vercel.com/).
3. Click `Add New...` -> `Project`.
4. Import `sforschen/asylum`.
5. Keep the default Next.js settings.
6. Click `Deploy`.

Recommended Vercel settings:

- Framework Preset: `Next.js`
- Node.js Version: `24.x`
- Install Command: `npm install`
- Build Command: `npm run build`

After the first deploy, Vercel will generate a preview URL and a production URL. If you add a custom domain later, attach it in the project `Settings -> Domains`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
