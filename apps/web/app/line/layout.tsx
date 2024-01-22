import PFContainer from "@web/components/PFContainer"

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peasy fit(LIFF) - 紀錄訓練',
}

export default function LineLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <PFContainer>{children}</PFContainer>
    </div>
  )
}
