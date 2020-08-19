const xlsx = require('xlsx');

let wb = xlsx.readFile("C:\\Users\\Danielle's Ideapad\\Javacript\\Book1.xlsx");
console.log(wb.SheetNames);
let ws = wb.Sheets['Sheet1'];
let data = xlsx.utils.sheet_to_json(ws);
console.log(data);