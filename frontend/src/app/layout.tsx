// src/app/layout.tsx
import React from 'react';
import './globals.css'; // Ensure you have Tailwind CSS imported here
import Link from 'next/link';
import { createButton } from './components/buttons/page';

export const metadata = {
  title: 'UCSC Scheduler',
  description: 'Next.js with Tailwind v4',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-gray-100 font-roboto">
				<header className="bg-blue-900 text-yellow-500 p-4 mb-2">
					<h1 className="text-xl font-bold">UCSC Scheduler</h1>
				</header>
				<main className="">{children}</main>
				    <footer className="bg-gray-300 text-center">
					    &copy; 2025 UCSC Scheduler
				    </footer>
                    <div className='flex absolute top-0 right-0 p-4'>
				    <Link href="/" className='mr-4'>
                        {createButton("Home")}
				    </Link>
                    <Link href="/profile">
                        {createButton("Profile")}
                    </Link>
                    </div>
			</body>
		</html>
	);
}

