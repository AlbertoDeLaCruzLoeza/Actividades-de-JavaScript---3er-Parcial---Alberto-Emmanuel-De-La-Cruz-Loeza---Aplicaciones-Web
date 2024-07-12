document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const grade = parseFloat(document.getElementById('grade').value);
    const result = document.getElementById('result');

    if (grade >= 0 && grade < 3) {
        result.textContent = "Muy deficiente";
        result.style.color = "red";
    } else if (grade >= 3 && grade < 5) {
        result.textContent = "Insuficiente";
        result.style.color = "orange";
    } else if (grade >= 5 && grade < 6) {
        result.textContent = "Suficiente";
        result.style.color = "yellow";
    } else if (grade >= 6 && grade < 7) {
        result.textContent = "Bien";
        result.style.color = "lightgreen";
    } else if (grade >= 7 && grade < 9) {
        result.textContent = "Notable";
        result.style.color = "green";
    } else if (grade >= 9 && grade <= 10) {
        result.textContent = "Sobresaliente";
        result.style.color = "blue";
    } else {
        result.textContent = "Nota inválida. Por favor, ingrese una nota entre 0 y 10.";
        result.style.color = "black";
    }
});
