let colorShow = document.querySelector(".color");
let colorCode = document.querySelector("h3");
let generate = document.querySelector("#btn1");
let copyCode = document.querySelector("#btn2");

generate.addEventListener("click", ()=> {
    let randomNumber = Math.floor(Math.random() * 16777215); //math random for generate random number. math floor give nearest number without point 
    var randomColor = "#" + randomNumber.toString(16);//convert number into string 
    colorShow.style.backgroundColor = randomColor;
    colorCode.innerHTML = randomColor;
    copyCode.addEventListener("click", ()=> {
        navigator.clipboard.writeText(randomColor); //copy color code in clipboard
        alert("Copied Successfully")
    })
})

