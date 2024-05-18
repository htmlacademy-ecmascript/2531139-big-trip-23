import dayjs from "dayjs";

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizeDate(date, format){
  return  dayjs(date).format(format)
}

function getDateDif(dateFrom, dateTo) {
  const diffInMinutes = dayjs(dateTo).diff(dayjs(dateFrom), 'minute');
  const hours = Math.floor(diffInMinutes / 60);
  const minutes = diffInMinutes % 60;
  return `${hours}H ${minutes}M`;
}


export {getRandomArrayElement,humanizeDate,getDateDif};