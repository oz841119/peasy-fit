'use client'
import PFContainer from '@web/components/PFContainer'
import PFTag from '@web/components/PFTag'
import PFTable from '@web/components/layout/PFTable'
import { useEffect, useState } from 'react'

export default function Record() {
  const [table, setTable] = useState<Training[]>([])
  const cols: Array<{ field: keyof Training, label: string }> = [
    { field: 'id', label: 'ID' },
    { field: 'weight', label: '重量' },
    { field: 'name', label: '動作' },
    { field: 'reps', label: '次數' },
    { field: 'sets', label: '組數' },
    { field: 'tags', label: '標籤' }
  ]
  useEffect(() => {
    import('../../mock/trainings.json')
      .then((res) => {
        console.log(res.default);
        
        setTable(res.default)
      })
  }, [])
  return (
    <main>
      <PFContainer>
        <PFTable
          data={table}
          cols={cols}
          slots={{
            tags: (value: Array<TrainingTag>) => (
              <div className='flex gap-1'>
                {
                  value.map(({ label, id }) => (
                    <div className='inline-block p-1 text-xs bg-white text-black rounded' key={ id }>{ label }</div>
                  ))
                }
              </div>
            )
          }}
        />
      </PFContainer>
    </main>
  )
}
