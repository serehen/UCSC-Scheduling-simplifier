import Link from "next/link";


export default function LogIn() {
    return (
        <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
            <h2 className="text-center text-2xl font-bold text-blue-600">
                Log In
            </h2>
            <form className="mt-4  border-b-black rounded text-black">
                <div className="mb-4">
                    <label className="block" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="mt-1 block w-full p-2 border background hover:bg-gray-300"
                        type="email"
                        id="email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="mt-1 block w-full p-2 border border-b-black rounded background hover:bg-gray-300"
                        type="password"
                        id="password"
                        required
                    />
                </div>
                <div className="flex isolate">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Log In
                </button>
                <Link href="/" className="ml-auto">
                <button className ="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Return
                </button>
                </Link>
                </div>
            </form>
        </main>
    );
}