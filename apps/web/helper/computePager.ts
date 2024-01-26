// # 計算頁碼
// ## Page: 當前頁
// ## Pager: 頁碼
// 計算分頁中該顯示的第一個Pager
export const computedStartPager = (page: number, pagerCount: number, maxPagerCount: number = 7) => {
  if(page === 0 || pagerCount === 0 || maxPagerCount === 0) return 1
  const isLastPage = page === pagerCount
  if (isLastPage) {
    if (maxPagerCount <= pagerCount) return pagerCount - maxPagerCount + 1
    return 1
  }
  const maxPagerCountWithHalf = maxPagerCount / 2
  if ((page - Math.floor(maxPagerCountWithHalf)) <= 1) {
    return 1
  } else if (page + maxPagerCountWithHalf >= pagerCount) {
    return pagerCount - maxPagerCount + 1
  } else {
    return page - Math.floor(maxPagerCountWithHalf)
  }
}
export const computePagerCount = (total: number, size: number) => total === 0 ? 1 : Math.ceil(total / size)
export const computedShowPagers = (page: number, pagerCount: number, maxPageCount: number = 7) => {
  const target = []
  if (page === 1 || page === 0) {
    for (let i = 1; i <= pagerCount; i++) {
      target.push(i)
      if (target.length >= maxPageCount) break
    }
  } else {
    const startPage = computedStartPager(page, pagerCount, maxPageCount)
    for (let i = startPage; i <= pagerCount; i++) {
      target.push(i)
      if(target.length >= maxPageCount) break
    }
  }
  return target
}