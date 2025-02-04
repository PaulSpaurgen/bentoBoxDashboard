import { useRef, useEffect } from 'react';
import { type ChartConfiguration } from 'chart.js';
import Chart from 'chart.js/auto';

interface LineGraphProps {
    data: { labels: string[]; data: number[] };
}

export default function LineGraph({ data }: LineGraphProps) {
    const chartRef = useRef<HTMLCanvasElement>(null);
    let chart: Chart;

    const months = data.labels || ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    

    // Sample data showing growth trend
    const dummyData = data.data || [100, 150, 200, 250, 300, 450, 600, 750, 900, 1200, 1500, 2000];

    useEffect(() => {
        if (chartRef.current) {
            const config = {
                type: 'line',
                data: {
                    labels: months,
                    datasets: [{
                        label: 'User Growth',
                        data: dummyData,
                        fill: false,
                        borderColor: '#24e0e1',
                        tension: 0.3,
                        borderWidth: 2,
                        pointBackgroundColor: '#24e0e1',
                        pointBorderColor: '#141414',
                        pointRadius: 4,
                        pointHoverRadius: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: false,
                            position: 'top'
                        },
                        tooltip: {
                            enabled: true,
                            callbacks: {
                                label: function(context: any) {
                                    return `Users: ${context.raw}`;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                display: true,
                                drawBorder: false
                            }
                        },
                        x: {
                            grid: {
                                display: false
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
            <canvas id="myChart-line" ref={chartRef} width={"auto"} height={"auto"}></canvas>
        </div>
    );
}
