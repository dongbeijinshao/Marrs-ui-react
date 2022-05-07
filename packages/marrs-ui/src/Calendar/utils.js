export const getToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

export const getDefaultMaxDate = () => {
  const now = getToday();
  return new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());
};

export function compareMonth(date1, date2) {
  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();

  if (year1 === year2) {
    const month1 = date1.getMonth();
    const month2 = date2.getMonth();
    return month1 === month2 ? 0 : month1 > month2 ? 1 : -1;
  }

  return year1 > year2 ? 1 : -1;
}
export function formatMonthTitle(date) {
  return `${date.getFullYear()}年${date.getMonth() + 1}月`;
}
export function getMonthEndDay(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}

export function compareDay(day1, day2) {
  const compareMonthResult = compareMonth(day1, day2);

  if (compareMonthResult === 0) {
    const date1 = day1.getDate();
    const date2 = day2.getDate();
    return date1 === date2 ? 0 : date1 > date2 ? 1 : -1;
  }

  return compareMonthResult;
}

export const cloneDate = (date) => new Date(date);

export const cloneDates = (dates) =>
  Array.isArray(dates) ? dates.map(cloneDate) : cloneDate(dates);

export function getDayByOffset(date, offset) {
  const cloned = cloneDate(date);
  cloned.setDate(cloned.getDate() + offset);
  return cloned;
}

export const getPrevDay = (date) => getDayByOffset(date, -1);
export const getNextDay = (date) => getDayByOffset(date, 1);

export function calcDateNum(date) {
  const day1 = date[0].getTime();
  const day2 = date[1].getTime();
  return (day2 - day1) / (1000 * 60 * 60 * 24) + 1;
}

export function setScrollTop(el, value) {
  if ('scrollTop' in el) {
    el.scrollTop = value;
  } else {
    el.scrollTo(el.scrollX, value);
  }
}
