/**
 * @function getRelativeDateTime
 *
 * @description - a helper function that will accept a date and return a string defining the
 *                difference between the entered date and today's date in years and months.
 *
 * @param {Date} date
 *
 * @returns {string}
 */
export const getRelativeDateTime = (date: Date): string => {
  const todayDate = new Date();
  const todayMonthIndex = todayDate.getMonth();
  const todayFullYear = todayDate.getFullYear();

  const listDate = new Date(date);
  const listMonthIndex = listDate.getMonth();
  const listFullYear = listDate.getFullYear();

  const totalMonths: number =
    (todayFullYear - listFullYear) * 12 + (todayMonthIndex - listMonthIndex);

  const years: number = Math.floor(totalMonths / 12);
  const months = totalMonths - years * 12;

  const yearAppendix = years > 1 ? 'years' : 'year';
  const monthAppendix = months > 1 ? 'months' : 'month';

  const construction: (string | number)[] = [`Created`];

  if (years > 0) {
    construction.push(`${years} ${yearAppendix}`);
  }

  if (years > 0 && months > 0) {
    construction.push('and');
  }

  if (months > 0) {
    construction.push(`${months} ${monthAppendix}`);
  }

  if (years === 0 && months === 0) {
    construction.push('this month');
  }

  if (years > 0 || months > 0) {
    construction.push('ago');
  }

  return construction.join(' ');
};
