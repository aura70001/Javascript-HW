// 1.圖片輪播功能

let timeInterval = setInterval(weaponChange, 600);

let weapon = document.getElementById("weapons");
let lastweapon = document.getElementById("lastweapon");
let nextweapon = document.getElementById("nextweapon");


function weaponChange() {
    let num = parseInt(weapon.src.match(/(\d+)\.png$/)[1]); // 取得原本圖片的檔名，並找到索引

    let previousButton = document.getElementById(`b` + num); // 用索引抓當下按鈕，使其顏色回復成原本樣式
    previousButton.style.backgroundColor = "aliceblue";

    weapon.src = (num != 14) ? "weapon/" + (num + 1) + ".png" : "weapon/" + 1 + ".png" // 替換下一張圖
    lastweapon.src = (num != 1) ? "weapon/" + (num) + ".png" : "weapon/" + 14 + ".png"
    nextweapon.src = (num < 13) ? "weapon/" + (num + 2) + ".png" : "weapon/" + 1 + ".png"

    let currentButton; // 用索引抓替換後的按鈕
    let imgLink = document.getElementById("links"); // 改超連結
    let lastImgLink = document.getElementById("lastlink");
    let nextImgLink = document.getElementById("nextlink");

    if (num != 14) { // 需判斷是不是最後一張，是的話要回第一張
        currentButton = document.getElementById(`b` + (num + 1));
        imgLink.href = "https://kuroyonhon.com/mhrisesb/memo/" + (num + 2) + ".php"; // 網址關係，另外加1
    } else {
        currentButton = document.getElementById("b1");
        imgLink.href = "https://kuroyonhon.com/mhrisesb/memo/" + 2 + ".php";
    }
    currentButton.style.backgroundColor = "orange"; // 最後更改樣式
}

// 2.編號按鈕
for (let i = 1; i <= 14; i++) {
    let buttons = document.getElementById(`b` + i); // 抓物件
    buttons.addEventListener("click", () => { weaponClick(i) }); // 指派，並把按鈕本身索引丟給下面方法執行
}

function weaponClick(index) {
    let num = parseInt(weapon.src.match(/(\d+)\.png/)[1]);
    let previousButton = document.getElementById(`b` + num); // 抓原本按鈕，回復樣式
    previousButton.style.backgroundColor = "aliceblue";

    weapon.src = "weapon/" + index + ".png"
    let currentButton = document.getElementById(`b` + index); // 抓替換後按鈕，更改樣式
    currentButton.style.backgroundColor = "orange";

    let imgLink = document.getElementById("links"); // 更改超連結
    imgLink.href = "https://kuroyonhon.com/mhrisesb/memo/" + (index + 1) + ".php";

}

// 3.controll按鈕 (上、下一張)
let lastButton = document.getElementById("last");
let nextButton = document.getElementById("next");
lastButton.addEventListener("click", lastClick)
nextButton.addEventListener("click", nextClick)

function lastClick() {
    let num = parseInt(weapon.src.match(/(\d+)\.png$/)[1]);
    let previousButton = document.getElementById(`b` + num); // 抓到原本按鈕，回復樣式
    previousButton.style.backgroundColor = "aliceblue";

    weapon.src = (num != 1) ? "weapon/" + (num - 1) + ".png" : "weapon/" + 14 + ".png" // 替換圖片

    let currentButton;// 抓替換後按鈕，更改樣式。
    let imgLink = document.getElementById("links"); // 更改超連結

    if (num != 1) {
        currentButton = document.getElementById(`b` + (num - 1));
        imgLink.href = "https://kuroyonhon.com/mhrisesb/memo/" + (num) + ".php";
    } else {
        currentButton = document.getElementById("b14");
        imgLink.href = "https://kuroyonhon.com/mhrisesb/memo/" + (15) + ".php";
    }
    currentButton.style.backgroundColor = "orange";

}
function nextClick() {
    let num = parseInt(weapon.src.match(/(\d+)\.png$/)[1]);
    let previousButton = document.getElementById(`b` + num); // 抓到原本按鈕，回復樣式
    previousButton.style.backgroundColor = "aliceblue";

    weapon.src = (num != 14) ? "weapon/" + (num + 1) + ".png" : "weapon/" + 1 + ".png" // 替換圖片

    let currentButton;// 抓替換後按鈕，更改樣式。
    let imgLink = document.getElementById("links"); // 更改超連結

    if (num != 14) {
        currentButton = document.getElementById(`b` + (num + 1));
        imgLink.href = "https://kuroyonhon.com/mhrisesb/memo/" + (num + 2) + ".php";
    } else {
        currentButton = document.getElementById("b1");
        imgLink.href = "https://kuroyonhon.com/mhrisesb/memo/" + (2) + ".php";
    }
    currentButton.style.backgroundColor = "orange";
}

// 4.播放、暫停
let playbutton = document.getElementById("play");
playbutton.addEventListener("click", trans);
flag = true;
function trans() {
    if (flag == true) {
        clearInterval(timeInterval);
        playbutton.value = "▶️";
        flag = false;
    } else {
        timeInterval = setInterval(weaponChange, 600); // 重新建一個計時區間，不能用let，以免下次關不掉這個區域變數。
        playbutton.value = "⏸️";
        flag = true;
    }
}