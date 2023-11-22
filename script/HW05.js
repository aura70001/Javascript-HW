
// 建立年、月選單選項
let yearList = document.getElementById("yearList");
let monthList = document.getElementById("monthList");

for (let i = 2010; i <= 2030; i++) {
    yearList.innerHTML += `<Option>${i}年</Option>`;
}

for (let i = 1; i <= 12; i++) {
    monthList.innerHTML += `<Option>${i}月</Option>`;
}