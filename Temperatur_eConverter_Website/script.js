document.getElementById("convertBtn").addEventListener("click", () => {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromType = document.getElementById("tempType").value;
    const toType = document.getElementById("convertTo").value;
    const resultDiv = document.getElementById("result");
  
    if (isNaN(inputTemp)) {
      resultDiv.textContent = "Please enter a valid number.";
      return;
    }
  
    let result;
  
    // Conversion logic
    if (fromType === toType) {
      result = inputTemp; // No conversion needed
    } else if (fromType === "celsius" && toType === "fahrenheit") {
      result = inputTemp * (9 / 5) + 32; // Celsius to Fahrenheit
    } else if (fromType === "celsius" && toType === "kelvin") {
      result = inputTemp + 273.15; // Celsius to Kelvin
    } else if (fromType === "fahrenheit" && toType === "celsius") {
      result = (inputTemp - 32) * (5 / 9); // Fahrenheit to Celsius
    } else if (fromType === "fahrenheit" && toType === "kelvin") {
      result = (inputTemp - 32) * (5 / 9) + 273.15; // Fahrenheit to Kelvin
    } else if (fromType === "kelvin" && toType === "celsius") {
      result = inputTemp - 273.15; // Kelvin to Celsius
    } else if (fromType === "kelvin" && toType === "fahrenheit") {
      result = (inputTemp - 273.15) * (9 / 5) + 32; // Kelvin to Fahrenheit
    }
  
    // Display result
    resultDiv.textContent = `Result: ${result.toFixed(2)} ${getUnit(toType)}`;
  });
  
  function getUnit(type) {
    switch (type) {
      case "celsius":
        return "°C";
      case "fahrenheit":
        return "°F";
      case "kelvin":
        return "K";
      default:
        return "";
    }
  }
  