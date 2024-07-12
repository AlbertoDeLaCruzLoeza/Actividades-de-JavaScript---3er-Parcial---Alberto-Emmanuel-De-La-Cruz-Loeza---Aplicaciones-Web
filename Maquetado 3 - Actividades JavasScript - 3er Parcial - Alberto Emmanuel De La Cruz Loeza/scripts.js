const textForm = document.getElementById('textForm');
const textInput = document.getElementById('textInput');
const addButton = document.getElementById('addButton');
const cancelButton = document.getElementById('cancelButton');
const result = document.getElementById('result');

let textArray = [];

addButton.addEventListener('click', function() {
    const text = textInput.value.trim();
    if (text !== "") {
        textArray.push(text);
        textInput.value = "";
        textInput.focus();
    }
});

cancelButton.addEventListener('click', function() {
    result.textContent = textArray.join('-');
    textArray = [];
});
