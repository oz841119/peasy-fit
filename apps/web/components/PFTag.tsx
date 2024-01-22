import { PropsWithChildren } from "react";

export default function PFTag({children}: PropsWithChildren) {
  return (
    <div className="inline-block">{ children }</div>
  )
}