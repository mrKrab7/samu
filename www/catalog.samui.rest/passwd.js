const passBox = document.getElementById(`pass`);
const passInp = document.getElementById(`passInp`);
const passBtn = document.getElementById(`passBtn`);

const menu = document.getElementById(`mainBord`);
menu.style = "display: none;";

async function getFilePasswd(link, data) {
    const file = await fetch(link, {
        method: "POST",
        body: data
    });
    const jery =  await file.text();
    if (passInp.value == jery) {
        menu.style = "display: ";
        passBox.style = "display: none";
    }
}

passBtn.addEventListener(`click`, () => {
    const form = new FormData();
    form.append(`name`, `passwd`);
    getFilePasswd(importJson, form);
})