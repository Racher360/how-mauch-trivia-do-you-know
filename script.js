let username = document.querySelector(".comment");
let result = document.querySelector(".result");
let button = document.querySelector("button");
button.onclick = function() {
    let question1 = document.querySelector(".question1").value;
    let question2 = document.querySelector(".question2").value;

    if (question1 === "5280" && question2 === "USA") {
        result.innerHTML = "result = avanced<br><em>Nailed it!</em>";
    } else if (question1 === "10560" && question2 === "USA") {
        result.innerHTML = "result = midium<br><em>Nailed it!</em>";
    } else if (question1 === "5280" && question2 === "India") {
        result.innerHTML = "result = midium";
    } else {
        result.innerHTML = "result= little";
    }
};