import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts'
import { set } from './set.ts'

Deno.test('set empty value(unit: none)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, {})
  assertEquals(newDate.getTime(), date.getTime())
})

Deno.test('set years(unit: none)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { years: 2020 })
  assertEquals(newDate.getUTCFullYear(), 2020)
})

Deno.test('set oldest years(unit: none)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { years: 1800 })
  assertEquals(newDate.getUTCFullYear(), 1800)
})

Deno.test('set months(unit: none)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { months: 5 })
  assertEquals(newDate.getUTCMonth(), 4)
})

Deno.test('set over months(unit: none)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { months: 13 })
  assertEquals(newDate.getUTCMonth(), 11)
  assertEquals(newDate.getUTCFullYear(), 2023)
})

Deno.test('set minus months(unit: none)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { months: 0 })
  assertEquals(newDate.getUTCMonth(), 0)
  assertEquals(newDate.getUTCFullYear(), 2023)
})

Deno.test('set days(unit: none)', () => {
  let date = new Date(2023, 1, 18, 3, 43, 56, 678)
  let newDate = set(date, { days: 5 })
  assertEquals(newDate.getUTCDate(), 5)
})

Deno.test('set over days(unit: none)', () => {
  let date = new Date(2023, 1, 18, 3, 43, 56, 678)
  let newDate = set(date, { days: 31 })
  assertEquals(newDate.getUTCDate(), 28)
  assertEquals(newDate.getUTCMonth(), 1)
})

Deno.test('set minus days(unit: none)', () => {
  let date = new Date(2023, 1, 18, 3, 43, 56, 678)
  let newDate = set(date, { days: 0 })
  assertEquals(newDate.getUTCDate(), 1)
  assertEquals(newDate.getUTCMonth(), 1)
})

Deno.test('set hours(unit: none)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { hours: 14 })
  assertEquals(newDate.getUTCHours(), 14)
})

Deno.test('set over hours(unit: none)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { hours: 25 })
  assertEquals(newDate.getUTCHours(), 23)
  assertEquals(newDate.getUTCDate(), 18)
})

Deno.test('set minus hours(unit: none)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { hours: -3 })
  assertEquals(newDate.getUTCHours(), 0)
  assertEquals(newDate.getUTCDate(), 18)
})

Deno.test('set minutes(unit: none)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { minutes: 3 })
  assertEquals(newDate.getUTCMinutes(), 3)
})

Deno.test('set over minutes(unit: none)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { minutes: 100 })
  assertEquals(newDate.getUTCMinutes(), 59)
  assertEquals(newDate.getUTCHours(), 3)
})

Deno.test('set minus minutes(unit: none)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { minutes: -3 })
  assertEquals(newDate.getUTCMinutes(), 0)
  assertEquals(newDate.getUTCHours(), 3)
})

Deno.test('set seconds(unit: none)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { seconds: 3 })
  assertEquals(3, newDate.getSeconds())
})

Deno.test('set over seconds(unit: none)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { seconds: 100 })
  assertEquals(newDate.getSeconds(), 59)
  assertEquals(newDate.getUTCMinutes(), 43)
})

Deno.test('set minus seconds(unit: none)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { seconds: -3 })
  assertEquals(newDate.getSeconds(), 0)
  assertEquals(newDate.getUTCMinutes(), 43)
})

Deno.test('set empty value(unit: years)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, {}, 'years')
  assertEquals(newDate.getTime(), new Date(2023, 0).getTime())
})

Deno.test('set integer(unit: years)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { years: 2033 }, 'years')
  assertEquals(newDate.getTime(), new Date(2033, 0).getTime())
})

Deno.test('set decimals(unit: years)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { months: 5, days: 10, hours: 13, minutes: 16, seconds: 12 }, 'years')
  assertEquals(newDate.getTime(), new Date(2023, 0).getTime())
})

Deno.test('set empty value(unit: months)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, {}, 'months')
  assertEquals(newDate.getTime(), new Date(2023, 2).getTime())
})

Deno.test('set integer(unit: months)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { years: 2033, months: 4 }, 'months')
  assertEquals(newDate.getTime(), new Date(2033, 3).getTime())
})

Deno.test('set decimals(unit: months)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { days: 10, hours: 13, minutes: 16, seconds: 12 }, 'months')
  assertEquals(newDate.getTime(), new Date(2023, 2).getTime())
})

Deno.test('set empty value(unit: days)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, {}, 'days')
  assertEquals(newDate.getTime(), new Date(2023, 2, 18).getTime())
})

Deno.test('set integer(unit: days)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { years: 2033, months: 4, days: 16 }, 'days')
  assertEquals(newDate.getTime(), new Date(2033, 3, 16).getTime())
})

Deno.test('set decimals(unit: days)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { hours: 13, minutes: 16, seconds: 12 }, 'days')
  assertEquals(newDate.getTime(), new Date(2023, 2, 18).getTime())
})

Deno.test('set empty value(unit: hours)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, {}, 'hours')
  assertEquals(newDate.getTime(), new Date(2023, 2, 18, 3).getTime())
})

Deno.test('set integer(unit: hours)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { years: 2033, months: 4, days: 16, hours: 13 }, 'hours')
  assertEquals(newDate.getTime(), new Date(2033, 3, 16, 13).getTime())
})

Deno.test('set decimals(unit: hours)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { minutes: 16, seconds: 12 }, 'hours')
  assertEquals(newDate.getTime(), new Date(2023, 2, 18, 3).getTime())
})

Deno.test('set empty value(unit: minutes)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, {}, 'minutes')
  assertEquals(newDate.getTime(), new Date(2023, 2, 18, 3, 43).getTime())
})

Deno.test('set integer(unit: minutes)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { years: 2033, months: 4, days: 16, hours: 13, minutes: 16 }, 'minutes')
  assertEquals(newDate.getTime(), new Date(2033, 3, 16, 13, 16).getTime())
})

Deno.test('set empty value(unit: seconds)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, {}, 'seconds')
  assertEquals(newDate.getTime(), new Date(2023, 2, 18, 3, 43, 56).getTime())
})

Deno.test('set integer(unit: seconds)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  let newDate = set(date, { years: 2033, months: 4, days: 16, hours: 13, minutes: 16, seconds: 12 }, 'seconds')
  assertEquals(newDate.getTime(), new Date(2033, 3, 16, 13, 16, 12).getTime())
})