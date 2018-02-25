import fs from "fs";

import { forEach, inc, map, pipe } from "ramda";

import "../style/index.less";

import ichUrl from "../assets/ich3.jpg";
import elmLogoUrl from "../assets/elm-logo.svg";
import data from "../assets/data.json";

import("./pages/hobbies").then(page => page.render());

const textContent = fs.readFileSync(
    __dirname + "/static/text.txt",
    "utf-8"
);

console.log("ichUrl", ichUrl);
console.log("elmLogoUrl", elmLogoUrl);
console.log("data", data);

console.log("textContent", textContent);

console.log("hello world");

const include = { some: "include" };

console.log({ basic: true, ...include});

pipe(
    map(inc),
    forEach(console.log)
)([1, 2, 3])
