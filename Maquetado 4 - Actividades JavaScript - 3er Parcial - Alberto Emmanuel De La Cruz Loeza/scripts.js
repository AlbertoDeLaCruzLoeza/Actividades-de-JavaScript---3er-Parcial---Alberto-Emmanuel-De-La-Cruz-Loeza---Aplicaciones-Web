const dniForm = document.getElementById('dniForm');
const dniInput = document.getElementById('dniInput');
const calculateButton = document.getElementById('calculateButton');
const cancelButton = document.getElementById('cancelButton');
const result = document.getElementById('result');

const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

calculateButton.addEventListener('click', function() {
    const dni = parseInt(dniInput.value.trim());
    
    if (isNaN(dni) || dni < 0 || dni > 99999999) {
        alert('Debe ingresar un número válido entre 0 y 99999999.');
        dniInput.value = "";
        dniInput.focus();
    } else {
        const letra = letrasDNI[dni % 23];
        result.textContent = `La letra correspondiente al DNI ${dni} es ${letra}`;
        dniInput.value = "";
        dniInput.focus();
    }
});

cancelButton.addEventListener('click', function() {
    result.textContent = '';
    dniInput.value = '';
});
