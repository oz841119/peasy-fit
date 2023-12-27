export default function PFContainer ({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto px-2 md:px-0">{children}</div>
  )
}