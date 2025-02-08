document.addEventListener('DOMContentLoaded', function() {
    const queryParams = new URLSearchParams(window.location.search);
    const part = queryParams.get('part');
    const num = queryParams.get('number');


    const appender = this.querySelector("#title").textContent = num;
    

    fetch('Assets/data.json')
        .then(response => response.json())
        .then(data => {
            const partData = data[part];
            if (partData) {
                document.getElementById('title').textContent = partData.title + " " + appender;
                document.getElementById('description').innerHTML = partData.description.replace(/\n/g, '<br>');
                document.title = partData.title + " " + appender;
            } else {
                document.getElementById('title').textContent = "መረጃ አልተገኘም";
                document.getElementById('description').textContent = "ለዚህ ክፍል ማብራሪያ አልተገኘም።";
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('title').textContent = "Error";
            document.getElementById('description').textContent = "Unable to fetch data.";
        });
});
