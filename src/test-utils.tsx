import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a new QueryClient for every test so they don't share cache
const createTestQueryClient = () => new QueryClient({
    defaultOptions: {
        queries: {
            retry: false, // Turn off retries so errors fail fast in tests
        },
    },
});

export const renderWithProviders = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) => {
    const testQueryClient = createTestQueryClient();
    return render(
        <QueryClientProvider client={testQueryClient}>
            {ui}
        </QueryClientProvider>,
        options
    );
};