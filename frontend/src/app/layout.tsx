// src/app/layout.tsx
import React from 'react';
import './globals.css'; // Ensure you have Tailwind CSS imported here

export const metadata = {
  title: 'UCSC Scheduler',
  description: 'Next.js with Tailwind v4',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-roboto">
        <header className="bg-blue-600 text-yellow-400 p-4">
          <h1 className="text-xl font-bold">UCSC Scheduler</h1>
        </header>
        <main className="p-6">{children}</main>
        <footer className="bg-gray-300 text-center py-2 mt-6">
          &copy; 2025 UCSC Scheduler
        </footer>
      </body>
    </html>
  );
}
