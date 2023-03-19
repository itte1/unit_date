import type { DateUnit } from './type.ts'
import { unit as _unit } from './unit.ts'

export function diff(left: Date, right: Date, unit?: DateUnit): number {
  switch (unit) {
    case 'years': return left.getFullYear() - right.getFullYear()
    case 'months': return (left.getFullYear() - right.getFullYear()) * 12 + left.getMonth() - right.getMonth()
    default: {
      let millisecond = _unit(left, unit).getTime() - _unit(right, unit).getTime()
      switch (unit) {
        case 'days': return millisecond / 8.64e+7
        case 'hours': return millisecond / 3.6e+6
        case 'minutes': return millisecond / 6e+4
        case 'seconds': return millisecond / 1000
        default: return millisecond
      }
    }
  }
}