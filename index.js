const readXlsxFile = require('read-excel-file/node');
const fs = require('fs');

readXlsxFile("./beer_data.xlsx").then((rows) => {
    console.log(rows);
    let jsonData = [];
    for (let i = 0; i < rows.length; i++) {
    if (i !== 0) {
        const inputData = {
        number : rows[i][0],
        name: rows[i][1],
        slogan: rows[i][2],
        country: rows[i][3],
        year: rows[i][4],
        degree: rows[i][5],
        char: rows[i][6]
        };
        jsonData.push(inputData);
    }
    }
    const jsonDataToString = JSON.stringify(jsonData);
    fs.writeFileSync("./dataToJSon.json", jsonDataToString);
});