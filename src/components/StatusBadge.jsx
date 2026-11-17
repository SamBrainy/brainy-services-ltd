export default function StatusBadge({ status }) {
  if (status === "available") return null
  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-wide bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
      Coming soon
    </span>
  )
}
