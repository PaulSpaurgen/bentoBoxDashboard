
## Installation and Setup

npm install
npm run dev
npm run test 
   



## Key Features

1. **Data Management**
   - Centralized data management using React Context
   - Type-safe data handling with TypeScript
   - Simulated API loading states

2. **Visualizations**
   - Interactive charts using Chart.js
   - Pie, Line, and Bar charts for different metrics
   - Responsive design

3. **Table Features**
   - Sortable columns
   - Search functionality
   - Responsive with horizontal scroll

## Testing Strategy

1. **Unit Tests**
   - Context provider testing
   - Component rendering tests
   - User interaction tests

2. **Integration Tests**
   - Data flow between context and components
   - Chart rendering with mock data
   - Table sorting and filtering

## Trade-offs and Decisions

1. **Mock Data vs Real API**
   - Used static data with simulated loading for development
   - Easy to replace with real API endpoints

2. **Chart.js vs D3**
   - Chose Chart.js for easier implementation
   - Sacrificed some customization for development speed

3. **Context vs Redux**
   - Used Context for simpler state management
   - Suitable for current scale, can migrate to Redux if needed

4. **Testing Setup**
   - Jest and React Testing Library for industry standard testing
   - Focus on behavioral testing over implementation details

## Future Improvements

1. Replace mock data with real API endpoints
2. Add error boundaries for better error handling
3. Implement data caching
4. Add more interactive features to charts
5. Implement pagination for the table
