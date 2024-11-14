// Funkcja do pobierania danych stacji z API NOAA z dodatkowymi parametrami
async function fetchStations() {
    const apiKey = "YOUR_NOAA_API_KEY";  // Zastąp własnym kluczem API NOAA
    const state = document.getElementById("stateInput").value;  // Pobranie wartości stanu
    const limit = document.getElementById("limitInput").value;  // Pobranie wartości limitu wyników
    let url = `https://www.ncei.noaa.gov/cdo-web/api/v2/stations?limit=${limit}`;  // Endpoint do stacji

    // Jeśli użytkownik podał stan, dodajemy parametr do URL
    if (state) {
        url += `&state=${state}`;
    }

    try {
        const response = await fetch(url, {
            headers: {
                "token": apiKey  // Nagłówek z kluczem API
            }
        });

        if (!response.ok) {
            throw new Error(`Błąd HTTP: ${response.status}`);
        }

        const data = await response.json();
        displayStations(data.results);  // Wywołanie funkcji do wyświetlania danych
    } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);  // Logowanie błędów
    }
}

// Funkcja do wyświetlania danych stacji w tabeli
function displayStations(stations) {
    const tableBody = document.getElementById("stationsTableBody");
    tableBody.innerHTML = "";  // Wyczyść tabelę przed dodaniem nowych danych

    // Iteracja po stacjach i dodanie ich do tabeli
    stations.forEach(station => {
        const row = document.createElement("tr");

        // Dodanie danych stacji do wiersza
        row.innerHTML = `
            <td>${station.id}</td>
            <td>${station.name || "Brak nazwy"}</td>
            <td>${station.state || "Brak danych"}</td>
            <td>${station.latitude || "Brak danych"}</td>
            <td>${station.longitude || "Brak danych"}</td>
        `;
        tableBody.appendChild(row);  // Dodanie wiersza do tabeli
    });
}

// Obsługa kliknięcia przycisku "Pobierz dane stacji"
document.getElementById("fetchStationsButton").addEventListener("click", fetchStations);
