require('dotenv/config');

module.exports = function () {
  const started = process.env.started.split('/').reverse();
  const past = new Date(...started).getTime();
  const now = new Date().getTime();

  const ms = {
    year: 31536000,
    month: 2628000,
    day: 86400,
  };

  let time_elapsed = Math.floor((now - past) / 1000);
  let years = {
    quotient: Math.floor(time_elapsed / ms.year),
    rest: time_elapsed % ms.year,
  };
  let months = {
    quotient: Math.floor(years.rest / ms.month),
    rest: years.rest % ms.month,
  };
  let days = {
    quotient: Math.floor(months.rest / ms.day),
  };

  const plural = (num, word) => `${num} ${word}${num === 1 ? '' : 's'}`;

  return `${plural(years.quotient, 'Year')}, ${plural(months.quotient,'Month')} and ${plural(days.quotient, 'Day')} since I started programming`;
};
