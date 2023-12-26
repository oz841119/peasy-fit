export default function PFContainer ({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl container mx-auto">{children}</div>
  )
}