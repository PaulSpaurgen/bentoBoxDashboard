import { useEffect, useRef } from "react";
import Chart from 'chart.js/auto';
import { type ChartConfiguration } from "chart.js";



interface CircleProps {
    totalUsers: number;
    activeUsers: number;
}

export default function Circle({ totalUsers, activeUsers }: CircleProps) {

    const chartRef = useRef<HTMLCanvasElement>(null);
    const labels = ["Active Users", "Inactive Users"];
    let chart: Chart;

    useEffect(() => {
        if (chartRef.current) {

            const config = {
                type: "doughnut",
                data: {
                    labels: labels,
                    datasets: [{
                        data: [activeUsers, totalUsers - activeUsers],
                        backgroundColor: ['#22c55e', '#ef4444'],
                        borderWidth: 0,
                        radius: 58,
                        spacing: 2,     // Increased gap between segments from 2 to 8
                        circumference: 360, // Full circle
                        rotation: -90   // Rotate to start from top
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    cutout: '86%',  // Controls the thickness of the arcs
                    plugins: {
                        legend: {
                            display: false  // Hide legend
                        },
                        tooltip: {
                            enabled: true,
                            callbacks: {
                                label: function (context: any) {
                                    return `${context.label}: ${context.raw / totalUsers * 100}%`;
                                }
                            }
                        }
                    }
                }
            }
            chart = new Chart(chartRef.current, config as ChartConfiguration);

            return () => {
                chart.destroy();
            }
        }
    }, [])


    return (
        <div className="relative w-fit h-fit">
            <canvas id="myChart-circle" ref={chartRef} width={"auto"} height={"auto"}></canvas>
        </div>
    )


}

