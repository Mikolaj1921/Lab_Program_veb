async function fetchStations() {
    const apiKey = "YOUR_NOAA_API_KEY";  // Zastąp własnym kluczem API NOAA
    const url = "https://www.ncei.noaa.gov/cdo-web/api/v2/stations";

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
        displayStations(data.results);
    } catch (error) {
        console.error("Błąd podczas pobierania danych stacji:", error);
    }
}

function displayStations(stations) {
    const tableBody = document.getElementById("stationsTableBody");
    tableBody.innerHTML = "";  // Wyczyść istniejące dane

    stations.forEach(station => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${station.id}</td>
            <td>${station.name || "Brak nazwy"}</td>
            <td>${station.state || "Brak"}</td>
            <td>${station.latitude || "Brak"}</td>
            <td>${station.longitude || "Brak"}</td>
        `;

        tableBody.appendChild(row);
    });
}


