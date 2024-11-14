const apiKey = "VGgQXgQpOOuKgutdHVMmHPSHzJMYqOMu";  // Zastąp własnym kluczem API NOAA
const baseUrl = "https://www.ncei.noaa.gov/cdo-web/api/v2";  // Base URL dla API NOAA

// Funkcja pobierająca dane z wybranego endpointa
async function fetchData() {
    const endpoint = document.getElementById("endpoint").value;
    const search = document.getElementById("search").value.trim();
    const url = `${baseUrl}${endpoint}?limit=10${search ? `&q=${search}` : ""}`;  // Dodanie filtru wyszukiwania, jeśli jest wprowadzony

    try {
        const response = await fetch(url, {
            headers: {
                "token": apiKey
            }
        });

        if (!response.ok) {
            throw new Error(`Błąd HTTP: ${response.status}`);
        }

        const data = await response.json();
        displayData(data.results);  // Wyświetl dane w tabeli
    } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
        alert("Błąd podczas pobierania danych. Sprawdź konsolę.");
    }
}

// Funkcja do wyświetlania danych w tabeli
function displayData(results) {
    const tableBody = document.querySelector("#data-table tbody");
    tableBody.innerHTML = "";  // Wyczyść istniejące dane w tabeli

    // Jeśli brak wyników
    if (results.length === 0) {
        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="3">Brak danych</td>`;
        tableBody.appendChild(row);
        return;
    }

    // Iteracja po wynikach i dodawanie ich do tabeli
    results.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name || "Brak nazwy"}</td>
            <td>${item.description || "Brak opisu"}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Nasłuchiwanie kliknięcia przycisku "Pobierz dane"
document.getElementById("fetchData").addEventListener("click", fetchData);
