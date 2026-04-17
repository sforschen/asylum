import CtaSection from "../../components/CtaSection";
import ContentSection from "../../components/ContentSection";
import PageIntro from "../../components/PageIntro";

// Short narrative page focused on leadership approach and team style.
export default function LeadershipPage() {
  return (
    <main className="page-shell">
      <PageIntro
        title="Leadership"
        titleId="leadership"
        variant="copy"
        body={
          <>
            <p>
              I enjoy leading teams in operations, marketing, creative projects, and website management initiatives.
              It&apos;s especially rewarding for me to guide small, energetic teams to success together.
            </p>
            <p>
              With over a decade of experience, I have consistently driven high-impact projects, including technology
              implementations, managing website migrations, and overseeing accessibility compliance across platforms. As
              a leader, I foster a collaborative environment, empowering each team member to take ownership of their
              work. By providing clear direction, offering support, and promoting open communication, I ensure that
              team goals are met efficiently and effectively. Through hands-on leadership and a focus on strategic
              planning, I lead my teams to deliver innovative solutions that align with company goals and consistently
              exceed expectations.
            </p>
          </>
        }
      />

      <ContentSection
        id="leadership-style"
        title="Leadership Style"
        outerClassName="section highlight"
        innerClassName="page-container page-section-content"
        contentClassName="leadership-style-layout"
        threeColumn
        mainSpan={3}
      >
        <p>
          My leadership style is hands-on, practical, and rooted in clarity. I like to remove ambiguity early, define
          priorities, and build enough structure that teams can move confidently without feeling boxed in.
        </p>
        <p>
          I also believe in leading with compassion. People do their best work when they are trusted to take care of
          themselves, work in sustainable ways, and build habits that support both wellbeing and strong performance.
        </p>
        <p>
          I believe good leadership is not about adding process for its own sake. It is about giving people the right
          support, the right context, and the right systems so they can do strong work and take ownership of it.
        </p>
      </ContentSection>

      <ContentSection
        id="what-i-lead"
        title="What I Lead"
        outerClassName="page-container page-section-content"
        contentClassName="leadership-what-i-lead-layout"
        threeColumn
        aside={
          <div className="home-callout-card">
            <h3>Focus areas</h3>
            <ul className="home-focus-list">
              <li>Website migrations, platform changes, and digital governance</li>
              <li>Creative operations, project management systems, and workflow design</li>
              <li>Accessibility improvements across web, print, and content practices</li>
              <li>Cross-functional initiatives that require alignment between stakeholders, vendors, and internal teams</li>
            </ul>
          </div>
        }
      >
        <p>
          Much of my leadership work sits at the intersection of marketing, creative operations, website management,
          accessibility, and technology implementation. I am especially effective when work crosses disciplines and
          needs someone who can connect strategy, execution, and team coordination.
        </p>
      </ContentSection>

      <ContentSection
        id="team-environment"
        title="How I Support Teams"
        outerClassName="section highlight-light-green"
        innerClassName="page-container page-section-content"
        threeColumn
      >
        <p>
          I care deeply about creating a team environment where people can contribute fully, ask questions early, and
          stay connected to the purpose behind the work. Open communication and useful feedback are a big part of that.
        </p>
        <p>
          I try to lead in a way that helps teams feel both supported and accountable: expectations are clear, people
          have room to think, and progress stays visible. That balance helps teams stay energized and deliver
          consistently.
        </p>
      </ContentSection>

      <ContentSection
        id="leadership-outcomes"
        title="Results That Matter"
        outerClassName="page-container page-section-content"
        contentClassName="leadership-style-layout"
        threeColumn
        mainSpan={3}
      >
        <p>
          The outcomes I care most about are not just launches or completed projects, although those matter. I focus
          on whether the work leaves the team in a better place: stronger systems, clearer communication, better
          documentation, healthier collaboration, and a foundation that can keep supporting future growth.
        </p>
        <p>
          That is why my leadership approach tends to work well in complex environments. I do not just help teams get
          through the current initiative; I help build the conditions for the next one to go better too.
        </p>
      </ContentSection>

      <CtaSection title="Looking for leadership that keeps work moving?">
        If you would like to connect, ask a question, or talk about leadership support for your team or project, I
        would love to hear from you.
      </CtaSection>
    </main>
  );
}
