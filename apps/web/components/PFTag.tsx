export default function PFTag({ children }: { children: React.ReactNode }) {
  return (
    <div className='inline-block p-1 text-xs bg-white text-black rounded'>{ children }</div>
  )
}