import dynamic from 'next/dynamic';
import { useData } from "@/store/context/DataContext";

const LineGraph = dynamic(() => import('@/Atoms/Graphs/LineGraph'), {
  ssr: false, // Disable SSR for Chart.js components
  loading: () => <div className="animate-pulse h-64 bg-gray-200 rounded-lg"></div>
});

const BarGraph = dynamic(() => import('@/Atoms/Graphs/BarGraph'), {
  ssr: false,
  loading: () => <div className="animate-pulse h-64 bg-gray-200 rounded-lg"></div>
});

export default function Graphs() {
    const { data } = useData();
    return (

        <div className="flex gap-4 mt-8  sm:flex-row flex-col">


            <div className="sm:w-1/2 w-full p-4 bg-white rounded-lg border border-primary">
                <h1 className="text-sm font-bold text-black mb-4">User Growth</h1>
                <LineGraph data={data?.userGrowth || { labels: [], data: [] }} />
            </div>

            <div className="sm:w-1/2 w-full p-4 bg-white rounded-lg border border-primary">
                <h1 className="text-sm font-bold text-black mb-4">Top 5 Streamed Songs</h1>
                <BarGraph data={data?.topSongs || { labels: [], data: [] }} />
            </div>
        </div>

    )
}
