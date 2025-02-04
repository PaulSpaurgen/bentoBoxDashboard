import { useRef, useEffect } from 'react';
import { type ChartConfiguration } from 'chart.js';
import Chart from 'chart.js/auto';

interface PieChartProps {
    data: number[];
}

export default function PieChart({ data }: PieChartProps) {
    const chartRef = useRef<HTMLCanvasElement>(null);
    let chart: Chart;

    // Sample data showing revenue distribution
    const dummyData = data || [65000, 35000, 15000];
    const labels = ['Subscriptions', 'Advertisements', 'One-time Purchases'];
    const colors = ['#24e0e1', '#757575', '#141414'];


    useEffect(() => {
        if (chartRef.current) {
            const config = {
                type: 'pie',
                data: {
                    labels: labels,
                    datasets: [{
                        data: dummyData,
                        backgroundColor: colors,
                        borderColor: 'white',
                        borderWidth: 2,
                        hoverOffset: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: false,
                            position: 'bottom',
                            labels: {
                                font: {
                                    size: 8,
                                    family: "'Helvetica', 'Arial', sans-serif",
                                    weight: 'bold'
                                },
                                color: '#141414',
                                padding: 20,
                                usePointStyle: true,
                                boxWidth: 10
                            }
                        },

                        tooltip: {
                            enabled: true,
                            callbacks: {
                                label: function(context: any) {
                                    const value = context.raw;
                                    const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
                                    const percentage = ((value / total) * 100).toFixed(1);
                                    return `$${value.toLocaleString()} (${percentage}%)`;
                                }
                            }
                        }
                    }
                }
            };

            chart = new Chart(chartRef.current, config as ChartConfiguration);

            return () => {
                chart.destroy();
            };
        }
    }, []);

    return (
        <div className="w-full h-full">
            <canvas id="myChart-pie" ref={chartRef} width={"auto"} height={"auto"}></canvas>
        </div>
    );
}
