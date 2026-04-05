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
    </main>
  );
}
