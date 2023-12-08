document.addEventListener("DOMContentLoaded", function () {
        // JavaScript code using Chart.js to create a sample bar chart

        // Sample data for the chart
        const corruptionData = {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Corruption Reports',
                data: [120, 180, 150, 200, 250],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        };

        // Get the canvas element
        const ctx = document.getElementById('corruptionChart').getContext('2d');

        // Create the bar chart
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: corruptionData,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });