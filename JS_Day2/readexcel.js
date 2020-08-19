var xlsx = require('xlsx');

let wb = xlsx.readFile("C:\\Users\\Danielle's Ideapad\\Javacript\\Book1.xlsx");

let ws = wb.Sheets['Sheet1'];

// when console.log(ws);  details including references of each cell will be described and printed in array.

let data = xlsx.utils.sheet_to_json(ws); //Changing sheet data to json format. 
//console.log(data);

//data.map() modifies the data in excel. 

let newData = data.map(function(object){
    object.hrsLeft = object.Goal - object.hrsRan;
    delete object.Age;
    return object;
});

console.log(newData);

//to add a new sheet into existing .xlsx
let ws_name = "Sheet2";
wb.SheetNames.push(ws_name);
let newWS = xlsx.utils.json_to_sheet(newData);
wb.Sheets[ws_name] = newWS;
xlsx.writeFile(wb, "C:\\Users\\Danielle's Ideapad\\Javacript\\Book1.xlsx");

/*To create a new xlsx
let newWB = xlsx.utils.book_new();
let newWS = xlsx.utils.json_to_sheet(newData);
xlsx.utils.book_append_sheet(newWB, newWS, "Sheet1");
xlsx.writeFile(newWB, "writeExcel.xlsx")
*/
