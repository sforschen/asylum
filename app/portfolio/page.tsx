import GallerySection, { type GalleryItem } from "../../components/GallerySection";
import PageIntro from "../../components/PageIntro";

// Gallery data mirrors the sections on the live portfolio site.
type PortfolioSection = {
  id: string;
  title: string;
  sectionClassName?: string;
  items: GalleryItem[];
};

const portfolioSections: PortfolioSection[] = [
  {
    id: "web-design-and-management",
    title: "Web Design and Management",
    sectionClassName: "highlight",
    items: [
      {
        title: "Elixir's Website",
        imageSrc: "https://www.youneedserenity.com/media_10cd620b5802038dc6b72c0a54674b045e33f2cd9.jpg?width=750&format=jpg&optimize=medium",
        links: [{ href: "https://www.youneedserenity.com/portfolio/elixir-site", label: "View Case Study" }],
      },
      {
        title: "Optum Website",
        imageSrc: "https://www.youneedserenity.com/media_179a80b17bfe9a6ef588ec0b3e8e6719ee0ebb45c.png?width=750&format=png&optimize=medium",
        links: [{ href: "https://www.youneedserenity.com/portfolio/optum-site", label: "View Case Study" }],
      },
      {
        title: "CPMI Solutions Website",
        imageSrc: "https://www.youneedserenity.com/media_157fbd40f7a86bda0a9b613866adcc76eb9d71959.jpg?width=750&format=jpg&optimize=medium",
        links: [{ href: "https://www.youneedserenity.com/assets/design-portfolio/cpmi-site.pdf", label: "View Image" }],
      },
      {
        title: "C.R. England Page",
        imageSrc: "https://www.youneedserenity.com/media_157b531fb1c6f9dad9b0fdb6171087c33fde019bf.jpg?width=750&format=jpg&optimize=medium",
        links: [{ href: "https://www.youneedserenity.com/assets/design-portfolio/exp-landing-page.pdf", label: "View Image" }],
      },
      {
        title: "C.R. England Recruiting",
        imageSrc: "https://www.youneedserenity.com/media_112b00dee584b5a962034f2b35f0366498391d9f1.jpg?width=750&format=jpg&optimize=medium",
        links: [{ href: "https://www.youneedserenity.com/assets/design-portfolio/dedicated-landing-page.pdf", label: "View Image" }],
      },
    ],
  },
  {
    id: "social-media",
    title: "Social Media",
    items: [
      {
        title: "Safety Month Post",
        imageSrc: "https://www.youneedserenity.com/media_14857f93128bc05e6fc98f4b1d829841ccce10559.jpg?width=750&format=jpg&optimize=medium",
        links: [{ href: "https://www.linkedin.com/posts/kendallvegetation_nationalsafetymonth-staysafe-kendallsafety-activity-7336519759825436672-Od33?utm_source=share&utm_medium=member_desktop&rcm=ACoAAADjjKoBrLu0hYpMutgsETO7iPh4dsJBBeU", label: "View on LinkedIn" }],
      },
      {
        title: "Video Post",
        imageSrc: "https://www.youneedserenity.com/media_1a5b7300ec449cdd9bc717ef15d03db35aa5b45c9.png?width=750&format=png&optimize=medium",
        links: [{ href: "https://www.linkedin.com/feed/update/urn:li:activity:7062426632422076416?utm_source=share&utm_medium=member_desktop", label: "View on LinkedIn" }],
      },
      {
        title: "Holiday Post",
        imageSrc: "https://www.youneedserenity.com/media_1944c88f221ef22021ef7108ce58b68ff9ac8eeaf.png?width=750&format=png&optimize=medium",
        links: [{ href: "https://www.linkedin.com/posts/elixir-craftedrxsolutions_happy-holidays-from-the-elixir-team-we-are-activity-7142891357659934720-4IuP?utm_source=share&utm_medium=member_desktop", label: "View on LinkedIn" }],
      },
      {
        title: "Video Post",
        imageSrc: "https://www.youneedserenity.com/media_1ac852ab98c0b7b48193e6f17b29fa2870021f3df.png?width=750&format=png&optimize=medium",
        links: [{ href: "https://www.linkedin.com/posts/serenityforschen_defeatdiabetes-elixirpbm-activity-7053744684485005312-fSyj?utm_source=share&utm_medium=member_desktop", label: "View on LinkedIn" }],
      },
      {
        title: "Event announcement",
        imageSrc: "https://www.youneedserenity.com/media_184974d7b7adf380285562d22d37972f9c7f2fce6.jpg?width=750&format=jpg&optimize=medium",
        links: [{ href: "https://www.linkedin.com/posts/elixir-craftedrxsolutions_elixirpbm-activity-7087111883664625665-7zAi?utm_source=share&utm_medium=member_desktop", label: "View on LinkedIn" }],
      },
      {
        title: "Blog Post",
        imageSrc: "https://www.youneedserenity.com/media_14192ca2d5449183e3180a74d79db4648cfb7553f.jpg?width=750&format=jpg&optimize=medium",
        links: [{ href: "https://www.linkedin.com/posts/elixir-craftedrxsolutions_flu-season-is-right-around-the-corner-read-activity-7101971724866371584-VgWY?utm_source=share&utm_medium=member_desktop", label: "View on LinkedIn" }],
      },
    ],
  },
  {
    id: "print--misc",
    title: "Print & Misc",
    sectionClassName: "highlight-light-green",
    items: [
      {
        title: "Event Mug Design",
        imageSrc: "https://www.youneedserenity.com/media_15a8490500d462c45953dc6f84b4db2855164bcde.jpg?width=750&format=jpg&optimize=medium",
        note: {
          text: "Photography courtesy of Deandre Redmon",
          href: "https://www.instagram.com/drevisualsphotography",
          label: "@drevisualsphotography",
        },
        links: [{ href: "https://www.youneedserenity.com/assets/portfolio/media_1e2c5a9b9212dbc8df5f36fae59ef85de0f4ee5a8.jpg", label: "View Image" }],
      },
      {
        title: "Customer Event Signage",
        imageSrc: "https://www.youneedserenity.com/media_12e6af6edbcf9434042a48e89d3cbc9444d08d8b0.png?width=750&format=png&optimize=medium",
        note: {
          text: "Photography courtesy of Deandre Redmon",
          href: "https://www.instagram.com/drevisualsphotography",
          label: "@drevisualsphotography",
        },
        links: [{ href: "https://www.youneedserenity.com/portfolio/t-and-u-event-signage", label: "Learn More" }],
      },
      {
        title: "Punny Bumper Stickers",
        imageSrc: "https://www.youneedserenity.com/media_1dad9c0e8a71acba977dfd85d35bdc466fc6396d1.jpg?width=750&format=jpg&optimize=medium",
        note: {
          text: "Photography courtesy of Deandre Redmon",
          href: "https://www.instagram.com/drevisualsphotography",
          label: "@drevisualsphotography",
        },
        links: [{ href: "https://www.youneedserenity.com/portfolio/serious-silly", label: "View Case Study" }],
      },
      {
        title: "Castle & Cooke Brochure",
        imageSrc: "https://www.youneedserenity.com/media_1b374ac2b7ff55ec0c05c837d000bb5549b81670d.jpg?width=750&format=jpg&optimize=medium",
        links: [{ href: "https://www.youneedserenity.com/assets/design-portfolio/homebuyersguide.pdf", label: "View Brochure" }],
      },
      {
        title: "CPMI Brochure",
        imageSrc: "https://www.youneedserenity.com/media_15965345302bc4e8dc093d905649e481dd4123393.jpg?width=750&format=jpg&optimize=medium",
        links: [{ href: "https://www.youneedserenity.com/assets/design-portfolio/cpmi-brochure.pdf", label: "View Brochure" }],
      },
      {
        title: "Logo Design on Hat",
        imageSrc: "https://www.youneedserenity.com/media_11ede964cc260f9c6cbf63236c5dcaa63bf58f700.jpg?width=750&format=jpg&optimize=medium",
        links: [{ href: "https://www.youneedserenity.com/assets/design-portfolio/joe-rockshow-logo-hat.pdf", label: "View Image", emphasis: "strong" }],
      },
      {
        title: "Logo Design & Signage",
        imageSrc: "https://www.youneedserenity.com/media_1c4d4c29d52062f4dc57ae0d710bb4aca260e657b.jpg?width=750&format=jpg&optimize=medium",
        links: [{ href: "https://www.youneedserenity.com/assets/design-portfolio/cpmi-signage.pdf", label: "View Image", emphasis: "strong" }],
      },
    ],
  },
  {
    id: "art",
    title: "Art",
    items: [
      {
        title: "Space Owl",
        imageSrc: "https://www.youneedserenity.com/media_16beef887a86a9f674da3105747abf0398f61a983.jpg?width=750&format=jpg&optimize=medium",
        links: [{ href: "https://www.youneedserenity.com/assets/design-portfolio/space-owl.pdf", label: "View Image" }],
      },
      {
        title: "Fire Owl",
        imageSrc: "https://www.youneedserenity.com/media_1bb70359714ebf14f68c3ce52fd504d36ce21568d.jpg?width=750&format=jpg&optimize=medium",
        links: [{ href: "https://www.youneedserenity.com/assets/design-portfolio/fire-owl.pdf", label: "View Image" }],
      },
      {
        title: "Pink Owl",
        imageSrc: "https://www.youneedserenity.com/media_103980bf1d9c581557ae39fd64971af7c7d5075a9.jpg?width=750&format=jpg&optimize=medium",
        links: [{ href: "https://www.youneedserenity.com/assets/design-portfolio/owl.pdf", label: "View Image" }],
      },
      {
        title: "Angry Woodland",
        imageSrc: "https://www.youneedserenity.com/media_1a60050a4e5e22e9f78bd1350054762df889a2780.jpg?width=750&format=jpg&optimize=medium",
        links: [{ href: "https://www.youneedserenity.com/assets/design-portfolio/angry-woodland.pdf", label: "View Image" }],
      },
      {
        title: "Crane",
        imageSrc: "https://www.youneedserenity.com/media_15aa2c7d33c8cf8ca24592cf6e95bfbaf53581a2e.jpg?width=750&format=jpg&optimize=medium",
        links: [{ href: "https://www.youneedserenity.com/assets/design-portfolio/crane.pdf", label: "View Image" }],
      },
      {
        title: "Magpie",
        imageSrc: "https://www.youneedserenity.com/media_17ddc560bd1ac0870f37eea1830bdd4872a26d197.jpg?width=750&format=jpg&optimize=medium",
        links: [{ href: "https://www.youneedserenity.com/assets/design-portfolio/magpie.pdf", label: "View Image" }],
      },
      {
        title: "Neon Owl",
        imageSrc: "https://www.youneedserenity.com/media_1a891fef50463675bc47b6308eafe770ac3c5835b.jpg?width=750&format=jpg&optimize=medium",
        links: [{ href: "https://www.youneedserenity.com/assets/design-portfolio/neon-owl.pdf", label: "View Image" }],
      },
      {
        title: "Winter Hummingbird",
        imageSrc: "https://www.youneedserenity.com/media_1d31e1ad71e18ec4b1a8aea49a3086676ba5c4242.jpg?width=750&format=jpg&optimize=medium",
        links: [{ href: "https://www.youneedserenity.com/assets/design-portfolio/winter-hummingbird.pdf", label: "View Image" }],
      },
      {
        title: "Colorful Bird",
        imageSrc: "https://www.youneedserenity.com/media_1de260dd7352578de382fb6046311fde5fe2c53a5.jpg?width=750&format=jpg&optimize=medium",
        links: [{ href: "https://www.youneedserenity.com/assets/design-portfolio/colorful-bird.pdf", label: "View Image" }],
      },
      {
        title: "Weird Crane",
        imageSrc: "https://www.youneedserenity.com/media_1bb5a55a3ea825df93e3b2b4f8872678f8977a990.jpg?width=750&format=jpg&optimize=medium",
        links: [{ href: "https://www.youneedserenity.com/assets/design-portfolio/weird-crane.pdf", label: "View Image" }],
      },
      {
        title: "Hummingbird",
        imageSrc: "https://www.youneedserenity.com/media_1616c6b41c3217ac4ee68ba03c481ab55cebae461.jpg?width=750&format=jpg&optimize=medium",
        links: [{ href: "https://www.youneedserenity.com/assets/design-portfolio/hummingbird-rufous.pdf", label: "View Image" }],
      },
    ],
  },
];

export default function PortfolioPage() {
  return (
    <main className="page-shell">
      {/* Intro and jump links for the portfolio gallery sections. */}
      <PageIntro
        title="Portfolio"
        titleId="portfolio"
        variant="default"
        body={
          <p>
            Where creativity meets business needs and growth: This curated collection showcases my expertise in web
            design and management, social media, print, and branding.
          </p>
        }
        links={
          <p className="portfolio-jump-links">
            <a href="#web-design-and-management">Web Design &amp; Management</a> | <a href="#social-media">Social Media</a>{" "}
            | <a href="#print--misc">Print &amp; Misc</a> | <a href="#art">Art</a>
          </p>
        }
      />

      {/* Each portfolio category is rendered through the shared gallery component. */}
      {portfolioSections.map((section) => (
        <GallerySection
          key={section.id}
          id={section.id}
          title={section.title}
          items={section.items}
          sectionClassName={section.sectionClassName}
        />
      ))}
    </main>
  );
}
