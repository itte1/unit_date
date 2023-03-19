export type DateObject = {
  years?: number
  months?: number
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}

export type DateUnit = keyof(DateObject)

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