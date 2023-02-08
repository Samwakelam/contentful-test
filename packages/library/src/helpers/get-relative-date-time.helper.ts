export const getRelativeDateTime = (date: Date) => {
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

  return `Created ${years > 0 ? years : ''} ${
    years > 0 ? yearAppendix + ' and' : ''
  }  ${months > 0 ? months : 'this month'} ${
    months > 0 ? monthAppendix + ' ago' : ''
  }`;
};
