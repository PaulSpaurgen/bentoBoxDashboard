'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { type InitialDataType } from '@/types/data';

type DataContextType = {
    data: InitialDataType | null;
    isLoading: boolean;
    setDashboardData: (data: InitialDataType) => void;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<InitialDataType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const setDashboardData = (newData: InitialDataType) => {
        setData(newData);
        setIsLoading(false);
    };

    return (
        <DataContext.Provider value={{
            data,
            isLoading,
            setDashboardData
        }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
} 