var t = document.querySelector("table")
var d = t.getElementsByTagName("tr")

var result = []
for (let i = 0; i < d.length; i++) {
    const element = d[i];
     if(element.getElementsByTagName("td")[4].innerText == "End"){
        result.push(element)
    }
}

for (let i = 0; i < result.length; i++) {
    result[i]
        .getElementsByTagName("td")[0]
        .querySelector("input")
        .click()
}