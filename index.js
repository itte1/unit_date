var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// mod.ts
var mod_exports = {};
__export(mod_exports, {
  add: () => add,
  diff: () => diff,
  format: () => format,
  get: () => get,
  next: () => next,
  set: () => set,
  unit: () => unit
});
module.exports = __toCommonJS(mod_exports);

// unit.ts
function unit(date, unit2) {
  switch (unit2) {
    case "years":
      return new Date(date.getFullYear(), 0);
    case "months":
      return new Date(date.getFullYear(), date.getMonth());
    case "days":
      return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    case "hours":
      return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours());
    case "minutes":
      return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes());
    case "seconds":
      return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
    default:
      return new Date(date);
  }
}

// get.ts
function get(date, unit2) {
  let newDate = { years: date.getFullYear() };
  switch (unit2) {
    default:
      newDate.seconds = date.getSeconds();
    case "minutes":
      newDate.minutes = date.getMinutes();
    case "hours":
      newDate.hours = date.getHours();
    case "days":
      newDate.days = date.getDate();
    case "months":
      newDate.months = date.getMonth() + 1;
    case "years":
  }
  return newDate;
}

// set.ts
function set(date, value, unit2) {
  let newDate = unit(date, unit2);
  let days = "days" in value && ["days", "hours", "minutes", "seconds", void 0].includes(unit2) ? value.days : "months" in value || "years" in value ? newDate.getDate() : null;
  if (days !== null) {
    newDate.setDate(1);
  }
  switch (unit2) {
    default:
    case "seconds":
      "seconds" in value && newDate.setSeconds(Math.max(0, Math.min(59, value.seconds)));
    case "minutes":
      "minutes" in value && newDate.setMinutes(Math.max(0, Math.min(59, value.minutes)));
    case "hours":
      "hours" in value && newDate.setHours(Math.max(0, Math.min(23, value.hours)));
    case "days":
    case "months":
      "months" in value && newDate.setMonth(Math.max(0, Math.min(11, value.months - 1)));
    case "years":
      "years" in value && newDate.setFullYear(value.years);
  }
  if (days !== null) {
    let endOfThisMonth = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0);
    newDate.setDate(Math.max(1, Math.min(days, endOfThisMonth.getDate())));
  }
  return newDate;
}

// add.ts
function add(date, value, unit2) {
  let newDate = unit2 ? unit(date, unit2) : new Date(date);
  switch (unit2) {
    default:
    case "seconds":
      if ("seconds" in value) {
        newDate.setSeconds(value.seconds + newDate.getSeconds());
      }
    case "minutes":
      if ("minutes" in value) {
        newDate.setMinutes(value.minutes + newDate.getMinutes());
      }
    case "hours":
      if ("hours" in value) {
        newDate.setHours(value.hours + newDate.getHours());
      }
    case "days":
      if ("days" in value) {
        newDate.setDate(value.days + newDate.getDate());
      }
    case "months":
      if ("months" in value) {
        newDate.setMonth(value.months + newDate.getMonth());
      }
    case "years":
      if ("years" in value) {
        newDate.setFullYear(value.years + newDate.getFullYear());
      }
  }
  return newDate;
}

// diff.ts
function diff(left, right, unit2) {
  switch (unit2) {
    case "years":
      return left.getFullYear() - right.getFullYear();
    case "months":
      return (left.getFullYear() - right.getFullYear()) * 12 + left.getMonth() - right.getMonth();
    default: {
      let millisecond = unit(left, unit2).getTime() - unit(right, unit2).getTime();
      switch (unit2) {
        case "days":
          return millisecond / 864e5;
        case "hours":
          return millisecond / 36e5;
        case "minutes":
          return millisecond / 6e4;
        case "seconds":
          return millisecond / 1e3;
        default:
          return millisecond;
      }
    }
  }
}

// next.ts
function next(date, value, unitForDiff) {
  let unit2 = "months" in value ? "years" : "days" in value ? "months" : "hours" in value ? "days" : "minutes" in value ? "hours" : "minutes";
  let unitDate = unit(date, unit2);
  let dateOfThis = set(unitDate, value);
  return diff(date, dateOfThis, unitForDiff) < 0 ? dateOfThis : set(add(unitDate, { [unit2]: 1 }), value);
}

// format.ts
function toLocaleDateFormat(date, locales, options) {
  return new Intl.DateTimeFormat(locales, options).format(date);
}
function format(date, format2 = "YYYY-MM-DDTHH:mm:sszzz", locales) {
  return format2.replace(/y{1,5}|Y{4}|M{1,4}|d{3,4}|D{1,2}|H{1,2}|h{1,4}|m{1,2}|s{1,2}|f{1,3}|z{1,3}/g, (m) => {
    switch (m) {
      case "yy":
      case "yyyy":
        return ("0000" + date.getFullYear()).slice(-m.length);
      case "YYYY":
        return date.getFullYear() + "";
      case "M":
        return date.getMonth() + 1 + "";
      case "MM":
        return ("0" + (date.getMonth() + 1)).slice(-2);
      case "MMM":
        return toLocaleDateFormat(date, locales, { month: "short" });
      case "MMMM":
        return toLocaleDateFormat(date, locales, { month: "long" });
      case "D":
        return date.getDate() + "";
      case "DD":
        return ("0" + date.getDate()).slice(-2);
      case "ddd":
        return toLocaleDateFormat(date, locales, { weekday: "short" });
      case "dddd":
        return toLocaleDateFormat(date, locales, { weekday: "long" });
      case "H":
        return date.getHours() + "";
      case "HH":
        return ("0" + date.getHours()).slice(-2);
      case "h":
        return date.getHours() % 12 + "";
      case "hh":
        return ("0" + date.getHours() % 12).slice(-2);
      case "hhh":
        return toLocaleDateFormat(date, locales, { hour: "numeric", hour12: true });
      case "hhhh":
        return toLocaleDateFormat(date, locales, { hour: "2-digit", hour12: true });
      case "m":
        return date.getMinutes() + "";
      case "mm":
        return ("0" + date.getMinutes()).slice(-2);
      case "s":
        return date.getSeconds() + "";
      case "ss":
        return ("0" + date.getSeconds()).slice(-2);
      case "f":
        return Math.floor(date.getMilliseconds() / 100) + "";
      case "ff":
        return ("0" + Math.floor(date.getMilliseconds() / 10)).slice(-2);
      case "fff":
        return ("00" + date.getMilliseconds()).slice(-3);
      case "z":
      case "zz":
      case "zzz": {
        let offset = date.getTimezoneOffset();
        let sign = offset >= 0 ? "-" : "+";
        let value = Math.abs(date.getTimezoneOffset());
        let hours = ("0" + Math.floor(value / 60)).slice(-2);
        let minutes = ("0" + value % 60).slice(-2);
        return m === "z" ? sign + hours : m === "zz" ? sign + hours + minutes : sign + hours + ":" + minutes;
      }
      default:
        return "";
    }
  });
}
