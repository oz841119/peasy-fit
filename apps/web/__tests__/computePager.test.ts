import {
  computedShowPagers,
  computePagerCount,
  computedStartPager
} from "@web/helper/computePager"

test('Compute Pager Count', () => {
  expect(computePagerCount(100, 20)).toBe(5)
  expect(computePagerCount(100, 21)).toBe(5)
  expect(computePagerCount(81, 20)).toBe(5)
  expect(computePagerCount(20, 20)).toBe(1)
  expect(computePagerCount(21, 20)).toBe(2)
  expect(computePagerCount(21, 10)).toBe(3)
  expect(computePagerCount(5, 10)).toBe(1)
  expect(computePagerCount(0, 10)).toBe(1)
})

test('Compute Start Pager', () => {
  expect(computedStartPager(1, 7, 5)).toBe(1)
  expect(computedStartPager(1, 5, 5)).toBe(1)
  expect(computedStartPager(20, 20, 20)).toBe(1)
  expect(computedStartPager(5, 5, 4)).toBe(2)
  expect(computedStartPager(5, 5, 3)).toBe(3)
  expect(computedStartPager(0, 56, 45)).toBe(1)
  expect(computedStartPager(34, 0, 45)).toBe(1)
  expect(computedStartPager(234, 51, 0)).toBe(1)
  expect(computedStartPager(5, 5, 5)).toEqual(1)
})

test('Compute Show Pagers', () => {
  expect(computedShowPagers(1, 10, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])
  expect(computedShowPagers(1, 5, 5)).toEqual([1, 2, 3, 4, 5])
  expect(computedShowPagers(2, 5, 5)).toEqual([1, 2, 3, 4, 5])
  expect(computedShowPagers(2, 5, 6)).toEqual([1, 2, 3, 4, 5])
  expect(computedShowPagers(5, 5, 5)).toEqual([1, 2, 3, 4, 5])
  expect(computedShowPagers(5, 5)).toEqual([1, 2, 3, 4, 5])
  expect(computedShowPagers(5, 5, 4)).toEqual([2, 3, 4, 5])
  expect(computedShowPagers(0, 5, 4)).toEqual([1, 2, 3, 4])
  expect(computedShowPagers(0, 20, 5)).toEqual([1, 2, 3, 4, 5])
  expect(computedShowPagers(1, 20, 5)).toEqual([1, 2, 3, 4, 5])
  expect(computedShowPagers(1, 20, 5)).toEqual([1, 2, 3, 4, 5])
  expect(computedShowPagers(10, 20, 5)).toEqual([8, 9, 10, 11, 12])
  expect(computedShowPagers(10, 20, 6)).toEqual([7, 8, 9, 10, 11, 12])
  expect(computedShowPagers(10, 20, 7)).toEqual([7, 8, 9, 10, 11, 12, 13])
  expect(computedShowPagers(20, 20, 5)).toEqual([16, 17, 18, 19, 20])
  expect(computedShowPagers(20, 20, 6)).toEqual([15, 16, 17, 18, 19, 20])
  expect(computedShowPagers(12, 13)).toEqual([7, 8, 9, 10, 11, 12, 13])
})