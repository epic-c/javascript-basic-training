let table = document.querySelector("table");
let tr = table.getElementsByTagName("tr");
const searchKey = "End";

let result = [];
for (let i = 0; i < tr.length; i++) {
    if (tr[i].getElementsByTagName("td")[4].innerText === searchKey) {
        result.push(tr[i]);
    }
}

for (let i = 0; i < result.length; i++) {
    result[i].getElementsByTagName("td")[0].querySelector("input").click();
}

// result.forEach((el)=>{
//     el.getElementsByTagName("td")[0].querySelector("input").click();
// })