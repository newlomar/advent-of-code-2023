import * as fs from "fs";

const input = fs.readFileSync("./input.txt", "utf8");

const arrayOfLines = input.split("\n");

console.log(
  arrayOfLines
    .map((item) => item.split("").filter((item) => !Number.isNaN(Number(item))))
    .map((item) => Number(item[0] + item[item.length - 1]))
    .slice(0, -1) // to remove trailling new line on text file, that generate null item
    .reduce((acc, val) => acc + val, 0)
);

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
