import type { DateObject, DateUnit } from './type.ts'
import { unit as _unit } from './unit.ts'

export function set(date: Date, value: DateObject, unit?: DateUnit): Date {
  let newDate = _unit(date, unit)
  let days =
    ('days' in value && ['days', 'hours', 'minutes', 'seconds', undefined].includes(unit)) ? value.days as number :
    ('months' in value || 'years' in value) ? newDate.getDate() :
    null
  if (days !== null) {
    newDate.setDate(1)
  }
  switch (unit) {
    default:
    case 'seconds':
      'seconds' in value && newDate.setSeconds(Math.max(0, Math.min(59, value.seconds as number)))
      /* falls through */
    case 'minutes':
      'minutes' in value && newDate.setMinutes(Math.max(0, Math.min(59, value.minutes as number)))
      /* falls through */
    case 'hours':
      'hours' in value && newDate.setHours(Math.max(0, Math.min(23, value.hours as number)))
      /* falls through */
    case 'days':
    case 'months':
      'months' in value && newDate.setMonth(Math.max(0, Math.min(11, value.months as number - 1)))
      /* falls through */
    case 'years':
      'years' in value && newDate.setFullYear(value.years as number)
  }
  if (days !== null) {
    let endOfThisMonth = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0)
    newDate.setDate(Math.max(1, Math.min(days as number, endOfThisMonth.getDate()))) // 翌月の〇日
  }

  return newDate
}