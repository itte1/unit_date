import type { DateUnit } from '../type.ts'

export function unit(date: Date, unit?: DateUnit): Date {
  switch (unit) {
    case 'years': return new Date(Date.UTC(date.getUTCFullYear(), 0))
    case 'months': return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth()))
    case 'days': return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()))
    case 'hours': return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours()))
    case 'minutes': return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes()))
    case 'seconds': return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getSeconds()))
    default: return new Date(date)
  }
}