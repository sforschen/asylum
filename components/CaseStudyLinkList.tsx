import Image, { type StaticImageData } from "next/image";

type CaseStudyLink = {
  href: string;
  label: string;
  iconSrc: string | StaticImageData;
};

type Props = {
  title?: string;
  links: CaseStudyLink[];
};

export default function CaseStudyLinkList({ title, links }: Props) {
  return (
    <div className="case-study-link-list">
      {title ? <h3>{title}</h3> : null}
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noreferrer">
              <Image className="case-study-link-list-icon" src={link.iconSrc} alt="" width={36} height={36} />
              <span>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
