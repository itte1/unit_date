export type DateObject = {
  years?: number
  months?: number
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}

export type DateUnit = keyof(DateObject)

export type YearDigitDate = {
  years: number
}

export type MonthDigitDate = {
  years: number
  months: number
}

export type DayDigitDate = {
  years: number
  months: number
  days: number
}

export type HourDigitDate = {
  years: number
  months: number
  days: number
  hours: number
}

export type MinuteDigitDate = {
  years: number
  months: number
  days: number
  hours: number
  minutes: number
}

export type FullDigitDate = {
  years: number
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

export type AnyDigitDate = YearDigitDate | MonthDigitDate | DayDigitDate | HourDigitDate | MinuteDigitDate | FullDigitDate

export type DateOfYear = {
  months: number // 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  days?: number // 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31
  hours?: number
  minutes?: number
  seconds?: number
}

export type DateOfMonth = {
  days: number
  hours?: number
  minutes?: number
  seconds?: number
}

export type DateOfDay = {
  hours: number
  minutes?: number
  seconds?: number
}

export type DateOfHour = {
  minutes: number
  seconds?: number
}

export type DateOfMinute = {
  seconds: number
}

export type DateOfAny = DateOfYear | DateOfMonth | DateOfDay | DateOfHour | DateOfMinute

export function unit(date: Date, unit?: DateUnit): Date

export function diff(left: Date, right: Date, unit?: DateUnit): number

export function add(date: Date, value: DateObject, unit?: DateUnit): Date

export function get(date: Date, unit: 'years'): YearDigitDate
export function get(date: Date, unit: 'months'): MonthDigitDate
export function get(date: Date, unit: 'days'): DayDigitDate
export function get(date: Date, unit: 'hours'): HourDigitDate
export function get(date: Date, unit: 'minutes'): MinuteDigitDate
export function get(date: Date, unit: 'seconds'): FullDigitDate
export function get(date: Date): FullDigitDate

export function set(date: Date, value: DateObject, unit?: DateUnit): Date

export function next(date: Date, value: DateOfAny): Date
export function next(date: Date, value: DateOfYear, unitForDiff: DateUnit): Date
export function next(date: Date, value: DateOfMonth, unitForDiff: 'months' | 'days' | 'hours' | 'minutes' | 'seconds'): Date
export function next(date: Date, value: DateOfDay, unitForDiff: 'days' | 'hours' | 'minutes' | 'seconds'): Date
export function next(date: Date, value: DateOfHour, unitForDiff: 'hours' | 'minutes' | 'seconds'): Date
export function next(date: Date, value: DateOfMinute, unitForDiff: 'minutes' | 'seconds'): Date

export function prev(date: Date, value: DateOfAny): Date
export function prev(date: Date, value: DateOfYear, unitForDiff: DateUnit): Date
export function prev(date: Date, value: DateOfMonth, unitForDiff: 'months' | 'days' | 'hours' | 'minutes' | 'seconds'): Date
export function prev(date: Date, value: DateOfDay, unitForDiff: 'days' | 'hours' | 'minutes' | 'seconds'): Date
export function prev(date: Date, value: DateOfHour, unitForDiff: 'hours' | 'minutes' | 'seconds'): Date
export function prev(date: Date, value: DateOfMinute, unitForDiff: 'minutes' | 'seconds'): Date

export function format(date: Date, format?: string, locales?: string | string[] | undefined): string