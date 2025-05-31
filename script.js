
    let display = document.getElementById('display');
    let previous = document.getElementById('previous');
    let currentInput = '';
    

    function updateDisplay(value) {
      display.innerText = value;
    }

    function appendNumber(number) {
      currentInput += number;
      updateDisplay(currentInput);
    }

    function appendOperator(operator) {
      if (currentInput === '') return;
      const lastChar = currentInput.slice(-1);
      if ('+-*/'.includes(lastChar)) {
        currentInput = currentInput.slice(0, -1);
      }
      currentInput += operator;
      updateDisplay(currentInput);
    }

    function appendDecimal(dot) {
      const parts = currentInput.split(/\+|-|\*|\//);
      if (!parts[parts.length - 1].includes('.')) {
        currentInput += dot;
        updateDisplay(currentInput);
      }
    }

    function clearDisplay() {
      currentInput = '';
      updateDisplay('0');
      previous.innerText = '';
    }

    function calculate() {
      try {
        const result = eval(currentInput);
        if (!isFinite(result)) throw new Error('Math Error');
        previous.innerText = currentInput + ' =';
        updateDisplay(result);
        currentInput = result.toString();
      } catch (error) {
        updateDisplay('Error');
        currentInput = '';
      }
    }

    function calculatePercentage() {
      try {
        const result = eval(currentInput) / 100;
        updateDisplay(result);
        currentInput = result.toString();
      } catch (error) {
        updateDisplay('Error');
        currentInput = '';
      }
    }

    function calculateSqrt() {
      try {
        const result = Math.sqrt(eval(currentInput));
        if (!isFinite(result)) throw new Error('Math Error');
        updateDisplay(result);
        currentInput = result.toString();
      } catch (error) {
        updateDisplay('Error');
        currentInput = '';
      }
    }

    
    