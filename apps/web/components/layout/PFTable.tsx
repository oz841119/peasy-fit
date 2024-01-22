import { ReactNode } from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../shadcn/ui/table"

interface PFTableProps {
  // Need to improve type safety
  data: Array<{id: string, [key: string]: any}>
  cols: Array<{ field: string, label: string }>
  slots?: {
    [key: string]: (value: any) => ReactNode
  } 
}

const Cell = (props: {value: any}) => {
  if (typeof props.value === 'object') {
    if(props.value === null) return <TableCell>{ props.value }</TableCell>
    return <TableCell>{ JSON.stringify(props.value) }</TableCell>
  }
  return <TableCell>{ props.value }</TableCell>
}

export default function PFTable<T extends string[]>(props: PFTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {
            props.cols.map(({ field, label }) => (
              <TableHead key={ field }>{ label }</TableHead>
            ))
          }
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          props.data.map(row => (
            <TableRow key={row.id}>
              {props.cols.map(({ field }) => (
                props.slots
                  ? props.slots[field]
                    ? <TableCell key={ field }> { props.slots[field](row[field]) }</TableCell>
                    : <Cell key={field} value={row[field]}></Cell>
                  : <Cell key={field} value={row[field]}></Cell>
              ))}
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  )
}