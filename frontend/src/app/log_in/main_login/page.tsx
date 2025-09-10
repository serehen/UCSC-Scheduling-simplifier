import Link from "next/link";
import { login } from "../actions";
import { createButton } from "@/app/components/buttons/page";
import { returnButton } from "@/app/components/buttons/page";

// This is the main login page component
// It contains a form for logging in and a link to sign up
// The form submits to the login action defined in actions.tsx
// The signup link redirects to the signup page

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
                <button formAction={login} >
                    {createButton("Log In")}
                </button>
                {returnButton()}
                </div>
                <p className="mt-4 text-center py-1">
                    {"Don't have an account? "}
                    <Link href="/log_in/sign_up">
                        <label className="block text-blue-500 hover:underline cursor-pointer">
                            Sign Up
                        </label>
                    </Link>
                </p>
            </form>
        </main>
    );
}