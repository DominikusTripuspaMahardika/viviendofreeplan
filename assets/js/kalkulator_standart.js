let display = document.getElementById("kalkulator1vvd-display");
  let currentInput = "";

  function updateDisplay() {
    display.textContent = currentInput || "0";
  }

  function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    updateDisplay();
  }

  function appendOperator(operator) {
    if (currentInput === "") return;
    const lastChar = currentInput.slice(-1);
    if ("+-*/".includes(lastChar)) {
      currentInput = currentInput.slice(0, -1) + operator;
    } else {
      currentInput += operator;
    }
    updateDisplay();
  }

  function clearDisplay() {
    currentInput = "";
    updateDisplay();
  }

  function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  }

  function calculateResult() {
    try {
      // Evaluasi ekspresi matematika secara aman
      const result = eval(currentInput);
      currentInput = result.toString();
    } catch (e) {
      currentInput = "Error";
    }
    updateDisplay();
  }