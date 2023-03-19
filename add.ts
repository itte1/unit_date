import type { DateObject, DateUnit } from './type.ts'
import { unit as _unit } from './unit.ts'

export function add(date: Date, value: DateObject, unit?: DateUnit): Date {
  let newDate = unit ? _unit(date, unit) : new Date(date)
  switch (unit) {
    default:
    case 'seconds':
      if ('seconds' in value) {
        newDate.setSeconds(value.seconds as number + newDate.getSeconds())
      }
      /* falls through */
    case 'minutes':
      if ('minutes' in value) {
        newDate.setMinutes(value.minutes as number + newDate.getMinutes())
      }
      /* falls through */
    case 'hours':
      if ('hours' in value) {
        newDate.setHours(value.hours as number + newDate.getHours())
      }
      /* falls through */
    case 'days':
      if ('days' in value) {
        newDate.setDate(value.days as number + newDate.getDate())
      }
      /* falls through */
    case 'months':
      if ('months' in value) {
        newDate.setMonth(value.months as number + newDate.getMonth())
      }
      /* falls through */
    case 'years':
      if ('years' in value) {
        newDate.setFullYear(value.years as number + newDate.getFullYear())
      }
  }
  return newDate
}