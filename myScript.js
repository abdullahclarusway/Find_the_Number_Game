var number = Math.floor((Math.random() * 100) + 1);
document.getElementById("btn").addEventListener("click", guessNumber);

document.getElementById("inp")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("btn").click();
        }
    });

var counter = 0;
counter++;

function guessNumber() {
    const num = document.getElementById("inp").value;
    num_1 = parseInt(num);

    if (num_1 == null) {
        document.getElementById("res").innerHTML = "Are you sure that this is a number?";
    } else if (isNaN(num_1)) {
        document.getElementById("res").innerHTML = "Write the number";
    } else if (num_1 < number) {
        document.getElementById("res").innerHTML = "I am thinking about higher number";
    } else if (num_1 > number) {
        document.getElementById("res").innerHTML = "I am thinking about lower number";
    } else {
        alert("You are the winner :D. You guest after " + counter + " times!");
    }
    document.getElementById("count").innerHTML = ("This is your test number:" + counter++);
}