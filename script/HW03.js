let s1 = document.getElementById("star1");
let s2 = document.getElementById("star2");
let s3 = document.getElementById("star3");
let s4 = document.getElementById("star4");
let s5 = document.getElementById("star5");

let arr = [s1, s2, s3, s4, s5];

for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", function () { bling(i) });
    arr[i].addEventListener("dblclick", function () { extinguish(i) });
    arr[i].addEventListener("mousemove", function () { move(i) });
    arr[i].addEventListener("mouseout", function () { out(i) });
}

let flag = true;

function bling(index) {
    for (let i = 0; i <= index; i++)
        arr[i].src = "Images/chngstar.gif";
    for (let j = index + 1; j < arr.length; j++)
        arr[j].src = "Images/star.gif";
    flag = false;
    document.getElementById("scores").innerHTML = `評分：${index + 1}顆星`;
}

function extinguish(index) {
    for (let i = 0; i < arr.length; i++)
        arr[i].src = "Images/star.gif";
    flag = true;
    document.getElementById("scores").innerHTML = `評分： 顆星`;
}

function move(index) {
    if (flag == true) {
        for (let i = 0; i <= index; i++)
            arr[i].src = "Images/chngstar.gif";
        document.getElementById("scores").innerHTML = `評分：${index + 1}顆星`;

    }

}

function out(index) {
    if (flag == true) {
        for (let i = 0; i < arr.length; i++)
            arr[i].src = "Images/star.gif";
        document.getElementById("scores").innerHTML = `評分： 顆星`;
    }

}