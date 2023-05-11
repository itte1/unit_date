import { assertEquals } from 'https://deno.land/std@0.180.0/testing/asserts.ts'
import { format } from './format.ts'

Deno.test('format yy', () => {
  let date = new Date(Date.UTC(2023, 2, 5, 3, 43, 56, 678))
  let dateText = format(date, 'yy')
  assertEquals(dateText, '23')
})

Deno.test('format yyyy', () => {
  let date = new Date(Date.UTC(923, 2, 5, 3, 43, 56, 678))
  let dateText = format(date, 'yyyy')
  assertEquals(dateText, '0923')
})

Deno.test('format YYYY', () => {
  let date = new Date(Date.UTC(923, 2, 5, 3, 43, 56, 678))
  let dateText = format(date, 'YYYY')
  assertEquals(dateText, '923')
})

Deno.test('format M', () => {
  let date = new Date(Date.UTC(2023, 2, 5, 3, 43, 56, 678))
  let dateText = format(date, 'M')
  assertEquals(dateText, '3')
})

Deno.test('format MM', () => {
  let date = new Date(Date.UTC(2023, 2, 5, 3, 43, 56, 678))
  let dateText = format(date, 'MM')
  assertEquals(dateText, '03')
})

Deno.test('format MMM', () => {
  let date = new Date(Date.UTC(2023, 2, 5, 3, 43, 56, 678))
  let dateText = format(date, 'MMM')
  assertEquals(dateText, date.toLocaleDateString(undefined, { month: 'short' }))
})

Deno.test('format MMMM', () => {
  let date = new Date(Date.UTC(2023, 2, 5, 3, 43, 56, 678))
  let dateText = format(date, 'MMMM')
  assertEquals(dateText, date.toLocaleDateString(undefined, { month: 'long' }))
})

Deno.test('format D', () => {
  let date = new Date(Date.UTC(2023, 2, 5, 3, 43, 56, 678))
  let dateText = format(date, 'D')
  assertEquals(dateText, '5')
})

Deno.test('format DD', () => {
  let date = new Date(Date.UTC(2023, 2, 5, 3, 43, 56, 678))
  let dateText = format(date, 'DD')
  assertEquals(dateText, '05')
})

Deno.test('format ddd', () => {
  let date = new Date(Date.UTC(2023, 2, 5, 3, 43, 56, 678))
  let dateText = format(date, 'ddd')
  assertEquals(dateText, date.toLocaleDateString(undefined, { weekday: 'short' }))
})

Deno.test('format dddd', () => {
  let date = new Date(Date.UTC(2023, 2, 5, 3, 43, 56, 678))
  let dateText = format(date, 'dddd')
  assertEquals(dateText, date.toLocaleDateString(undefined, { weekday: 'long' }))
})

Deno.test('format H', () => {
  let date = new Date(Date.UTC(2023, 2, 5, 3, 43, 56, 678))
  let dateText = format(date, 'H')
  assertEquals(dateText, '3')
})

Deno.test('format HH', () => {
  let date = new Date(Date.UTC(2023, 2, 5, 3, 43, 56, 678))
  let dateText = format(date, 'HH')
  assertEquals(dateText, '03')
})

Deno.test('format h', () => {
  let date = new Date(Date.UTC(2023, 2, 5, 13, 43, 56, 678))
  let dateText = format(date, 'h')
  assertEquals(dateText, '1')
})

Deno.test('format hh', () => {
  let date = new Date(Date.UTC(2023, 2, 5, 13, 43, 56, 678))
  let dateText = format(date, 'hh')
  assertEquals(dateText, '01')
})

Deno.test('format m', () => {
  let date = new Date(Date.UTC(2023, 2, 5, 13, 4, 56, 678))
  let dateText = format(date, 'm')
  assertEquals(dateText, '4')
})

Deno.test('format mm', () => {
  let date = new Date(Date.UTC(2023, 2, 5, 13, 4, 56, 678))
  let dateText = format(date, 'mm')
  assertEquals(dateText, '04')
})

Deno.test('format s', () => {
  let date = new Date(Date.UTC(2023, 2, 5, 13, 43, 6, 678))
  let dateText = format(date, 's')
  assertEquals(dateText, '6')
})

Deno.test('format ss', () => {
  let date = new Date(Date.UTC(2023, 2, 5, 13, 43, 6, 678))
  let dateText = format(date, 'ss')
  assertEquals(dateText, '06')
})

Deno.test('format f', () => {
  let date = new Date(Date.UTC(2023, 2, 5, 13, 43, 6, 678))
  let dateText = format(date, 'f')
  assertEquals(dateText, '6')
})

Deno.test('format ff', () => {
  let date = new Date(Date.UTC(2023, 2, 5, 13, 43, 6, 78))
  let dateText = format(date, 'ff')
  assertEquals(dateText, '07')
})

Deno.test('format fff', () => {
  let date = new Date(Date.UTC(2023, 2, 5, 13, 43, 6, 78))
  let dateText = format(date, 'fff')
  assertEquals(dateText, '078')
})

Deno.test('format Japanese', () => {
  let date = new Date(Date.UTC(2023, 2, 5, 13, 43, 6, 678))
  let dateText = format(date, 'YYYY年MMMMDD日（ddd）hhhm分s秒', 'ja-JS')
  assertEquals(dateText, '2023年3月05日（日）午後1時43分6秒')
})