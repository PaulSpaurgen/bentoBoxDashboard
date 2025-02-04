"use client"

import Dashboard from "@/components/Dashboard/Dasboard";
import { dashboardData } from "@/store/data";
import { useEffect, useState } from "react";
import { useData } from "@/store/context/DataContext";

export default function Home() {
  const { setDashboardData } = useData();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDashboardData(dashboardData);
      setIsLoading(false);
    },500);
  }, []);

  return (
    <div className="w-full mx-auto max-w-[1200px] flex flex-col justify-center">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <p className="text-2xl font-bold">Loading.....</p>
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}
