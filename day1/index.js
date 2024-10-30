"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync("./input.txt", "utf8");
var arrayOfLines = input.split("\n");
console.log(arrayOfLines
    .map(function (item) { return item.split("").filter(function (item) { return !Number.isNaN(Number(item)); }); })
    .map(function (item) { return Number(item[0] + item[item.length - 1]); })
    .slice(0, -1) // to remove trailling new line on text file, that generate null item
    .reduce(function (acc, val) { return acc + val; }, 0));
// fs.writeFileSync(
//   "./input2.txt",
//   JSON.stringify(
//     arrayOfLines
//       .map((item) =>
//         item.split("").filter((item) => !Number.isNaN(Number(item)))
//       )
//       .map((item) => Number(item[0] + item[item.length - 1]))
//   )
// );
