import ContentSection from "../../components/ContentSection";
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
  {
    name: "HubSpot Marketing Software",
    issuer: "HubSpot Academy",
    date: "08/22",
    href: "https://app.hubspot.com/academy/achievements/tw7bwjxy/en/1/serenity-forschen/hubspot-marketing-software",
  },
  { name: "Emerging leadership", issuer: "UnitedHealth Group", date: "10/21" },
];

// Skill groups are rendered as separate sections or grouped platform blocks.
const skillGroups: SkillGroup[] = [
  {
    id: "tech",
    title: "Tech",
    items: [
      { name: "HubSpot", percent: 85 },
      { name: "Figma", percent: 50 },
      { name: "Web Design (HTML & CSS)", percent: 95 },
      { name: "508/WCAG", percent: 70 },
      { name: "Accessibility Compliance", percent: 65 },
      { name: "Mac & PC (PC preferred)", percent: 95 },
      { name: "Data/File Management", percent: 85 },
      { name: "LinkedIn Campaigns", percent: 40 },
      { name: "On24", percent: 60 },
      { name: "Hootsuite", percent: 55 },
      { name: "WordPress", percent: 40 },
      { name: "Smartsheet", percent: 80 },
    ],
  },
  {
    id: "adobe",
    title: "Adobe",
    items: [
      { name: "Indesign", percent: 95 },
      { name: "Photoshop", percent: 60 },
      { name: "Illustrator", percent: 65 },
      { name: "Adobe Experience Manager", percent: 70 },
      { name: "Workfront", percent: 60 },
      { name: "Acrobat", percent: 93 },
    ],
  },
  {
    id: "microsoft",
    title: "Microsoft",
    items: [
      { name: "Word", percent: 90 },
      { name: "Excel", percent: 85 },
      { name: "Powerpoint", percent: 85 },
      { name: "SharePoint", percent: 75 },
      { name: "VS Code", percent: 60 },
      { name: "Teams", percent: 90 },
      { name: "Outlook", percent: 90 },
      { name: "Loop", percent: 90 },
      { name: "Project", percent: 70 },
    ],
  },
  {
    id: "google",
    title: "Google",
    items: [
      { name: "Workspace", percent: 25 },
      { name: "Docs", percent: 60 },
      { name: "Ads", percent: 25 },
      { name: "Analytics", percent: 45 },
    ],
  },
];

const [techSkillGroup, ...otherSkillGroups] = skillGroups;

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
            <a href="#certifications">Certifications</a> | <a href="#skills">Skills</a> | <a href="#education">Education</a>
          </p>
        }
      />

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
      <ContentSection id="skills" title="Skills" outerClassName="page-container knowledge-section">
        <p>
          I am a highly tech-savvy professional with a proven track record in analytical thinking and critical
          problem-solving. I have adept process development, project management, strategy, and research skills.
        </p>

        <h3 id="marketing--design">Marketing &amp; Design</h3>
        <p>
          With a keen eye for design and a strategic marketing mindset, I excel in the intersection of creativity and
          business. Proficient in website management, I ensure an engaging online presence. My art direction and
          graphic design skills contribute to compelling visual narratives, while my expertise in brand management
          guarantees a consistent and impactful brand image. Leveraging the power of social media, content marketing,
          and direct marketing, I orchestrate campaigns that captivate audiences and drive results. Additionally, my
          proficiency in email marketing enhances communication strategies, creating lasting connections with clients
          and customers.
        </p>

        <h3 id="artificial-intelligence-ai">Artificial Intelligence (AI)</h3>
        <p>
          I believe in ethically using AI to make work easier. I am very excited about the future of this technology;
          I have worked with Adobe&apos;s various AI additions to their apps, as well as Midjourney and ChatGPT. ChatGPT
          helped write the Javascript that created the skill cards with dynamic percentages below.
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
      >
        <p>
          Salt Lake Community College
          <br />
          AAS in Visual Art &amp; Design, Graphic Design Emphasis <strong>w/Honors</strong>
        </p>
      </ContentSection>
    </main>
  );
}
