const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon","saffron", "fuschia", "cinnabar"];
let renderColor = (colorList) => {
    let output = '';
    for (color of colorList) {
        output += `
            <button class="color-button ${color}" onclick="changeColor('${color}', event)"></button>
        `;
    }
    document.querySelector("#colorContainer").innerHTML = output;
}
renderColor (colorList);

window.changeColor = (color, event) => {
    document.querySelector("#house").className = `house ${color}`;
    let colorButton = document.querySelectorAll(".color-button");
    for (item of colorButton) {
        if (item.classList.contains("active")) {
            item.classList.remove("active");
        }
    }
    event.target.classList.add("active");
};

