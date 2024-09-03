"use client"

import { useTheme, ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { type ThemeProviderProps } from "next-themes/dist/types"


function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <>
      <ThemeProvider
        defaultTheme="dark"
        attribute="class"
        disableTransitionOnChange
        enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
}

export default Providers;