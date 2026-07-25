function getDocumentUrl(filename: string): string {
  return `/documents/${filename}`;
}

export const siteDocuments = {
  about: {
    resume: getDocumentUrl("serenity-forschen-resume-june-2024.pdf"),
  },
  caseStudies: {
    fileManagementSystems: getDocumentUrl("File-Management-Systems.pdf"),
  },
  portfolio: {
    angryWoodland: getDocumentUrl("portfolio-angry-woodland.pdf"),
    castleCookeHomebuyersGuide: getDocumentUrl("portfolio-castle-cooke-homebuyers-guide.pdf"),
    colorfulBird: getDocumentUrl("portfolio-colorful-bird.pdf"),
    cpmiBrochure: getDocumentUrl("portfolio-cpmi-brochure.pdf"),
    cpmiSolutionsWebsite: getDocumentUrl("portfolio-cpmi-solutions-website.pdf"),
    crEnglandPage: getDocumentUrl("portfolio-cr-england-page.pdf"),
    crEnglandRecruiting: getDocumentUrl("portfolio-cr-england-recruiting.pdf"),
    crane: getDocumentUrl("portfolio-crane.pdf"),
    fireOwl: getDocumentUrl("portfolio-fire-owl.pdf"),
    hummingbirdRufous: getDocumentUrl("portfolio-hummingbird-rufous.pdf"),
    logoDesignOnHat: getDocumentUrl("portfolio-logo-design-on-hat.pdf"),
    logoDesignSignage: getDocumentUrl("portfolio-logo-design-signage.pdf"),
    magpie: getDocumentUrl("portfolio-magpie.pdf"),
    neonOwl: getDocumentUrl("portfolio-neon-owl.pdf"),
    pinkOwl: getDocumentUrl("portfolio-pink-owl.pdf"),
    spaceOwl: getDocumentUrl("portfolio-space-owl.pdf"),
    weirdCrane: getDocumentUrl("portfolio-weird-crane.pdf"),
    winterHummingbird: getDocumentUrl("portfolio-winter-hummingbird.pdf"),
  },
};
