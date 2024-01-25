import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../shadcn/ui/pagination"

type Page = number
interface Props {
  total: number
  page: Page
  size?: number
  onPageChange: (page: Page) => any
}

const computePageCount = (total: number, size: number) => Math.ceil(total / size)
const computedShowPages = (page: number, pageCount: number, maxPageCount: number = 7) => {  // #pd dynamic page count, max page and other branch
  const target = []
  if (page === 1) {
    for (let i = 1; i <= pageCount; i++) {
      target.push(i)
      if(target.length >= maxPageCount) break
    }
  } else {
    const startPage = computedStartPage(page, pageCount, maxPageCount)
    for (let i = startPage; i <= pageCount; i++) {
      target.push(i)
      if(target.length >= maxPageCount) break
    }
  }
  return target
}
const computedStartPage = (page: number, pageCount: number, maxPageCount: number = 7) => {
  const maxPageCountWithHalf = maxPageCount / 2
  if ((page - Math.floor(maxPageCountWithHalf)) <= 1) {
    return 1
  } else if (page + maxPageCountWithHalf >= pageCount) {
    return pageCount - maxPageCount
  } else {
    return page - Math.floor(maxPageCountWithHalf)
  }
}

export default function PFPagination({ total, page, size = 20, onPageChange }: Props) {
  const emitChange = (page: Page) => onPageChange(page) // #opt: page change時有(疑似)閃動的狀況
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious size="sm" href="#" />
        </PaginationItem>
        <PaginationItem>
          {
            computedShowPages(page, computePageCount(total, size))
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
        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
        <PaginationItem>
          <PaginationNext size="sm" href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}