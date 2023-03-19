import type { DateUnit } from './type.ts'

export function unit(date: Date, unit?: DateUnit): Date {
  switch (unit) {
    case 'years': return new Date(date.getFullYear(), 0)
    case 'months': return new Date(date.getFullYear(), date.getMonth())
    case 'days': return new Date(date.getFullYear(), date.getMonth(), date.getDate())
    case 'hours': return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours())
    case 'minutes': return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes())
    case 'seconds': return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())
    default: return new Date(date)
  }
}