import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../shadcn/ui/pagination"

import {
  computedShowPagers,
  computePagerCount
} from "@web/helper/computePager"

type Page = number
interface Props {
  total: number
  page: Page
  size?: number
  onPageChange: (page: Page) => any
}


export default function PFPagination({ total, page, size = 20, onPageChange }: Props) {
  const emitChange = (page: Page) => onPageChange(page) // #opt: page change時有(疑似)閃動的狀況
  const pageCount = computePagerCount(total, size)
  return (
    <Pagination className=" select-none">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious className={`cursor-pointer ${page === 1 && 'invisible'}`} size="sm" onClick={() => emitChange(page - 1)}/>
        </PaginationItem>
        <PaginationItem>
          {
            computedShowPagers(page, pageCount)
              .map(dispalyedPage => (
                <PaginationLink
                  key={dispalyedPage}
                  className="cursor-pointer"
                  isActive={page === dispalyedPage}
                  onClick={() => emitChange(dispalyedPage)}
                >
                  {dispalyedPage}
                </PaginationLink>
              ))
          }
        </PaginationItem>
        <PaginationItem>
          <PaginationNext className={`cursor-pointer ${page === pageCount && 'invisible'}`} size="sm" onClick={() => emitChange(page + 1)}/>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}