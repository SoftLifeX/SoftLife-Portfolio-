'use client'

import { ThemeProvider } from 'next-themes'
import TransitionProvider from "./components/transitionProvider";

export function Providers({ children }) {
    return (
<ThemeProvider defaultTheme='system' enableSystem>
 <TransitionProvider>
  {children}
 </TransitionProvider>
</ThemeProvider>
 )
}
