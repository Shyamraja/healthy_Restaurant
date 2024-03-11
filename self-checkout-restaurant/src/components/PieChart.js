import React, { useRef, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto"; 

const PieChart = ({ nutrition }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current !== null) {
            const chartInstance = chartRef.current.chartInstance;
            if (chartInstance) {
                chartInstance.destroy();
            }
        }


    const chartData = {
        labels: ["Protein", "Carbs", "Fat", "Salt"],
        datasets: [
            {
                data: [
                    nutrition.protein * 4,
                    nutrition.carbs * 4,
                    nutrition.fat * 9,
                    parseFloat(nutrition.salt)
                ],
                backgroundColor: ["#007bff", "#28a745", "#dc3545", "#ffc107"],
                hoverBackgroundColor: ["#0056b3", "#218838", "#c82333", "#e0a800"]
            }
        ]
    };

    const ctx = chartRef.current.getContext("2d");
    const newChartInstance = new Chart(ctx, {
        type: "pie",
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    return () => {
        if (newChartInstance !== null) {
            newChartInstance.destroy();
        }
    };
}, [nutrition]);

return <canvas ref={chartRef} />;
};

export default PieChart; 












