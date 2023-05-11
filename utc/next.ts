import type { DateOfAny, DateOfYear, DateOfMonth, DateOfDay , DateOfHour, DateOfMinute, DateUnit } from '../type.ts'
import { unit as _unit } from './unit.ts'
import { add } from './add.ts'
import { set } from './set.ts'
import { diff } from './diff.ts'

export function next(date: Date, value: DateOfAny): Date
export function next(date: Date, value: DateOfYear, unitForDiff: DateUnit): Date
export function next(date: Date, value: DateOfMonth, unitForDiff: 'months' | 'days' | 'hours' | 'minutes' | 'seconds'): Date
export function next(date: Date, value: DateOfDay, unitForDiff: 'days' | 'hours' | 'minutes' | 'seconds'): Date
export function next(date: Date, value: DateOfHour, unitForDiff: 'hours' | 'minutes' | 'seconds'): Date
export function next(date: Date, value: DateOfMinute, unitForDiff: 'minutes' | 'seconds'): Date
export function next(date: Date, value: DateOfAny, unitForDiff?: DateUnit): Date {
  let unit: DateUnit =
    'months' in value ? 'years' :
    'days' in value ? 'months' :
    'hours' in value ? 'days' :
    'minutes' in value ? 'hours' :
    'minutes'

  let unitDate = _unit(date, unit)
  let dateOfThis = set(unitDate, value)

  return diff(date, dateOfThis, unitForDiff) < 0 ? dateOfThis : set(add(unitDate, { [unit]: 1 }), value)
}