import Link from "next/link";
import { signup } from "../actions";

// This is the main signup page component
// It contains a form for signing up and a link to log in
// The form submits to the signup action defined in actions.tsx
// The login link redirects to the login page

export default function signUp() {
    return (
        <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
            <h2 className="text-center text-2xl font-bold text-blue-600">
                Sign Up
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
                        name="email"
                        placeholder="Enter your email"
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
                        name="password"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div className="flex isolate">
                <button formAction={signup} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
                    Sign Up
                </button>
                <Link href="/" className="ml-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Return
                </Link>
                </div>
            </form>
        </main>
    );
}