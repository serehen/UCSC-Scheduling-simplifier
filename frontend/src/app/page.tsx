import Link from 'next/link'; 
import { createButton } from './components/buttons/page';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Welcome to the UCSC Scheduler
      </h1>
      <Link href="/log_in/main_login">
        {createButton("Log In")}
      </Link>
      <p className='mt-4 mb-4 text-center text-black'>
        or
      </p>
      <Link href="/scheduling">
        {createButton("View Scheduling Options")}
      </Link>
    </main>
  );
}
