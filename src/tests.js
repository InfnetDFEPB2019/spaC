let
    date = "2019-11-11";

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
    console.log(convertToDateObj(day))
    // your day is here
}

function convertToDateObj(value) {
    let
        day = Number(String(value.substr(8, 2))),
        month = Number(String(value.substr(5, 2))),
        year = Number(String(value.substr(0, 4)));

    value = new Date(year,month,day);
    //2015-09-08 / date = new Date(year,month,day);
    value = Date.UTC(value.getFullYear(),value.getMonth(),value.getTime());
    // date = date.getFullYear() + date.getMonth() + date.getTime();
    return value;
}