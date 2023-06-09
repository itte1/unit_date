function toLocaleDateFormat(date: Date, locales: string | string[] | undefined, options: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat(locales as string, options).format(date)
}

export function format(date: Date, format = 'YYYY-MM-DDTHH:mm:sszzz', locales?: string | string[] | undefined): string {
  return format.replace(/y{1,5}|Y{4}|M{1,4}|d{3,4}|D{1,2}|H{1,2}|h{1,4}|m{1,2}|s{1,2}|f{1,3}|z{1,3}/g, m => {
    switch (m) {
      case 'yy':
      case 'yyyy': return ('0000' + date.getFullYear()).slice(-m.length)
      case 'YYYY': return date.getFullYear() + ''
      case 'M': return date.getMonth() + 1 + ''
      case 'MM': return ('0' + (date.getMonth() + 1)).slice(-2)
      case 'MMM': return toLocaleDateFormat(date, locales, { month: 'short' })
      case 'MMMM': return toLocaleDateFormat(date, locales, { month: 'long' })
      case 'D': return date.getDate() + ''
      case 'DD': return ('0' + date.getDate()).slice(-2)
      case 'ddd': return toLocaleDateFormat(date, locales, { weekday: 'short' })
      case 'dddd': return toLocaleDateFormat(date, locales, { weekday: 'long' })
      case 'H': return date.getHours() + ''
      case 'HH': return ('0' + date.getHours()).slice(-2)
      case 'h': return (date.getHours() % 12) + ''
      case 'hh': return ('0' + date.getHours() % 12).slice(-2)
      case 'hhh': return toLocaleDateFormat(date, locales, { hour: 'numeric', hour12: true })
      case 'hhhh': return toLocaleDateFormat(date, locales, { hour: '2-digit', hour12: true })
      case 'm': return date.getMinutes() + ''
      case 'mm': return ('0' + date.getMinutes()).slice(-2)
      case 's': return date.getSeconds() + ''
      case 'ss': return ('0' + date.getSeconds()).slice(-2)
      case 'f': return (Math.floor(date.getMilliseconds() / 100) + '')
      case 'ff': return ('0' + Math.floor(date.getMilliseconds() / 10)).slice(-2)
      case 'fff': return ('00' + date.getMilliseconds()).slice(-3)
      case 'z':
      case 'zz':
      case 'zzz': {
        let offset = date.getTimezoneOffset()
        let sign = offset >= 0 ? '-' : '+'
        let value = Math.abs(date.getTimezoneOffset())
        let hours = ('0' + Math.floor(value / 60)).slice(-2)
        let minutes = ('0' + (value % 60)).slice(-2)
        return m === 'z' ? sign + hours :
          m === 'zz' ? sign + hours + minutes :
          sign + hours + ':' + minutes
      }
      default: return ''
    }
  })
}