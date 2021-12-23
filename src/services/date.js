const months = [
  'ene',
  'feb',
  'mar',
  'abr',
  'may',
  'jun',
  'jul',
  'ago',
  'sep',
  'oct',
  'nov',
  'dic',
];

const getCurrentDate = () => {
  // Más info en https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
  const date = new Date();
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  const year = date.getFullYear();
  return `${day} ${month}. ${year}`;
};

const getCurrentTime = () => {
  const actualMoment = new Date();
  let hour = actualMoment.getHours();
  let minut = actualMoment.getMinutes();
  let second = actualMoment.getSeconds();
  const str_second = new String(second);
  if (str_second.length === 1) {
    second = '0' + second;
  }
  const str_minut = new String(minut);
  if (str_minut.length === 1) minut = '0' + minut;

  const str_hour = new String(hour);
  if (str_hour.length === 1) hour = '0' + hour;
  const completedHour = hour + ' : ' + minut + ' : ' + second;

  return completedHour;
};

const objToExport = {
  getCurrentDate: getCurrentDate,
  getCurrentTime: getCurrentTime,
};

export default objToExport;
