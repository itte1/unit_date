# unit_date

A unit base date library for Node.js, Deno and Browser.

# Usage

## npm

```sh
npm i unit_date
```

```js
let { unit, ... } = require('unit_date')
```

## deno

```ts
import { unit, ... } from 'https://deno.land/x/unit_date@0.3.0/mod.ts'
```

## cdn

```ts
import { unit, ... } from 'https://cdn.jsdelivr.net/npm/unit_date@0.3.0/unit_date.js'
```

# Unit

A unit means the smallest unit of date.

| Unit | Example |
| --- | --- |
| years | 2023 |
| months | 2023-04 |
| days | 2023-04-12 |
| hours | 2023-04-12 13 |
| minutes | 2023-04-12 13:20 |
| seconds | 2023-04-12 13:20:45 |

If the units lower than unit of the Date objects are different, `unit_date` treats them as the same even .

# Functions

## `unit()`

```js
let date = new Date('2023-04-10 13:20:45.364')

unit(date, 'years')   // => 2023-01-01 00:00:00.000
unit(date, 'months')  // => 2023-04-01 00:00:00.000
unit(date, 'days')    // => 2023-04-12 00:00:00.000
unit(date, 'hours')   // => 2023-04-12 13:00:00.000
unit(date, 'minutes') // => 2023-04-12 13:20:00.000
unit(date, 'seconds') // => 2023-04-12 13:20:45.000
unit(date)            // => 2023-04-12 13:20:45.364 (clone)

```

## `diff()`

```js
let left = new Date('2023-04-12 13:20:45.364')
let right = new Date('2022-04-12 13:20:45.364')

diff(left, right, 'years')   // => 1
diff(left, right, 'months')  // => 12
diff(left, right, 'days')    // => 365
diff(left, right, 'hours')   // => 8,760 (=365*24)
diff(left, right, 'minutes') // => 525,600 (=365*24*60)
diff(left, right, 'seconds') // => 31,536,000 (=365*24*60*60)
diff(left, right)            // => 31,536,000,000 (=365*24*60*60*1000)
```

## `get()`

```js
let date = new Date('2023-04-10 13:20:45.364')

get(date).years   // => 2023
get(date).months  // => 4
get(date).days    // => 10
get(date).hours   // => 13
get(date).minutes // => 20
get(date).seconds // => 45
```

## `set()`

```js
let date = new Date('2023-04-10 13:20:45.364')

let value = {
  years: 2010,
  months: 10,
  days: 10,
  hours: 10,
  minutes: 10,
  seconds: 10,
}

set(date, value, 'years')   // => 2010-01-01 00:00:00.000
set(date, value, 'months')  // => 2010-10-01 00:00:00.000
set(date, value, 'days')    // => 2010-10-10 00:00:00.000
set(date, value, 'hours')   // => 2010-10-10 10:00:00.000
set(date, value, 'minutes') // => 2010-10-10 10:10:00.000
set(date, value, 'seconds') // => 2010-10-10 10:10:10.000
set(date, value)            // => 2010-10-10 10:10:10.364
```

No carry up.

```js
let date = new Date('2023-04-10 13:20:45.364')
set(date, { days: 31 }) // => 2023-04-30 13:20:45.364
```

## `add()`

```js
let date = new Date('2023-04-10 13:20:45.364')

let value = {
  years: 10,
  months: 10,
  days: 10,
  hours: 10,
  minutes: 10,
  seconds: 10,
}

add(date, value, 'years')   // => 2033-01-01 00:00:00.000
add(date, value, 'months')  // => 2034-02-01 00:00:00.000
add(date, value, 'days')    // => 2034-02-20 00:00:00.000
add(date, value, 'hours')   // => 2034-02-20 23:00:00.000
add(date, value, 'minutes') // => 2034-02-20 23:30:00.000
add(date, value, 'seconds') // => 2034-02-20 23:30:55.000
add(date, value)            // => 2034-02-20 23:30:55.364
```

## `next()`

```js
let date = new Date('2023-04-10 13:20:45.364')

next(date, { days: 5 })            // => 2023-05-05 00:00:00.000
next(date, { days: 5, hours: 9 })  // => 2023-05-05 09:00:00.000
next(date, { days: 15 })           // => 2023-04-15 00:00:00.000
next(date, { days: 15 }, 'months') // => 2023-05-15 00:00:00.000
```

## `prev()`

```js
let date = new Date('2023-04-10 13:20:45.364')

prev(date, { days: 15 })           // => 2023-03-15 00:00:00.000
prev(date, { days: 15, hours: 9 }) // => 2023-03-15 09:00:00.000
prev(date, { days: 5 })            // => 2023-04-05 00:00:00.000
prev(date, { days: 5 }, 'months')  // => 2023-03-05 00:00:00.000
```

## `format()`

```js
let date = new Date('2023-04-05 13:02:01.064')

format(date) // => 2023-04-10T13:20:45+09:00, etc. (ISO 8601 has time offsets)

format(date, 'yy')   // => 23   (2-digit)
format(date, 'yyyy') // => 2023 (4-digit)
format(date, 'YYYY') // => 2023 (full)
format(date, 'M')    // => 4    (numeric)
format(date, 'MM')   // => 04   (2-digit)
format(date, 'MMM')  // => Apr, 4月, etc.
format(date, 'MMMM') // => April, 4月, etc.
format(date, 'D')    // => 5    (numeric)
format(date, 'DD')   // => 05   (2-digit)
format(date, 'ddd')  // => Mon, 月, etc.
format(date, 'dddd') // => Monday, 月曜日, etc.
format(date, 'H')    // => 13   (numeric)
format(date, 'HH')   // => 13   (2-digit)
format(date, 'h')    // => 1    (numeric)
format(date, 'hh')   // => 01   (2-digit)
format(date, 'hhh')  // => 1 PM, 午後1時, etc.
format(date, 'hhhh') // => 01 PM, 午後01時, etc.
format(date, 'm')    // => 2    (numeric)
format(date, 'mm')   // => 02   (2-digit)
format(date, 's')    // => 1    (numeric)
format(date, 'ss')   // => 01   (2-digit)
format(date, 'f')    // => 0    (1-digit)
format(date, 'ff')   // => 06   (2-digit)
format(date, 'fff')  // => 064  (3-digit)
format(date, 'z')    // => +09
format(date, 'zz')   // => +0900
format(date, 'zzz')  // => +09:00

format(date, 'ddd', 'en-US')  // => Mon
format(date, 'ddd', 'ja-JP')  // => 月
```

# UTC

Import UTC functions.

## npm

```js
let { unit, ... } = require('unit_date/utc')
```

## deno

```ts
import { unit, ... } from 'https://deno.land/x/unit_date@0.3.0/utc/mod.ts'
```

## cdn

```ts
import { unit, ... } from 'https://cdn.jsdelivr.net/npm/unit_date@0.3.0/utc/unit_date.js'
```
