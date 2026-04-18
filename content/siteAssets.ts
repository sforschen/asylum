import type { StaticImageData } from "next/image";

import gardenFull from "./garden.jpg";
import gruntFull from "./grunt.jpg";
import snortFull from "./snort.jpg";

import aboutGardenThumb from "./site-assets/about-garden-thumb.jpeg";
import aboutPortrait from "./site-assets/about-portrait.png";
import aboutGruntThumb from "./site-assets/about-grunt-thumb.jpeg";
import aboutSnortThumb from "./site-assets/about-snort-thumb.jpeg";
import abstractPaintingBg from "./site-assets/abstract-painting-bg.jpg";
import saltairAurora from "./site-assets/saltair-aurora.jpg";
import experienceElixir from "./site-assets/experience-elixir-card.png";
import blogPostThumb from "./site-assets/social-blog-post-thumb.jpg";
import holidayPostThumb from "./site-assets/social-holiday-post-thumb.png";
import safetyMonthPostThumb from "./site-assets/social-safety-month-post-thumb.jpg";
import socialVideoPostOneThumb from "./site-assets/social-video-post-one-thumb.png";
import socialVideoPostTwoThumb from "./site-assets/social-video-post-two-thumb.png";
import eventAnnouncementThumb from "./site-assets/social-event-announcement-thumb.jpg";

import elixirWebsiteThumb from "./site-assets/portfolio-elixir-website-thumb.jpg";
import optumWebsiteThumb from "./site-assets/portfolio-optum-website-thumb.png";
import cpmiSolutionsWebsiteThumb from "./site-assets/portfolio-cpmi-solutions-website-thumb.jpg";
import crEnglandPageThumb from "./site-assets/portfolio-cr-england-page-thumb.jpg";
import crEnglandRecruitingThumb from "./site-assets/portfolio-cr-england-recruiting-thumb.jpg";
import eventMugDesignThumb from "./site-assets/portfolio-event-mug-design-thumb.jpg";
import eventMugDesignFull from "./site-assets/portfolio-event-mug-design-full.jpg";
import customerEventSignageThumb from "./site-assets/portfolio-customer-event-signage-thumb.png";
import punnyBumperStickersThumb from "./site-assets/portfolio-punny-bumper-stickers-thumb.jpg";
import castleCookeBrochureThumb from "./site-assets/portfolio-castle-cooke-brochure-thumb.jpg";
import cpmiBrochureThumb from "./site-assets/portfolio-cpmi-brochure-thumb.jpg";
import logoDesignOnHatThumb from "./site-assets/portfolio-logo-design-on-hat-thumb.jpg";
import logoDesignSignageThumb from "./site-assets/portfolio-logo-design-signage-thumb.jpg";
import spaceOwlThumb from "./site-assets/portfolio-space-owl-thumb.jpg";
import fireOwlThumb from "./site-assets/portfolio-fire-owl-thumb.jpg";
import pinkOwlThumb from "./site-assets/portfolio-pink-owl-thumb.jpg";
import angryWoodlandThumb from "./site-assets/portfolio-angry-woodland-thumb.jpg";
import craneThumb from "./site-assets/portfolio-crane-thumb.jpg";
import magpieThumb from "./site-assets/portfolio-magpie-thumb.jpg";
import neonOwlThumb from "./site-assets/portfolio-neon-owl-thumb.jpg";
import winterHummingbirdThumb from "./site-assets/portfolio-winter-hummingbird-thumb.jpg";
import colorfulBirdThumb from "./site-assets/portfolio-colorful-bird-thumb.jpg";
import weirdCraneThumb from "./site-assets/portfolio-weird-crane-thumb.jpg";
import hummingbirdThumb from "./site-assets/portfolio-hummingbird-thumb.jpg";

import elixirSiteBody from "./site-assets/case-study-elixir-body.png";
import optumSiteHero from "./site-assets/case-study-optum-hero.jpg";
import optumSiteBefore from "./site-assets/case-study-optum-before.png";
import optumSiteAfter from "./site-assets/case-study-optum-after.png";
import optumSiteRebrand from "./site-assets/case-study-optum-rebrand.png";
import seriousSillyHero from "./site-assets/case-study-serious-silly-hero.png";
import seriousSillyStripOne from "./site-assets/case-study-serious-silly-strip-one.png";
import seriousSillyStripTwo from "./site-assets/case-study-serious-silly-strip-two.png";
import seriousSillyReceptionOne from "./site-assets/case-study-serious-silly-reception-one.png";
import seriousSillyReceptionTwo from "./site-assets/case-study-serious-silly-reception-two.png";
import tAndUEntranceBanner from "./site-assets/case-study-t-and-u-entrance-banner.jpg";
import tAndUDrinkSign from "./site-assets/case-study-t-and-u-drink-sign.jpg";
import tAndUCigarSign from "./site-assets/case-study-t-and-u-cigar-sign.jpg";

type Asset = StaticImageData;

export const siteAssets: {
  about: Record<string, Asset>;
  experience: Record<string, Asset>;
  portfolio: Record<string, Asset>;
  caseStudies: Record<string, Asset>;
  social: Record<string, Asset>;
} = {
  about: {
    abstractPaintingBg,
    gardenFull,
    gardenThumb: aboutGardenThumb,
    gruntFull,
    gruntThumb: aboutGruntThumb,
    portrait: aboutPortrait,
    saltairAurora,
    snortFull,
    snortThumb: aboutSnortThumb,
  },
  experience: {
    elixir: experienceElixir,
  },
  portfolio: {
    angryWoodlandThumb,
    castleCookeBrochureThumb,
    colorfulBirdThumb,
    cpmiBrochureThumb,
    cpmiSolutionsWebsiteThumb,
    crEnglandPageThumb,
    crEnglandRecruitingThumb,
    craneThumb,
    customerEventSignageThumb,
    elixirWebsiteThumb,
    eventMugDesignFull,
    eventMugDesignThumb,
    fireOwlThumb,
    hummingbirdThumb,
    logoDesignOnHatThumb,
    logoDesignSignageThumb,
    magpieThumb,
    neonOwlThumb,
    optumWebsiteThumb,
    pinkOwlThumb,
    punnyBumperStickersThumb,
    spaceOwlThumb,
    weirdCraneThumb,
    winterHummingbirdThumb,
  },
  caseStudies: {
    elixirSiteBody,
    optumSiteAfter,
    optumSiteBefore,
    optumSiteHero,
    optumSiteRebrand,
    seriousSillyHero,
    seriousSillyReceptionOne,
    seriousSillyReceptionTwo,
    seriousSillyStripOne,
    seriousSillyStripTwo,
    tAndUCigarSign,
    tAndUDrinkSign,
    tAndUEntranceBanner,
  },
  social: {
    blogPostThumb,
    eventAnnouncementThumb,
    holidayPostThumb,
    safetyMonthPostThumb,
    socialVideoPostOneThumb,
    socialVideoPostTwoThumb,
  },
};
