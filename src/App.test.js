// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SmartCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SmartCore/i);
    expect(titleElement).toBeInTheDocument();
});
