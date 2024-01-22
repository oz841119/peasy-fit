'use client'
import PFContainer from "@web/components/PFContainer"
import { useUserStore } from "@web/store"
import Link from "next/link"
import { useShallow } from 'zustand/react/shallow'

export const UserName = () => {
  const { name } = useUserStore(useShallow(({ name }) => ({ name })))
  const id = useUserStore.getState().id
  console.log('UserName: re-render');
  return (
    <div>{name}, {id}</div>
  )
}

export const UserId = () => {
  const { setId } = useUserStore(({ id, setId }) => ({ id, setId }))
  const id = useUserStore.getState().id
  console.log('UserId: re-render')
  return (
    <div>
      <div className="h-8">{id}</div>
      <button onClick={() => setId('ppo')}>setID</button>
    </div>
  )
}

export default function Home() {
  console.log('HOME: re-render')
  return (
    <main>
      <PFContainer>
        <UserId />
        <UserName />
        <div>
          <div>---------------------------</div>
          <div>Route:</div>
          <ul>
            <li className="underline"><Link href="/line/create-exercise">/line/create-exercise</Link></li>
            <li className="underline"><Link href="/record">/record</Link></li>
          </ul>
        </div>
      </PFContainer>
    </main>
  )
}
