let
    date = "2019-11-11";

function convertToDateObj(date) {
    let
        day = Number(date.substr(8, 2)),
        month = Number(date.substr(5, 2)),
        year = Number(date.substr(0, 4)),
        nextDate;

    date = new Date(year,(month-1),day);
    nextDate = new Date();
    nextDate = date.getUTCFullYear() + "-" + (date.getUTCMonth() + 1) + "-" + date.getUTCDate();
    return nextDate;
}
let i = 11;
const d = i + 6;

// for (i; i <= d; i++) {
//     console.log(convertToDateObj(date));
// }

let start = new Date("11-11-2019");
let end = new Date("17-11-2019");


// let loop = new Date(start);
// while(loop <= end){
//     console.log(loop);
//
//     let newDate = loop.setDate(loop.getDate() + 1);
//     loop = new Date(newDate);
// }
// console.log(loop);

var from = new Date(2012,0,1);
var to = new Date(2012,1,20);

// loop for every day
for (var day = from; day <= to; day.setDate(day.getDate() + 1)) {
    console.log(day)
    // your day is here
}