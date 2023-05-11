import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts'
import { add } from './add.ts'

Deno.test('add empty value(unit: none)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, {})
  assertEquals(newDate.getTime(), date.getTime())
})

Deno.test('add plus years(unit: none)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { years: 10 })
  assertEquals(newDate.getUTCFullYear(), 2033)
})

Deno.test('add minus years(unit: none)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { years: -10 })
  assertEquals(newDate.getUTCFullYear(), 2013)
})

Deno.test('add plus months(unit: none)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { months: 5 })
  assertEquals(newDate.getUTCMonth(), 7)
})

Deno.test('add minus months(unit: none)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { months: -2 })
  assertEquals(newDate.getUTCMonth(), 0)
})

Deno.test('add plus months carry up(unit: none)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { months: 10 })
  assertEquals(newDate.getUTCMonth(), 0)
  assertEquals(newDate.getUTCFullYear(), 2024)
})

Deno.test('add minus months carry down(unit: none)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { months: -5 })
  assertEquals(newDate.getUTCMonth(), 9)
  assertEquals(newDate.getUTCFullYear(), 2022)
})

Deno.test('add plus days(unit: none)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { days: 5 })
  assertEquals(newDate.getUTCDate(), 23)
})

Deno.test('add minus days(unit: none)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { days: -2 })
  assertEquals(newDate.getUTCDate(), 16)
})

Deno.test('add plus days carry up(unit: none)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { days: 15 })
  assertEquals(newDate.getUTCDate(), 2)
  assertEquals(newDate.getUTCMonth(), 3)
})

Deno.test('add minus days carry down(unit: none)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { days: -20 })
  assertEquals(newDate.getUTCDate(), 26)
  assertEquals(newDate.getUTCMonth(), 1)
})

Deno.test('add plus hours(unit: none)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { hours: 5 })
  assertEquals(newDate.getUTCHours(), 8)
})

Deno.test('add minus hours(unit: none)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { hours: -2 })
  assertEquals(newDate.getUTCHours(), 1)
})

Deno.test('add plus hours carry up(unit: none)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { hours: 25 })
  assertEquals(newDate.getUTCHours(), 4)
  assertEquals(newDate.getUTCDate(), 19)
})

Deno.test('add minus hours carry down(unit: none)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { hours: -5 })
  assertEquals(newDate.getUTCHours(), 22)
  assertEquals(newDate.getUTCDate(), 17)
})

Deno.test('add plus minutes(unit: none)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { minutes: 5 })
  assertEquals(newDate.getUTCMinutes(), 48)
})

Deno.test('add minus minutes(unit: none)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { minutes: -30 })
  assertEquals(newDate.getUTCMinutes(), 13)
})

Deno.test('add plus minutes carry up(unit: none)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { minutes: 20 })
  assertEquals(newDate.getUTCMinutes(), 3)
  assertEquals(newDate.getUTCHours(), 4)
})

Deno.test('add minus minutes carry down(unit: none)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { minutes: -50 })
  assertEquals(newDate.getUTCMinutes(), 53)
  assertEquals(newDate.getUTCHours(), 2)
})

Deno.test('add plus seconds(unit: none)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { seconds: 3 })
  assertEquals(newDate.getSeconds(), 59)
})

Deno.test('add minus seconds(unit: none)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { seconds: -30 })
  assertEquals(newDate.getSeconds(), 26)
})

Deno.test('add plus seconds carry up(unit: none)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { seconds: 20 })
  assertEquals(newDate.getSeconds(), 16)
  assertEquals(newDate.getUTCMinutes(), 44)
})

Deno.test('add minus seconds carry down(unit: none)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { seconds: -100 })
  assertEquals(newDate.getSeconds(), 16)
  assertEquals(newDate.getUTCMinutes(), 42)
})

Deno.test('add empty value(unit: years)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, {}, 'years')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 0)).getTime())
})

Deno.test('add integer(unit: years)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { years: 10 }, 'years')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2033, 0)).getTime())
})

Deno.test('add decimals(unit: years)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { months: 10, days: 13, hours: 20, minutes: 16, seconds: 3 }, 'years')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 0)).getTime())
})

Deno.test('add empty value(unit: months)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, {}, 'months')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2)).getTime())
})

Deno.test('add integer(unit: months)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { years: 10, months: 9 }, 'months')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2033, 11)).getTime())
})

Deno.test('add decimals(unit: months)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { days: 14, hours: 20, minutes: 16, seconds: 3 }, 'months')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2)).getTime())
})

Deno.test('add empty value(unit: days)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, {}, 'days')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18)).getTime())
})

Deno.test('add integer(unit: days)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { years: 10, months: 9, days: 12 }, 'days')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2033, 11, 30)).getTime())
})

Deno.test('add decimals(unit: days)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { hours: 20, minutes: 16, seconds: 3 }, 'days')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18)).getTime())
})

Deno.test('add empty value(unit: hours)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, {}, 'hours')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 3)).getTime())
})

Deno.test('add integer(unit: hours)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { years: 10, months: 9, days: 12, hours: 20 }, 'hours')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2033, 11, 30, 23)).getTime())
})

Deno.test('add decimals(unit: hours)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { minutes: 16, seconds: 3 }, 'hours')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 3)).getTime())
})

Deno.test('add empty value(unit: minutes)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, {}, 'minutes')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 3, 43)).getTime())
})

Deno.test('add integer(unit: minutes)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { years: 10, months: 9, days: 12, hours: 20, minutes: 16 }, 'minutes')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2033, 11, 30, 23, 59)).getTime())
})

Deno.test('add decimals(unit: minutes)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { seconds: 3 }, 'minutes')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 3, 43)).getTime())
})

Deno.test('add empty value(unit: seconds)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, {}, 'seconds')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2023, 2, 18, 3, 43, 56)).getTime())
})

Deno.test('add integer(unit: seconds)', () => {
  let date = new Date(Date.UTC(2023, 2, 18, 3, 43, 56, 678))
  let newDate = add(date, { years: 10, months: 9, days: 12, hours: 20, minutes: 16, seconds: 3 }, 'seconds')
  assertEquals(newDate.getTime(), new Date(Date.UTC(2033, 11, 30, 23, 59, 59)).getTime())
})