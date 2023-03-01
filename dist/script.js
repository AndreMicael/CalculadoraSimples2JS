function insert(num) {

    let numero = document.getElementById('result').value;
    document.getElementById('result').value = numero + num;


}

function cleanNum() {

    document.getElementById('result').value = "";

}

function delNum() {

    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.substring(0, result.length - 1);
}

function calculate() {


    let result = document.getElementById('result').value;

    if (result) {
        document.getElementById('result').value = eval(result);
    } else {
        document.getElementById('result').value = "Nada a fazer"
    }

}

function checkEnter() {
    document.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            calculate();
        }

    });

}