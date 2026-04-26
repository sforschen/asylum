import type { CaseStudyPost } from "../types";
import { siteAssets } from "../../../content/siteAssets";

export const optumCeCampaignCaseStudy: CaseStudyPost = {
  slug: "optum-ce-campaign",
  title: "Building a consistent campaign system for Optum Continuing Education",
  category: "Campaign Systems & Content",
  publishedAt: "2021-06-15",
  readTime: "5 min read",
  summary:
    "Partnered with the Continuing Education Program manager to create a consistent multi-channel webinar campaign that increased attendance by 30% in one year.",
  imageSrc: siteAssets.caseStudies.optumCeSocialThirtyDays,
  imageAlt: "Optum Continuing Education social campaign preview",
  portfolioTitle: "Optum Continuing Education Campaign",
  portfolioSectionId: "web-design-and-management",
  metrics: [
    { label: "Attendance growth", value: "+30%" },
    { label: "Campaign cadence", value: "30 days to post-event" },
    { label: "Channels", value: "Web + email + social" },
  ],
  sections: [
    {
      title: "Challenge",
      paragraphs: [
        "Working with the Continuing Education Program manager, I created a campaign system to advertise each course throughout the year across social media, the website, and email.",
        "Each course needed fresh imagery and relevant details, but the larger system also needed to stay recognizable so repeat users could immediately identify Optum Continuing Education content.",
      ],
      bullets: [
        "Support recurring webinar promotion without reinventing the process every month.",
        "Keep branding and layout consistent across multiple channels.",
        "Make registration, reminders, and follow-up communication feel coordinated from start to finish.",
      ],
      sectionClassName: "highlight",
    },
    {
      title: "30 Days Before the Event",
      paragraphs: [
        "The campaign opened with broad awareness materials designed to introduce the upcoming course and drive early registration.",
        "This phase included social promotion, a homepage carousel placement, a course listing on the education page, the registration page, and the initial confirmation email for registrants.",
      ],
      bullets: [
        "Social promotion to create early visibility.",
        "Homepage carousel placement for site-wide reach.",
        "Education-page placement to support browsing behavior.",
        "Registration flow and confirmation email to capture and reassure attendees.",
      ],
      images: [
        {
          src: siteAssets.caseStudies.optumCeSocialThirtyDays,
          alt: "Optum CE social promotion 30 days before the event",
          caption: "Early social promotion introduced the course and created initial awareness.",
        },
        {
          src: siteAssets.caseStudies.optumCeHomepageCarousel,
          alt: "Optum CE homepage carousel placement",
          caption: "Homepage carousel placement extended visibility beyond the education section.",
        },
        {
          src: siteAssets.caseStudies.optumCeEducationPage,
          alt: "Optum CE course linked on the education page",
          caption: "Course placement on the education page supported browsing and discovery.",
        },
        {
          src: siteAssets.caseStudies.optumCeRegistrationPage,
          alt: "Optum CE registration page",
          caption: "The registration page carried the same campaign structure into conversion.",
        },
        {
          src: siteAssets.caseStudies.optumCeRegistrationEmail,
          alt: "Optum CE registration confirmation email",
          caption: "Registrant confirmation email completed the first stage of the campaign.",
        },
      ],
      imagesLayout: "masonry-two-column",
      sectionClassName: "highlight-white-center",
    },
    {
      title: "2 Weeks Before the Event",
      paragraphs: [
        "Mid-campaign promotion reinforced the event without changing the system. The structure stayed familiar while the timing and message shifted toward active consideration.",
        "That consistency made the content easier to recognize and reduced friction for repeat participants moving from awareness to registration.",
      ],
      bullets: [
        "Refreshed social promotion timed to the mid-campaign window.",
        "Maintained a consistent layout system for recognition and efficiency.",
      ],
      images: [
        {
          src: siteAssets.caseStudies.optumCeSocialTwoWeeks,
          alt: "Optum CE social promotion two weeks before the event",
          caption: "Mid-campaign promotion reinforced the event without breaking visual consistency.",
        },
      ],
      imagesLayout: "masonry-two-column",
      sectionClassName: "highlight-light-green",
    },
    {
      title: "Day Before the Event",
      paragraphs: [
        "The day-before touchpoints focused on urgency and attendance. Messaging shifted from general promotion to action-oriented reminders.",
        "This stage included a final social post, a weekly webinar email, and a last-chance registration message for those who had not yet committed.",
      ],
      bullets: [
        "Final social reminder.",
        "This week's webinar email.",
        "Last-chance registration email.",
      ],
      images: [
        {
          src: siteAssets.caseStudies.optumCeSocialDayBefore,
          alt: "Optum CE social promotion the day before the event",
        },
        {
          src: siteAssets.caseStudies.optumCeWeeklyEmail,
          alt: "Optum CE this week's webinar email",
        },
        {
          src: siteAssets.caseStudies.optumCeLastChanceEmail,
          alt: "Optum CE last chance to register email",
        },
      ],
      imagesLayout: "masonry-two-column",
      sectionClassName: "highlight-white-center",
    },
    {
      title: "Day of Event",
      paragraphs: [
        "Day-of materials helped connect registrants to the live experience and keep the event environment aligned with the rest of the campaign.",
        "The system extended into the event console and a same-day webinar reminder email so the final touchpoints felt like part of the same coordinated experience.",
      ],
      bullets: [
        "Branded event console support.",
        "Day-of webinar reminder email.",
      ],
      images: [
        {
          src: siteAssets.caseStudies.optumCeEventConsole,
          alt: "Optum CE event console",
        },
        {
          src: siteAssets.caseStudies.optumCeTodayEmail,
          alt: "Optum CE today's webinar email",
        },
      ],
      imagesLayout: "masonry-two-column",
      firstImageFullWidth: true,
      sectionClassName: "highlight-light-green",
    },
    {
      title: "Day After the Event",
      paragraphs: [
        "Follow-up communication closed the loop for both attendees and no-shows while extending the value of the event through on-demand access.",
        "This phase included social promotion, the webinar on-demand page, a 'sorry we missed you' email, and a thank-you email for attendees.",
      ],
      bullets: [
        "Post-event social promotion.",
        "On-demand webinar page support.",
        "No-show follow-up email.",
        "Thank-you email for attendees.",
      ],
      images: [
        {
          src: siteAssets.caseStudies.optumCeSocialDayAfter,
          alt: "Optum CE post-event social promotion",
        },
        {
          src: siteAssets.caseStudies.optumCeOnDemandPage,
          alt: "Optum CE webinar on-demand page",
        },
        {
          src: siteAssets.caseStudies.optumCeSorryMissedYouEmail,
          alt: "Optum CE sorry we missed you email",
        },
        {
          src: siteAssets.caseStudies.optumCeThankYouEmail,
          alt: "Optum CE thank you for joining email",
        },
      ],
      imagesLayout: "masonry-two-column",
      sectionClassName: "highlight",
    },
    {
      title: "Outcome",
      paragraphs: [
        "The strongest result was not a single asset, but the campaign system itself. A consistent structure made it easier to plan, produce, and launch each course promotion throughout the year.",
        "Consistent communication and design helped increase webinar attendance by 30% in one year while making the program easier for repeat users to recognize and engage with.",
      ],
      sectionClassName: "highlight-light-green",
    },
  ],
};
