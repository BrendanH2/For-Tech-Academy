const heading = document.getElementById("heading");
const btnTextColor = document.getElementById("btnTextColor");
const btnBGColor = document.getElementById("btnBGColor");
const colorCode = document.getElementById("colorCode");
const colorCodeBG = document.getElementById("colorCodeBG");


btnTextColor.addEventListener("click", () => {
    heading.style.color = colorCode.value;
});

btnBGColor.addEventListener("click", () => {
    heading.style.backgroundColor = colorCodeBG.value;
});