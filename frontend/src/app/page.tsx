import Link from 'next/link'; 

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">
        Welcome to the UCSC Scheduler
      </h1>
      <Link href="/log_in/main_login">
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Log In
        </button>
      </Link>
      <p className='mt-4 text-center text-black'>
        or
      </p>
      <Link href="/scheduling/subjects">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          View Scheduling Options
        </button>
      </Link>
    </main>
  );
}
