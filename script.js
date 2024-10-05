document.getElementById("ex1_button").addEventListener("click", function() {
  let numbers = [];
  for (let i = 0; i <= 9; i++) {
      numbers.push(i);
  }
  document.getElementById("ex1_content").textContent = numbers.join(", ");
});