type Props = {
  title: string;
  description: string;
};

export default function ProjectCard({ title, description }: Props) {
  return (
    <div className="border p-6 rounded-xl hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}