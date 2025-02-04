import { ReactNode } from 'react';

interface TableHeader {
  label: string;
  id: string;
  isSortable?: boolean;
}

interface TableProps<T> {
  headers: TableHeader[];
  children: ReactNode;
  className?: string;
  sortData?: (id: string, direction: 'asc' | 'desc') => void;
}


export default function Table<T extends Record<string, any>>({ headers, children, className, sortData }: TableProps<T>) {
  return (
    <table className="table table-pin-rows w-full text-center min-w-[1000px] ">
      <thead className="w-full ">

        <tr className="bg-transparent ">
          {headers.map((header) => (
            <th
              key={header.id}
              scope="col"
              className="py-3 border-b border-primary  text-center text-lg font-medium text-gray-500 uppercase "
            >
              <div className="flex items-center gap-4 justify-center">
                <p className="sm:text-sm text-xs">{header.label}</p>

                {header.isSortable && (
                  <button  onClick = {(e)=>{
                    const currentDirection = e.currentTarget.getAttribute('data-direction');
                    const newDirection = currentDirection === 'asc' ? 'desc' : 'asc';
                    sortData?.(header.id, newDirection);
                    e.currentTarget.setAttribute('data-direction', newDirection);
                  }} 
                   data-direction="asc"
                  >

                    <i className="fa fa-sort text-primary sm:text-sm text-xs "></i>
                  </button>
                )}

              </div>


            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {children}
      </tbody>
    </table>
  );
}
