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

// utc/mod.ts
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

// utc/unit.ts
function unit(date, unit2) {
  switch (unit2) {
    case "years":
      return new Date(Date.UTC(date.getUTCFullYear(), 0));
    case "months":
      return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth()));
    case "days":
      return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
    case "hours":
      return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours()));
    case "minutes":
      return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes()));
    case "seconds":
      return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getSeconds()));
    default:
      return new Date(date);
  }
}

// utc/get.ts
function get(date, unit2) {
  let newDate = { years: date.getUTCFullYear() };
  switch (unit2) {
    default:
      newDate.seconds = date.getSeconds();
    case "minutes":
      newDate.minutes = date.getUTCMinutes();
    case "hours":
      newDate.hours = date.getUTCHours();
    case "days":
      newDate.days = date.getUTCDate();
    case "months":
      newDate.months = date.getUTCMonth() + 1;
    case "years":
  }
  return newDate;
}

// utc/set.ts
function set(date, value, unit2) {
  let newDate = unit(date, unit2);
  switch (unit2) {
    default:
    case "seconds":
      "seconds" in value && newDate.setUTCSeconds(Math.max(0, Math.min(59, value.seconds)));
    case "minutes":
      "minutes" in value && newDate.setUTCMinutes(Math.max(0, Math.min(59, value.minutes)));
    case "hours":
      "hours" in value && newDate.setUTCHours(Math.max(0, Math.min(23, value.hours)));
    case "days":
    case "months":
      "months" in value && newDate.setUTCMonth(Math.max(0, Math.min(11, value.months - 1)));
    case "years":
      "years" in value && newDate.setUTCFullYear(value.years);
  }
  if ("days" in value && ["days", "hours", "minutes", "seconds", void 0].includes(unit2)) {
    let endOfThisMonth = new Date(Date.UTC(newDate.getUTCFullYear(), newDate.getUTCMonth() + 1, 0));
    newDate.setUTCDate(Math.max(1, Math.min(value.days, endOfThisMonth.getUTCDate())));
  }
  return newDate;
}

// utc/add.ts
function add(date, value, unit2) {
  let newDate = unit2 ? unit(date, unit2) : new Date(date);
  switch (unit2) {
    default:
    case "seconds":
      if ("seconds" in value) {
        newDate.setUTCSeconds(value.seconds + newDate.getSeconds());
      }
    case "minutes":
      if ("minutes" in value) {
        newDate.setUTCMinutes(value.minutes + newDate.getUTCMinutes());
      }
    case "hours":
      if ("hours" in value) {
        newDate.setUTCHours(value.hours + newDate.getUTCHours());
      }
    case "days":
      if ("days" in value) {
        newDate.setUTCDate(value.days + newDate.getUTCDate());
      }
    case "months":
      if ("months" in value) {
        newDate.setUTCMonth(value.months + newDate.getUTCMonth());
      }
    case "years":
      if ("years" in value) {
        newDate.setUTCFullYear(value.years + newDate.getUTCFullYear());
      }
  }
  return newDate;
}

// utc/diff.ts
function diff(left, right, unit2) {
  switch (unit2) {
    case "years":
      return left.getUTCFullYear() - right.getUTCFullYear();
    case "months":
      return (left.getUTCFullYear() - right.getUTCFullYear()) * 12 + left.getUTCMonth() - right.getUTCMonth();
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

// utc/next.ts
function next(date, value, unitForDiff) {
  let unit2 = "months" in value ? "years" : "days" in value ? "months" : "hours" in value ? "days" : "minutes" in value ? "hours" : "minutes";
  let unitDate = unit(date, unit2);
  let dateOfThis = set(unitDate, value);
  return diff(date, dateOfThis, unitForDiff) < 0 ? dateOfThis : set(add(unitDate, { [unit2]: 1 }), value);
}

// utc/format.ts
function toLocaleDateFormat(date, locales, options) {
  return new Intl.DateTimeFormat(locales, options).format(date);
}
function format(date, format2 = "YYYY-MM-DDTHH:mm:ssZ", locales) {
  return format2.replace(/y{1,5}|Y{4}|M{1,4}|d{3,4}|D{1,2}|H{1,2}|h{1,4}|m{1,2}|s{1,2}|f{1,3}|z{1,3}/g, (m) => {
    switch (m) {
      case "yy":
      case "yyyy":
        return ("0000" + date.getUTCFullYear()).slice(-m.length);
      case "YYYY":
        return date.getUTCFullYear() + "";
      case "M":
        return date.getUTCMonth() + 1 + "";
      case "MM":
        return ("0" + (date.getUTCMonth() + 1)).slice(-2);
      case "MMM":
        return toLocaleDateFormat(date, locales, { month: "short", timeZone: "UTC" });
      case "MMMM":
        return toLocaleDateFormat(date, locales, { month: "long", timeZone: "UTC" });
      case "D":
        return date.getUTCDate() + "";
      case "DD":
        return ("0" + date.getUTCDate()).slice(-2);
      case "ddd":
        return toLocaleDateFormat(date, locales, { weekday: "short", timeZone: "UTC" });
      case "dddd":
        return toLocaleDateFormat(date, locales, { weekday: "long", timeZone: "UTC" });
      case "H":
        return date.getUTCHours() + "";
      case "HH":
        return ("0" + date.getUTCHours()).slice(-2);
      case "h":
        return date.getUTCHours() % 12 + "";
      case "hh":
        return ("0" + date.getUTCHours() % 12).slice(-2);
      case "hhh":
        return toLocaleDateFormat(date, locales, { hour: "numeric", hour12: true, timeZone: "UTC" });
      case "hhhh":
        return toLocaleDateFormat(date, locales, { hour: "2-digit", hour12: true, timeZone: "UTC" });
      case "m":
        return date.getUTCMinutes() + "";
      case "mm":
        return ("0" + date.getUTCMinutes()).slice(-2);
      case "s":
        return date.getSeconds() + "";
      case "ss":
        return ("0" + date.getSeconds()).slice(-2);
      case "f":
        return Math.floor(date.getUTCMilliseconds() / 100) + "";
      case "ff":
        return ("0" + Math.floor(date.getUTCMilliseconds() / 10)).slice(-2);
      case "fff":
        return ("00" + date.getUTCMilliseconds()).slice(-3);
      default:
        return "";
    }
  });
}
