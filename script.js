function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function performOperation(operator) {
    document.getElementById("display").value += operator;
}

function calculateResult() {
    try {
        const expression = document.getElementById("display").value;
        const result = eval(expression);
        document.getElementById("display").value = result;
    } catch (error) {
        alert("Invalid input");
    }
}

function memoryAdd() {
    const currentValue = parseFloat(document.getElementById("display").value);
    if (!isNaN(currentValue)) {
        const memoryValue = localStorage.getItem("memory") || "0";
        const newValue = parseFloat(memoryValue) + currentValue;
        localStorage.setItem("memory", newValue.toString());
    }
}

function memorySubtract() {
    const currentValue = parseFloat(document.getElementById("display").value);
    if (!isNaN(currentValue)) {
        const memoryValue = localStorage.getItem("memory") || "0";
        const newValue = parseFloat(memoryValue) - currentValue;
        localStorage.setItem("memory", newValue.toString());
    }
}

function memoryClear() {
    localStorage.removeItem("memory");
}
