import type { ReactNode } from "react";
import { Bot, IbmWatsonxCodeAssistantForZValidationAssistant, UserAdmin } from "@carbon/icons-react";

import ContentSection from "../../components/ContentSection";
import CtaSection from "../../components/CtaSection";
import PageIntro from "../../components/PageIntro";
import SkillBarGroup, { type SkillItem } from "../../components/SkillBarGroup";

// Structured table data for the certification section.
type Certification = {
  name: string;
  issuer: string;
  date: string;
  href?: string;
};

type SkillGroup = {
  id: string;
  title: string;
  items: SkillItem[];
};

const certifications: Certification[] = [
  {
    name: "HubSpot Marketing Software",
    issuer: "HubSpot Academy",
    date: "01/26",
    href: "https://app.hubspot.com/academy/achievements/q76wb5mg/en/1/serenity-forschen/hubspot-marketing-hub-software",
  },
  { name: "HTML", issuer: "W3Schools.com", date: "01/24", href: "https://verify.w3schools.com/1OFBKTXH1Q" },
  { name: "CSS", issuer: "W3Schools.com", date: "02/24", href: "https://verify.w3schools.com/1OL59LV4C2" },
  {
    name: "Digital Marketing",
    issuer: "HubSpot Academy",
    date: "01/23",
    href: "https://app.hubspot.com/academy/achievements/kmw1xwxz/en/1/serenity-forschen/digital-marketing",
  },
  {
    name: "HubSpot CMS",
    issuer: "HubSpot Academy",
    date: "01/23",
    href: "https://app.hubspot.com/academy/achievements/g7b7mg76/en/1/serenity-forschen/hubspot-cms-for-marketers",
  },
  { name: "SEO", issuer: "HubSpot Academy", date: "01/23", href: "https://app.hubspot.com/academy/achievements/ghh8jwb8/en/1/serenity-forschen/seo" },
  { name: "SEO II", issuer: "HubSpot Academy", date: "01/23", href: "https://app.hubspot.com/academy/achievements/nq5rhz8b/en/1/serenity-forschen/seo-ii" },
  {
    name: "Email Marketing",
    issuer: "HubSpot Academy",
    date: "06/22",
    href: "https://app.hubspot.com/academy/achievements/smrkq1nx/en/1/serenity-forschen/email-marketing",
  },
  { name: "Emerging leadership", issuer: "UnitedHealth Group", date: "10/21" },
];

// Skill groups are rendered as separate sections or grouped platform blocks.
const skillGroups: SkillGroup[] = [
  {
    id: "tech",
    title: "Tech",
    items: [
      { name: "508/WCAG", percent: 70 },
      { name: "Accessibility Compliance", percent: 65 },
      { name: "ChatGPT", percent: 65 },
      { name: "Data/File Management", percent: 85 },
      { name: "Figma", percent: 50 },
      { name: "Hootsuite", percent: 55 },
      { name: "HubSpot", percent: 85 },
      { name: "LinkedIn Campaigns", percent: 40 },
      { name: "Mac & PC (PC preferred)", percent: 95 },
      { name: "On24", percent: 60 },
      { name: "Smartsheet", percent: 80 },
      { name: "Web Design (HTML & CSS)", percent: 95 },
      { name: "WordPress", percent: 40 },
    ],
  },
  {
    id: "adobe",
    title: "Adobe",
    items: [
      { name: "Acrobat", percent: 93 },
      { name: "Adobe Experience Manager", percent: 70 },
      { name: "Illustrator", percent: 65 },
      { name: "Indesign", percent: 95 },
      { name: "Photoshop", percent: 60 },
      { name: "Workfront", percent: 60 },
    ],
  },
  {
    id: "microsoft",
    title: "Microsoft",
    items: [
      { name: "Excel", percent: 85 },
      { name: "Loop", percent: 90 },
      { name: "Outlook", percent: 90 },
      { name: "Powerpoint", percent: 85 },
      { name: "Project", percent: 70 },
      { name: "SharePoint", percent: 75 },
      { name: "Teams", percent: 90 },
      { name: "VS Code", percent: 60 },
      { name: "Word", percent: 90 },
    ],
  },
  {
    id: "google",
    title: "Google",
    items: [
      { name: "Ads", percent: 25 },
      { name: "Analytics", percent: 45 },
      { name: "Docs", percent: 60 },
      { name: "Workspace", percent: 25 },
    ],
  },
];

const [techSkillGroup, ...otherSkillGroups] = skillGroups;

const aiHighlights = [
  {
    title: "Codex In Practice",
    description:
      "Codex helped build and refine parts of this site, including page structure updates, content organization, reusable components, and practical cleanup work that made iteration faster.",
    icon: (
      <IbmWatsonxCodeAssistantForZValidationAssistant aria-hidden="true" />
    ),
  },
  {
    title: "Emerging Technology",
    description:
      "I find emerging technology genuinely exciting because it opens up new ways to research, prototype, streamline workflows, and reduce the friction that slows strong teams down.",
    icon: (
      <Bot aria-hidden="true" />
    ),
  },
  {
    title: "Human Judgment First",
    description:
      "I use AI to speed up drafting, analysis, experimentation, and technical exploration, but I still rely on editing, critical thinking, and human context to shape the final result.",
    icon: (
      <UserAdmin aria-hidden="true" />
    ),
  },
];

function AiHighlightCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <article className="ai-highlight-card">
      <div className="ai-highlight-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default function KnowledgePage() {
  return (
    <main className="page-shell">
      {/* Intro and jump links for the knowledge/skills page. */}
      <PageIntro
        title="Knowledge"
        titleId="knowledge"
        variant="knowledge"
        body={
          <p>
            Throughout my career, I have acquired a diverse skill set that spans marketing, website and asset
            management, project management, and design. My expertise encompasses many competencies; I am tech-savvy,
            proficient in website management, and possess analytical prowess and critical thinking abilities. My
            proficiency extends to art direction, process development, brand management, and comprehensive knowledge of
            social media and content marketing strategies. I am well-versed in utilizing tools such as HubSpot, Figma,
            Adobe Creative Suite, Microsoft Office, and various web design and marketing technologies. My skill set is
            underscored by certifications from reputable institutions, including W3Schools.com, HubSpot Academy, and
            UnitedHealth Group, showcasing my commitment to continuous learning and professional development.{" "}
            <a href="/portfolio">Visit my portfolio to see these skills in action.</a>
          </p>
        }
        links={
          <p className="knowledge-jump-links">
            <a href="#artificial-intelligence-ai">AI</a> | <a href="#certifications">Certifications</a> | <a href="#skills">Skills</a> |{" "}
            <a href="#education">Education</a>
          </p>
        }
      />

      <ContentSection
        id="artificial-intelligence-ai"
        title="Artificial Intelligence (AI)"
        outerClassName="section highlight-light-green"
        innerClassName="page-container page-section-content knowledge-section"
      >
        <p>
          I am genuinely excited by emerging technology and the practical ways it can improve how teams think, build,
          and deliver work. AI is one of the most interesting shifts I have seen because it can accelerate research,
          experimentation, problem-solving, and production without replacing the judgment that strong work still
          depends on.
        </p>
        <p>
          This site is a good example. Codex helped build and refine parts of it, from component updates and content
          restructuring to blog architecture, local asset migration, and cleanup work across the codebase. That kind
          of collaboration is exciting to me because it turns AI into a practical partner for thoughtful execution
          rather than a shortcut around quality.
        </p>

        <div className="ai-highlight-grid">
          {aiHighlights.map((item) => (
            <AiHighlightCard key={item.title} {...item} />
          ))}
        </div>
      </ContentSection>

      <ContentSection
        id="marketing--design"
        title="Marketing & Design"
        outerClassName="page-container knowledge-section"
        threeColumn
      >
        <p>
          With a keen eye for design and a strategic marketing mindset, I excel in the intersection of creativity and
          business. Proficient in website management, I ensure an engaging online presence. My art direction and
          graphic design skills contribute to compelling visual narratives, while my expertise in brand management
          guarantees a consistent and impactful brand image. Leveraging the power of social media, content marketing,
          and direct marketing, I orchestrate campaigns that captivate audiences and drive results. Additionally, my
          proficiency in email marketing enhances communication strategies, creating lasting connections with clients
          and customers.
        </p>
      </ContentSection>

      {/* Certifications are presented as a lightweight data table. */}
      <ContentSection
        id="certifications"
        title="Certifications"
        addSpacer
        outerClassName="section highlight"
        innerClassName="page-container page-section-content knowledge-section"
      >
        <div className="table">
          <table>
            <thead>
              <tr>
                <th scope="col">Certification</th>
                <th scope="col">Issuer</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {certifications.map((cert) => (
                <tr key={cert.name}>
                  <td>
                    {cert.href ? (
                      <a href={cert.href} target="_blank" rel="noreferrer">
                        {cert.name}
                      </a>
                    ) : (
                      cert.name
                    )}
                  </td>
                  <td>{cert.issuer}</td>
                  <td>{cert.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentSection>

      {/* Narrative skills overview before the scored skill cards. */}
      <ContentSection id="skills" title="Skills" outerClassName="page-container knowledge-section" threeColumn>
        <p>
          I am a highly tech-savvy professional with a proven track record in analytical thinking and critical
          problem-solving. I have adept process development, project management, strategy, and research skills.
        </p>
        <p>
          I adapt quickly to existing tech stacks while staying genuinely interested in emerging tools and platforms.
          Whether I am working inside established systems or learning something new, I focus on understanding how the
          technology fits into real workflows so teams can use it effectively and sustainably.
        </p>
      </ContentSection>

      {/* Tech skills are called out in their own highlighted section. */}
      <ContentSection
        id={techSkillGroup.id}
        title={techSkillGroup.title}
        outerClassName="section highlight"
        innerClassName="page-container page-section-content knowledge-section"
      >
        <SkillBarGroup id={techSkillGroup.id} title={techSkillGroup.title} items={techSkillGroup.items} showTitle={false} />
      </ContentSection>

      {/* Remaining platform/tool skills are grouped under one heading. */}
      <ContentSection id="platform-skills" title="Platform Skills" outerClassName="page-container knowledge-section">
        {otherSkillGroups.map((group) => (
          <div key={group.id} className={group.id === "adobe" ? "knowledge-group-start" : undefined}>
            <SkillBarGroup id={group.id} title={group.title} items={group.items} />
            {group.id !== "google" ? <div className="spacer xl" /> : null}
          </div>
        ))}
      </ContentSection>

      {/* Education closes the page as a simple highlighted block. */}
      <ContentSection
        id="education"
        title="Education"
        outerClassName="section highlight"
        innerClassName="page-container page-section-content knowledge-section"
        threeColumn
      >
        <p>
          Salt Lake Community College
          <br />
          AAS in Visual Art &amp; Design, Graphic Design Emphasis <strong>w/Honors</strong>
        </p>
      </ContentSection>

      <CtaSection title="Want to put these skills to work?">
        If you would like to connect, ask a question, or talk about how this experience could support your team, I
        would love to hear from you.
      </CtaSection>
    </main>
  );
}
