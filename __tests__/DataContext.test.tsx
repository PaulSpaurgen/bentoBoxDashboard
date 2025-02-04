import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DataProvider, useData } from '@/store/context/DataContext';

describe('DataContext', () => {
  const TestComponent = () => {
    const { data, isLoading } = useData();
    
    return (
      <div>
        <div data-testid="loading-state">{isLoading.toString()}</div>
        <div data-testid="data-state">{data ? 'has data' : 'no data'}</div>
      </div>
    );
  };

  it('should provide initial state', () => {
    render(
      <DataProvider>
        <TestComponent />
      </DataProvider>
    );

    expect(screen.getByTestId('loading-state')).toHaveTextContent('true');
    expect(screen.getByTestId('data-state')).toHaveTextContent('no data');
  });
}); 