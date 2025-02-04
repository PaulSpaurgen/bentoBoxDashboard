'use client';
import { useData } from '@/store/context/DataContext';
import PieChart from "@/Atoms/Graphs/PieChart"


export default function FirstRow() {
    const { data } = useData();
    
    return (
        <div className="flex mt-4  gap-4 w-full flex-wrap lg:flex-nowrap">
            <DataBlock title="Users" data={[
                { label: "Active", value: data?.users.active.toString() || "0" },
                { label: "Inactive", value: data?.users.inactive.toString() || "0" },
                { label: "Total", value: data?.users.total.toString() || "0" }
            ]} />


            <DataBlock title="Revenue" isGraph={true} data={[
                { label: "Subscriptions", value: `$${data?.revenue.subscriptions.toLocaleString() || "0"}` },
                { label: "Advertisements", value: `$${data?.revenue.advertisements.toLocaleString() || "0"}` },
                { label: "One-time Purchases", value: `$${data?.revenue.onetime.toLocaleString() || "0"}` }
            ]} />


            <DataBlock data={[
                { label: "Total Streams", value: data?.streams.total || "0" },
                { label: "Top Artist", value: data?.streams.topArtist || "0" }
            ]} />

        </div>
    )
}

interface DataItem {
    label: string;
    value: string | number;
}

interface BlockProps {
    title?: string;
    isGraph?: boolean;
    data: DataItem[];
}

const DataBlock = ({ title, data, isGraph }: BlockProps) => {
    return (
        <div className="px-4 py-2 sm:px-8 sm:py-6 bg-white rounded-lg border border-primary  w-full  ">
            {title && (
                <h1 className="sm:text-lg text-xs font-bold border-b  border-gray-200 pb-2 ">{title}</h1>
            )}
            <div className="flex w-full sm:flex-row flex-col">
                <div className="flex sm:flex-col gap-4 sm:justify-center mt-2 w-full justify-evenly ">
                    {data.map((item, index) => (
                        <div key={index}>
                            <p className="sm:text-sm text-xs text-gray-500">{item.label}</p>
                            <p className="sm:text-4xl text-xl font-bold">{item.value}</p>
                        </div>

                    ))}
                </div>
                {isGraph && (
                    <div className="h-full flex justify-center items-center">
                        <div className="w-[200px] h-full sm:ml-16 mt-4">
                            <PieChart data={[65000, 35000, 15000]} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}



