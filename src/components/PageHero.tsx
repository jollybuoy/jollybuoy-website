export default function PageHero({
  kicker,
  title,
  body,
}: {
  kicker: string
  title: string
  body: string
}) {
  return (
    <div className="page-hero">
      <div className="shell">
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        <p className="lead">{body}</p>
      </div>
    </div>
  )
}
