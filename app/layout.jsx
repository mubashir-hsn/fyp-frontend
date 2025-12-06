import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({subsets:['latin']});

export const metadata = {
  title: "CAREERLY - AI Career Coach",
  description: "Your Personal AI Career Coach",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className}`}
        >
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header />

            {/* main content */}
            <main className=" min-h-screen">
              {children}
            </main>
            <Toaster richColors/>
            {/* footer */}
            <footer className="py-4 text-center bg-background border border-t border-slate-300">
              <div className="container mx-auto text-center">
                <p>©careerly. All rights reserved</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
