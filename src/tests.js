// const START_DATE = "2019-11-16",
//       END_DATE = "2019-11-22";
//
// let start = new Date(START_DATE),
//     end = new Date(END_DATE); end.setHours(end.getHours()+2);
//     counter = 0;
//
// console.log(start, end + "\n");
//
// for (start; start <= end; start.setHours(start.getHours() + 26)) {
//     console.log("START: ",start);
//     console.log("END: ",iterateDateJSON(start) + "\n");
// }
//
// function iterateDateJSON(dateValue) {
//     let date = new Date(dateValue);
//     // console.log(date.toISOString());
//     date.setHours(date.getHours()+26);
//     // console.log("New date plus 1 day -> " + date);
//     // console.log(date.toISOString());
//     let dateISO = date.toISOString();
//     let
//         day = dateISO.substr(8, 2),
//         month = dateISO.substr(5, 2),
//         year = dateISO.substr(0, 4);
//     let nextDay = (year + "-" + month + "-" + day);
//     // console.log("DS -> " + nextDay);
//     //
//     // console.log("UTCString: " + date.toUTCString());
//     // console.log("DateString: " + date.toDateString());
//     // console.log("Date: " + date);
//     return nextDay;
// }