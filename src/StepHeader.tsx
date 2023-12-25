export default function StepHeader({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="StepHeader">
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}
