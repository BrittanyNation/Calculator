function calculate() {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;
  
    // Perform calculation based on selected operation
    if (isNaN(num1) || isNaN(num2)) {
      result = 'Please enter valid numbers';
    } else {
      switch (operation) {
        case 'add':
          result = num1 + num2;
          break;
        case 'subtract':
          result = num1 - num2;
          break;
        case 'multiply':
          result = num1 * num2;
          break;
        case 'divide':
          result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
          break;
        default:
          result = 'Invalid operation';
      }
    }
  
    // Display the result
    document.getElementById('result').textContent = `Result: ${result}`;
  }
  