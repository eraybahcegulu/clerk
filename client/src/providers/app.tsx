import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ClerkProvider } from '@clerk/clerk-react'
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';
import { Notifications } from '../components/Notifications';

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {

    const queryClient = new QueryClient()
    const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

    if (!CLERK_PUBLISHABLE_KEY) {
        throw new Error("Missing Publishable Key")
    }

    return (
        <NextUIProvider>
            <Toaster />
            <QueryClientProvider client={queryClient}>
                <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
                <Notifications />
                    <Router>{children}</Router>
                </ClerkProvider>
            </QueryClientProvider>
        </NextUIProvider>
    )
}