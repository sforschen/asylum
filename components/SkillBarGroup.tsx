type SkillItem = {
  name: string;
  percent: number;
};

type Props = {
  id: string;
  title: string;
  items: SkillItem[];
  showTitle?: boolean;
};

function getSkillRating(percent: number) {
  if (percent <= 15) return 1;
  if (percent <= 35) return 2;
  if (percent <= 55) return 3;
  if (percent <= 75) return 4;
  return 5;
}

function getSkillColor(rating: number) {
  if (rating === 1) return "var(--clr-blue)";
  if (rating === 2) return "var(--clr-red)";
  if (rating === 3) return "var(--clr-orange)";
  if (rating === 4) return "var(--clr-light-blue)";
  return "var(--clr-green)";
}

function SkillRating({ skill }: { skill: SkillItem }) {
  const rating = getSkillRating(skill.percent);

  return (
    <div
      className="k-rating"
      aria-label={`${skill.name} proficiency: ${rating} out of 5 stars`}
      title={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => {
        const starNumber = index + 1;
        const isFilled = starNumber <= rating;

        return (
          <span
            key={`${skill.name}-${starNumber}`}
            className={`k-star${isFilled ? " is-filled" : ""}${rating === 5 && starNumber === 5 ? " is-shining" : ""}`}
            style={isFilled ? { color: getSkillColor(starNumber) } : undefined}
            aria-hidden="true"
          >
            ★
          </span>
        );
      })}
    </div>
  );
}

export type { SkillItem };

export default function SkillBarGroup({ id, title, items, showTitle = true }: Props) {
  return (
    <div className="knowledge-skill-group">
      {showTitle ? <h3 id={id}>{title}</h3> : null}
      <ul className="k-list">
        {items.map((skill) => (
          <li key={`${id}-${skill.name}`} className="k-card">
            <div className="k-body">
              <strong className="k-skill-name">{skill.name}</strong>
              <SkillRating skill={skill} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
