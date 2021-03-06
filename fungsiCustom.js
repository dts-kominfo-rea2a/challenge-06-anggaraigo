// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallBack) => {
  const arr = [];

  fs.readFile(file1, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      data1 = JSON.parse(data);
      dataSplit = data1.message.split(" ");
      arr.push(dataSplit[1]);
    }
    fs.readFile(file2, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        data2 = JSON.parse(data);
        dataSplit = data2[0].message.split(" ");
        arr.push(dataSplit[1]);
      }
      fs.readFile(file3, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          data3 = JSON.parse(data);
          dataSplit = data3[0].data.message.split(" ");
          arr.push(dataSplit[1]);
        }
        fnCallBack(arr);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
