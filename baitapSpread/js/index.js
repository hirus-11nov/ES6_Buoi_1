let sepaText = (text) => {
    let output = '';
    for (item of [...text]) {
        output += `<span>${item}</span>`
    }
    document.querySelector(".heading").innerHTML = output;
}
let getText = document.querySelector(".heading").innerHTML;
sepaText(getText);