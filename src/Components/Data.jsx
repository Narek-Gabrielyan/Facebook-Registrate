const day = [];

for (let i = 1; i <= 31; i++) {
  day.push(i);
}

const month = [
  "янв",
  "фев",
  "мар",
  "апр",
  "мая",
  "июн",
  "июл",
  "авг",
  "сен",
  "окт",
  "ноя",
  "дек",
];

const year = [];

for (let i = new Date().getFullYear(); i > 1950; i--) {
  year.push(i);
}

export { day, month, year };
