import type { AnyDigitDate, YearDigitDate, MonthDigitDate, DayDigitDate, HourDigitDate, MinuteDigitDate, FullDigitDate, DateUnit, DateObject } from '../type.ts'

export function get(date: Date, unit: 'years'): YearDigitDate
export function get(date: Date, unit: 'months'): MonthDigitDate
export function get(date: Date, unit: 'days'): DayDigitDate
export function get(date: Date, unit: 'hours'): HourDigitDate
export function get(date: Date, unit: 'minutes'): MinuteDigitDate
export function get(date: Date, unit: 'seconds'): FullDigitDate
export function get(date: Date): FullDigitDate
export function get(date: Date, unit?: DateUnit): AnyDigitDate {
  let newDate: AnyDigitDate = { years: date.getUTCFullYear() }
  switch(unit) {
    default:
      (newDate as FullDigitDate).seconds = date.getSeconds()
    case 'minutes':
      (newDate as MinuteDigitDate | FullDigitDate).minutes = date.getUTCMinutes()
      /* falls through */
    case 'hours':
      (newDate as HourDigitDate | MinuteDigitDate | FullDigitDate).hours = date.getUTCHours()
      /* falls through */
    case 'days':
      (newDate as DayDigitDate | HourDigitDate | MinuteDigitDate | FullDigitDate).days = date.getUTCDate()
      /* falls through */
    case 'months':
      (newDate as MonthDigitDate | DayDigitDate | HourDigitDate | MinuteDigitDate | FullDigitDate).months = date.getUTCMonth() + 1
      /* falls through */
    case 'years':
  }
  return newDate
}