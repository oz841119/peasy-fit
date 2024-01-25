'use client'
import PFContainer from '@web/components/PFContainer'
import PFTag from '@web/components/PFTag'
import PFPagination from '@web/components/layout/PFPagination'
import PFTable from '@web/components/layout/PFTable'
import { useEffect, useState } from 'react'
export default function Record() {
  const [page, setPage] = useState(1)
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
        setTable(res.default.map((row, index) => ({...row, id: `${index}`})))
      })
  }, [])
  return (
    <main>
      <PFContainer>
        <PFPagination total={table.length} page={page} onPageChange={(_page) => setPage(_page)}></PFPagination>
        <PFTable
          data={table}
          cols={cols}
          slots={{
            tags: (value: Array<TrainingTag>) => (
              <div className='flex gap-1'>
                { value.map(({ label, id }) => <PFTag key={id}>{label}</PFTag>) }
              </div>)
          }}
        />
      </PFContainer>
    </main>
  )
}
