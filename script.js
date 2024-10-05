document.getElementById("ex1_button").addEventListener("click", function() {
  let numbers = [];
  for (let i = 0; i <= 9; i++) {
      numbers.push(i);
  }
  document.getElementById("ex1_content").textContent = numbers.join(", ");
});

document.getElementById("ex2_text").addEventListener("input", function() {
  const inputText = this.value;
  const ex2Content = document.getElementById("ex2_content");
  
  // Sprawdzanie długości numeru
  if (inputText.length !== 9) {
      ex2Content.textContent = "Długość numeru musi być równa 9";
      return;
  }
  
  // Sprawdzanie, czy zawiera litery
  if (/[a-zA-Z]/.test(inputText)) {
      ex2Content.textContent = "Numer nie może zawierać liter";
      return;
  }

  // Sprawdzanie, czy zawiera znaki specjalne
  if (/[^0-9]/.test(inputText)) {
      ex2Content.textContent = "Numer nie może zawierać znaków specjalnych";
      return;
  }

  // Jeśli wszystkie warunki są spełnione
  ex2Content.textContent = "Numer telefonu jest poprawny";
});