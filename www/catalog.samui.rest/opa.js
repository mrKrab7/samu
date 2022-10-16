// core render

const mainForm = document.getElementById(`mainBord`);


const searchFile = document.getElementById(`searchFIle`);
const buttonChosen = document.getElementById(`buttonChosen`);
const buttonCreateFile = document.getElementById(`createNewFile`);

const importJsonBox = document.getElementById(`jsonExport`);

const copyButton = document.getElementById(`copy`);

let globalObject = 0;

let newOrOld = 0;

let addition = 0;

async function getFileName(link, data) {
    const file = await fetch(link, {
        method: "POST",
        body: data
    });
}

async function getFileName2(link, data) {
    const file = await fetch(link, {
        method: "POST",
        body: data
    });
    globalObject = await file.text();
    console.log(globalObject);
    globalObject = JSON.parse(globalObject);
    scanValueEncremen(importJsonBox, globalObject, 0)[0];
}


searchFile.addEventListener(`click`, (e) => {
    const postData = async (url, data) => {


        let res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.text();
    }
    const fileName = document.getElementById(`fileNameInp`);
    let formData = new FormData()
    formData.append('name', fileName.value)
    // console.log(fileName.value)
    // console.log(url)
    postData(importJson, formData)
        .then(res => {
            console.log(res)
        })


    // newOrOld = 1;
    safeBuffer();
    deliteElemntDom();

    // console.log(fileName.value);
    // const form = new FormData();
    // form.append(`name`, fileName.value);
    // getFileName2(importJson, form);
});

function createToggleCheckBox(obj, key, domElementArray) {
    const inp = domElementArray[1];
    inp.checked = obj[key];
    inp.type = "checkbox";
    inp.addEventListener(`click`, () => {
        obj[key] = inp.checked;
    });

    const inpBlock = domElementArray[0];

    const inpText = domElementArray[2];

    const span = document.createElement(`span`);
    span.classList = "slider";

    const label = document.createElement(`label`);
    label.className = "switch";
    label.appendChild(inp);
    label.appendChild(span);

    inpBlock.appendChild(inpText);
    inpBlock.appendChild(label);
    return inpBlock;
}

function renderArrayBox(mainBlock, className, key) {
    const safeBox = document.createElement(`div`);
    safeBox.className = className;
    safeBox.setAttribute(`data`, key);

    const titleText = document.createElement(`h1`);
    titleText.innerHTML = RUSITEVERS[key];

    mainBlock.appendChild(safeBox);
    safeBox.appendChild(titleText);
    return safeBox;
}

function createInputBox(obj, key, domElementArray) {
    const inpBlock = domElementArray[0];

    const inpText = domElementArray[2];

    let textArea = document.createElement(`textarea`);

    let inp = domElementArray[1];
    textArea.value = obj[key];
    textArea.addEventListener(`input`, () => {
        obj[key] = textArea.value;
    });
    textArea = opros(key, textArea);

    inpBlock.appendChild(inpText);
    inpBlock.appendChild(textArea);

    return inpBlock
}

function createInpuElements(styleName, key, text) {
    const inpBlock = document.createElement(`div`);
    inpBlock.className = styleName;

    const inp = document.createElement(`input`);
    inp.name = key;

    const inpText = document.createElement(`label`);
    inpText.name = key;
    if (RUSITEVERS[key] === undefined) {
        inpText.innerHTML = `${text}`;
    } else {
        inpText.innerHTML = RUSITEVERS[key];
    }

    return [inpBlock, inp, inpText];
}

function createImageELments(obj, key, domElementArray) {
    const inpBlock = domElementArray[0];

    const inpText = domElementArray[2];

    const inp = domElementArray[1];
    inp.value = obj[key];

    const image = document.createElement(`img`);
    image.classList = `image`;
    image.src = `https://ik.imagekit.io/samui/${globalObject._id}/${inp.value}`;
    image.alt = `такого файла не существует`;

    inp.addEventListener(`input`, () => {
        obj[key] = inp.value;
        image.src = `https://ik.imagekit.io/samui/${globalObject._id}/${inp.value}`;
    });

    inpBlock.appendChild(inpText);
    inpBlock.appendChild(inp);
    inpBlock.appendChild(image);


    return inpBlock;
}

function opros(key, inp) {
    console.log(key);
    switch (key) {
        case `_id`:
            console.log(55);
            inp.addEventListener(`input`, () => {
                const safeImage = document.querySelectorAll(`img`);
                for (let i = 0; i < safeImage.length; i++) {
                    let res = safeImage[i].src.split('/').pop();
                    ;
                    console.log(`ogo`, res);
                    safeImage[i].src = `https://ik.imagekit.io/samui/${globalObject._id}/${res}`;
                }
            })
    }
    return inp
}

function supportForImagePricol(obj, domElementArray) {
    const styleName = [
        `soloBlock`,
        `manyBlocks`
    ];
    for (key in obj) {
        if (typeof obj[key] === `object`) {
            const block = renderArrayBox(domElementArray, styleName[1], key);
            supportForImagePricol(obj[key], block);
        } else {
            inputFieldToJson(domElementArray, obj, key, styleName[0]);
        }
    }
    return obj;
}

function deliteAllElem(safeArray) {
    document.querySelectorAll(`[image]`).forEach(e => e.remove());
    generateImagePricol(safeArray.length, safeArray, addition);
    console.log(safeArray);
}

function addDelButtonImage(safeArray, elem, safeBox, count, maxCount) {
    const buttonDelite = document.createElement(`button`);
    buttonDelite.innerHTML = `-`;
    buttonDelite.className = "buttonSmall";
    buttonDelite.addEventListener(`click`, () => {
        console.log(safeArray[count]);
        safeArray.splice(count, 1);
        console.log(count, safeArray.length);
        deliteAllElem(safeArray, count);
    })

    const buttonAdd = document.createElement(`button`);
    buttonAdd.innerHTML = `+`;
    buttonAdd.className = "buttonSmall";
    buttonAdd.addEventListener(`click`, () => {
        let dest = {};
        Object.assign(dest, safeArray[count]);
        safeArray.splice(count, 0, dest);
        deliteAllElem(safeArray);
    })

    const box = document.createElement(`div`);
    box.className = 'btnBox'
    box.appendChild(buttonDelite);
    box.appendChild(buttonAdd);
    safeBox.appendChild(box);
}

function generateImagePricol(count, safeArray, domElementArray) {
    elemMaxCount = count;
    newOrOld
    for (let i = 0; i < count; i++) {
        const safeBox = document.createElement(`div`);
        domElementArray.appendChild(safeBox);
        addDelButtonImage(safeArray, safeArray[i], safeBox, i, count);
        safeBox.classList = "manyBlocks";
        safeBox.setAttribute(`image`, i);
        safeArray[i] = supportForImagePricol(safeArray[i], safeBox);
    }
    return 0;
}

function generateRoomsCount(exportElem, obj, key) {
    generateImagePricol(obj[key].length, obj[key], exportElem);
}

function inputFieldToJson(exportElem, obj, key, styleName) {
    const objValue = obj[key];
    const elemSafe = createInpuElements(styleName, key, key);
    //
    if ((typeof objValue) === (typeof true)) {
        exportElem.appendChild(createToggleCheckBox(obj, key, [elemSafe[0], elemSafe[1], elemSafe[2]]));
    } else if (key === `filename`) {
        exportElem.appendChild(createImageELments(obj, key, [elemSafe[0], elemSafe[1], elemSafe[2]]));
    } else {
        exportElem.appendChild(createInputBox(obj, key, [elemSafe[0], elemSafe[1], elemSafe[2]]));
    }
}

function generateHiuseType(mainblock, className, key, obj) {
    const type = [`hello`];
    const beach = [`world`];
    const safeBox = document.createElement(`div`);
    safeBox.className = className;
    safeBox.setAttribute(`data`, key);

    const inp = document.createElement(`input`);
    inp.name = key;
    inp.value = obj[key];
    inp.addEventListener(`input`, () => {
        obj[key] = inp.value;
    });

    const titleText = document.createElement(`h1`);
    if (key == `type`) {
        titleText.innerHTML = `${RUSITEVERS[key]}`;
    } else {
        titleText.innerHTML = `${RUSITEVERS[key]}`;
    }
    mainblock.appendChild(safeBox);
    safeBox.appendChild(titleText);
    safeBox.appendChild(inp);
}

function scanValueEncremen(exportElem, obj, render) {
    const styleName = [
        `soloBlock`,
        `manyBlocks`
    ];
    for (let key in obj) {
        if (key === `additionalImages`) {
            const block = renderArrayBox(exportElem, styleName[1], key);
            addition = block;
            block.id = `additionalImages`;
            generateRoomsCount(block, obj, key);
            continue;
        }
        if (key === `_class` || key === `title` || key === `special` || key === `propositionLocation` || key === `uploadedToIk`) {
            continue;
        }
        if (key === `type` || key === `beach`) {
            generateHiuseType(exportElem, styleName[1], key, obj);
            continue;
        }
        if (typeof obj[key] === `object`) {
            render += 1;
            const block = renderArrayBox(exportElem, styleName[1], key);
            const value = scanValueEncremen(block, obj[key], render);
            obj[key] = value[0];
            render = value[1];
        } else if (render !== 0) {
            inputFieldToJson(exportElem, obj, key, styleName[0]);
        } else {
            const block = renderArrayBox(exportElem, styleName[1], key);
            inputFieldToJson(block, obj, key, styleName[0]);
        }
    }
    return [obj, render -= 1];
}

function safeBuffer(text) {
    if (text === null) {
        navigator.clipboard.writeText(JSON.stringify(globalObject))
            .then(() => {
                // Получилось!
            })
            .catch(err => {
                console.log('Something went wrong', err);
            });
    } else {
        navigator.clipboard.writeText(text)
            .then(() => {
                // Получилось!
            })
            .catch(err => {
                console.log('Something went wrong', err);
            });
    }
}

copyButton.addEventListener("click", () => {
    safeBuffer(BsonToJson());
    console.log(globalObject._id, JSON.stringify(globalObject).toString());
    const form = new FormData();
    form.append(`name`, globalObject._id);
    form.append(`new`, newOrOld);
    form.append(`json`, JSON.stringify(globalObject).toString());
    getFileName(url, form);
});

function BsonToJson() {
    let arr = [`sleepingRoomCount`, `parkingPlaceCount`, `washRoomCount`];
    let arrValueSafe = [];
    let objCopy = {};
    Object.assign(objCopy, globalObject);
    /*
    for (let i = 0; i < arr.length; i++) {
        if (objCopy.hasOwnProperty(arr[i])) {
            arrValueSafe.push(objCopy[arr[i]]);
            objCopy[arr[i]] = `NumberInt(${objCopy[arr[i]]})`;
        }
    }
    */
    for (ret in objCopy) {
        const count = arr.indexOf(objCopy[ret]);
        if (count != -1) {
            arrValueSafe.push(objCopy[arr[ret]]);
            objCopy[arr[i]] = `NumberInt(${objCopy[arr[ret]]})`;
        }
    }
    let copyText = JSON.stringify(objCopy);
    const regex = /\"NumberInt\(\d\)\"/ig;
    copyText = copyText.replaceAll(regex, "NumberInt(-1)");
    for (let z = 0; z < arrValueSafe.length; z++) {
        copyText = copyText.replace("NumberInt(-1)", `NumberInt(${arrValueSafe[z]})`)
    }
    return copyText;
}

/*  подтягиваем json
importFileName.addEventListener("change", () => {
    newOrOld = 0;
    safeBuffer();
    deliteElemntDom();
    const fileList = document.getElementById(`file`).files;
    if (fileList.length != 1) return 0;
    const reader = new FileReader();
    reader.readAsText(fileList[0]);
    reader.onload = () => {
        const text = reader.result;
        //BsonToJson(Text);
        globalObject = JSON.parse(text);
        scanValueEncremen(importJsonBox, globalObject, 0)[0]
    }
}, false)

*/


//  создаём шаблонный json
buttonCreateFile.addEventListener("click", () => {
    newOrOld = 0;
    safeBuffer();
    deliteElemntDom();
    globalObject = JSON.parse(inf);
    scanValueEncremen(importJsonBox, globalObject, 0)[0]
})

function deliteElemntDom() {
    const allELemBox = document.querySelectorAll(`[class="manyBlocks"]`);
    for (let i = 0; i < allELemBox.length; i++) {
        allELemBox[i].remove();
    }
}

function deliteElemntDomWhere(whereELem, selector) {
    const allELemBox = document.getElementById(`additionalImages`);
    const deliteElem = allELemBox.querySelectorAll(`[style="manyBlocks"]`);
    const deliteElemImage = allELemBox.querySelectorAll(`[style="soloBlock"]`);
    for (let i = 0; i < deliteElem.length; i++) {
        deliteElem[i].remove();
        deliteElemImage[i].remove();
    }
}