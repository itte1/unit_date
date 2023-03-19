import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts'
import { unit } from './unit.ts'

Deno.test('unit years', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 663)
  let newDate = unit(date, 'years')
  assertEquals(newDate.getTime(), new Date(2023, 0).getTime())
})

Deno.test('unit months', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 663)
  let newDate = unit(date, 'months')
  assertEquals(newDate.getTime(), new Date(2023, 2).getTime())
})

Deno.test('unit days', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 663)
  let newDate = unit(date, 'days')
  assertEquals(newDate.getTime(), new Date(2023, 2, 18).getTime())
})

Deno.test('unit hours', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 663)
  let newDate = unit(date, 'hours')
  assertEquals(newDate.getTime(), new Date(2023, 2, 18, 3).getTime())
})

Deno.test('unit minutes', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 663)
  let newDate = unit(date, 'minutes')
  assertEquals(newDate.getTime(), new Date(2023, 2, 18, 3, 43).getTime())
})

Deno.test('unit seconds', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 663)
  let newDate = unit(date, 'seconds')
  assertEquals(newDate.getTime(), new Date(2023, 2, 18, 3, 43, 56).getTime())
})

Deno.test('unit milliseconds (clone)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 663)
  let newDate = unit(date)
  assertEquals(newDate.getTime(), date.getTime())
})