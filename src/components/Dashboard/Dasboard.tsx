"use client"

import dynamic from 'next/dynamic';
import FirstRow from "./FirstRow";
import Graphs from "./Graphs";
import { useState , useEffect } from "react";
import { useData } from "@/store/context/DataContext";

const Table = dynamic(() => import('@/Atoms/Table'), {
  loading: () => <div ></div>
});

interface TableItem {
  userId: string;
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
}

export default function Dashboard() {
  const [tableData, setTableData] = useState<TableItem[]>([]);
  const { data } = useData();

  useEffect(() => {
    if (data) {
      setTableData(data.recentStreams);
    }
  }, [data]);






  const sortData = (id: string , direction: 'asc' | 'desc') => {
    const sortedData = [...tableData].sort((a, b) => {
      const aValue = a[id as keyof typeof a];
      const bValue = b[id as keyof typeof b];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      }
  
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return direction === 'asc' ? aValue - bValue : bValue - aValue;
      }
      return 0;
    });

    setTableData(sortedData);
  };


  return (
    <div className="p-4 w-full h-full pb-80">
      <h1 className="text-2xl font-bold text-black">Dashboard</h1>
      <p className="text-gray-500 text-sm ">You can see your dashboard here</p>

      <FirstRow/>
      <Graphs/>

      <div className="mb-4 mt-4 w-full flex justify-end">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by song or artist..."
              className="input input-bordered rounded-lg border border-gray-300 bg-white"
              onChange={(e) => {
                const searchTerm = e.target.value.toLowerCase();
                const filteredData = data?.recentStreams.filter(item => 
                  item.songName.toLowerCase().includes(searchTerm) ||
                  item.artist.toLowerCase().includes(searchTerm)
                );

                setTableData(filteredData || []);
              }}
            />
            <i className="fa fa-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>

      <div className="w-full mt-8 overflow-x-auto ">
        
        <Table headers={[
          { label: "User ID", id: "userId", isSortable: true },
          { label: "Song Name", id: "songName", isSortable: true },
          { label: "Artist", id: "artist", isSortable: true },
          { label: "Date Streamed", id: "dateStreamed", isSortable: true },
          { label: "Stream Count", id: "streamCount", isSortable: true },
        ]} sortData={sortData}>
          {
            tableData.map((item) => (
              <tr key={item.userId} className="border-b border-primary hover:bg-gray-100 cursor-pointer ">
                <td className="py-4 text-center text-sm text-primary underline" >{item.userId}</td>

                <td className="py-4 text-center text-sm" >{item.songName}</td>
                <td className="py-4 text-center text-sm" >{item.artist}</td>
                <td className="py-4 text-center text-sm" >{item.dateStreamed}</td>

                <td className="py-4 text-center text-sm" >{item.streamCount}</td>


              </tr>
            ))
          }
        </Table>

      </div>
    </div>
  );


}
