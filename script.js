// Function to append values to the display
function appendToDisplay(value) {
    let display = document.calc.display;

    // Prevent adding multiple operators or decimals in a row
    if (display.value === '' && (value === '+' || value === '-' || value === '*' || value === '/' || value === '.')) {
        return;
    }
    
    // Prevent multiple decimals in a single number
    let lastCharacter = display.value.slice(-1);
    if (lastCharacter === '.' && value === '.') {
        return;
    }
    
    // Add the value to the display
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    document.calc.display.value = '';
}

// Function to delete the last character from the display
function deleteLastChar() {
    let display = document.calc.display;
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    let display = document.calc.display;
    try {
        let result = eval(display.value);
        // Ensure result is not undefined or empty
        if (result !== undefined) {
            display.value = result;
        }
    } catch (error) {
        display.value = 'Error';
    }
}

