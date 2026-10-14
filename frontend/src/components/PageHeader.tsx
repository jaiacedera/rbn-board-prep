export default function PageHeader({
  label,
  title,
  sub,
}: {
  label: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="page-head">
      <div className="section">
        <div className="eyebrow">{label}</div>
        <h1>{title}</h1>
        <p className="sub">{sub}</p>
      </div>
    </div>
  );
}
