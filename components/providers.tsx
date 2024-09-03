"use client"

import { useTheme, ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { type ThemeProviderProps } from "next-themes/dist/types"

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient({
})


function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider {...props}
          defaultTheme="dark"
          attribute="class"
          disableTransitionOnChange
          enableSystem>
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default Providers;