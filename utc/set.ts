import type { DateObject, DateUnit } from '../type.ts'
import { unit as _unit } from './unit.ts'

export function set(date: Date, value: DateObject, unit?: DateUnit): Date {
  let newDate = _unit(date, unit)
  switch (unit) {
    default:
    case 'seconds':
      'seconds' in value && newDate.setUTCSeconds(Math.max(0, Math.min(59, value.seconds as number)))
      /* falls through */
    case 'minutes':
      'minutes' in value && newDate.setUTCMinutes(Math.max(0, Math.min(59, value.minutes as number)))
      /* falls through */
    case 'hours':
      'hours' in value && newDate.setUTCHours(Math.max(0, Math.min(23, value.hours as number)))
      /* falls through */
    case 'days':
    case 'months':
      'months' in value && newDate.setUTCMonth(Math.max(0, Math.min(11, value.months as number - 1)))
      /* falls through */
    case 'years':
      'years' in value && newDate.setUTCFullYear(value.years as number)
  }
  if ('days' in value && ['days', 'hours', 'minutes', 'seconds', undefined].includes(unit)) {
    let endOfThisMonth = new Date(Date.UTC(newDate.getUTCFullYear(), newDate.getUTCMonth() + 1, 0))
    newDate.setUTCDate(Math.max(1, Math.min(value.days as number, endOfThisMonth.getUTCDate()))) // 翌月の〇日
  }

  return newDate
}