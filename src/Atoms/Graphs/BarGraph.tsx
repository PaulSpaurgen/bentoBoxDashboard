import { useRef, useEffect } from 'react';
import { type ChartConfiguration } from 'chart.js';
import Chart from 'chart.js/auto';



export default function BarGraph({ data }: { data: { labels: string[], data: number[] } }) {
    const chartRef = useRef<HTMLCanvasElement>(null);
    let chart: Chart;

    const songNames = data?.labels || ['Song 1', 'Song 2', 'Song 3', 'Song 4', 'Song 5'];
    const streamCounts = data?.data || [1200000, 980000, 850000, 720000, 650000];

    useEffect(() => {
        if (chartRef.current) {
            const config = {
                type: 'bar',
                data: {
                    labels: songNames,
                    datasets: [{
                        label: 'Stream Count',
                        data: streamCounts,
                        backgroundColor: '#24e0e1',
                        borderColor: '#24e0e1',
                        borderWidth: 1,
                        borderRadius: 5,
                        barThickness: 30
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
                                    return `Streams: ${context.raw.toLocaleString()}`;
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
                            },
                            ticks: {
                                callback: function(value: any) {
                                    return (value / 1000000).toFixed(1) + 'M';
                                }
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
            <canvas id="myChart-bar" ref={chartRef} width={"auto"} height={"auto"}></canvas>
        </div>
    );

}
