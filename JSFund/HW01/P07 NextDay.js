function nextDay(yr,mo,da){

let date = new Date(yr, mo-1, day);

let oneDay = 24*60*60*1000;

let nextDate = new Date(date.getTime()+oneDay);

return nextDate.getFullYear()+"-"+
(nextDate.getMonth()+1)+"-"+
nextDate.getDate();

}