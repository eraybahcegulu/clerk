import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ClerkProvider } from '@clerk/clerk-react'
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {

    const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

    if (!CLERK_PUBLISHABLE_KEY) {
        throw new Error("Missing Publishable Key")
    }

    const queryClient = new QueryClient()

    return (
        <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
            <QueryClientProvider client={queryClient}>
                <NextUIProvider>
                    <Toaster />
                    <Router>{children}</Router>
                </NextUIProvider>
            </QueryClientProvider>
        </ClerkProvider>
    )
}