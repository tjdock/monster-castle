export const sum = (data: Array<any>, name: String) => {
  //let temp = data.filter(item => item.lv <= lv);
  return data.reduce((acc, cur) => {
    // @ts-ignore
    return acc + cur[name];
  }, 0);
}

export const covertDate = (date: Date | null | string) => {
  //console.log(date.getDate());
  if (date === null) {
    return '?';
  }
  if (date === '') {
    return '';
  }

  //todo
  // @ts-ignore
  let dates = date.getDate() === 31 ? "" : date.getDate() + 'd';
  // @ts-ignore
  let hours = date.getHours() === 0 ? "" : date.getHours() + 'h';
  // @ts-ignore
  let minutes = date.getMinutes() === 0 ? "" : date.getMinutes() + 'm';
  // @ts-ignore
  let seconds = date.getSeconds() === 0 ? "" : date.getSeconds() + 's';

  return `${dates}${hours}${minutes}${seconds}`;
}

const sumSeconds = (data: Array<any>) => {
  return data.reduce((acc, cur) => {
    // @ts-ignore
    return acc + cur.spending.getSeconds();
  }, 0);
}
const sumMinutes = (data: Array<any>) => {
  return data.reduce((acc, cur) => {
    // @ts-ignore
    return acc + cur.spending.getMinutes();
  }, 0);
}
const sumHours = (data: Array<any>) => {
  return data.reduce((acc, cur) => {
    // @ts-ignore
    return acc + cur.spending.getHours();
  }, 0);
}
const sumDays = (data: Array<any>) => {
  return data.reduce((acc, cur) => {
    // @ts-ignore
    return acc + cur.spending.getDate();
  }, 0);
}
export const sumTime = (data: Array<any>) => {
  let d = sumDays(data) - data.filter(d => d.spending.getDate() === 31).length * 31;
  let h = sumHours(data);
  let m = sumMinutes(data);
  let s = sumSeconds(data);
  console.log('d=' + d, 'h=' + h, 'm=' + m, 's=' + s);
  let newTime = new Date(0, 0, d, h, m, s);
  console.log(newTime.getMonth(), newTime.getDate(), newTime.getHours(), newTime.getMinutes(), newTime.getSeconds());


  let dates = '';
  if (newTime.getMonth() === 1) {
    dates = 31 + newTime.getDate() + 'd';
  } else if (newTime.getMonth() === 2) {
    dates = 31 + 28 + newTime.getDate() + 'd';
  } else if (newTime.getMonth() === 3) {
    dates = 31 + 31 + 28 + newTime.getDate() + 'd';
  } else if (newTime.getMonth() === 0) {
    dates = newTime.getDate() + 'd';
  }
  let hours = newTime.getHours() === 0 ? "" : newTime.getHours() + 'h';
  let minutes = newTime.getMinutes() === 0 ? "" : newTime.getMinutes() + 'm';
  let seconds = newTime.getSeconds() === 0 ? "" : newTime.getSeconds() + 's';

  console.log(`${dates}${hours}${minutes}${seconds}`);
  //return newTime;
  let timeStr = `${dates}${hours}${minutes}${seconds}`;
  if (timeStr.indexOf('s') >= 0 && timeStr.indexOf('m') >= 0) {
//todo
    let index = timeStr.indexOf('m');
    timeStr = timeStr.substring(0, index + 1);
  }
  return timeStr;
}