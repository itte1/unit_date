import type { DateObject, DateUnit } from '../type.ts'
import { unit as _unit } from './unit.ts'

export function add(date: Date, value: DateObject, unit?: DateUnit): Date {
  let newDate = unit ? _unit(date, unit) : new Date(date)
  switch (unit) {
    default:
    case 'seconds':
      if ('seconds' in value) {
        newDate.setUTCSeconds(value.seconds as number + newDate.getSeconds())
      }
      /* falls through */
    case 'minutes':
      if ('minutes' in value) {
        newDate.setUTCMinutes(value.minutes as number + newDate.getUTCMinutes())
      }
      /* falls through */
    case 'hours':
      if ('hours' in value) {
        newDate.setUTCHours(value.hours as number + newDate.getUTCHours())
      }
      /* falls through */
    case 'days':
      if ('days' in value) {
        newDate.setUTCDate(value.days as number + newDate.getUTCDate())
      }
      /* falls through */
    case 'months':
      if ('months' in value) {
        newDate.setUTCMonth(value.months as number + newDate.getUTCMonth())
      }
      /* falls through */
    case 'years':
      if ('years' in value) {
        newDate.setUTCFullYear(value.years as number + newDate.getUTCFullYear())
      }
  }
  return newDate
}