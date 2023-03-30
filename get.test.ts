import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts'
import { get } from './get.ts'

Deno.test('get years(unit: none)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date).years, 2023)
})

Deno.test('get months(unit: none)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date).months, 3)
})

Deno.test('get days(unit: none)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date).days, 18)
})

Deno.test('get hours(unit: none)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date).hours, 3)
})

Deno.test('get minutes(unit: none)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date).minutes, 43)
})

Deno.test('get seconds(unit: none)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date).seconds, 56)
})

Deno.test('get years(unit: seconds)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date, 'seconds').years, 2023)
})

Deno.test('get months(unit: seconds)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date, 'seconds').months, 3)
})

Deno.test('get days(unit: seconds)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date, 'seconds').days, 18)
})

Deno.test('get hours(unit: seconds)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date, 'seconds').hours, 3)
})

Deno.test('get minutes(unit: seconds)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date, 'seconds').minutes, 43)
})

Deno.test('get seconds(unit: seconds)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date, 'seconds').seconds, 56)
})

Deno.test('get years(unit: minutes)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date, 'minutes').years, 2023)
})

Deno.test('get months(unit: minutes)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date, 'minutes').months, 3)
})

Deno.test('get days(unit: minutes)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date, 'minutes').days, 18)
})

Deno.test('get hours(unit: minutes)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date, 'minutes').hours, 3)
})

Deno.test('get minutes(unit: minutes)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date, 'minutes').minutes, 43)
})

Deno.test('get years(unit: hours)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date, 'hours').years, 2023)
})

Deno.test('get months(unit: hours)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date, 'hours').months, 3)
})

Deno.test('get days(unit: hours)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date, 'hours').days, 18)
})

Deno.test('get hours(unit: hours)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date, 'hours').hours, 3)
})

Deno.test('get years(unit: days)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date, 'days').years, 2023)
})

Deno.test('get months(unit: days)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date, 'days').months, 3)
})

Deno.test('get days(unit: days)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date, 'days').days, 18)
})

Deno.test('get years(unit: months)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date, 'months').years, 2023)
})

Deno.test('get months(unit: months)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date, 'months').months, 3)
})

Deno.test('get years(unit: years)', () => {
  let date = new Date(2023, 2, 18, 3, 43, 56, 678)
  assertEquals(get(date, 'years').years, 2023)
})