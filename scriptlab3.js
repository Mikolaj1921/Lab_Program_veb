window.addEventListener('DOMContentLoaded', (event) => {
    async function searchCountry() {
        const capital = document.getElementById('capital-input').value.trim();

        if (!capital) {
            alert("Proszę wpisać nazwę stolicy.");
            return;
        }

        try {
            const response = await fetch(`https://restcountries.com/v3.1/capital/${capital}`);

            if (!response.ok) {
                throw new Error("Nie znaleziono kraju dla podanej stolicy.");
            }

            const data = await response.json();
            console.log(data); // Logowanie wyników dla testu
            displayCountryInfo(data[0]);
        } catch (error) {
            alert(error.message);
        }
    }

    function displayCountryInfo(country) {
        const tableBody = document.querySelector('#country-info tbody');
        tableBody.innerHTML = "";  // Czyścimy poprzednie wyniki

        if (!country) {
            alert("Brak danych dla podanej stolicy.");
            return;
        }

        const row = document.createElement('tr');

        row.innerHTML = `
      <td>${country.name?.common || "Brak danych"}</td>
      <td>${country.capital ? country.capital[0] : "Brak danych"}</td>
      <td>${country.population ? country.population.toLocaleString() : "Brak danych"}</td>
      <td>${country.region || "Brak danych"}</td>
      <td>${country.subregion || "Brak danych"}</td>
    `;

        tableBody.appendChild(row);
    }

    // Ustawiamy `searchCountry` jako globalną funkcję
    window.searchCountry = searchCountry;
});
