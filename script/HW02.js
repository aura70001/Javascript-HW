
let nameObj = document.getElementById("names");
nameObj.addEventListener("blur", checkName);

let thePwdObj = document.getElementById("idPwd");
thePwdObj.addEventListener("blur", checkPwd);


let eyesCheck = document.getElementById("eyes");
eyesCheck.addEventListener("mousedown", view);
eyesCheck.addEventListener("mouseup", hide);

let dateObj = document.getElementById("dates");
dateObj.addEventListener("blur", checkDate);

function checkName() {
    let nameObj = document.getElementById("names");
    let nameObjVal = nameObj.value;
    let nameObjLen = nameObjVal.length;
    let sp = document.getElementById("namesp");

    if (nameObjVal == "")
        sp.innerHTML = "<img class='accept' src='Images/remove.png'> you must enter";
    else if (nameObjLen >= 2) {
        for (let i = 0; i < nameObjLen; i++) {
            if (nameObjVal.charCodeAt(i) < 0x4e00 || nameObjVal.charCodeAt(i) > 0x9FA5) {
                sp.innerHTML = "<img class='accept' src='Images/remove.png'> name  must belong to Chinese";
                return;
            }

        }
        sp.innerHTML = "<img class='accept' src='Images/accept.png'> correct";
    } else {
        sp.innerHTML = "<img class='accept' src='Images/remove.png'> name length must be greater than 2";
    }
}

function checkPwd() {
    //取得idPwd元素
    let thePwdObj = document.getElementById("idPwd");

    //取得idPwd元素值
    let thePwdObjVal = thePwdObj.value;

    let sp = document.getElementById("idsp");
    let thePwdObjValLen = thePwdObjVal.length;
    let flag1 = false, flag2 = false, flag3 = false;

    //判斷元素值是否為空白，密碼長度是否大於6
    //如果長度是否大於6，判斷是否包含字母、數字、特殊符號
    if (thePwdObjVal == "")
        sp.innerHTML = "<img class='accept' src='Images/remove.png'> you must enter";
    else if (thePwdObjValLen >= 6) {
        for (let i = 0; i < thePwdObjValLen; i++) {
            let ch = thePwdObjVal.charAt(i).toUpperCase();
            if (ch >= "A" && ch <= "Z")
                flag1 = true;
            else if (ch >= "0" && ch <= "9")
                flag2 = true;

            if (flag1 && flag2) break;
        }
        if (thePwdObjVal.match(/[!@#$%^&*]/g)) {
            flag3 = true;
        }
        if (flag1 && flag2 && flag3)
            sp.innerHTML = "<img class='accept' src='Images/accept.png'> correct";
        else
            sp.innerHTML = "<img class='accept' src='Images/remove.png'> incorrect";
    } else {
        sp.innerHTML = "<img class='accept' src='Images/remove.png'> Password length must be greater than 6";
    }
}

function view() {
    thePwdObj.type = "text"
}

function hide() {
    thePwdObj.type = "password"
}

function checkDate() {
    let dateObj = document.getElementById("dates");
    let dateVal = dateObj.value;
    let dateSplit = dateVal.split('/');

    let dateYear = dateSplit[0];
    let dateMonth = dateSplit[1];
    let dateDate = dateSplit[2];

    let parseYear = new Date(dateVal).getFullYear();
    let parseMonth = new Date(dateVal).getMonth() + 1;
    let parseDate = new Date(dateVal).getDate();

    let sp = document.getElementById("datesp")

    if (dateYear == parseYear && dateMonth == parseMonth && dateDate == parseDate) {
        sp.innerHTML = "<img class='accept' src='Images/accept.png'> correct";
    } else {
        sp.innerHTML = "<img class='accept' src='Images/remove.png'> Incorrect";
    }
}
