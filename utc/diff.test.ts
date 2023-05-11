import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts'
import { diff } from './diff.ts'

Deno.test('diff milliseconds', () => {
  let left = new Date(2023, 2, 18, 3, 43, 56, 678)
  let right = new Date(2023, 2, 18, 3, 43, 56, 672)
  assertEquals(diff(left, right), 6)
})

Deno.test('diff years', () => {
  let left = new Date(2023, 2, 18, 3, 43, 56, 678)
  let right = new Date(2018, 6, 27, 16, 16, 27, 672)
  assertEquals(diff(left, right, 'years'), 5)
})

Deno.test('diff months', () => {
  let left = new Date(2023, 2, 18, 3, 43, 56, 678)
  let right = new Date(2023, 6, 27, 16, 16, 27, 672)
  assertEquals(diff(left, right, 'months'), -4)
})

Deno.test('diff days', () => {
  let left = new Date(2023, 2, 18, 3, 43, 56, 678)
  let right = new Date(2023, 2, 27, 16, 16, 27, 672)
  assertEquals(diff(left, right, 'days'), -9)
})

Deno.test('diff hours', () => {
  let left = new Date(2023, 2, 18, 3, 43, 56, 678)
  let right = new Date(2023, 2, 18, 16, 16, 27, 672)
  assertEquals(diff(left, right, 'hours'), -13)
})

Deno.test('diff minutes', () => {
  let left = new Date(2023, 2, 18, 3, 43, 56, 678)
  let right = new Date(2023, 2, 18, 3, 16, 27, 672)
  assertEquals(diff(left, right, 'minutes'), 27)
})

Deno.test('diff seconds', () => {
  let left = new Date(2023, 2, 18, 3, 43, 56, 678)
  let right = new Date(2023, 2, 18, 3, 43, 27, 672)
  assertEquals(diff(left, right, 'seconds'), 29)
})