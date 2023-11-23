
// 1.建立年、月選單選項
let yearList = document.getElementById("yearList");
let monthList = document.getElementById("monthList");

for (let i = 2010; i <= 2030; i++) {
    yearList.innerHTML += `<Option value="${i}">${i}</Option>`;
}

for (let i = 1; i <= 12; i++) {
    monthList.innerHTML += `<Option value="${i}">${i}</Option>`;
}

// 2.建立日選單 (初始)
let dateList = document.getElementById("dateList");

for (let i = 1; i <= 31; i++) {
    dateList.innerHTML += `<Option value="${i}">${i}</Option>`;
}

// 先取得年、月資訊，設定change事件捕捉值
let year = 0;
let month = 0;
let date = 0;

yearList.addEventListener("change", refreshDate);
monthList.addEventListener("change", refreshDate);
dateList.addEventListener("change", refresh);



// 3.建立月曆 (2010/1為起始)
fillDate = document.getElementById("fillDate");
let Str = "<tr>";
let initial = 1;
for (let i = 0; i < 5; i++)  // 寫空格
    Str += "<td></td>"

Str += `<td class="today">1</td>`;
Str += "<td>" + 2 + "</td>"
Str += "</tr>"
fillDate.innerHTML += Str

let Str1 = "";
for (let i = 3; i <= 31; i++) {
    if (i % 7 == 2)
        Str1 += "<td>" + i + "</td></tr>"
    else if (i % 7 == 3)
        Str1 += "<tr><td>" + i + "</td>"
    else
        Str1 += "<td>" + i + "</td>"
}
Str1 += "</tr>"
fillDate.innerHTML += Str1


function refreshDate() {
    year = yearList.value;
    month = monthList.value;
    today = dateList.value;
    today = 1;
    let checkDate = new Date(year, month, 0); // 確認該年該月有幾天
    date = checkDate.getDate();

    dateList.innerHTML = ''; // 每次"日"都要清空，之後才寫入
    for (let i = 1; i <= date; i++) {
        dateList.innerHTML += `<Option value="${i}">${i}</Option>`;
    }

    let firstDayOfWeek = new Date(year, month - 1, 1).getDay(); // 取得該月第一天是星期幾

    fillDate.innerHTML = ""; // 清空月曆

    let Str = "<tr>";
    let initial = 1;

    // 根據該月第一天是星期幾，來決定第一行空格
    for (let i = 0; i < firstDayOfWeek; i++) {
        Str += "<td></td>";
        initial++;
    }

    // 接著填入日期
    for (let i = 1; i <= date; i++) {
        if (i == today) {
            if (initial % 7 == 0) {
                Str += `<td class="today">${i}</td></tr><tr>`;
            } else {
                Str += `<td class="today">${i}</td>`;
            }
        }
        else if (initial % 7 === 0) {
            Str += "<td>" + i + "</td></tr><tr>";
        } else {
            Str += "<td>" + i + "</td>";
        }
        initial++;
    }

    // 填入剩餘的空格
    while (initial % 7 !== 0) {
        Str += "<td></td>";
        initial++;
    }

    Str += "</tr>";
    fillDate.innerHTML = Str; // 更新月曆

    // 更新底文字
    let instruct = document.getElementById("instruct");
    instruct.textContent = "您選擇的日期為：" + year + "年" + (parseInt(month)) + "月" + today + "日";
}

/* 日期更新，與上面方法不同之處為：
年、月改變時，日期選單要跟著改寫。但單純日期改變時，只需改寫月曆(若跟著改寫日期選單，選日期後都會變回1號)
*/
function refresh() {
    year = yearList.value;
    month = monthList.value;
    today = dateList.value;
    let checkDate = new Date(year, month, 0); // 確認該年該月有幾天
    date = checkDate.getDate();


    let firstDayOfWeek = new Date(year, month - 1, 1).getDay(); // 取得該月第一天是星期幾

    fillDate.innerHTML = ""; // 清空月曆

    let Str = "<tr>";
    let initial = 1;

    // 根據該月第一天是星期幾，來決定第一行空格
    for (let i = 0; i < firstDayOfWeek; i++) {
        Str += "<td></td>";
        initial++;
    }

    // 接著填入日期
    for (let i = 1; i <= date; i++) {
        if (i == today) {
            if (initial % 7 == 0) {
                Str += `<td class="today">${i}</td></tr><tr>`;
            } else {
                Str += `<td class="today">${i}</td>`;
            }
        }
        else if (initial % 7 === 0) {
            Str += "<td>" + i + "</td></tr><tr>";
        } else {
            Str += "<td>" + i + "</td>";
        }
        initial++;
    }

    // 填入剩餘的空格
    while (initial % 7 !== 0) {
        Str += "<td></td>";
        initial++;
    }

    Str += "</tr>";
    fillDate.innerHTML = Str; // 更新月曆

    // 更新底文字
    let instruct = document.getElementById("instruct");
    instruct.textContent = "您選擇的日期為：" + year + "年" + (parseInt(month)) + "月" + today + "日";
}