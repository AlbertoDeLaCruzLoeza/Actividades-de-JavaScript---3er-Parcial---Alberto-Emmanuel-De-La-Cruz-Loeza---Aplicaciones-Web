document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const age = document.getElementById('age').value;
    const result = document.getElementById('result');

    if (age >= 18) {
        result.textContent = "Puede conducir";
        result.style.color = "green";
    } else {
        result.textContent = "No puede conducir";
        result.style.color = "red";
    }
});
