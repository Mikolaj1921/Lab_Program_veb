//zad1
document.getElementById("ex1_button").addEventListener("click", function() {
  let numbers = [];
  for (let i = 0; i <= 9; i++) {
      numbers.push(i);
  }
  document.getElementById("ex1_content").textContent = numbers.join(", ");
});


//zad2
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


//zad 3

// Pobierz element, który można przeciągać
const draggableElement = document.getElementById('ex3_element');

// Pobierz kontenery
const containerOne = document.getElementById('ex3_one');
const containerTwo = document.getElementById('ex3_two');

// Funkcja, która uruchamia się, gdy zaczyna się przeciąganie elementu
draggableElement.addEventListener('dragstart', (event) => {
    // Ustawienie identyfikatora przeciąganego elementu
    event.dataTransfer.setData('text/plain', event.target.id);
});

// Umożliwienie upuszczenia w kontenerach (ex3_one i ex3_two)
[containerOne, containerTwo].forEach(container => {
    container.addEventListener('dragover', (event) => {
        event.preventDefault(); // Zapobiega domyślnemu zachowaniu, które uniemożliwiłoby upuszczenie
    });

    container.addEventListener('drop', (event) => {
        event.preventDefault();

        // Pobierz id przeciąganego elementu
        const id = event.dataTransfer.getData('text');

        // Przenieś element do nowego kontenera
        const draggedElement = document.getElementById(id);
        container.appendChild(draggedElement);
    });
});


///////////////////dsaasasasdda