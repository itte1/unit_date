import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts'
import { next } from './next.ts'

Deno.test('next minutes', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = next(date, { seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 3, 44, 4)).getTime())
})

Deno.test('next minutes', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = next(date, { seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 3, 44, 4)).getTime())
})

Deno.test('next minutes carry up', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 59, 56, 678))
  let newDate = next(date, { seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 4, 0, 4)).getTime())
})

Deno.test('next minutes same minutes', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = next(date, { seconds: 59 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 3, 43, 59)).getTime())
})

Deno.test('next minutes same minutes(unit: minutes)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = next(date, { seconds: 59 }, 'minutes')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 3, 44, 59)).getTime())
})

Deno.test('next hours', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = next(date, { minutes: 15, seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 4, 15, 4)).getTime())
})

Deno.test('next hours carry up', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 23, 43, 56, 678))
  let newDate = next(date, { minutes: 15, seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 19, 0, 15, 4)).getTime())
})

Deno.test('next hours same hours', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = next(date, { minutes: 59, seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 3, 59, 4)).getTime())
})

Deno.test('next hours same hours(unit: hours)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = next(date, { minutes: 59, seconds: 4 }, 'hours')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 4, 59, 4)).getTime())
})

Deno.test('next hours same hours(unit: minutes)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = next(date, { minutes: 59, seconds: 4 }, 'minutes')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 3, 59, 4)).getTime())
})

Deno.test('next days', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = next(date, { hours: 6, minutes: 15, seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 6, 15, 4)).getTime())
})

Deno.test('next days carry up', () => {
  let date = new Date(Date.UTC(2023, 2, 31, 23, 43, 56, 678))
  let newDate = next(date, { hours: 6, minutes: 15, seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 3, 1, 6, 15, 4)).getTime())
})

Deno.test('next days same days', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = next(date, { hours: 23, minutes: 15, seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 23, 15, 4)).getTime())
})

Deno.test('next days same days(unit: days)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = next(date, { hours: 23, minutes: 15, seconds: 4 }, 'days')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 19, 23, 15, 4)).getTime())
})

Deno.test('next days same days(unit: hours)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = next(date, { hours: 3, minutes: 59, seconds: 4 }, 'hours')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 19, 3, 59, 4)).getTime())
})

Deno.test('next months', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = next(date, { days: 10, hours: 6, minutes: 15, seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 3, 10, 6, 15, 4)).getTime())
})

Deno.test('next months same month', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = next(date, { days: 31, hours: 2, minutes: 15, seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 31, 2, 15, 4)).getTime())
})

Deno.test('next months same month(unit: months)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = next(date, { days: 31, hours: 2, minutes: 15, seconds: 4 }, 'months')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 3, 30, 2, 15, 4)).getTime())
})

Deno.test('next months same month(unit: days)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = next(date, { days: 18, hours: 7, minutes: 15, seconds: 4 }, 'days')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 3, 18, 7, 15, 4)).getTime())
})

Deno.test('next months carry up', () => {
  let date = new Date(Date.UTC(2023, 11, 31, 23, 43, 56, 678))
  let newDate = next(date, { days: 10, hours: 6, minutes: 15, seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2024, 0, 10, 6, 15, 4)).getTime())
})

Deno.test('next years', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = next(date, { months: 1, days: 10, hours: 6, minutes: 15, seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2024, 0, 10, 6, 15, 4)).getTime())
})

Deno.test('next years same years', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = next(date, { months: 5, days: 10, hours: 6, minutes: 15, seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 4, 10, 6, 15, 4)).getTime())
})

Deno.test('next years same years(unit: years)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = next(date, { months: 5, days: 10, hours: 6, minutes: 15, seconds: 4 }, 'years')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2024, 4, 10, 6, 15, 4)).getTime())
})

Deno.test('next years same years(unit: months)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = next(date, { months: 3, days: 10, hours: 6, minutes: 15, seconds: 4 }, 'months')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2024, 2, 10, 6, 15, 4)).getTime())
})