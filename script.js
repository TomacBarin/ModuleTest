import { textChange } from "./testmodule.js";

const para1Html = document.querySelector("#para1");
const btnHtml1 = document.querySelector("#btn1");

btnHtml1.addEventListener("click", () => {
    console.log("Knapp ett har klickats på!");
    para1Html.textContent = "Texten har ersatts av JS i script.js.";
})

const paraHtml2 = document.querySelector("#para2");
const btnHtml2 = document.querySelector("#btn2");

btnHtml2.addEventListener("click", () => {
    console.log("Knapp två har klickats på!");
    textChange(paraHtml2);
}) 