import PFContainer from "@web/components/PFContainer"
import PFHeader from "@web/components/PFHeader"

export default function LineLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <PFHeader></PFHeader>
      <PFContainer>{children}</PFContainer>
    </div>
  )
}
