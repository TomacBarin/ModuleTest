const para1Html = document.querySelector("#para1");
const btnHtml1 = document.querySelector("#btn1");

btnHtml1.addEventListener("click", () => {
    console.log("Knapp 1 i script.js har klickats på, wheee!")
    para1Html.textContent = "Texten har ersatts utav Script.js"
})

// Från module
const para2Html = document.querySelector("#para2");
const btnHtml2 = document.querySelector("#btn2");

import { btnModule } from "./testmodule.js";

btnHtml2.addEventListener("click", () => {
    btnModule(para2Html)
    
})