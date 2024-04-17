import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { QueryClientProvider } from 'react-query'
import { ClerkProvider } from '@clerk/clerk-react'
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';
import { queryClient } from '../lib/react-query';

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {

    const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

    if (!CLERK_PUBLISHABLE_KEY) {
        throw new Error("Missing Publishable Key")
    }

    return (
        <NextUIProvider>
            <QueryClientProvider client={queryClient}>
                <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
                    <Toaster />
                    <Router>{children}</Router>
                </ClerkProvider>
            </QueryClientProvider>
        </NextUIProvider>
    )
}