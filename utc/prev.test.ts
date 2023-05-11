import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts'
import { prev } from './prev.ts'

Deno.test('prev minutes', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = prev(date, { seconds: 59 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 3, 42, 59)).getTime())
})

Deno.test('prev minutes carry down', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 0, 56, 678))
  let newDate = prev(date, { seconds: 59 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 2, 59, 59)).getTime())
})

Deno.test('prev minutes same minutes', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = prev(date, { seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 3, 43, 4)).getTime())
})

Deno.test('prev minutes same minutes(unit: minutes)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = prev(date, { seconds: 4 }, 'minutes')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 3, 42, 4)).getTime())
})

Deno.test('prev hours', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 3, 56, 678))
  let newDate = prev(date, { minutes: 15, seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 2, 15, 4)).getTime())
})

Deno.test('prev hours carry down', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 0, 3, 56, 678))
  let newDate = prev(date, { minutes: 15, seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 17, 23, 15, 4)).getTime())
})

Deno.test('prev hours same hours', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = prev(date, { minutes: 15, seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 3, 15, 4)).getTime())
})

Deno.test('prev hours same hours(unit: hours)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = prev(date, { minutes: 15, seconds: 4 }, 'hours')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 2, 15, 4)).getTime())
})

Deno.test('prev hours same hours(unit: minutes)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 3, 56, 678))
  let newDate = prev(date, { minutes: 15, seconds: 4 }, 'minutes')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 2, 15, 4)).getTime())
})

Deno.test('prev days', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = prev(date, { hours: 6, minutes: 15, seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 17, 6, 15, 4)).getTime())
})

Deno.test('prev days carry down', () => {
  let date = new Date(Date.UTC(2023, 2, 0, 23, 43, 56, 678))
  let newDate = prev(date, { hours: 6, minutes: 15, seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 1, 28, 6, 15, 4)).getTime())
})

Deno.test('prev days same days', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 23, 43, 56, 678))
  let newDate = prev(date, { hours: 6, minutes: 15, seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 6, 15, 4)).getTime())
})

Deno.test('prev days same days(unit: days)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 23, 43, 56, 678))
  let newDate = prev(date, { hours: 6, minutes: 15, seconds: 4 }, 'days')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 17, 6, 15, 4)).getTime())
})

Deno.test('prev days same days(unit: hours)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 23, 43, 56, 678))
  let newDate = prev(date, { hours: 6, minutes: 59, seconds: 4 }, 'hours')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 6, 59, 4)).getTime())
})

Deno.test('prev months', () => {
  let date = new Date(Date.UTC(2023, 2, 8, 3, 43, 56, 678))
  let newDate = prev(date, { days: 10, hours: 6, minutes: 15, seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 1, 10, 6, 15, 4)).getTime())
})

Deno.test('prev months same month', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = prev(date, { days: 10, hours: 2, minutes: 15, seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 10, 2, 15, 4)).getTime())
})

Deno.test('prev months same month(unit: months)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = prev(date, { days: 10, hours: 2, minutes: 15, seconds: 4 }, 'months')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 1, 10, 2, 15, 4)).getTime())
})

Deno.test('prev months same month(unit: days)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = prev(date, { days: 18, hours: 7, minutes: 15, seconds: 4 }, 'days')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 1, 18, 7, 15, 4)).getTime())
})

Deno.test('prev months carry down', () => {
  let date = new Date(Date.UTC(2023, 0, 3, 23, 43, 56, 678))
  let newDate = prev(date, { days: 10, hours: 6, minutes: 15, seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2022, 11, 10, 6, 15, 4)).getTime())
})

Deno.test('prev years', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = prev(date, { months: 5, days: 10, hours: 6, minutes: 15, seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2022, 4, 10, 6, 15, 4)).getTime())
})

Deno.test('prev years same years', () => {
  let date = new Date(Date.UTC(2023, 8, 18, 3, 43, 56, 678))
  let newDate = prev(date, { months: 5, days: 10, hours: 6, minutes: 15, seconds: 4 })
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 4, 10, 6, 15, 4)).getTime())
})

Deno.test('prev years same years(unit: years)', () => {
  let date = new Date(Date.UTC(2023, 8, 18, 3, 43, 56, 678))
  let newDate = prev(date, { months: 5, days: 10, hours: 6, minutes: 15, seconds: 4 }, 'years')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2022, 4, 10, 6, 15, 4)).getTime())
})

Deno.test('prev years same years(unit: months)', () => {
  let date = new Date(Date.UTC(2023, 8, 18, 3, 43, 56, 678))
  let newDate = prev(date, { months: 5, days: 10, hours: 6, minutes: 15, seconds: 4 }, 'months')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 4, 10, 6, 15, 4)).getTime())
})