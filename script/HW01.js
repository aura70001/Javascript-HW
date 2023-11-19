document.write("<table>");
for (var i = 1; i < 10; i++) {
    document.write("<tr>")
    for (var j = 2; j < 10; j++) {
        // document.write(`<tr><td>(${i}*${j} = ${i * j})</td></tr>`)
        document.write(`<td>${j}*${i} = ${i * j}</td>`);
    }
    document.write("</tr>")
}
document.write("</table>");